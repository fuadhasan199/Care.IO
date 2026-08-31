"use client";

import React, { useState } from "react";
import { Package, Pencil, Trash2, Star, Plus, X } from "lucide-react";

const dummyServices = [
  {
    _id: "1",
    id: "toddler-daycare-at-home",
    title: "Active Toddler Babysitting",
    category: "Baby Care",
    image: "https://i.ibb.co.com/wZ0YGNyd/photo-1685362158423-abf004b858d2-q-80-w-.jpg",
    shortDescription: "Fun, engaging, and safe home babysitting for active toddlers aged 1 to 3 years.",
    description: "Keep your toddlers happy, active, and safe while you are busy or at work.",
    pricePerDay: 900,
    rating: 4.8,
    features: ["Early Childhood Trained", "Creative Activities", "Flexible Hours"],
    coveredServices: [
      "Meal Preparation & Feeding",
      "Interactive Storytelling",
      "Safe Play Monitoring",
      "Nap Time Management",
    ],
  },
];

const ManageServices = () => {
  const [services, setServices] = useState(dummyServices);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleDelete = (id) => {
    setServices((prev) => prev.filter((s) => s._id !== id));
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="rounded-2xl bg-base-200 p-6 border border-base-300 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
            <Package className="text-primary" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Manage Services</h1>
            <p className="text-sm text-base-content/60 mt-1">
              Add, update, or remove services offered on the platform.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="btn btn-primary btn-sm gap-1"
        >
          <Plus size={16} />
          Add Service
        </button>
      </div>

      {/* Service Table */}
      <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-base-300">
          <h2 className="text-lg font-semibold">Service List</h2>
          <p className="text-sm text-base-content/60">All registered services.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price / Day</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, index) => (
                <tr key={s._id}>
                  <td>{String(index + 1).padStart(2, "0")}</td>
                  <td className="font-semibold">{s.title}</td>
                  <td>
                    <span className="badge badge-ghost">{s.category}</span>
                  </td>
                  <td>৳{s.pricePerDay}</td>
                  <td>
                    <div className="flex justify-end gap-2">
                      <button className="btn btn-sm btn-outline btn-primary">
                        <Pencil size={16} />
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(s._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {services.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-base-content/60">
                    No services added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Added Services (Card Preview Section) */}
      <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-1">Added Services</h2>
        <p className="text-sm text-base-content/60 mb-5">
          Full preview of each service as it appears to users.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s._id}
              className="rounded-2xl border border-base-300 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 badge badge-primary">
                  {s.category}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base">{s.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-amber-500">
                    <Star size={14} fill="currentColor" />
                    {s.rating}
                  </div>
                </div>

                <p className="text-sm text-base-content/60 line-clamp-2">
                  {s.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.features.map((f, i) => (
                    <span key={i} className="badge badge-ghost badge-sm">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-base-300 mt-2">
                  <p className="text-xs font-semibold uppercase text-base-content/50 mb-1">
                    Covered Services
                  </p>
                  <ul className="text-xs text-base-content/70 space-y-0.5 list-disc list-inside">
                    {s.coveredServices.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="font-bold text-primary">
                    ৳{s.pricePerDay}/day
                  </span>
               
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Service Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-base-100 rounded-2xl p-6 w-full max-w-lg space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Add New Service</h3>
              <button onClick={() => setShowAddModal(false)}>
                <X size={20} />
              </button>
            </div>

            <input type="text" placeholder="Title" className="input input-bordered w-full" />
            <input type="text" placeholder="Category" className="input input-bordered w-full" />
            <input type="file" className="file-input file-input-bordered w-full" />
            <textarea placeholder="Short Description" rows={2} className="textarea textarea-bordered w-full" />
            <textarea placeholder="Full Description" rows={3} className="textarea textarea-bordered w-full" />
            <input type="number" placeholder="Price per day" className="input input-bordered w-full" />
            <input type="text" placeholder="Features (comma separated)" className="input input-bordered w-full" />
            <input type="text" placeholder="Covered Services (comma separated)" className="input input-bordered w-full" />

            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setShowAddModal(false)} className="btn btn-ghost btn-sm">
                Cancel
              </button>
              <button className="btn btn-primary btn-sm">Save Service</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageServices;