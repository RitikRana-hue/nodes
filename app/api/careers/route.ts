import { NextRequest, NextResponse } from 'next/server';
import { careerService } from '@/lib/careerService';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        // Extract form fields - Updated to match your table structure
        const position = formData.get('position') as string;
        const name = formData.get('fullName') as string; // Form uses 'fullName' but table uses 'name'
        const email = formData.get('email') as string;
        const phoneNumber = formData.get('phone') as string; // Will convert to number
        const experience = formData.get('experience') as string; // Will convert to number
        const addInfo = formData.get('message') as string; // Form uses 'message' but table uses 'add_info'
        const resumeFile = formData.get('resume') as File;

        // Validate required fields
        if (!position || !name || !email || !phoneNumber || !experience || !addInfo) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Convert and validate phone number
        const phoneNum = parseInt(phoneNumber);
        if (isNaN(phoneNum)) {
            return NextResponse.json(
                { error: 'Invalid phone number' },
                { status: 400 }
            );
        }

        // Convert and validate experience
        const expNum = parseInt(experience);
        if (isNaN(expNum) || expNum < 0) {
            return NextResponse.json(
                { error: 'Invalid experience value' },
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

        // Validate resume file
        if (!resumeFile || resumeFile.size === 0) {
            return NextResponse.json(
                { error: 'Resume file is required' },
                { status: 400 }
            );
        }

        // Check file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(resumeFile.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Please upload PDF, DOC, or DOCX files only.' },
                { status: 400 }
            );
        }

        // Check file size (5MB limit)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (resumeFile.size > maxSize) {
            return NextResponse.json(
                { error: 'File size too large. Please upload files smaller than 5MB.' },
                { status: 400 }
            );
        }

        // Get client information
        const clientIP = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';

        // Log the career application - Updated field names
        console.log('='.repeat(50));
        console.log('💼 NEW CAREER APPLICATION');
        console.log('='.repeat(50));
        console.log(`👤 Name: ${name}`);
        console.log(`📧 Email: ${email}`);
        console.log(`📱 Phone: ${phoneNumber}`);
        console.log(`💼 Position: ${position}`);
        console.log(`⏱️ Experience: ${experience} years`);
        console.log(`💬 Additional Info: ${addInfo}`);
        console.log(`📄 Resume: ${resumeFile.name} (${(resumeFile.size / 1024 / 1024).toFixed(2)}MB)`);
        console.log(`🌐 IP: ${clientIP}`);
        console.log(`🕒 Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
        console.log('='.repeat(50));

        // Check if Supabase is configured
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://your-project-id.supabase.co') {
            try {
                console.log('💾 Attempting to save to Supabase database...');

                // Step 1: Create the application record - Updated data structure
                const application = await careerService.createApplication({
                    position,
                    name, // Updated field name
                    email,
                    phone_number: phoneNum, // Updated field name and type
                    experience: expNum, // Updated type
                    add_info: addInfo // Updated field name
                });

                if (!application) {
                    throw new Error('Failed to create application record');
                }

                console.log('✅ Application record created with ID:', application.id);

                // Step 2: Upload resume to storage
                console.log('📤 Uploading resume to storage...');
                const resumeUrl = await careerService.uploadResume(resumeFile, application.id!);

                if (!resumeUrl) {
                    throw new Error('Failed to upload resume');
                }

                console.log('✅ Resume uploaded successfully:', resumeUrl);

                // Step 3: Update application with resume URL
                const updateSuccess = await careerService.updateApplicationResume(application.id!, resumeUrl);

                if (!updateSuccess) {
                    throw new Error('Failed to update application with resume URL');
                }

                console.log('✅ Application updated with resume URL');

                return NextResponse.json(
                    {
                        success: true,
                        message: 'Application submitted successfully! We will review your application and get back to you soon.',
                        applicationId: application.id,
                        method: 'supabase'
                    },
                    { status: 200 }
                );

            } catch (supabaseError) {
                console.error('❌ Supabase error:', supabaseError);
                console.log('📝 Falling back to console logging...');
            }
        } else {
            console.log('⚠️ Supabase not configured, using console logging');
        }

        // Fallback: Just log the application (for development)
        console.log('✅ Career application logged successfully');

        return NextResponse.json(
            {
                success: true,
                message: 'Application received successfully! We will review your application and get back to you soon.',
                method: 'console-log'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('❌ Career application error:', error);
        return NextResponse.json(
            { error: 'Failed to submit application. Please try again later.' },
            { status: 500 }
        );
    }
}

// GET endpoint to retrieve applications (for admin)
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

        if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://your-project-id.supabase.co') {
            try {
                const applications = await careerService.getAllApplications();

                return NextResponse.json(
                    {
                        success: true,
                        data: applications,
                        count: applications.length,
                        method: 'supabase'
                    },
                    { status: 200 }
                );
            } catch (supabaseError) {
                console.error('❌ Supabase error:', supabaseError);
            }
        }

        // Fallback: Return empty array
        return NextResponse.json(
            {
                success: true,
                data: [],
                count: 0,
                method: 'empty'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('❌ Error fetching applications:', error);
        return NextResponse.json(
            { error: 'Failed to fetch applications' },
            { status: 500 }
        );
    }
}