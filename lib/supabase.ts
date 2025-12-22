import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_K7vB980576iKJnEsJLBBMw_wmhS9cfPapi';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types - Updated to match your actual table structure
export interface ContactSubmission {
    id?: string;
    first_name: string;
    last_name: string;
    email_address: string;
    company?: string; // This is the correct column name
    subject: string;
    message: string;
    created_at?: string;
    // Optional fields for backward compatibility
    status?: 'new' | 'read' | 'replied' | 'resolved';
    ip_address?: string;
    user_agent?: string;
}

// Contact form service
export const contactService = {
    // Create a new contact submission - Fixed for your actual table structure
    async createSubmission(data: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<ContactSubmission | null> {
        try {
            const { data: submission, error } = await supabase
                .from('nodesio_contacts')
                .insert([{
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email_address: data.email_address,
                    company: data.company || null, // Correct column name
                    subject: data.subject,
                    message: data.message
                }])
                .select()
                .single();

            if (error) {
                console.error('Supabase error:', error);
                return null;
            }

            return submission;
        } catch (error) {
            console.error('Contact submission error:', error);
            return null;
        }
    },

    // Get all contact submissions (for admin dashboard) - Updated for your table
    async getAllSubmissions(): Promise<ContactSubmission[]> {
        try {
            const { data, error } = await supabase
                .from('nodesio_contacts') // Updated table name
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Supabase error:', error);
                return [];
            }

            return data || [];
        } catch (error) {
            console.error('Error fetching submissions:', error);
            return [];
        }
    },

    // Update submission status - Note: Your table doesn't have status column
    // This method is kept for compatibility but won't work with your current table
    async updateStatus(id: string, status: ContactSubmission['status']): Promise<boolean> {
        try {
            // Since your table doesn't have a status column, we'll just return true
            // You can add a status column to your table if you want this functionality
            console.warn('Status update not supported - table does not have status column');
            return true;
        } catch (error) {
            console.error('Error updating status:', error);
            return false;
        }
    },

    // Get submission by ID - Updated for your table
    async getSubmissionById(id: string): Promise<ContactSubmission | null> {
        try {
            const { data, error } = await supabase
                .from('nodesio_contacts') // Updated table name
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Supabase error:', error);
                return null;
            }

            return data;
        } catch (error) {
            console.error('Error fetching submission:', error);
            return null;
        }
    }
};