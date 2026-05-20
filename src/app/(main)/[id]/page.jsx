

import BuyButton from "@/app/components/shared/BuyNowBtn";


const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://a8-sun-cart-teal.vercel.app/data.json", {
    cache: "no-store"
  });
  const products = await res.json().catch(() => []);
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 mt-10 text-center text-red-500 font-bold">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl shadow-md bg-white text-black mx-auto">
      <div className="max-w-5xl mx-auto py-6 shadow-lg bg-gray-100 mt-10 lg:flex px-10 gap-10 grid grid-cols-1 gap-y-4">
        <div>
          <img className="lg:p-20 max-h-[400px] object-contain" src={product.image} alt={product.name} />
        </div>

        <div className="grid items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-[#64748B] text-[16px]">{product.description}</p>

            <div className="grid grid-cols-2 mx-auto gap-5 justify-center">
              <div className="rounded-lg bg-[#F8FAFC] shadow-lg py-6 border border-slate-300 px-4">
                <h3>Category:</h3>
                <p className="text-[16px] font-bold">{product.category}</p>
              </div>
              <div className="rounded-lg bg-[#F8FAFC] shadow-lg py-6 border border-slate-300 px-4">
                <h3>Rating</h3>
                <p className="text-[16px] font-bold">{product.rating}</p>
              </div>
              <div className="bg-[#F8FAFC] text-black shadow-lg py-6 border border-slate-300 px-4 rounded-lg">
                <h3>Brand:</h3>
                <p className="text-[16px] font-bold">{product.brand}</p>
              </div>
              <div className="rounded-lg bg-[#F8FAFC] shadow-lg py-6 border border-slate-300 px-4">
                <h3>Available stock:</h3>
                <p className="text-[16px] font-bold">{product.stock}</p>
              </div>
            </div>

            <div className="space-y-2.5 flex justify-between items-center">
              <div>
                <h2 className="text-[16px] text-gray-500">Price</h2>
                <p className="font-bold text-3xl">${product.price}</p>
              </div>
              <div>
                <BuyButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;