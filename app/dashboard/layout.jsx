import Sidebar from "../Sidebar.jsx/page";



export const metadata = {
  title: 'Dashboard',
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
