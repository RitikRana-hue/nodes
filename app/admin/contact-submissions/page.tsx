"use client";

import { useState, useEffect } from 'react';
import { contactService, ContactSubmission } from '@/lib/supabase';
import Container from '@/app/components/ui/Container';
import Card, { CardBody } from '@/app/components/ui/Card';
import Button from '@/app/components/ui/Button';
import { motion } from 'framer-motion';
import { Mail, User, Building, Calendar, Eye, CheckCircle, MessageSquare } from 'lucide-react';

export default function ContactSubmissionsAdmin() {
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied' | 'resolved'>('all');

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        setLoading(true);
        try {
            const data = await contactService.getAllSubmissions();
            setSubmissions(data);
        } catch (error) {
            console.error('Error fetching submissions:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, status: ContactSubmission['status']) => {
        // Note: Your table doesn't have a status column, so this is just for UI
        // The actual database won't be updated, but we'll update the local state
        console.warn('Status update is for display only - database table does not have status column');
        setSubmissions(prev =>
            prev.map(sub =>
                sub.id === id ? { ...sub, status } : sub
            )
        );
    };

    const filteredSubmissions = submissions.filter(sub => {
        if (filter === 'all') return true;
        // Since your table doesn't have status, we'll treat all as 'new'
        return filter === 'new';
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-800';
            case 'read': return 'bg-yellow-100 text-yellow-800';
            case 'replied': return 'bg-green-100 text-green-800';
            case 'resolved': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'new': return <Mail className="w-4 h-4" />;
            case 'read': return <Eye className="w-4 h-4" />;
            case 'replied': return <MessageSquare className="w-4 h-4" />;
            case 'resolved': return <CheckCircle className="w-4 h-4" />;
            default: return <Mail className="w-4 h-4" />;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading submissions...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <Container>
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
                        <p className="text-gray-600">Manage and respond to contact form submissions</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardBody className="p-6">
                                <div className="flex items-center">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Total</p>
                                        <p className="text-2xl font-bold text-gray-900">{submissions.length}</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody className="p-6">
                                <div className="flex items-center">
                                    <div className="p-2 bg-yellow-100 rounded-lg">
                                        <Eye className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">New</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {submissions.filter(s => !s.status || s.status === 'new').length}
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody className="p-6">
                                <div className="flex items-center">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <MessageSquare className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Replied</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {submissions.filter(s => s.status === 'replied').length}
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody className="p-6">
                                <div className="flex items-center">
                                    <div className="p-2 bg-gray-100 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Resolved</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {submissions.filter(s => s.status === 'resolved').length}
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Filters */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {['all', 'new', 'read', 'replied', 'resolved'].map((status) => (
                                <Button
                                    key={status}
                                    variant={filter === status ? 'primary' : 'ghost'}
                                    size="sm"
                                    onClick={() => setFilter(status as any)}
                                    className="capitalize"
                                >
                                    {status}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Submissions List */}
                    <div className="space-y-4">
                        {filteredSubmissions.map((submission, index) => (
                            <motion.div
                                key={submission.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardBody className="p-6">
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-2">
                                                    <User className="w-4 h-4 text-gray-500 mr-2" />
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        {submission.first_name} {submission.last_name}
                                                    </h3>
                                                    <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(submission.status || 'new')}`}>
                                                        {getStatusIcon(submission.status || 'new')}
                                                        <span className="ml-1 capitalize">{submission.status || 'new'}</span>
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <Mail className="w-4 h-4 mr-2" />
                                                        <a href={`mailto:${submission.email_address}`} className="hover:text-blue-600">
                                                            {submission.email_address}
                                                        </a>
                                                    </div>
                                                    {submission.company && (
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Building className="w-4 h-4 mr-2" />
                                                            {submission.company}
                                                        </div>
                                                    )}
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <Calendar className="w-4 h-4 mr-2" />
                                                        {new Date(submission.created_at || '').toLocaleDateString()}
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <p className="font-medium text-gray-900 mb-1">Subject: {submission.subject}</p>
                                                    <p className="text-gray-600 text-sm line-clamp-3">{submission.message}</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0 lg:ml-6">
                                                {submission.status === 'new' && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={() => updateStatus(submission.id!, 'read')}
                                                    >
                                                        Mark as Read
                                                    </Button>
                                                )}
                                                {(submission.status === 'new' || submission.status === 'read') && (
                                                    <Button
                                                        size="sm"
                                                        variant="primary"
                                                        onClick={() => updateStatus(submission.id!, 'replied')}
                                                    >
                                                        Mark as Replied
                                                    </Button>
                                                )}
                                                {submission.status === 'replied' && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={() => updateStatus(submission.id!, 'resolved')}
                                                    >
                                                        Mark as Resolved
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {filteredSubmissions.length === 0 && (
                        <div className="text-center py-12">
                            <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
                            <p className="text-gray-600">
                                {filter === 'all'
                                    ? 'No contact form submissions yet.'
                                    : `No submissions with status "${filter}".`
                                }
                            </p>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}