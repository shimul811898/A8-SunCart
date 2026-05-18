import Image from "next/image";
import Banner from "../components/shared/Banner";
import Product from "../components/shared/Product";
import Hero from "../components/shared/Hero";


export default function Home() {
  return (
    <div>
      <Banner />
      <Hero/>
      <Product />
      
    </div>
  );
}