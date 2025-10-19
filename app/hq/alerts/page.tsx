"use client";

import { useState } from 'react';
import { Bell, AlertTriangle, AlertCircle, Info, CheckCircle, Eye } from 'lucide-react';
import { mockAlerts } from '@/lib/api/hqMockData';
import type { SystemAlert } from '@/types/hq';

export default function AlertsHub() {
  const [alerts, setAlerts] = useState<SystemAlert[]>(mockAlerts);
  const [typeFilter, setTypeFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const filteredAlerts = alerts.filter(a => {
    const matchesType = typeFilter === 'all' || a.type === typeFilter;
    const matchesSeverity = severityFilter === 'all' || a.severity === severityFilter;
    const matchesRead = !showUnreadOnly || !a.read;
    return matchesType && matchesSeverity && matchesRead;
  });

  const unreadCount = alerts.filter(a => !a.read).length;

  const markAsRead = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, read: true } : a));
  };

  const markAllAsRead = () => {
    setAlerts(alerts.map(a => ({ ...a, read: true })));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
            <Bell className="w-6 h-6 sm:w-8 sm:h-8" />
            Alerts & Notifications
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {unreadCount} unread alerts • {filteredAlerts.length} total
          </p>
        </div>
        <button
          onClick={markAllAsRead}
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
        >
          Mark All as Read
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-red-700 dark:text-red-400">Critical</span>
            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
          <div className="text-2xl font-bold text-red-700 dark:text-red-400">
            {alerts.filter(a => a.severity === 'Critical').length}
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-orange-700 dark:text-orange-400">Error</span>
            <AlertCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="text-2xl font-bold text-orange-700 dark:text-orange-400">
            {alerts.filter(a => a.severity === 'Error').length}
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-yellow-700 dark:text-yellow-400">Warning</span>
            <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">
            {alerts.filter(a => a.severity === 'Warning').length}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-blue-700 dark:text-blue-400">Info</span>
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
            {alerts.filter(a => a.severity === 'Info').length}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Types</option>
            <option value="Overflow">Overflow</option>
            <option value="Vehicle Delay">Vehicle Delay</option>
            <option value="Sensor Offline">Sensor Offline</option>
            <option value="Report Escalation">Report Escalation</option>
            <option value="System">System</option>
          </select>
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Severity</option>
            <option value="Critical">Critical</option>
            <option value="Error">Error</option>
            <option value="Warning">Warning</option>
            <option value="Info">Info</option>
          </select>
          <label className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={showUnreadOnly}
              onChange={(e) => setShowUnreadOnly(e.target.checked)}
              className="rounded border-gray-300 dark:border-gray-600"
            />
            <span className="text-sm text-gray-900 dark:text-white">Unread only</span>
          </label>
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`bg-white dark:bg-gray-800 border rounded-lg p-3 sm:p-4 ${
              !alert.read ? 'border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10' : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`p-2 rounded-lg ${
                alert.severity === 'Critical' ? 'bg-red-100 dark:bg-red-900/30' :
                alert.severity === 'Error' ? 'bg-orange-100 dark:bg-orange-900/30' :
                alert.severity === 'Warning' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                'bg-blue-100 dark:bg-blue-900/30'
              }`}>
                {alert.severity === 'Critical' && <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />}
                {alert.severity === 'Error' && <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />}
                {alert.severity === 'Warning' && <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
                {alert.severity === 'Info' && <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base break-words">{alert.title}</h3>
                      {!alert.read && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-words">{alert.message}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`px-2 py-1 text-xs font-medium rounded whitespace-nowrap ${
                      alert.severity === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      alert.severity === 'Error' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                      alert.severity === 'Warning' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {alert.severity}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>{alert.type}</span>
                    <span>•</span>
                    <span>{alert.region}</span>
                    <span>•</span>
                    <span>{new Date(alert.timestamp).toLocaleString()}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    {alert.actionRequired && alert.actionUrl && (
                      <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 whitespace-nowrap">
                        Take Action
                      </button>
                    )}
                    {!alert.read && (
                      <button
                        onClick={() => markAsRead(alert.id)}
                        className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded hover:bg-gray-50 dark:hover:bg-gray-700 whitespace-nowrap"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex-shrink-0">
                      <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-12 text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">All Clear!</h3>
          <p className="text-gray-600 dark:text-gray-400">No alerts match your current filters.</p>
        </div>
      )}
    </div>
  );
}
