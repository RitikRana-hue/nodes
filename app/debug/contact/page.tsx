"use client";

import { useState } from 'react';
import Container from '@/app/components/ui/Container';
import Card, { CardBody } from '@/app/components/ui/Card';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Textarea from '@/app/components/ui/Textarea';

export default function ContactDebugPage() {
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        company: 'Test Company',
        subject: 'General Inquiry',
        message: 'This is a test message to debug the contact form functionality.'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResult({
                status: response.status,
                success: response.ok,
                data: data
            });
        } catch (error) {
            setResult({
                status: 'Network Error',
                success: false,
                data: { error: error instanceof Error ? error.message : 'Unknown error' }
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const testSupabaseConnection = async () => {
        try {
            const { supabase } = await import('@/lib/supabase');
            const { data, error } = await supabase.from('nodesio_contacts').select('count', { count: 'exact' });

            if (error) {
                setResult({
                    test: 'Supabase Connection',
                    success: false,
                    error: error.message
                });
            } else {
                setResult({
                    test: 'Supabase Connection',
                    success: true,
                    data: data
                });
            }
        } catch (error) {
            setResult({
                test: 'Supabase Connection',
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Form Debug Page</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Test Form */}
                        <Card>
                            <CardBody className="p-6">
                                <h2 className="text-xl font-semibold mb-4">Test Contact Form</h2>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <Input
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <Input
                                        name="company"
                                        placeholder="Company (Optional)"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                    />

                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Sales Question">Sales Question</option>
                                        <option value="Partnership">Partnership</option>
                                    </select>

                                    <Textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        required
                                    />

                                    <div className="flex gap-4">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            disabled={isSubmitting}
                                            className="flex-1"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Test Submit'}
                                        </Button>

                                        <Button
                                            type="button"
                                            variant="ghost"
                                            onClick={testSupabaseConnection}
                                        >
                                            Test Supabase
                                        </Button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>

                        {/* Results */}
                        <Card>
                            <CardBody className="p-6">
                                <h2 className="text-xl font-semibold mb-4">Debug Results</h2>

                                {/* Environment Info */}
                                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                                    <h3 className="font-semibold mb-2">Environment Variables</h3>
                                    <div className="text-sm space-y-1">
                                        <div>
                                            <strong>Supabase URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Not set'}
                                        </div>
                                        <div>
                                            <strong>Supabase Key:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not set'}
                                        </div>
                                    </div>
                                </div>

                                {/* API Response */}
                                {result && (
                                    <div className="space-y-4">
                                        <div className={`p-4 rounded-lg ${result.success ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'}`}>
                                            <div className="flex items-center mb-2">
                                                <span className={`w-3 h-3 rounded-full mr-2 ${result.success ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                <strong>Status: {result.status}</strong>
                                            </div>

                                            <pre className="text-sm bg-white p-3 rounded border overflow-auto">
                                                {JSON.stringify(result.data, null, 2)}
                                            </pre>
                                        </div>
                                    </div>
                                )}

                                {/* Instructions */}
                                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <h3 className="font-semibold text-blue-900 mb-2">Debug Instructions</h3>
                                    <div className="text-sm text-blue-800 space-y-2">
                                        <p>1. <strong>Test Submit:</strong> Submit the form to test the API</p>
                                        <p>2. <strong>Test Supabase:</strong> Check Supabase connection</p>
                                        <p>3. <strong>Check Console:</strong> Open browser dev tools to see logs</p>
                                        <p>4. <strong>Check File:</strong> Look for contact-submissions.json in project root</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
}