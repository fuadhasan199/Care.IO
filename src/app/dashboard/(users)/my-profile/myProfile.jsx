"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { User, Mail, BadgeCheck, Camera, Pencil } from "lucide-react";
import { useState } from "react";
import { updateImage, updateUserImage, updateUserName } from "@/app/lib/updateUser";

export default function myProfile() {
  const { data: session, status, update } = useSession();
  const [uploading, setUploading] = useState(false);
  const [newName, setNewName] = useState("");

  if (status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-xl font-semibold">
          Please login to view your profile.
        </h2>
      </div>
    );
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    const uploadResult = await updateImage(formData);

    if (uploadResult.success) {
      await updateUserImage(session.user.id, uploadResult.url);
      await update({ image: uploadResult.url });
      
    } else {
      alert(uploadResult.message);
    }
    setUploading(false);
  };

  const handleNameUpdate = async () => {
    if (!newName.trim()) return;
    await updateUserName(session.user.id, newName);
    await update({ name: newName });
   
  };

  return (
    <>
      <section className=" bg-base-200 flex justify-center items-center px-3 py-10">
        <div className="card bg-base-100 shadow-2xl w-full max-w-md">
          <div className="card-body items-center text-center">
            {/* Profile Image */}
            <div className="avatar">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <Image
                  src={
                    session.user.image ||
                    "https://i.ibb.co/7QpKsCX/default-avatar.png"
                  }
                  alt="Profile"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold mt-5 flex items-center gap-2">
              <User size={22} />
              {session.user.name}
            </h2>

            {/* Email */}
            <p className="text-base-content/70 flex items-center gap-2">
              <Mail size={18} />
              {session.user.email}
            </p>

            {/* User ID */}
            <div className="badge badge-primary badge-outline mt-2 px-4 py-4 flex gap-2">
              <BadgeCheck size={16} />
              ID : {session.user.id}
            </div>

            {/* Update Button */}
            <div className="dropdown dropdown-top mt-8">
              <label tabIndex={0} className="btn btn-primary px-8">
                Update Profile
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-60 p-2 shadow-xl"
              >
                <li>
                  <button
                    onClick={() =>
                      document.getElementById("update_name_modal").showModal()
                    }
                  >
                    <Pencil size={18} />
                    Update Name
                  </button>
                </li>

                <li>
                  <button
                    onClick={() =>
                      document.getElementById("update_image_modal").showModal()
                    }
                  >
                    <Camera size={18} />
                    Update Picture
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <dialog id="update_name_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-2xl font-bold mb-5">Update Your Name</h3>

          <input
            type="text"
            defaultValue={session?.user?.name}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter your new name"
            className="input input-bordered w-full"
          />

          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleNameUpdate}>
              Save Changes
            </button>

            <form method="dialog">
              <button className="btn btn-outline">Cancel</button>
            </form>
          </div>
        </div> 
      </dialog>

      <dialog id="update_image_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-2xl font-bold mb-5">Update Profile Picture</h3>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="file-input file-input-bordered w-full"
          />

          {uploading && <span className="loading loading-spinner mt-3"></span>}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}