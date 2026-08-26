"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, Ban, CheckCircle, Users } from "lucide-react";
import Swal from "sweetalert2";
import {
  getAllUsers,
  makeAdmin,
  toggleUserStatus,
} from "@/app/actions/server/admin";

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  // Make Admin
  const handleMakeAdmin = async (id, name) => {
    const result = await Swal.fire({
      title: "Make Admin?",
      text: `Are you sure you want to make ${name} an admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Make Admin",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
    });

    if (!result.isConfirmed) return;

    await makeAdmin(id);

    setUsers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, role: "admin" } : user
      )
    );

    Swal.fire({
      title: "Success!",
      text: `${name} is now an admin.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Block / Unblock
  const handleToggleStatus = async (id, currentStatus, name) => {
    const isBlocking = currentStatus === "active";

    const result = await Swal.fire({
      title: isBlocking ? "Block User?" : "Unblock User?",
      text: isBlocking
        ? `Are you sure you want to block ${name}?`
        : `Are you sure you want to unblock ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: isBlocking ? "Yes, Block" : "Yes, Unblock",
      cancelButtonText: "Cancel",
      confirmButtonColor: isBlocking ? "#d33" : "#3085d6",
    });

    if (!result.isConfirmed) return;

    const res = await toggleUserStatus(id, currentStatus);

    setUsers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, status: res.status } : user
      )
    );

    Swal.fire({
      title: "Success!",
      text: isBlocking
        ? `${name} has been blocked.`
        : `${name} has been unblocked.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="rounded-2xl bg-base-200 p-6 border border-base-300">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
            <Users className="text-primary" size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Manage Users
            </h1>

            <p className="text-sm text-base-content/60 mt-1">
              Manage registered users, update their roles, and control
              account access from one place.
            </p>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm overflow-hidden">

        <div className="px-6 py-4 border-b border-base-300">
          <h2 className="text-lg font-semibold">
            User List
          </h2>

          <p className="text-sm text-base-content/60">
            Review and manage all registered accounts.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table">

            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>

                  <td>
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td>
                    <div className="font-semibold">
                      {user.name}
                    </div>
                  </td>

                  <td className="text-base-content/70">
                    {user.email}
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        user.role === "admin"
                          ? "badge-primary"
                          : "badge-ghost"
                      }`}
                    >
                      {user.role === "admin" ? "Admin" : "User"}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        user.status === "active"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {user.status === "active"
                        ? "Active"
                        : "Blocked"}
                    </span>
                  </td>

                  <td>
                    <div className="flex justify-end gap-2">

                      {/* Make Admin */}
                      {user.role !== "admin" && (
                        <button
                          onClick={() =>
                            handleMakeAdmin(user._id, user.name)
                          }
                          className="btn btn-sm btn-outline btn-primary"
                        >
                          <ShieldCheck size={16} />
                          Make Admin
                        </button>
                      )}

                      {/* Block / Unblock */}
                      <button
                        onClick={() =>
                          handleToggleStatus(
                            user._id,
                            user.status,
                            user.name
                          )
                        }
                        className={`btn btn-sm btn-outline ${
                          user.status === "active"
                            ? "btn-error"
                            : "btn-success"
                        }`}
                      >
                        {user.status === "active" ? (
                          <Ban size={16} />
                        ) : (
                          <CheckCircle size={16} />
                        )}

                        {user.status === "active"
                          ? "Block"
                          : "Unblock"}
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersPage;