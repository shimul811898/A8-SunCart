import React from "react";
import Link from "next/link";
import Image from "next/image";
import userBanner from "../../assets/banner.jpg";
import { FaSun } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="max-w-7xl shadow-md bg-white">

            <div className="max-w-6xl mx-auto grid grid-cols-2 p-10 gap-10 ">



                <div className="grid items-center">


                    <h1 className="text-5xl font-bold leading-tight">
                        <span className="block mb-2">
                            Welcome to
                        </span>

                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            SunCart – Summer Essentials Store
                        </span>
                    </h1>

                    <p className="text-[16px] text-gray-500 ">
                        Discover trendy summer outfits, stylish sunglasses,
                        skincare essentials, and beach accessories for your
                        perfect vacation vibe.
                    </p>

                    <div className="flex gap-4">

                        <div>
                            <Link
                                href="/products"
                                className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                            >
                                Shop Now
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/products"
                                className="px-6 py-3 rounded-xl border-2 border-pink-500 text-pink-500 font-semibold hover:bg-gradient-to-r from-red-500 to-pink-500 hover:text-white transition duration-300"
                            >
                                Explore Deals
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="rounded-lg">
                    <Image
                        src={userBanner}
                        alt="Summer Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;