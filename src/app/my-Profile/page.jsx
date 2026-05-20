"use client";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import defaultAvatar from "@/app/assets/Avater.jpg";
import LoginImage from "@/app/assets/Login.jpg";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;


  return (
    <div>
      <div>
        <h1 className="bg-gradient-to-r from-orange-500 via-amber-350 to-orange-300 bg-clip-text text-transparent text-center font-bold py-8 text-4xl " >Your Profile Info</h1>
      </div>
      <div className="flex items-center justify-center h-screen">
        {isPending ? (
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted">Large</span>
          </div>
        ) : user ? (
          <div className="flex items-center gap-4">
            <div className="text-start">
              <Image
                src={LoginImage}
                alt="LoginImage"
                width={200}
                height={200}
                className="rounded-full border mx-auto "
              />
              <div className="pl-10 mt-5 space-y-3">
                <p className=" font-bold text-[16px]" >Name: {user.name}</p>
                <p className=" font-bold text-[16px]" >Email: {user.email}</p>
                <p className=" font-bold text-[16px]" >Address : Dhaka,Bangladesh</p>
                <p className=" font-bold text-[16px]" >Phone-Number : 1234567890</p>
              </div>

            </div>

          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={defaultAvatar}
                alt="User Avatar"
                width={100}
                height={100}
                className="rounded-full border mx-auto "
              />
            </div>
            <div className="text-center mt-5 space-y-3">
              <Link
                href="/login"
                className="w-full px-6 mt-4 text-center py-2 rounded-xl bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold hover:from-orange-500 hover:to-yellow-600 transition"            >
                Login Your Id
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;