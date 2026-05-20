"use client"
import { Spinner } from "@heroui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import userAvatar from "../../assets/Avater.jpg";
import LoginImage from "../../assets/Login.jpg";
import { FaSun } from "react-icons/fa";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user, "user")

  return (
    <div className="max-w-7xl shadow-md bg-white z-40">
      <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-y-0 space-y-4 px-6 py-5">


        <div>
          <div className="flex items-center gap-2 text-2xl font-extrabold text-orange-500">
            <FaSun />
            <span className="bg-gradient-to-r from-orange-500 via-amber-350 to-orange-300 bg-clip-text text-transparent">SunCart</span>
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

        {isPending ? (
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted">Large</span>
          </div>
        ) : user ? (
          <div className="flex items-center gap-4">
          <div className="text-center">
             <Image
              src={LoginImage}
              alt="LoginImage"
              width={30}
              height={40}
              className="rounded-full border mx-auto "
            />
            <p className="text-gray-400 font-bold text-[16px]" >{user.name}</p>
          </div>

            <button
              className="btn text-white px-4 py-2 rounded-lg border-0 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
             onClick={async() => await authClient.signOut()} >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
             <Image
              src={userAvatar}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full border mx-auto "
            />
            <Link
              href="/login"
              className="btn text-white px-4 py-2 rounded-lg border-0 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="btn text-white px-4 py-2 rounded-lg border-0 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
            >
              Register
            </Link>
          </div>
        )}



      </nav>
    </div>
  );
};

export default Navbar;