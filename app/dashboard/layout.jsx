import Sidebar from "../Components/Sidebar/Sidebar";

export const metadata = {
  title: 'Dashboard',
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-16 sm:ml-64 min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}
