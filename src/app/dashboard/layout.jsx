"use client"
import React from 'react';
import Link from 'next/link';
import {
  PanelLeftOpen,
  
  CalendarCheck,
  User,
  BriefcaseMedical,
  Settings,
} from "lucide-react"; 
import { useSession } from 'next-auth/react';


const DashboardLayout = ({ children }) => { 
  const {data:session,status}=useSession()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Content */}
      <div className="drawer-content flex flex-col">

        {/* Navbar */}
        <div className="navbar bg-base-100 border-b border-base-300 shadow-sm">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-ghost btn-square drawer-button lg:hidden"
          >
            <PanelLeftOpen size={22} />
          </label>

          <h2 className="text-xl font-bold tracking-wide">
            Care<span className="text-primary">.io</span>
          </h2>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="min-h-full w-72 bg-base-200 border-r border-base-300">

          {/* User Info Section */}
          <div className="p-6 border-b border-base-300">
            <h1 className="text-xl font-bold text-primary">
              {session?.user?.name || "Guest User"}
            </h1>
            <p className="text-sm text-base-content/60">
              Dashboard
            </p>
          </div>

          {/* Menu */}
          <ul className="menu p-4 gap-2">

            <li>
              <Link href="/dashboard/my-bookings" className="rounded-xl">
                <CalendarCheck size={20} />
                My Bookings
              </Link>
            </li>

            <li>
              <Link href="/dashboard/my-profile" className="rounded-xl">
                <User size={20} />
                My Profile
              </Link>
            </li>

            <li>
              <Link href="/services" className="rounded-xl">
                <BriefcaseMedical size={20} />
                Services
              </Link>
            </li>


          </ul>

        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;