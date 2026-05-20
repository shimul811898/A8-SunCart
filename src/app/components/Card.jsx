
import Link from "next/link";
import { FaSun } from "react-icons/fa";

const Card = ({ photo }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden border border-orange-100">


      <div className="relative overflow-hidden">

        <img
          src={photo.image}
          alt={photo.name}
          width={400}
          height={300}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
        />

        <div className="absolute fle top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
          <div>
            <FaSun />
            <span>{photo.rating}</span>
          </div>
        </div>

      </div>


      <div className="p-4">

        <h2 className="text-lg font-bold text-gray-800">
          {photo.name}
        </h2>

        

        <p className="text-xs text-gray-400 mt-2 line-clamp-2">
          {photo.description}
        </p>


        <div className="flex justify-between items-center mt-3">

          <span className="text-orange-500 font-bold text-lg">
            ${photo.price}
          </span>

           <span className="text-green-600 text-xs font-medium">
            {photo.stock} Stock
          </span>

        </div>


        <Link href={`/${photo.id}`}>
          <button className="w-full mt-4 text-center py-2 rounded-xl bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold hover:from-orange-500 hover:to-yellow-600 transition">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
};

export default Card;