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
  ArrowRight,
  PlusCircle,
  Activity,
  UserRoundCheck,
  Ban,
  Target,
  Eye,
  Sparkles,
  CheckCircle,
  Clock,
  HeartPulse,
} from "lucide-react";
import Image from "next/image";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  const user = session?.user;
  const isAdmin = user?.role === "admin";

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
          <Link href="/login" className="btn btn-primary mt-4">
            Login
          </Link>
        </div>
      </div>
    );
  }

  // =====================================================
  // ADMIN DASHBOARD (With Vision, Mission & Goals)
  // =====================================================

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-base-200 p-4 sm:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <ShieldCheck size={26} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-base-content/60 mt-0.5">
                Welcome back, {user.name || "Admin"}. Overviewing Care.xyz platform.
              </p>
            </div>
          </div>
        </div>

        {/* ================= HERO: MISSION & VISION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Our Vision */}
          <div className="card bg-gradient-to-br from-primary/10 via-base-100 to-base-100 border border-primary/20 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center shadow">
                  <Eye size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-primary uppercase">
                    Platform Direction
                  </span>
                  <h2 className="text-xl font-bold">Our Vision</h2>
                </div>
              </div>
              <p className="text-sm text-base-content/80 leading-relaxed mt-2">
                To build Bangladesh’s most trusted and accessible digital care ecosystem, where quality healthcare, elderly care, and domestic assistance are seamlessly available to every family with absolute reliability and safety.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="card bg-gradient-to-br from-secondary/10 via-base-100 to-base-100 border border-secondary/20 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-content flex items-center justify-center shadow">
                  <Target size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-secondary uppercase">
                    Core Commitment
                  </span>
                  <h2 className="text-xl font-bold">Our Mission</h2>
                </div>
              </div>
              <p className="text-sm text-base-content/80 leading-relaxed mt-2">
                Empower caregivers and patients alike by bridging connection gaps with modern technology, maintaining transparent service standards, verifying professional caregivers, and ensuring 100% customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* CORE PLATFORM GOALS / HIGHLIGHTS */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-amber-500" size={20} />
              <h3 className="font-bold text-base">Key Operational Pillars</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-base-200/60">
                <ShieldCheck className="text-primary mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold">Trust & Verification</h4>
                  <p className="text-xs text-base-content/60 mt-0.5">
                    Ensuring all registered care services meet safety & quality protocols.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-base-200/60">
                <HeartPulse className="text-secondary mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold">User Experience</h4>
                  <p className="text-xs text-base-content/60 mt-0.5">
                    Delivering fast, easy booking workflows and transparent communication.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-base-200/60">
                <Users className="text-accent mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold">Community Safety</h4>
                  <p className="text-xs text-base-content/60 mt-0.5">
                    Proactive moderation of platform users and care providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADMIN MAIN AREA (Management & Quick Actions) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Management */}
          <div className="lg:col-span-2 card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <div className="mb-5">
                <h2 className="text-lg font-bold">Platform Management</h2>
                <p className="text-sm text-base-content/60 mt-1">
                  Manage the core operations and services of Care.xyz.
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
                      <Users size={22} className="text-primary" />
                    </div>
                    <ArrowRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition"
                    />
                  </div>
                  <h3 className="font-bold mt-4">Manage Users</h3>
                  <p className="text-sm text-base-content/60 mt-1">
                    View registered users, grant admin access, or block accounts.
                  </p>
                </Link>

                {/* Manage Services */}
                <Link
                  href="/dashboard/manageServices"
                  className="group p-5 rounded-2xl border border-base-300 bg-base-200 hover:border-secondary hover:bg-secondary/5 transition"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <BriefcaseMedical size={22} className="text-secondary" />
                    </div>
                    <ArrowRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition"
                    />
                  </div>
                  <h3 className="font-bold mt-4">Manage Services</h3>
                  <p className="text-sm text-base-content/60 mt-1">
                    Add new healthcare services, update prices or remove services.
                  </p>
                </Link>

                {/* Messages */}
                <Link
                  href="/dashboard/message"
                  className="group p-5 rounded-2xl border border-base-300 bg-base-200 hover:border-success hover:bg-success/5 transition"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center">
                      <MessageSquare size={22} className="text-success" />
                    </div>
                    <ArrowRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition"
                    />
                  </div>
                  <h3 className="font-bold mt-4">Customer Messages</h3>
                  <p className="text-sm text-base-content/60 mt-1">
                    Read feedback and respond to user support inquiries.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-4">
                <Activity size={20} className="text-primary" />
                <h2 className="text-lg font-bold">Quick Actions</h2>
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

        {/* ADMIN RESPONSIBILITIES */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck size={21} className="text-primary" />
              <div>
                <h2 className="text-lg font-bold">Admin Responsibilities</h2>
                <p className="text-sm text-base-content/60">
                  Core duties required for smooth platform operations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-base-200">
                <Users size={22} className="text-primary" />
                <h3 className="font-semibold mt-3">User Control</h3>
                <p className="text-xs text-base-content/60 mt-1">
                  Manage user rights, set admin credentials, and protect accounts.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-base-200">
                <BriefcaseMedical size={22} className="text-secondary" />
                <h3 className="font-semibold mt-3">Service Catalog</h3>
                <p className="text-xs text-base-content/60 mt-1">
                  Maintain accurate service descriptions, pricing, and availability.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-base-200">
                <CalendarCheck size={22} className="text-accent" />
                <h3 className="font-semibold mt-3">Booking Oversight</h3>
                <p className="text-xs text-base-content/60 mt-1">
                  Ensure customer service requests are assigned and completed properly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-base-200">
                <Ban size={22} className="text-error" />
                <h3 className="font-semibold mt-3">System Security</h3>
                <p className="text-xs text-base-content/60 mt-1">
                  Identify suspicious activities and restrict non-compliant accounts.
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
    <div className="min-h-screen bg-base-200 p-4 sm:p-6 space-y-6">
      {/* Welcome Card */}
      <div className="rounded-3xl bg-base-100 border border-base-300 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <LayoutDashboard size={20} />
              <span className="text-sm font-semibold">User Dashboard</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold">
              Welcome back, {user.name || "User"} 👋
            </h1>

            <p className="text-base-content/60 mt-2 max-w-xl">
              Manage your healthcare bookings, explore care services, and update your profile seamlessly.
            </p>
          </div>

          {/* User Image */}
          <div className="avatar">
            <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {user.image ? (
                <Image 
                width={65}
                height={65}
                  src={user.image}
                  alt={user.name || "User"}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <User size={28} className="text-primary" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* USER FEATURES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Care Services */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">
            <div className="flex items-center gap-2 mb-5">
              <BriefcaseMedical size={21} className="text-primary" />
              <div>
                <h2 className="text-lg font-bold">My Care Shortcuts</h2>
                <p className="text-sm text-base-content/60">
                  Quick links for your healthcare activities.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/dashboard/my-bookings"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-base-200 hover:bg-primary/5 border border-transparent hover:border-primary/30 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CalendarCheck size={21} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">My Bookings</h3>
                  <p className="text-xs text-base-content/60">
                    Track status and history of your requested care services.
                  </p>
                </div>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-base-200 hover:bg-secondary/5 border border-transparent hover:border-secondary/30 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <BriefcaseMedical size={21} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Explore All Services</h3>
                  <p className="text-xs text-base-content/60">
                    Find professional caregivers, nurses, and home care.
                  </p>
                </div>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/dashboard/my-profile"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-base-200 hover:bg-accent/5 border border-transparent hover:border-accent/30 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <User size={21} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Account Profile</h3>
                  <p className="text-xs text-base-content/60">
                    View and update your contact information and photo.
                  </p>
                </div>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* User Guidance / Information */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">
            <div className="flex items-center gap-2 mb-5">
              <Clock size={21} className="text-primary" />
              <div>
                <h2 className="text-lg font-bold">Booking Instructions</h2>
                <p className="text-sm text-base-content/60">
                  How our care service works.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Choose Your Service</h4>
                  <p className="text-xs text-base-content/60">
                    Browse from our list of verified healthcare and home care packages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Book Now Button for view Details and CheckOut</h4>
                  <p className="text-xs text-base-content/60">
                    Fill in your address details and confirm booking with secure payment.
                    [online payment only]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Receive Care</h4>
                  <p className="text-xs text-base-content/60">
                    Our assigned caregiver will arrive at your destination on schedule.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/services" className="btn btn-primary btn-sm w-full">
                  Book a Caregiver Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK ACCESS */}
      <div className="card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body">
          <div className="mb-4">
            <h2 className="text-lg font-bold">Quick Navigation</h2>
            <p className="text-sm text-base-content/60">
              Direct access to key pages.
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
              Browse Services
            </Link>

            <Link
              href="/dashboard/my-profile"
              className="btn btn-accent btn-outline justify-start gap-2"
            >
              <User size={18} />
              Edit Profile
            </Link>

            <Link
              href="/contact"
              className="btn btn-ghost border border-base-300 justify-start gap-2"
            >
              <MessageSquare size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;