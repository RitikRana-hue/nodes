"use client";

import { useState, useEffect } from 'react';
import { Plus, Filter, Search, Clock, CheckCircle, AlertCircle, XCircle, Eye } from 'lucide-react';
import { userReportsService } from '@/lib/api/userServices';
import type { Report, ReportFilters, CreateReportPayload } from '@/types/user';

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewReportModal, setShowNewReportModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<ReportFilters>({
    sortBy: 'createdAt',
    sortOrder: 'desc',
  });

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await userReportsService.getReports(filters);
      setReports(response.reports);
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-600" />;
      case 'pending': return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'rejected': return <XCircle className="w-5 h-5 text-red-600" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'rejected': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-green-600 dark:text-green-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const filteredReports = reports.filter(report =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Reports</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {filteredReports.length} reports submitted
            </p>
          </div>
          
          <button
            onClick={() => setShowNewReportModal(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Report
          </button>
        </div>

        {/* Search and Filters */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={filters.status || ''}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type
                </label>
                <select
                  value={filters.type || ''}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">All Types</option>
                  <option value="full-bin">Full Bin</option>
                  <option value="broken-bin">Broken Bin</option>
                  <option value="missed-pickup">Missed Pickup</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy || 'createdAt'}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="createdAt">Date Created</option>
                  <option value="updatedAt">Last Updated</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    {/* Left Side */}
                    <div className="flex items-start gap-4 flex-1">
                      {/* Status Icon */}
                      <div className="mt-1">
                        {getStatusIcon(report.status)}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {report.title}
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                                {report.status.replace('-', ' ')}
                              </span>
                              <span className={`text-xs font-medium ${getPriorityColor(report.priority)}`}>
                                {report.priority} priority
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {report.type.replace('-', ' ')}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {report.description}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span>{report.location.address}</span>
                        </div>

                        {/* Timestamps */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                          <span>Created: {new Date(report.createdAt).toLocaleString()}</span>
                          <span>Updated: {new Date(report.updatedAt).toLocaleString()}</span>
                          {report.resolvedAt && (
                            <span className="text-green-600 dark:text-green-400">
                              Resolved: {new Date(report.resolvedAt).toLocaleString()}
                            </span>
                          )}
                        </div>

                        {/* Response */}
                        {report.response && (
                          <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-1">
                              Response:
                            </p>
                            <p className="text-sm text-blue-800 dark:text-blue-400">
                              {report.response}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Side - Action */}
                    <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Report Modal */}
      {showNewReportModal && (
        <NewReportModal
          onClose={() => setShowNewReportModal(false)}
          onSubmit={async (data) => {
            try {
              await userReportsService.createReport(data);
              setShowNewReportModal(false);
              fetchReports();
            } catch (error) {
              console.error('Failed to create report:', error);
            }
          }}
        />
      )}
    </div>
  );
}

// New Report Modal Component
interface NewReportModalProps {
  onClose: () => void;
  onSubmit: (data: CreateReportPayload) => Promise<void>;
}

function NewReportModal({ onClose, onSubmit }: NewReportModalProps) {
  const [formData, setFormData] = useState({
    type: 'full-bin' as any,
    title: '',
    description: '',
    location: {
      lat: 30.7333,
      lng: 76.7794,
      address: 'Sector 15, Chandigarh',
    },
    binId: '',
    photos: [] as File[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Report</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Report an issue with bins or waste collection
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Report Type *
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            >
              <option value="full-bin">Full Bin</option>
              <option value="broken-bin">Broken Bin</option>
              <option value="missed-pickup">Missed Pickup</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Brief description of the issue"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Provide detailed information about the issue"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location *
            </label>
            <input
              type="text"
              value={formData.location.address}
              onChange={(e) => setFormData({ 
                ...formData, 
                location: { ...formData.location, address: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter location address"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Or use current location
            </p>
          </div>

          {/* Bin ID (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bin ID (Optional)
            </label>
            <input
              type="text"
              value={formData.binId}
              onChange={(e) => setFormData({ ...formData, binId: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter bin ID if known"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Photos (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setFormData({ ...formData, photos: Array.from(e.target.files || []) })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Upload photos to help us understand the issue better
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
