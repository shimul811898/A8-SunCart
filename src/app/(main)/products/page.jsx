import ProductCard from "../../components/shared/ProductCard"; 


const AllProduct = async () => {
  const res = await fetch(
    "https://a8-sun-cart-teal.vercel.app/data.json",
    { cache: "no-store" }
  );

  const photos = await res.json().catch(() => []);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(photos) &&
          photos.map((photo) => (
            <ProductCard key={photo.id} photo={photo} />
          ))}
      </div>

    </div>
  );
};

export default AllProduct;