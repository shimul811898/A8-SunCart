"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FiShoppingBag } from "react-icons/fi";

export default function BuyButton() {
    const router = useRouter();

    const handleBuy = () => {
        toast("Purchase Successful", {
            icon: <FiShoppingBag className="text-green-500 text-xl" />,
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#ffff",
            },
        });

        setTimeout(() => {
            router.push("/");
        }, 1500);
    };

    return (
        <button
            onClick={handleBuy}
            className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
        >
            Buy Now
        </button>
    );
}