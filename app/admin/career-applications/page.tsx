"use client";

import { useState, useEffect } from 'react';
import { CareerApplication } from '@/lib/careerService';
import Container from '@/app/components/ui/Container';
import Card, { CardBody } from '@/app/components/ui/Card';
import Button from '@/app/components/ui/Button';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Briefcase, Calendar, Download, Eye, CheckCircle, Clock, XCircle, Star } from 'lucide-react';

export default function CareerApplicationsAdmin() {
    const [applications, setApplications] = useState<CareerApplication[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'new' | 'reviewed' | 'shortlisted' | 'rejected'>('all');

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/careers', {
                headers: {
                    'Authorization': 'Bearer admin-token'
                }
            });

            if (response.ok) {
                const result = await response.json();
                setApplications(result.data);
            }
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, status: CareerApplication['status']) => {
        // Since your table doesn't have status column, this is just for UI
        // The actual database won't be updated, but we'll update the local state
        console.warn('Status update is for display only - database table does not have status column');
        setApplications(prev =>
            prev.map(app =>
                app.id === id ? { ...app, status } : app
            )
        );
    };

    const filteredApplications = applications.filter(app => {
        if (filter === 'all') return true;
        // Since your table doesn't have status, we'll treat all as 'new'
        return filter === 'new';
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-800';
            case 'reviewed': return 'bg-yellow-100 text-yellow-800';
            case 'shortlisted': return 'bg-green-100 text-green-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'new': return <Clock className="w-3 h-3" />;
            case 'reviewed': return <Eye className="w-3 h-3" />;
            case 'shortlisted': return <Star className="w-3 h-3" />;
            case 'rejected': return <XCircle className="w-3 h-3" />;
            default: return <CheckCircle className="w-3 h-3" />;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <Container>
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading applications...</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <Container>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Applications</h1>
                        <p className="text-gray-600">Manage and review job applications</p>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardBody className="p-6">
                                <div className="flex items-center">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <Briefcase className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Total Applications</p>
                                        <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody className="p-6">
                                <div className="flex items-center">
                                    <div className="p-2 bg-yellow-100 rounded-lg">
                                        <Clock className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">New</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {applications.filter(a => !a.status || a.status === 'new').length}
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody className="p-6">
                                <div className="flex items-center">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <Star className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Shortlisted</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {applications.filter(a => a.status === 'shortlisted').length}
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody className="p-6">
                                <div className="flex items-center">
                                    <div className="p-2 bg-red-100 rounded-lg">
                                        <XCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Rejected</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {applications.filter(a => a.status === 'rejected').length}
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Filters */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {['all', 'new', 'reviewed', 'shortlisted', 'rejected'].map((status) => (
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

                    {/* Applications List */}
                    <div className="space-y-4">
                        {filteredApplications.length === 0 ? (
                            <Card>
                                <CardBody className="p-8 text-center">
                                    <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Found</h3>
                                    <p className="text-gray-600">
                                        {filter === 'all'
                                            ? 'No career applications have been submitted yet.'
                                            : `No applications with status "${filter}" found.`
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        ) : (
                            filteredApplications.map((application, index) => (
                                <motion.div
                                    key={application.id}
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
                                                            {application.name}
                                                        </h3>
                                                        <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(application.status || 'new')}`}>
                                                            {getStatusIcon(application.status || 'new')}
                                                            <span className="ml-1 capitalize">{application.status || 'new'}</span>
                                                        </span>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Mail className="w-4 h-4 mr-2" />
                                                            <a href={`mailto:${application.email}`} className="hover:text-blue-600">
                                                                {application.email}
                                                            </a>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Phone className="w-4 h-4 mr-2" />
                                                            <a href={`tel:${application.phone_number}`} className="hover:text-blue-600">
                                                                {application.phone_number}
                                                            </a>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Calendar className="w-4 h-4 mr-2" />
                                                            {new Date(application.created_at || '').toLocaleDateString()}
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="flex items-center mb-2">
                                                            <Briefcase className="w-4 h-4 text-gray-500 mr-2" />
                                                            <span className="font-medium text-gray-900">Position: {application.position}</span>
                                                            <span className="ml-4 text-sm text-gray-600">Experience: {application.experience} years</span>
                                                        </div>
                                                        <p className="text-gray-600 text-sm line-clamp-2">{application.add_info}</p>
                                                    </div>

                                                    {application.resume && (
                                                        <div className="mb-4">
                                                            <a
                                                                href={application.resume}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                                                            >
                                                                <Download className="w-4 h-4 mr-1" />
                                                                Download Resume
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0 lg:ml-6">
                                                    {application.status === 'new' && (
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => updateStatus(application.id!, 'reviewed')}
                                                        >
                                                            Mark as Reviewed
                                                        </Button>
                                                    )}
                                                    {(application.status === 'new' || application.status === 'reviewed') && (
                                                        <Button
                                                            size="sm"
                                                            variant="primary"
                                                            onClick={() => updateStatus(application.id!, 'shortlisted')}
                                                        >
                                                            Shortlist
                                                        </Button>
                                                    )}
                                                    {application.status !== 'rejected' && (
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                            onClick={() => updateStatus(application.id!, 'rejected')}
                                                        >
                                                            Reject
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}