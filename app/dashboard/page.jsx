"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MyMap = dynamic(() => import('./(components)/MyMap'), { ssr: false });

const DashboardPage = () => {
  const [isMapEnabled, setIsMapEnabled] = useState(true);
  const [timeRange, setTimeRange] = useState('today');

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Monitor your waste management system in real-time</p>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 dark:bg-gray-900">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { 
              icon: "trash", 
              label: "Total Bins", 
              value: "1,247", 
              change: "+12", 
              color: "bg-blue-500",
              textColor: "text-blue-600"
            },
            { 
              icon: "check-circle", 
              label: "Active Bins", 
              value: "1,189", 
              change: "+8", 
              color: "bg-green-500",
              textColor: "text-green-600"
            },
            { 
              icon: "truck", 
              label: "Collections Today", 
              value: "156", 
              change: "+23", 
              color: "bg-purple-500",
              textColor: "text-purple-600"
            },
            { 
              icon: "recycle", 
              label: "Recycling Rate", 
              value: "87%", 
              change: "+2.3%", 
              color: "bg-yellow-500",
              textColor: "text-yellow-600"
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                  <p className={`text-xs font-medium ${stat.textColor} mt-1`}>
                    {stat.change} from yesterday
                  </p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {stat.icon === "trash" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    )}
                    {stat.icon === "check-circle" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    )}
                    {stat.icon === "truck" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM7 14h10M7 10h10M7 6h10"></path>
                    )}
                    {stat.icon === "recycle" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* System Activity Map */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Activity Map</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Real-time bin locations and collection routes</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={isMapEnabled}
                          onChange={(e) => setIsMapEnabled(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`block w-12 h-6 rounded-full transition-colors duration-200 ${
                          isMapEnabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}></div>
                        <div className={`absolute left-1 top-1 bg-white dark:bg-gray-200 w-4 h-4 rounded-full transition-transform duration-200 ${
                          isMapEnabled ? 'transform translate-x-6' : ''
                        }`}></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Live Tracking</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="h-[500px] p-4">
                {isMapEnabled ? (
                  <MyMap />
                ) : (
                  <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
                      </svg>
                      <p className="text-gray-500 dark:text-gray-400">Map disabled</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activities</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Latest system events and updates</p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="max-h-[500px] overflow-y-auto">
                {[
                  { time: "2 min ago", type: "Collection", description: "Bin #A247 collected", status: "Completed", color: "green" },
                  { time: "5 min ago", type: "Alert", description: "Bin #B892 90% full", status: "Warning", color: "yellow" },
                  { time: "12 min ago", type: "Collection", description: "Route A completed", status: "Completed", color: "green" },
                  { time: "18 min ago", type: "Maintenance", description: "Driver shift change", status: "Info", color: "blue" },
                  { time: "25 min ago", type: "Collection", description: "Bin #C156 collected", status: "Completed", color: "green" },
                  { time: "32 min ago", type: "Alert", description: "Bin #D743 overflow", status: "Critical", color: "red" },
                  { time: "45 min ago", type: "Collection", description: "Route B started", status: "In Progress", color: "blue" },
                  { time: "1 hour ago", type: "System", description: "Daily report generated", status: "Completed", color: "green" },
                ].map((activity, index) => (
                  <div key={index} className="px-6 py-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{activity.time}</span>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            activity.color === 'green' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' :
                            activity.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300' :
                            activity.color === 'red' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300' :
                            'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
                          }`}>
                            {activity.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 dark:text-gray-200">{activity.description}</p>
                      </div>
                      <span className={`text-xs font-medium ${
                        activity.color === 'green' ? 'text-green-600 dark:text-green-400' :
                        activity.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                        activity.color === 'red' ? 'text-red-600 dark:text-red-400' :
                        'text-blue-600 dark:text-blue-400'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "plus", label: "Add New Bin", color: "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700" },
                { icon: "users", label: "Manage Drivers", color: "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700" },
                { icon: "route", label: "Create Route", color: "bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700" },
                { icon: "bar-chart", label: "View Reports", color: "bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700" },
              ].map((action, index) => (
                <button key={index} className={`${action.color} text-white p-4 rounded-lg transition-colors duration-200 flex flex-col items-center gap-2`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {action.icon === "plus" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    )}
                    {action.icon === "users" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                    )}
                    {action.icon === "route" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
                    )}
                    {action.icon === "bar-chart" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    )}
                  </svg>
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
