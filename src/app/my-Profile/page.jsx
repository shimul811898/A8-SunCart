"use client";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import LoginImage from "@/app/assets/Login.jpg";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;


  return (
    <div>
      <div className="flex items-center justify-center space-y-6 ">
        {isPending ? (
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted">Large</span>
          </div>
        ) : user ? (
          <div>
            <div>
              <h1 className="bg-gradient-to-r from-orange-500 via-amber-350 to-orange-300 bg-clip-text text-transparent text-center font-bold py-8 text-4xl " >Your Profile Info</h1>
            </div>
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
          </div>
        ) : (
          <div>
            <div className="max-w-6xl mx-auto px-4 mt-10 text-center text-red-500 font-bold">
              Page not found
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;