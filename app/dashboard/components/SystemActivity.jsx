'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const MyMap = dynamic(() => import('./MyMap'), { ssr: false });
const SystemActivity = () => {
const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="sm:ml-60 xl:ml-50 mt-10 shadow-lg border border-gray-300 dark:border-gray-700 rounded-2xl md:h-[600px] bg-white dark:bg-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">System Activity</h3>


        <label className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div
              className={`block h-6 w-14 py-2 rounded-full transition ${
                isChecked ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 py-2 h-4 w-6 rounded-full bg-white dark:bg-gray-200 shadow-md transition-transform ${
                isChecked ? 'translate-x-6' : ''
              }`}
            ></div>
          </div>
        </label>
      </div>


      <div className="h-[530px] flex justify-center items-center p-4 m-2 rounded bg-white dark:bg-gray-800">
        <MyMap />
      </div>
    </div>
  );
};

export default SystemActivity;
