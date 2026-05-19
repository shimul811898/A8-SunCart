import React from "react";
import Link from "next/link";
import Image from "next/image";
import userAvatar from "../../assets/Avater.jpg";
import { FaSun } from "react-icons/fa";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="max-w-7xl shadow-md bg-white z-40">
      <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-y-0 space-y-4 px-6 py-5">


        <div>
          <div className="flex items-center gap-2 text-2xl font-extrabold text-orange-500">
            <FaSun />
            <span  className="bg-gradient-to-r from-orange-500 via-amber-350 to-orange-300 bg-clip-text text-transparent">SunCart</span>
          </div>
        </div>


        <ul className="flex items-center gap-6 font-medium text-gray-700 ">
          <li>
            <NavLink href="/">
              Home
            </NavLink>
          </li>


          <li>
            <NavLink href="/products">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink href="/my-profile" >
              My Profile
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Image
            src={userAvatar}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full border"
          />
          <Link
            href="/login"
            className="btn text-white px-4 py-2 rounded-lg border-0 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
            Login
          </Link>
          <Link
            href="/signup"
            className="btn text-white px-4 py-2 rounded-lg border-0 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
            Register
          </Link>

        </div>

      </nav>
    </div>
  );
};

export default Navbar;