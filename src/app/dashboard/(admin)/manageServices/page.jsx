
"use client";

import React, { useEffect, useState } from "react";
import { Package, Pencil, Trash2, Plus, X } from "lucide-react";
import Swal from "sweetalert2";

import {
  getAllServices,
  addService,
  updateService,
  deleteService,
} from "@/app/actions/server/service";

import { updateImage } from "@/app/lib/updateUser";
import Image from "next/image";

const emptyForm = {
  id: "",
  title: "",
  category: "",
  pricePerDay: "",
  rating: "",
  shortDescription: "",
  description: "",
  features: "",
  coveredServices: "",
};

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState(emptyForm);

  // Image states
  const [imageFile, setImageFile] = useState(null);
  const [existingImage, setExistingImage] = useState("");

  const [saving, setSaving] = useState(false);

  
  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);

      const data = await getAllServices();

      setServices(data);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Services load kora jay nai.",
      });
    } finally {
      setLoading(false);
    }
  };


  // Open Add Modal
  
  const handleOpenAdd = () => {
    setEditingId(null);

    setForm(emptyForm);

    setImageFile(null);
    setExistingImage("");

    setShowModal(true);
  };


  // Open Edit Modal
  
  const handleOpenEdit = (service) => {
    setEditingId(service._id);

    setForm({
      id: service.id || "",
      title: service.title || "",
      category: service.category || "",
      pricePerDay: service.pricePerDay || "",
      rating: service.rating || "",
      shortDescription: service.shortDescription || "",
      description: service.description || "",
      features: (service.features || []).join(", "),
      coveredServices: (service.coveredServices || []).join(", "),
    });

    
    setExistingImage(service.image || "");

    setImageFile(null);

    setShowModal(true);
  };

  const handleSave = async () => {
    setSaving(true);

    try {
      let imageUrl = existingImage;

    
      if (imageFile) {
        const formData = new FormData();

        formData.append("image", imageFile);

        const uploadResult = await updateImage(formData);

        if (!uploadResult.success) {
          throw new Error(
            uploadResult.message || "Image upload failed"
          );
        }

        
        imageUrl = uploadResult.url;
      }

      if (!imageUrl) {
        Swal.fire({
          icon: "warning",
          title: "Image Required",
          text: "Please select a service image.",
        });

        setSaving(false);
        return;
      }

     
      const payload = {
        ...form,
        image: imageUrl,
      };

    
      if (editingId) {
        await updateService(editingId, payload);

        Swal.fire({
          icon: "success",
          title: "Service Updated!",
          timer: 1500,
          showConfirmButton: false,
        });
      }

      else {
        await addService(payload);

        Swal.fire({
          icon: "success",
          title: "Service Added!",
          timer: 1500,
          showConfirmButton: false,
        });
      }

      // Close modal
      setShowModal(false);

     
      setImageFile(null);
      setExistingImage("");

      // Reload services
      await loadServices();

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Service save kora jay nai.",
      });
    } finally {
      setSaving(false);
    }
  };

 
  // Delete Service

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "Ei service ta permanently delete hoye jabe.",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteService(id);

      setServices((prev) =>
        prev.filter((service) => service._id !== id)
      );

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Service successfully deleted.",
        timer: 1200,
        showConfirmButton: false,
      });

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Delete Failed!",
        text: "Service delete kora jay nai.",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="rounded-2xl bg-base-200 p-6 border border-base-300 flex items-center justify-between flex-wrap gap-4">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
            <Package
              className="text-primary"
              size={24}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Manage Services
            </h1>

            <p className="text-sm text-base-content/60 mt-1">
              Add, update, or remove services offered on the platform.
            </p>
          </div>

        </div>

        <button
          onClick={handleOpenAdd}
          className="btn btn-primary btn-sm gap-1"
        >
          <Plus size={16} />
          Add Service
        </button>

      </div>

      
          Service Table
  
      <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm overflow-hidden">

        <div className="px-6 py-4 border-b border-base-300">

          <h2 className="text-lg font-semibold">
            Service List
          </h2>

          <p className="text-sm text-base-content/60">
            All registered services.
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="table">

            <thead>
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price / Day</th>
                <th className="text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>

              {services.map((service, index) => (

                <tr key={service._id}>

                  <td>
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td className="font-semibold">
                    {service.title}
                  </td>

                  <td>
                    <span className="badge badge-ghost">
                      {service.category}
                    </span>
                  </td>

                  <td>
                    ৳{service.pricePerDay}
                  </td>

                  <td>

                    <div className="flex justify-end gap-2">

                      {/* Update */}
                      <button
                        onClick={() =>
                          handleOpenEdit(service)
                        }
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        <Pencil size={16} />
                        Update
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          handleDelete(service._id)
                        }
                        className="btn btn-sm btn-outline btn-error"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

              {/* Empty */}
              {services.length === 0 && (

                <tr>

                  <td
                    colSpan={5}
                    className="text-center py-8 text-base-content/60"
                  >
                    No services added yet.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    
         
     
      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

          <div className="bg-base-100 rounded-2xl p-6 w-full max-w-2xl space-y-4 max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between">

              <h3 className="font-bold text-lg">
                {editingId
                  ? "Update Service"
                  : "Add New Service"}
              </h3>

              <button
                onClick={() => setShowModal(false)}
                className="btn btn-sm btn-ghost btn-circle"
              >
                <X size={20} />
              </button>

            </div>

        
                Form Grid
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Service ID */}
              <div>

                <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                  Service ID (slug)
                </label>

                <input
                  type="text"
                  value={form.id}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      id: e.target.value,
                    })
                  }
                  placeholder="toddler-daycare-at-home"
                  className="input input-bordered w-full"
                />

              </div>

              {/* Title */}
              <div>

                <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                  Title
                </label>

                <input
                  type="text"
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value,
                    })
                  }
                  placeholder="Active Toddler Babysitting"
                  className="input input-bordered w-full"
                />

              </div>

              {/* Category */}
              <div>

                <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                  Category
                </label>

                <input
                  type="text"
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  placeholder="Baby Care"
                  className="input input-bordered w-full"
                />

              </div>

              {/* Price */}
              <div>

                <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                  Price Per Day (৳)
                </label>

                <input
                  type="number"
                  value={form.pricePerDay}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      pricePerDay: e.target.value,
                    })
                  }
                  placeholder="900"
                  className="input input-bordered w-full"
                />

              </div>

              {/* Rating */}
              <div>

                <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                  Rating
                </label>

                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={form.rating}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      rating: e.target.value,
                    })
                  }
                  placeholder="4.8"
                  className="input input-bordered w-full"
                />

              </div>

            {/* image upload */}
             
              <div>

                <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                  Service Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setImageFile(e.target.files[0])
                  }
                  disabled={saving}
                  className="file-input file-input-bordered w-full"
                />

                {/* Existing Image */}
                {existingImage && !imageFile && (

                  <div className="mt-2">

                    <p className="text-xs text-base-content/50 mb-1">
                      Current Image
                    </p>

                    <Image 
                    width={300}
                    height={300}
                      src={existingImage}
                      alt="Current service"
                      className="w-20 h-20 object-cover rounded-lg border border-base-300"
                    />

                  </div>

                )}

                {/* New Image Preview */}
                {imageFile && (

                  <div className="mt-2">

                    <p className="text-xs text-base-content/50 mb-1">
                      New Image
                    </p>

                    <Image
                      width={300}
                      height={300}
                      src={URL.createObjectURL(imageFile)}
                      alt="New service"
                      className="w-20 h-20 object-cover rounded-lg border border-primary"
                    />

                  </div>

                )}

              </div>

            </div>

       
            <div>

              <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                Short Description
              </label>

              <textarea
                rows={2}
                value={form.shortDescription}
                onChange={(e) =>
                  setForm({
                    ...form,
                    shortDescription: e.target.value,
                  })
                }
                placeholder="Fun, engaging, and safe home babysitting..."
                className="textarea textarea-bordered w-full"
              />

            </div>

            <div>

              <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                Full Description
              </label>

              <textarea
                rows={3}
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                placeholder="Keep your toddlers happy, active, and safe..."
                className="textarea textarea-bordered w-full"
              />

            </div>

            <div>

              <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                Features (comma separated)
              </label>

              <input
                type="text"
                value={form.features}
                onChange={(e) =>
                  setForm({
                    ...form,
                    features: e.target.value,
                  })
                }
                placeholder="Early Childhood Trained, Creative Activities, Flexible Hours"
                className="input input-bordered w-full"
              />

            </div>

            <div>

              <label className="block text-xs font-semibold uppercase text-base-content/60 mb-1">
                Covered Services 
              </label>

              <input
                type="text"
                value={form.coveredServices}
                onChange={(e) =>
                  setForm({
                    ...form,
                    coveredServices: e.target.value,
                  })
                }
                placeholder="Meal Preparation & Feeding, Interactive Storytelling"
                className="input input-bordered w-full"
              />

            </div>

                {/* Buttons */}
           
            <div className="flex justify-end gap-2 pt-2">

              <button
                onClick={() => setShowModal(false)}
                disabled={saving}
                className="btn btn-ghost btn-sm"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                disabled={saving}
                className="btn btn-primary btn-sm"
              >
                {saving ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Saving...
                  </>
                ) : (
                  "Save Service"
                )}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ManageServices;

