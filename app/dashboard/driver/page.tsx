"use client";

import Link from "next/link";
import Image from "next/image";

export default function DriversDashboard() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 px-6 sm:px-6 py-4 overflow-auto border-2 lg:ml-[35px] sm:ml-10">
        <div className="mb-6 flex flex-col justify-between lg:flex-row items-center gap-4">
          <h2 className="text-2xl font-semibold">Drivers Management</h2>
          <div className="flex flex-wrap gap-4 sm:justify-center">
           <button className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded flex items-center gap-2">
              <i className="fas fa-plus"></i>
              Add Driver
            </button>
            <button className="bg-red-700 cursor-pointer text-white px-4 py-2 rounded flex items-center gap-2">
              <i className="fas fa-plus"></i>
              Remove Driver
            </button>
            <button className="bg-gray-200 cursor-pointer text-gray-700 px-4 py-2 rounded flex items-center gap-2">
              <i className="fas fa-download"></i>
              Export Data
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded shadow mb-6 flex justify-between gap-4 flex-wrap">
          <div className="flex items-center border w-full border-gray-200 rounded px-3 py-2 gap-2 sm:w-auto">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search drivers..."
              className="outline-none bg-transparent flex-1 w-full sm:w-auto"
            />
          </div>
          <div className="flex gap-4">
            <select className="border border-gray-300 rounded px-3 py-2 sm:w-auto">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="onRoute">On Route</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-2 sm:w-auto">
              <option value="all">All Shifts</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="night">Night</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between gap-x-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mx-auto">
          {[
            { icon: "users", label: "Total Drivers", id: "totalDrivers" },
            { icon: "truck", label: "On Route", id: "activeDrivers" },
            { icon: "dumpster", label: "Collections Today", id: "todayCollections" },
            { icon: "star", label: "Avg. Rating", id: "avgRating" },
          ].map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-4 bg-white rounded shadow p-4 border border-gray-200 flex-1 min-w-[180px] max-w-[260px]"
            >
              <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded">
                <i className={`fas fa-${stat.icon}`}></i>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">{stat.label}</h3>
                <p id={stat.id} className="text-lg font-semibold">0</p>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Table */}
        <div className="bg-white p-4 rounded shadow border border-gray-200 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Driver ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Status</th>
                <th className="p-3">Current Route</th>
                <th className="p-3">Collections</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody id="driversTableBody">
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
