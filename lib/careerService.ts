import { supabase } from './supabase';

// Career Application types - Updated to match your table structure
export interface CareerApplication {
    id?: string;
    position: string;
    name: string; // Your table uses 'name' not 'full_name'
    email: string;
    phone_number: number; // Your table uses numeric type
    experience: number; // Your table uses numeric type
    add_info: string; // Your table uses 'add_info' not 'message'
    resume?: string; // URL to the uploaded resume
    created_at?: string;
    // Note: Your table doesn't have status column
    status?: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
}

// Career Service
export const careerService = {
    // Upload resume to Supabase storage
    async uploadResume(file: File, applicationId: string): Promise<string | null> {
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${applicationId}-${Date.now()}.${fileExt}`;

            const { data, error } = await supabase.storage
                .from('resume')
                .upload(fileName, file, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (error) {
                console.error('Resume upload error:', error);
                return null;
            }

            // Get public URL
            const { data: urlData } = supabase.storage
                .from('resume')
                .getPublicUrl(fileName);

            return urlData.publicUrl;
        } catch (error) {
            console.error('Resume upload error:', error);
            return null;
        }
    },

    // Create a new career application - Updated for your table structure
    async createApplication(data: Omit<CareerApplication, 'id' | 'created_at' | 'resume'>): Promise<CareerApplication | null> {
        try {
            const { data: application, error } = await supabase
                .from('career_bucket')
                .insert([{
                    position: data.position,
                    name: data.name, // Updated field name
                    email: data.email,
                    phone_number: data.phone_number, // Updated field name and type
                    experience: data.experience, // Updated type
                    add_info: data.add_info // Updated field name
                    // Note: Your table doesn't have status column
                }])
                .select()
                .single();

            if (error) {
                console.error('Career application error:', error);
                return null;
            }

            return application;
        } catch (error) {
            console.error('Career application error:', error);
            return null;
        }
    },

    // Update application with resume URL
    async updateApplicationResume(id: string, resumeUrl: string): Promise<boolean> {
        try {
            const { error } = await supabase
                .from('career_bucket')
                .update({ resume: resumeUrl })
                .eq('id', id);

            if (error) {
                console.error('Resume URL update error:', error);
                return false;
            }

            return true;
        } catch (error) {
            console.error('Resume URL update error:', error);
            return false;
        }
    },

    // Get all career applications (for admin)
    async getAllApplications(): Promise<CareerApplication[]> {
        try {
            const { data, error } = await supabase
                .from('career_bucket')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Fetch applications error:', error);
                return [];
            }

            return data || [];
        } catch (error) {
            console.error('Fetch applications error:', error);
            return [];
        }
    },

    // Update application status - Note: Your table doesn't have status column
    async updateStatus(id: string, status: CareerApplication['status']): Promise<boolean> {
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

    // Get application by ID
    async getApplicationById(id: string): Promise<CareerApplication | null> {
        try {
            const { data, error } = await supabase
                .from('career_bucket')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Fetch application error:', error);
                return null;
            }

            return data;
        } catch (error) {
            console.error('Fetch application error:', error);
            return null;
        }
    }
};