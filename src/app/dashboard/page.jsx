
"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import {
  LayoutDashboard,
  CalendarCheck,
  Heart,
  User,
  Users,
  BriefcaseMedical,
  MessageSquare,
  Settings,
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  PlusCircle,
  Activity,
  UserRoundCheck,
  Ban,
} from "lucide-react";


const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Please login to access dashboard.
          </h2>

          <Link
            href="/login"
            className="btn btn-primary mt-4"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  const user = session.user;
  const isAdmin = user.role === "admin";


  // =====================================================
  // ADMIN DASHBOARD
  // =====================================================

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-base-200 p-4 sm:p-6">

        {/* Header */}
        <div className="mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck
                  size={26}
                  className="text-primary"
                />
              </div>

              <div>

                <h1 className="text-2xl sm:text-3xl font-bold">
                  Admin Dashboard
                </h1>

                <p className="text-sm text-base-content/60 mt-1">
                  Welcome back, {user.name || "Admin"}.
                  Manage your Care.io platform.
                </p>

              </div>

            </div>

          </div>

        </div> 


        {/* 
            PLATFORM OVERVIEW
         */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">


          {/* Users */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">

            <div className="card-body">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-base-content/60">
                    Total Users
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    --
                  </h2>

                </div>

                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users
                    size={22}
                    className="text-primary"
                  />
                </div>

              </div>

              <p className="text-xs text-base-content/50 mt-3">
                Registered users
              </p>

            </div>

          </div>


          {/* Services */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">

            <div className="card-body">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-base-content/60">
                    Services
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    --
                  </h2>

                </div>

                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <BriefcaseMedical
                    size={22}
                    className="text-secondary"
                  />
                </div>

              </div>

              <p className="text-xs text-base-content/50 mt-3">
                Available care services
              </p>

            </div>

          </div>


          {/* Bookings */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">

            <div className="card-body">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-base-content/60">
                    Bookings
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    --
                  </h2>

                </div>

                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CalendarCheck
                    size={22}
                    className="text-accent"
                  />
                </div>

              </div>

              <p className="text-xs text-base-content/50 mt-3">
                Service bookings
              </p>

            </div>

          </div>


          {/* Messages */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">

            <div className="card-body">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-base-content/60">
                    Messages
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    --
                  </h2>

                </div>

                <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center">
                  <MessageSquare
                    size={22}
                    className="text-success"
                  />
                </div>

              </div>

              <p className="text-xs text-base-content/50 mt-3">
                User inquiries
              </p>

            </div>

          </div>

        </div>


        {/*
            ADMIN MAIN AREA
    */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


          {/* Management */}
          <div className="lg:col-span-2 card bg-base-100 border border-base-300 shadow-sm">

            <div className="card-body">

              <div className="mb-5">

                <h2 className="text-lg font-bold">
                  Platform Management
                </h2>

                <p className="text-sm text-base-content/60 mt-1">
                  Manage the core operations of Care.io.
                </p>

              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                {/* Manage Users */}
                <Link
                  href="/dashboard/manage-user"
                  className="group p-5 rounded-2xl border border-base-300 bg-base-200 hover:border-primary hover:bg-primary/5 transition"
                >

                  <div className="flex items-start justify-between">

                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users
                        size={22}
                        className="text-primary"
                      />
                    </div>

                    <ArrowRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition"
                    />

                  </div>

                  <h3 className="font-bold mt-4">
                    Manage Users
                  </h3>

                  <p className="text-sm text-base-content/60 mt-1">
                    View users, make admin, block or manage accounts.
                  </p>

                </Link>


                {/* Manage Services */}
                <Link
                  href="/dashboard/manageServices"
                  className="group p-5 rounded-2xl border border-base-300 bg-base-200 hover:border-secondary hover:bg-secondary/5 transition"
                >

                  <div className="flex items-start justify-between">

                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <BriefcaseMedical
                        size={22}
                        className="text-secondary"
                      />
                    </div>

                    <ArrowRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition"
                    />

                  </div>

                  <h3 className="font-bold mt-4">
                    Manage Services
                  </h3>

                  <p className="text-sm text-base-content/60 mt-1">
                    Add, update or remove healthcare services.
                  </p>

                </Link>


            


                {/* Messages */}
                <Link
                  href="/dashboard/message"
                  className="group p-5 rounded-2xl border border-base-300 bg-base-200 hover:border-success hover:bg-success/5 transition"
                >

                  <div className="flex items-start justify-between">

                    <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center">
                      <MessageSquare
                        size={22}
                        className="text-success"
                      />
                    </div>

                    <ArrowRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition"
                    />

                  </div>

                  <h3 className="font-bold mt-4">
                    Messages
                  </h3>

                  <p className="text-sm text-base-content/60 mt-1">
                    View and respond to customer inquiries.
                  </p>

                </Link>

              </div>

            </div>

          </div>


          {/* Quick Actions */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">

            <div className="card-body">

              <div className="flex items-center gap-2 mb-4">

                <Activity
                  size={20}
                  className="text-primary"
                />

                <h2 className="text-lg font-bold">
                  Quick Actions
                </h2>

              </div>


              <div className="space-y-3">


                <Link
                  href="/dashboard/manageServices"
                  className="btn btn-primary btn-outline w-full justify-start gap-3"
                >
                  <PlusCircle size={18} />
                  Add New Service
                </Link>


                <Link
                  href="/dashboard/manage-user"
                  className="btn btn-secondary btn-outline w-full justify-start gap-3"
                >
                  <UserRoundCheck size={18} />
                  Manage Users
                </Link>


                <Link
                  href="/dashboard/manageServices"
                  className="btn btn-accent btn-outline w-full justify-start gap-3"
                >
                  <Settings size={18} />
                  Service Settings
                </Link>


                <Link
                  href="/dashboard/message"
                  className="btn btn-ghost border border-base-300 w-full justify-start gap-3"
                >
                  <MessageSquare size={18} />
                  View Messages
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            ADMIN RESPONSIBILITIES
        ================================================= */}

        <div className="card bg-base-100 border border-base-300 shadow-sm mt-6">

          <div className="card-body">

            <div className="flex items-center gap-2 mb-5">

              <ShieldCheck
                size={21}
                className="text-primary"
              />

              <div>

                <h2 className="text-lg font-bold">
                  Admin Responsibilities
                </h2>

                <p className="text-sm text-base-content/60">
                  Core responsibilities of a Care.io administrator.
                </p>

              </div>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">


              <div className="p-4 rounded-2xl bg-base-200">

                <Users
                  size={22}
                  className="text-primary"
                />

                <h3 className="font-semibold mt-3">
                  User Control
                </h3>

                <p className="text-xs text-base-content/60 mt-1">
                  Manage registered users and account roles.
                </p>

              </div>


              <div className="p-4 rounded-2xl bg-base-200">

                <BriefcaseMedical
                  size={22}
                  className="text-secondary"
                />

                <h3 className="font-semibold mt-3">
                  Service Control
                </h3>

                <p className="text-xs text-base-content/60 mt-1">
                  Maintain available healthcare services.
                </p>

              </div>


              <div className="p-4 rounded-2xl bg-base-200">

                <CalendarCheck
                  size={22}
                  className="text-accent"
                />

                <h3 className="font-semibold mt-3">
                  Booking Control
                </h3>

                <p className="text-xs text-base-content/60 mt-1">
                  Monitor customer service bookings.
                </p>

              </div>


              <div className="p-4 rounded-2xl bg-base-200">

                <Ban
                  size={22}
                  className="text-error"
                />

                <h3 className="font-semibold mt-3">
                  Account Safety
                </h3>

                <p className="text-xs text-base-content/60 mt-1">
                  Block suspicious or unwanted accounts.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }


  // =====================================================
  // USER DASHBOARD
  // =====================================================

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-6">


      {/* Welcome */}
      <div className="rounded-3xl bg-base-100 border border-base-300 shadow-sm p-6 sm:p-8 mb-6">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

          <div>

            <div className="flex items-center gap-2 text-primary mb-2">

              <LayoutDashboard size={20} />

              <span className="text-sm font-semibold">
                User Dashboard
              </span>

            </div>

            <h1 className="text-2xl sm:text-3xl font-bold">
              Welcome back, {user.name || "User"} 👋
            </h1>

            <p className="text-base-content/60 mt-2 max-w-xl">
              Manage your healthcare bookings, services and
              profile from one place.
            </p>

          </div>


          {/* User Image */}
          <div className="avatar">

            <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

              {user.image ? (

                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="object-cover"
                />

              ) : (

                <div className="w-full h-full flex items-center justify-center bg-primary/10">

                  <User
                    size={28}
                    className="text-primary"
                  />

                </div>

              )}

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          USER OVERVIEW
      ================================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">


        {/* Bookings */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm text-base-content/60">
                  My Bookings
                </p>

                <h2 className="text-3xl font-bold mt-1">
                  --
                </h2>

              </div>

              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">

                <CalendarCheck
                  size={22}
                  className="text-primary"
                />

              </div>

            </div>

          </div>

        </div>


        {/* Completed */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm text-base-content/60">
                  Completed
                </p>

                <h2 className="text-3xl font-bold mt-1">
                  --
                </h2>

              </div>

              <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center">

                <CheckCircle
                  size={22}
                  className="text-success"
                />

              </div>

            </div>

          </div>

        </div>


        {/* Saved */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm text-base-content/60">
                  Saved Services
                </p>

                <h2 className="text-3xl font-bold mt-1">
                  --
                </h2>

              </div>

              <div className="w-11 h-11 rounded-xl bg-error/10 flex items-center justify-center">

                <Heart
                  size={22}
                  className="text-error"
                />

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          USER FEATURES
      ================================================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


        {/* My Care */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">

          <div className="card-body">

            <div className="flex items-center gap-2 mb-5">

              <BriefcaseMedical
                size={21}
                className="text-primary"
              />

              <div>

                <h2 className="text-lg font-bold">
                  My Care
                </h2>

                <p className="text-sm text-base-content/60">
                  Manage your healthcare activities.
                </p>

              </div>

            </div>


            <div className="space-y-3">


              <Link
                href="/dashboard/my-bookings"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-base-200 hover:bg-primary/5 border border-transparent hover:border-primary/30 transition"
              >

                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">

                  <CalendarCheck
                    size={21}
                    className="text-primary"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="font-semibold">
                    My Bookings
                  </h3>

                  <p className="text-xs text-base-content/60">
                    View and manage your service bookings.
                  </p>

                </div>

                <ArrowRight size={18} />

              </Link>


              <Link
                href="/services"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-base-200 hover:bg-secondary/5 border border-transparent hover:border-secondary/30 transition"
              >

                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">

                  <BriefcaseMedical
                    size={21}
                    className="text-secondary"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="font-semibold">
                    Explore Services
                  </h3>

                  <p className="text-xs text-base-content/60">
                    Find the right care service for your needs.
                  </p>

                </div>

                <ArrowRight size={18} />

              </Link>


              <Link
                href="/dashboard/my-profile"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-base-200 hover:bg-accent/5 border border-transparent hover:border-accent/30 transition"
              >

                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">

                  <User
                    size={21}
                    className="text-accent"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="font-semibold">
                    My Profile
                  </h3>

                  <p className="text-xs text-base-content/60">
                    Update your personal information.
                  </p>

                </div>

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>


        {/* Upcoming */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">

          <div className="card-body">

            <div className="flex items-center gap-2 mb-5">

              <Clock
                size={21}
                className="text-primary"
              />

              <div>

                <h2 className="text-lg font-bold">
                  Upcoming Care
                </h2>

                <p className="text-sm text-base-content/60">
                  Your upcoming service activity.
                </p>

              </div>

            </div>


            {/* Placeholder */}
            <div className="rounded-2xl bg-base-200 border border-dashed border-base-300 p-6 text-center">

              <CalendarCheck
                size={42}
                className="mx-auto text-base-content/30"
              />

              <h3 className="font-semibold mt-3">
                No upcoming booking
              </h3>

              <p className="text-sm text-base-content/50 mt-1">
                Your next scheduled care service will appear here.
              </p>

              <Link
                href="/services"
                className="btn btn-primary btn-sm mt-4"
              >
                Browse Services
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          USER QUICK ACCESS
      ================================================= */}

      <div className="card bg-base-100 border border-base-300 shadow-sm mt-6">

        <div className="card-body">

          <div className="mb-4">

            <h2 className="text-lg font-bold">
              Quick Access
            </h2>

            <p className="text-sm text-base-content/60">
              Frequently used Care.io features.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">


            <Link
              href="/dashboard/my-bookings"
              className="btn btn-primary btn-outline justify-start gap-2"
            >
              <CalendarCheck size={18} />
              My Bookings
            </Link>


            <Link
              href="/services"
              className="btn btn-secondary btn-outline justify-start gap-2"
            >
              <Heart size={18} />
              Services
            </Link>


            <Link
              href="/dashboard/my-profile"
              className="btn btn-accent btn-outline justify-start gap-2"
            >
              <User size={18} />
              My Profile
            </Link>


            <Link
              href="/contact"
              className="btn btn-ghost border border-base-300 justify-start gap-2"
            >
              <MessageSquare size={18} />
              Contact Support
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardPage;

