import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
      <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-lg shadow-sm">

  <div className="navbar max-w-7xl mx-auto px-4">

    {/* Left */}
    <div className="navbar-start">

      {/* Mobile Menu */}
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
            <button>Home</button>
          </li>

          <li>
          <button>Services</button>
          </li>

          <li>
            <button>About</button>
          </li>

          <li>
            <button>Contact</button>
          </li> 
           <li>
            <button>Login</button>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className="">
         <Image src="/icon2.png"alt="Logo" width={115} height={80} className="rounded-full" />
      </div>
    </div>

    {/* Desktop Menu */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal gap-2 rounded-full bg-base-200 px-3 py-2">

        <li>
          <button className="rounded-full">Home</button>
        </li>

        <li>
            <button className="rounded-full">Services</button>
        </li>

        <li>
          <button className="rounded-full">About</button>
        </li>

        <li>
          <button className="rounded-full">Contact</button>
        </li>

      </ul>
    </div>

    {/* Right */}
    <div className="navbar-end gap-2">

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
          placeholder="Search..."
        />

      </label>

      <button className="btn btn-primary rounded-full px-6 hidden sm:flex">
        Login
      </button>

    </div>

  </div>

</div>
    );
};

export default Navbar;