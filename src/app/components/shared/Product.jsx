import Card from "../Card";
import { Droplets, Sun, Apple, Sparkles, Moon, Hand } from "lucide-react";
const Product = async () => {
  const res = await fetch(
    "https://a8-sun-cart-teal.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const photos = await res.json();
  const topPhotos = photos.slice(0, 6);

  return (
    <div className="mt-10 mx-auto max-w-6xl px-4">


      <div className="flex flex-col items-center text-center my-10 font-sans">

        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-sm font-semibold mb-4 shadow-sm border border-amber-100">
          <span>☀️</span>
          <span>Limited Time</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 select-none">
          <span className="text-black">Summer</span>
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent ml-2">
            Sale
          </span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl font-normal max-w-xl px-4">
          Beat the heat with our hottest deals and exclusive discounts!
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {topPhotos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}

      </div>

      <div className="max-w-7xl" >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-10">


          <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl font-bold mb-3">
              50% OFF Summer Sale
            </h2>

            <p className="text-lg opacity-90 mb-5">
              Grab your favorite skincare products at half price.
            </p>

            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Shop Now
            </button>
          </div>


          <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl font-bold mb-3">
              Hot Deals 🔥
            </h2>

            <p className="text-lg opacity-90 mb-5">
              Limited-time offers on trending skincare essentials.
            </p>

            <button className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore Deals
            </button>
          </div>

        </div>
      </div>

      <div>
        <div className="py-5 text-center ">

          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-8">
            <span className="text-yellow-500 text-2xl">💡</span>
            <p className="text-xl font-semibold text-gray-800">
              Expert Advice
            </p>
          </div>
          <h1 className="text-5xl font-extrabold">
            <span className="text-black">SkinCare</span>
            <span className="text-pink-500">Tips</span>
          </h1>
          <p className="text-gray-600 text-[16px] md:text-3xl mt-6 max-w-4xl mx-auto">
            Essential skincare guidelines for healthy, glowing, and beautiful skin every day.
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

          <div className="bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition">
            <Droplets className="text-blue-500 mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-3">Hydration</h2>
            <p className="text-gray-600">
              Drink plenty of water daily and use a hydrating moisturizer to keep your skin soft and healthy.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition">
            <Sun className="text-yellow-500 mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-3">Use Sunscreen</h2>
            <p className="text-gray-600">
              Apply sunscreen every day to protect your skin from harmful UV rays and prevent premature aging.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition">
            <Apple className="text-green-500 mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-3">Healthy Diet</h2>
            <p className="text-gray-600">
              Eat fruits and vegetables rich in vitamins to maintain glowing and fresh skin naturally.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition">
            <Sparkles className="text-pink-500 mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-3">Cleanse Daily</h2>
            <p className="text-gray-600">
              Wash your face twice a day with a gentle cleanser to remove dirt and excess oil.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition">
            <Moon className="text-purple-500 mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-3">Get Enough Sleep</h2>
            <p className="text-gray-600">
              Proper sleep helps repair your skin and reduces dark circles and tired-looking skin.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition">
            <Hand className="text-red-500 mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-3">Avoid Touching Face</h2>
            <p className="text-gray-600">
              Touching your face frequently can spread bacteria and cause acne or irritation.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Product;