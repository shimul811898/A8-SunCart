import Image from "next/image";
import Car from "../../assets/Car.jpg";
import Star from "../../assets/Star.png";
import Fire from "../../assets/Fire.jpg";


const Hero = () => {
    return (
        <div className="max-w-7xl bg-white">
            <div className="max-w-6xl mx-auto lg:flex p-10 gap-10 sm:grid grid-cols-1 sm: grid gap-y-4 ">
                <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition duration-300">
                    <div className="text-5xl mb-4 grid justify-center "> <Image className="h-[50px] w-[50px]" src={Car} />  </div>
                    <h3 className="text-2xl font-bold mb-3">Free Shipping</h3>
                    <p className="text-gray-600">
                        Enjoy free delivery on all summer collection orders.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition duration-300">
                    <div className="text-5xl mb-4 grid justify-center "> <Image className="h-[50px] w-[50px]" src={Star} />  </div>
                    <h3 className="text-2xl font-bold mb-3">Best Quality</h3>
                    <p className="text-gray-600">
                        Premium quality products carefully selected for you.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition duration-300">
                    <div className="text-5xl mb-4 grid justify-center "> <Image className="h-[50px] w-[50px]" src={Fire} />  </div>

                    <h3 className="text-2xl font-bold mb-3">Hot Deals</h3>
                    <p className="text-gray-600">
                        Grab exciting discounts and offers every day.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;