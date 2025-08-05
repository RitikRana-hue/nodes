import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
 
  return (
    <div >
<div  className="fixed top-0 left-0 z-40 w-16 sm:w-64 h-screen transition-transform -translate-x-0 border-r border-r-gray-300  shadow-lg bg-white" aria-label="Sidebar">
   <div className="h-full px-3 py-2 overflow-y-auto bg-white flex flex-col justify-between">
      <ul className="space-y-5  font-semibold">
         <li>
            <Link href="#" className="flex items-center p-2 text-black-300  border-b border-b-gray-300  ">
               <span>Logo Here</span>
               <span className="mx-7 p-3 text-2xl">MiDit</span>
            </Link>    
         </li>
         <li>
            <Link href="/dashboard" className="flex items-center p-2 text-black hover:bg-gray-200 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0  24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-gantt-icon lucide-chart-no-axes-gantt"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/></svg>
               <span className="hidden sm:inline ms- whitespace-nowrap">Overview</span>
            </Link>
         </li>
         <li>
            <Link href="/dashboard/bins" className="flex items-center p-2 text-black hover:bg-gray-200 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
               <span className="hidden sm:inline ms-3 whitespace-nowrap">Bins</span>
            </Link>
         </li>
         <li>
            <Link href="/dashboard/driver" className="flex items-center p-2 text-black hover:bg-gray-200 ">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-icon lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
               <span className="hidden sm:inline ms-3 whitespace-nowrap">Drivers</span>
            </Link>
         </li>
         <li>
            <Link href="/dashboard/users" className="flex items-center p-2 text-black hover:bg-gray-200 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
               <span className="hidden sm:inline ms-3 whitespace-nowrap">Users</span>
            </Link>
         </li>
         <li>
            <Link href="/dashboard/routes" className="flex items-center p-2 text-black hover:bg-gray-200 ">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route-icon lucide-route"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
               <span className="hidden sm:inline ms-3 whitespace-nowrap">Routes</span>
            </Link>
         </li>
         <li>
            <Link href="/dashboard/settings" className="flex items-center p-2 text-black hover:bg-gray-200 ">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
               <span className="hidden sm:inline ms-3 whitespace-nowrap">Settings</span>
            </Link>
         </li>
      </ul>
<div className="p-1 flex flex-col w-40 m-3 space-y-4 mb-10">
  {/* Theme Toggle */}
  <div className="bg-gray-200 w-30 p-2 text-center rounded">
    {/* Text select for md and above */}
    <select className="block w-full md:block ">
      <option>Dark</option>
      <option>Light</option>
      <option>System</option>
    </select>

    {/* Icon for small screens */}
    <div className="md:hidden flex justify-center items-center border">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon"
      >
        <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 12 21a9 9 0 0 1 9-8.21z" />
      </svg>
    </div>
  </div>

  {/* Logout */}
  <div className="p-2 text-center flex justify-evenly items-center cursor-pointer hover:bg-gray-200 transition-colors duration-500">
    {/* Text + icon for md and up */}
    <span className="md:inline hidden">Logout</span>

    {/* Always visible logout icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-log-out"
    >
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </svg>
  </div>
</div>
   </div>
</div>
    </div>
  )
}
