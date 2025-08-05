'use client';

import {
  Trash2,
  CheckCircle,
  Truck,
  Recycle
} from 'lucide-react';

const DashboardHeader = () => {
  const binStatus = [
    { label: "Total Bins", value: "0", icon: <Trash2 className="h-6 w-6 text-green-600" /> },
    { label: "Active Bins", value: "0", icon: <CheckCircle className="h-6 w-6 text-green-600" /> },
    { label: "Total Collections", value: "0", icon: <Truck className="h-6 w-6 text-green-600" /> },
    { label: "Recycling Rate", value: "0%", icon: <Recycle className="h-6 w-6 text-green-600 " /> },
  ];

  return (
    <div className="mt-8 mx-6 sm:ml-60 xl:ml-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold text-gray-800">Dashboard Overview</h1>
        <select className="border rounded px-3 py-1 shadow text-sm">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
        {binStatus.map((item, index) => (
          <div
            key={index}
            className="bg-white min-h-[150px] rounded-lg border border-gray-300 shadow-sm flex items-center gap-4 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="p-5  bg-gray-100 rounded-full">
              {item.icon}
            </div>
            <div>
              <p className="text-xl font-bold text-black-">{item.label}</p>
              <h2 className="text-xl font-bold text-green-500">{item.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;
