import ProductCard from "../components/shared/ProductCard";

const AllProduct = async () => {
  const res = await fetch(
    "https://a8-sun-cart-teal.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const photos = await res.json();
  

  return (
    <div className="mt-10 mx-auto max-w-6xl px-4">

    
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-orange-500">
          All Products
        </h1>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {photos.map((photo) => (
          <ProductCard key={photo.id} photo={photo} />
        ))}

      </div>

    </div>
  );
};

export default AllProduct;