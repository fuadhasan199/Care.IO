"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { User, Mail, BadgeCheck, Camera, Pencil } from "lucide-react";

export default function myProfile() {
  const { data: session, status } = useSession();

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
 
  return (
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
            <label
              tabIndex={0}
              className="btn btn-primary px-8"
            >
              Update Profile
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-60 p-2 shadow-xl"
            >
              <li>
                <button>
                  <Camera size={18} />
                  Update Picture
                </button>
              </li>

              <li>
                <button>
                  <Pencil size={18} />
                  Update Name
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}