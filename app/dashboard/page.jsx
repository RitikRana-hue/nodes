import DashboardHeader from './(components)/DashboardHeader';
import RecentActivity from './(components)/RecentActivity';
import SystemActivity from './(components)/SystemActivity';

const DashboardPage = () => {
  return (
    <div className="p-4 mx-3 xl:ml-10">
      <DashboardHeader />
      {/* Responsive layout */}
      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        <div className=" sm: w-full  lg:w-2/3">
          <SystemActivity />
        </div>
        <div className=" sm: w-full  lg:w-1/3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
