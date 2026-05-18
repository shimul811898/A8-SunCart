import Card from "../Card";

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

      <h1 className="text-3xl font-bold mb-6">
        Top Product
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {topPhotos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}

      </div>

    </div>
  );
};

export default Product;