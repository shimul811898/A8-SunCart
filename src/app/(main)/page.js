import Image from "next/image";
import Banner from "../components/shared/Banner";
import Product from "../components/shared/Product";


export default function Home() {
  return (
    <div>
      <Banner />
      <Product />
    </div>
  );
}