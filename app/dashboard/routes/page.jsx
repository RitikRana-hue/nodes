"use client";
import { Poppins } from 'next/font/google';
import { useState } from "react";
import { 
  PlusIcon, 
  MinusIcon, 
  ArrowDownTrayIcon, 
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Routes data
const routesData = [
  { id: "ROUTE001", driver: "Driver A", status: "Active", binsCount: "15/20", startTime: "08:00 AM", duration: "2 hours" },
  { id: "ROUTE002", driver: "Driver B", status: "Completed", binsCount: "20/20", startTime: "Yesterday 09:00 AM", duration: "1.5 hours" },
  { id: "ROUTE003", driver: "Driver C", status: "Pending", binsCount: "0/18", startTime: "Today 01:00 PM", duration: "2.5 hours" },
  { id: "ROUTE004", driver: "Driver A", status: "Active", binsCount: "10/25", startTime: "09:30 AM", duration: "3 hours" },
  { id: "ROUTE005", driver: "Driver B", status: "Completed", binsCount: "22/22", startTime: "Yesterday 11:00 AM", duration: "1 hour" },
  { id: "ROUTE006", driver: "Driver C", status: "Pending", binsCount: "0/15", startTime: "Tomorrow 08:00 AM", duration: "2 hours" },
  { id: "ROUTE007", driver: "Driver A", status: "Active", binsCount: "5/18", startTime: "11:00 AM", duration: "2 hours" },
  { id: "ROUTE008", driver: "Driver B", status: "Completed", binsCount: "19/19", startTime: "Yesterday 07:30 AM", duration: "1.8 hours" },
  { id: "ROUTE009", driver: "Driver C", status: "Pending", binsCount: "0/20", startTime: "Today 03:00 PM", duration: "3 hours" },
  { id: "ROUTE010", driver: "Driver A", status: "Active", binsCount: "12/24", startTime: "10:00 AM", duration: "2.5 hours" },
  { id: "ROUTE011", driver: "Driver B", status: "Completed", binsCount: "17/17", startTime: "Yesterday 10:00 AM", duration: "1.2 hours" },
  { id: "ROUTE012", driver: "Driver C", status: "Pending", binsCount: "0/16", startTime: "Tomorrow 09:30 AM", duration: "2 hours" },
  { id: "ROUTE013", driver: "Driver A", status: "Active", binsCount: "8/20", startTime: "11:30 AM", duration: "2.2 hours" },
  { id: "ROUTE014", driver: "Driver B", status: "Completed", binsCount: "21/21", startTime: "Yesterday 08:30 AM", duration: "1.6 hours" },
  { id: "ROUTE015", driver: "Driver C", status: "Pending", binsCount: "0/19", startTime: "Today 04:00 PM", duration: "2.8 hours" },
];

// Routes Table Component
function RoutesTable() {
  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-300 flex-1 flex flex-col min-h-0 p-4">
      <div className="overflow-auto flex-1">
        <table className="w-full">
          <thead className="bg-gray-100 sticky top-0 z-10">

            <tr>
              <th className="px-3 py-3 text-left text-m font-weight: 600 text-waste-text-light">Route ID</th>
              <th className="px-3 py-3 text-left text-m font-weight: 600 text-waste-text-light">Driver</th>
              <th className="px-3 py-3 text-left text-m font-weight: 600 text-waste-text-light">Status</th>
              <th className="px-3 py-3 text-left text-m font-weight: 600 text-waste-text-light">Bins Count</th>
              <th className="px-3 py-3 text-left text-m font-weight: 600 text-waste-text-light">Start Time</th>
              <th className="px-3 py-3 text-left text-m font-weight: 600 text-waste-text-light">Est. Duration</th>
              <th className="px-3 py-3 text-left text-m font-weight: 600 text-waste-text-light">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {routesData.map((route, index) => (
              <tr key={route.id} className="hover:bg-gray-50">
                <td className="px-3 py-3 text-base font-normal text-waste-text">{route.id}</td>
                <td className="px-3 py-3 text-base text-waste-text">{route.driver}</td>
                <td className="px-3 py-3">
                  <span className={`inline-flex px-2 py-1 text-s font-normal rounded `}>
                    {route.status}
                  </span>
                </td>
                <td className="px-3 py-3 text-base text-waste-text">{route.binsCount}</td>
                <td className="px-3 py-3 text-base text-waste-text">{route.startTime}</td>
                <td className="px-3 py-3 text-base text-waste-text">{route.duration}</td>
                <td className="px-3 py-3">
                  <button 
                    className="text-base font-medium text-waste-text bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                    style={{ padding: '0.5rem 1.2rem' }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Main Component
const Routes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [driverFilter, setDriverFilter] = useState("all");

  return (
    
    <div className="min-h-screen bg-waste-bg-light font-poppins  ">
      <div className="flex h-screen ">
     
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden p-6 ml-60">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-6 ">
            <h2 className="text-xl font-semibold text-waste-text">Routes Management</h2>
            <div className="flex gap-4">
              <button
  className="inline-flex items-center gap-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-base font-medium"
  style={{ padding: '0.5rem 1.2rem' }}
>
  <PlusIcon className="w-4 h-4" />
  Add New Route
</button>
<button
  className="inline-flex items-center gap-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-base font-medium"
  style={{ padding: '0.5rem 1.2rem' }}
>
  <MinusIcon className="w-4 h-4" />
  Remove Route
</button>

              <button 
                className="inline-flex items-center gap-2 bg-gray-100 text-waste-text rounded-md hover:bg-gray-200 transition-colors text-base font-medium"
                style={{ padding: '0.5rem 1.2rem' }}
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Export Data
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-md shadow-sm border border-gray-300 p-4 mb-6">
            <div className="flex justify-between items-center gap-4">
              {/* Search Field */}
              <div className="flex items-center bg-waste-bg-light rounded-md px-3 py-2 border border-gray-300 flex-1 max-w-md">
                <MagnifyingGlassIcon className="w-5 h-5 text-waste-text-light mr-2" />
                <input
                  type="text"
                  placeholder="Search routes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-waste-text text-base"
                />
              </div>

              {/* Filter Group */}
              <div className="flex gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md text-waste-text outline-none text-base"
                  style={{ padding: '0.5rem 1rem' }}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
                <select
                  value={driverFilter}
                  onChange={(e) => setDriverFilter(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md text-waste-text outline-none text-base"
                  style={{ padding: '0.5rem 1rem' }}
                >
                  <option value="all">All Drivers</option>
                  <option value="driver-a">Driver A</option>
                  <option value="driver-b">Driver B</option>
                  <option value="driver-c">Driver C</option>
                </select>
              </div>
            </div>
          </div>

          {/* Routes Table */}
          <div className="flex-1 flex flex-col min-h-0">
            <RoutesTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Routes;
