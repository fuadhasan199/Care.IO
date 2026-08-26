"use client";

import React from "react";
import { ShieldCheck, Ban, Users } from "lucide-react";

const ManageUser = () => {
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

        {/* Table Header */}
        <div className="px-6 py-4 border-b border-base-300">
          <h2 className="text-lg font-semibold">
            User List
          </h2>

          <p className="text-sm text-base-content/60">
            Review and manage all registered accounts.
          </p>
        </div>

        {/* Table */}
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

             

              <tr>
                <td>01</td>

                <td>
                  <div className="font-semibold">
                    User Name
                  </div>
                </td>

                <td className="text-base-content/70">
                  user@email.com
                </td>

                <td>
                  <span className="badge badge-ghost">
                    User
                  </span>
                </td>

                <td>
                  <span className="badge badge-success">
                    Active
                  </span>
                </td>

                <td>
                  <div className="flex justify-end gap-2">

                    {/* Make Admin */}
                    <button className="btn btn-sm btn-outline btn-primary">
                      <ShieldCheck size={16} />
                      Make Admin
                    </button>

                    {/* Block */}
                    <button className="btn btn-sm btn-outline btn-error">
                      <Ban size={16} />
                      Block
                    </button>

                  </div>
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
};

export default ManageUser;