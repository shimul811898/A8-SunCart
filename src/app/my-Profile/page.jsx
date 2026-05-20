"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Spinner } from "@heroui/react";
import { UpdateUserModal } from "../components/shared/UpdateUserModal";


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
            <div className="text-center mx-auto card shadow z-30 ">
              <Avatar  className="mx-auto rounded-full size-30 " >
                <Avatar.Image
                  alt={user?.name || "User"}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                  className="rounded-full size-30 "
                />

                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>
              <p className="font-bold" >{user.name}</p>
              <p  >{user.email}</p>
              <div>
                <UpdateUserModal />
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