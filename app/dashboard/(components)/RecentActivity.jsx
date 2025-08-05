import Image from 'next/image';

const RecentActivity = () => {
  return (
    <div className="bg-white sm:mt-5 md:mt-5 lg:mt-10 p-4 rounded-2xl shadow-lg sm:h-10  md:h-[600px] border border-gray-300 lg:ml-3 sm:ml-60  ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Recent Activities</h2>
        <button
          className="flex items-center justify-center h-8 w-8 rounded-full bg-white hover:bg-gray-200 transition-colors"
          aria-label="Recycle"
        >  
          <Image src="/recycle.png" width={20} height={20} alt="Recycle icon" />
        </button>
      </div>

      <div className="grid grid-cols-4 text-sm font-semibold text-gray-700 py-2 px-3 border-b">
        <div>Time</div>
        <div>Type</div>
        <div>Description</div>
        <div>Status</div>
      </div>

      <div className="grid grid-cols-4 text-sm text-gray-600 py-2 px-3 hover:bg-gray-50">
       
      </div>
    </div>
  );
};

export default RecentActivity;
