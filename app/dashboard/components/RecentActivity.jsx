import Image from 'next/image';

const RecentActivity = () => {
  return (
    <div className="bg-white dark:bg-gray-800 sm:mt-5 md:mt-5 lg:mt-10 p-4 rounded-2xl shadow-lg sm:h-10 md:h-[600px] border border-gray-300 dark:border-gray-700 lg:ml-3 sm:ml-60">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Recent Activities</h2>
        <button
          className="flex items-center justify-center h-8 w-8 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Recycle"
        >  
          <Image src="/recycle.png" width={20} height={20} alt="Recycle icon" />
        </button>
      </div>

      <div className="grid grid-cols-4 text-sm font-semibold text-gray-700 dark:text-gray-300 py-2 px-3 border-b dark:border-gray-700">
        <div>Time</div>
        <div>Type</div>
        <div>Description</div>
        <div>Status</div>
      </div>

      <div className="grid grid-cols-4 text-sm text-gray-600 dark:text-gray-400 py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-700">
       
      </div>
    </div>
  );
};

export default RecentActivity;
