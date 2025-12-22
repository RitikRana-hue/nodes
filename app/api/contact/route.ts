import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, company, subject, message } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Get client information
        const clientIP = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';

        const submissionData = {
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            company: company || null, // Correct column name
            subject,
            message
        };

        // Log the contact form submission
        console.log('='.repeat(50));
        console.log('📧 NEW CONTACT FORM SUBMISSION');
        console.log('='.repeat(50));
        console.log(`👤 Name: ${firstName} ${lastName}`);
        console.log(`📧 Email: ${email}`);
        console.log(`🏢 Company: ${company || 'Not provided'}`);
        console.log(`📋 Subject: ${subject}`);
        console.log(`💬 Message: ${message}`);
        console.log(`🌐 IP: ${clientIP}`);
        console.log(`🕒 Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
        console.log('='.repeat(50));

        // Check if Supabase is configured
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://your-project.supabase.co') {
            // Try to save to Supabase if configured
            try {
                console.log('💾 Attempting to save to Supabase database...');
                const { contactService } = await import('@/lib/supabase');

                const submission = await contactService.createSubmission(submissionData);

                if (submission) {
                    console.log('✅ Submission saved successfully to Supabase with ID:', submission.id);
                    return NextResponse.json(
                        {
                            success: true,
                            message: 'Message submitted successfully! We will get back to you within 24 hours.',
                            submissionId: submission.id,
                            method: 'supabase'
                        },
                        { status: 200 }
                    );
                } else {
                    console.warn('⚠️ Supabase save failed, falling back to logging');
                }
            } catch (supabaseError) {
                console.error('❌ Supabase error:', supabaseError);
                console.log('📝 Falling back to console logging...');
            }
        } else {
            console.log('⚠️ Supabase not configured, using console logging');
        }

        // Fallback: Save to a local JSON file for development
        try {
            const fs = require('fs').promises;
            const path = require('path');

            const submissionsFile = path.join(process.cwd(), 'contact-submissions.json');
            let submissions = [];

            // Try to read existing submissions
            try {
                const existingData = await fs.readFile(submissionsFile, 'utf8');
                submissions = JSON.parse(existingData);
            } catch (error) {
                // File doesn't exist, start with empty array
                submissions = [];
            }

            // Add new submission (keeping both formats for compatibility)
            const newSubmission = {
                id: Date.now().toString(),
                // Your Supabase table format
                first_name: firstName,
                last_name: lastName,
                email_address: email,
                company: company || null, // Correct column name
                subject,
                message,
                created_at: new Date().toISOString(),
                // Additional fields for local tracking
                ip_address: clientIP,
                user_agent: userAgent,
                status: 'new'
            };

            submissions.push(newSubmission);

            // Save back to file
            await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2));

            console.log('✅ Submission saved to local file with ID:', newSubmission.id);

            return NextResponse.json(
                {
                    success: true,
                    message: 'Message submitted successfully! We will get back to you within 24 hours.',
                    submissionId: newSubmission.id,
                    method: 'local-file'
                },
                { status: 200 }
            );

        } catch (fileError) {
            console.error('❌ File save error:', fileError);
        }

        // Final fallback: Just return success (data is logged to console)
        console.log('✅ Submission logged to console successfully');

        return NextResponse.json(
            {
                success: true,
                message: 'Message received successfully! We will get back to you within 24 hours.',
                method: 'console-log'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('❌ Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to submit message. Please try again later.' },
            { status: 500 }
        );
    }
}

// GET endpoint to retrieve submissions (works with local file or Supabase)
export async function GET(request: NextRequest) {
    try {
        // Simple authentication check
        const authHeader = request.headers.get('authorization');
        if (!authHeader || authHeader !== 'Bearer admin-token') {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Check if Supabase is configured
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://your-project.supabase.co') {
            try {
                const { contactService } = await import('@/lib/supabase');
                const submissions = await contactService.getAllSubmissions();

                return NextResponse.json(
                    {
                        success: true,
                        data: submissions,
                        count: submissions.length,
                        method: 'supabase'
                    },
                    { status: 200 }
                );
            } catch (supabaseError) {
                console.error('❌ Supabase error:', supabaseError);
            }
        }

        // Fallback: Read from local file
        try {
            const fs = require('fs').promises;
            const path = require('path');

            const submissionsFile = path.join(process.cwd(), 'contact-submissions.json');
            const data = await fs.readFile(submissionsFile, 'utf8');
            const submissions = JSON.parse(data);

            return NextResponse.json(
                {
                    success: true,
                    data: submissions,
                    count: submissions.length,
                    method: 'local-file'
                },
                { status: 200 }
            );

        } catch (fileError) {
            console.error('❌ File read error:', fileError);
            return NextResponse.json(
                {
                    success: true,
                    data: [],
                    count: 0,
                    method: 'empty'
                },
                { status: 200 }
            );
        }

    } catch (error) {
        console.error('❌ Error fetching submissions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch submissions' },
            { status: 500 }
        );
    }
}