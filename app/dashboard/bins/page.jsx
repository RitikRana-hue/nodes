'use client';

import { FaSearch, FaEye, FaBars } from "react-icons/fa";
import { CgImport } from "react-icons/cg";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  
  
  const binsData = [
    {
      id: "BIN-001",
      type: "General Waste",
      location: "Main Street, Block A",
      fillLevel: "78%",
      status: "active",
      lastUpdated: "2023-05-15 09:30"
    },
    {
      id: "BIN-002",
      type: "Recyclable",
      location: "Park Entrance",
      fillLevel: "45%",
      status: "active",
      lastUpdated: "2023-05-15 10:15"
    },
    {
      id: "BIN-003",
      type: "Organic",
      location: "Cafeteria Area",
      fillLevel: "92%",
      status: "maintenance",
      lastUpdated: "2023-05-14 16:45"
    },
    {
      id: "BIN-004",
      type: "General Waste",
      location: "Office Building B",
      fillLevel: "15%",
      status: "inactive",
      lastUpdated: "2023-05-13 11:20"
    },
    {
      id: "BIN-005",
      type: "Recyclable",
      location: "Shopping Mall",
      fillLevel: "60%",
      status: "active",
      lastUpdated: "2023-05-15 08:10"
    },
    {
      id: "BIN-006",
      type: "Organic",
      location: "Restaurant Back",
      fillLevel: "85%",
      status: "maintenance",
      lastUpdated: "2023-05-15 12:30"
    },
    {
      id: "BIN-007",
      type: "General Waste",
      location: "Train Station",
      fillLevel: "32%",
      status: "active",
      lastUpdated: "2023-05-15 07:45"
    }
  ];

  const filteredBins = binsData.filter(bin => {
    const matchesSearch = 
      bin.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bin.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bin.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === "all" || bin.status === statusFilter;
    
    const matchesType = 
      typeFilter === "all" || bin.type.toLowerCase().includes(typeFilter.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "maintenance":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar space - 15vw */}
      <div className="hidden md:block w-[15vw] bg-gray-200"></div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col p-4 md:p-6 bg-gray-100">
        {/* Mobile header with sidebar toggle */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-200"
          >
            <FaBars />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">Bins Management</h2>
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <div className="absolute left-0 top-0 h-full w-[70vw] bg-gray-200 shadow-lg">
              {/* Sidebar content would go here */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">Menu</h3>
                {/* Add sidebar items here */}
              </div>
            </div>
          </div>
        )}

        {/* Desktop title (hidden on mobile) */}
        <div className='flex flex-row justify-between'>
          <h2 className="hidden md:block text-xl font-semibold text-gray-800 mb-6">Bins Management</h2>

          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm md:text-base font-medium cursor-pointer transition bg-green-500 hover:bg-green-600 text-white px-3 md:px-4 py-1 w-full sm:w-auto">
                + Add New Bin
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm md:text-base font-medium cursor-pointer transition bg-green-500 hover:bg-green-600 text-white px-3 md:px-4 py-1 w-full sm:w-auto">
                - Remove Bin
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm md:text-base font-medium cursor-pointer transition bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 md:px-4 py-1 w-full sm:w-auto">
                <CgImport />
                Export Data 
              </button>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 mb-6 gap-4">
          <div className="flex items-center border border-gray-200 rounded-md px-3 md:px-4 py-2 gap-4 bg-gray-100 w-[80%]">
            <FaSearch className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Search bins..." 
              className="bg-transparent outline-none w-full text-gray-800 text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-2 md:gap-4 w-full md:w-auto">
            <select 
              className="p-2 rounded-md border border-gray-200 bg-white text-gray-800 text-sm md:text-base w-full md:w-auto"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="maintenance">Maintenance</option>
            </select>
            <select 
              className="p-2 rounded-md border border-gray-200 bg-white text-gray-800 text-sm md:text-base w-full md:w-auto"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="general">General Waste</option>
              <option value="recyclable">Recyclable</option>
              <option value="organic">Organic</option>
            </select>
          </div>
        </div>

        {/* Table container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1">
          <div className="overflow-auto h-full">
            <table className="w-full">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="p-2 md:p-3 text-left text-gray-600 font-semibold text-sm md:text-base">Bin ID</th>
                  <th className="p-2 md:p-3 text-left text-gray-600 font-semibold text-sm md:text-base">Type</th>
                  <th className="p-2 md:p-3 text-left text-gray-600 font-semibold text-sm md:text-base hidden sm:table-cell">Location</th>
                  <th className="p-2 md:p-3 text-left text-gray-600 font-semibold text-sm md:text-base">Fill Level</th>
                  <th className="p-2 md:p-3 text-left text-gray-600 font-semibold text-sm md:text-base">Status</th>
                  <th className="p-2 md:p-3 text-left text-gray-600 font-semibold text-sm md:text-base hidden md:table-cell">Last Updated</th>
                  <th className="p-2 md:p-3 text-left text-gray-600 font-semibold text-sm md:text-base">View</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-gray-200">
                {filteredBins.length > 0 ? (
                  filteredBins.map((bin) => (
                    <tr key={bin.id} className="hover:bg-gray-50">
                      <td className="p-2 md:p-3 text-gray-800 text-sm md:text-base">{bin.id}</td>
                      <td className="p-2 md:p-3 text-gray-800 text-sm md:text-base">{bin.type}</td>
                      <td className="p-2 md:p-3 text-gray-800 text-sm md:text-base hidden sm:table-cell">{bin.location}</td>
                      <td className="p-2 md:p-3 text-gray-800 text-sm md:text-base">{bin.fillLevel}</td>
                      <td className="p-2 md:p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(bin.status)}`}>
                          {bin.status.charAt(0).toUpperCase() + bin.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-2 md:p-3 text-gray-800 text-sm md:text-base hidden md:table-cell">{bin.lastUpdated}</td>
                      <td className="p-2 md:p-3">
                        <div className="flex gap-1 md:gap-2">
                          <button className="p-1 md:p-2 text-blue-500 hover:bg-blue-50 rounded-md">
                            <FaEye className="text-xs md:text-sm" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="p-4 text-center text-gray-500">
                      No bins found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}