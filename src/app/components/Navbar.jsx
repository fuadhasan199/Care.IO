"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; 
import React, { useState } from 'react';

const Navbar = () => { 
  const router=useRouter() 
  const pathname=usePathname()
  const {data:session,status}=useSession()
  const [search,setSearch]=useState("")
    return (
    <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-lg shadow-sm">

  <div className="navbar max-w-7xl mx-auto px-4">

    
    <div className="navbar-start">

     
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-64 rounded-2xl bg-base-100 p-3 shadow-xl border border-base-300"
        >
          <li>
            <button> 
              

              <Link href="/" className={pathname === "/" ? "text-primary font-bold " : ""}>
              Home</Link>
            </button>
          </li>

          <li>
            <button>
              <Link href="/services" className={pathname === "/services" ? "text-primary font-bold " : ""}>
                Services
              </Link>
            </button>
          </li>


          <li>
            <button>
              <Link href="/contact" className={pathname === "/contact" ? "text-primary font-bold " : ""}>
                Contact
              </Link>
            </button>
          </li> 

   <li>
            <button>
              <Link href="/dashboard" className={pathname === "/dashboard" ? "text-primary font-bold " : ""}>
                Dashboard
              </Link>
            </button>
          </li> 



          {status === "loading" ? null : session ? (
  <li>
    <button onClick={() => signOut({ callbackUrl: "/" })}>
      Logout
    </button>
  </li>
) : (
  <li>
    <Link href="/login">Login</Link>
  </li>
)}
        </ul>
      </div>

      {/* Logo */}
      <div className=""> 
         <Link href="/">  
         <Image src="/icon2.png"alt="Logo" width={115} height={80} className="rounded-full" />
         </Link>
      </div>
    </div>

    
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal gap-2 rounded-full bg-base-200 px-3 py-2">

        <li>
          <button className="rounded-full">
            <Link href="/" className={pathname === "/" ? "text-primary font-bold " : ""}>
              Home
            </Link>
          </button>
        </li>
          <li>
          <button className="rounded-full">
            <Link href="/services" className={pathname === "/services" ? "text-primary font-bold " : ""}>
              Services
            </Link>
          </button>
        </li> 

         <li>
            <button className="rounded-full">
              <Link href="/contact" className={pathname === "/contact" ? "text-primary font-bold " : ""}>
                Contact
              </Link>
            </button>
        </li> 

           <li>
            <button>
              <Link href="/dashboard" className={pathname === "/dashboard" ? "text-primary font-bold " : ""}>
                Dashboard
              </Link>
            </button>
          </li>

      </ul>
    </div>

    
    <form className="navbar-end gap-2" onSubmit={(e)=>{
          e.preventDefault()
          if(search.trim() ==="") return 
          router.push(`/services?search=${encodeURIComponent(search)}`)
    }}>

      <label className="input input-bordered rounded-full flex items-center gap-2 w-40 md:w-56">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="Sick, Elderly And Baby Care "
          value={search} 
          onChange={(e)=>setSearch(e.target.value)}
          />

      </label>

       <div className="flex items-center gap-3">
        
        {status === "loading" ? null : session ? (
          <>
            <span className="hidden md:block font-medium">
              {session.user?.name || session.user?.email}
            </span>

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn btn-error rounded-full px-6 hidden sm:flex"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="btn btn-primary rounded-full px-6 hidden sm:flex"
          >
            Login
          </Link>
        )}
      </div>

    </form>

  </div>

</div>
    );
};

export default Navbar;