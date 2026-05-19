import Google from "@/app/assets/Google.jpg";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <fieldset className="bg-white shadow-2xl rounded-2xl w-full max-w-sm  p-6 space-y-4">


                <div className="text-center space-y-1">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-amber-400 to-orange-300 bg-clip-text text-transparent">
                        SunCart
                    </h1>
                    <p className="text-sm text-gray-600 font-medium">
                        Login to your account
                    </p>
                </div>


                <div >
                    <label className="text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="input w-full border-none rounded-xl shadow"
                        placeholder="Email"

                    />
                </div>


                <div>
                    <label className="text-sm font-medium">Password</label>
                    <input
                        type="password"
                        className="input w-full border-none rounded-xl shadow"
                        placeholder="Password"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </p>
                </div>


                <button className="w-full text-white py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 transition">
                    Login
                </button>


                <div className="flex items-center gap-3">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-xs text-gray-500">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>


                <button className="w-full z-50 flex items-center rounded-xl shadow justify-center gap-2   py-2 hover:bg-gray-100 transition">
                    <Image src={Google} alt="Google" width={20} height={20} />
                    <span className="text-sm font-medium">Login with Google</span>
                </button>

                <div className="font-bold text-center" >
                    <p>New here? <Link
            href="/signup"
            className="hover:underline hover:text-blue-500 ">
            Create an account
          </Link> </p>
                </div>

            </fieldset>
        </div>
    );
};