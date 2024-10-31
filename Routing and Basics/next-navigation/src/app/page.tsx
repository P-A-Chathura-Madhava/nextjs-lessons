import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-4xl font-bold text-center">Next Application 01</h1>
    <div className="flex flex-col gap-2">
      <Link className='hover:text-blue-600 hover:underline' href={"/aboutus"}>About Us</Link>
      <Link className='hover:text-blue-600 hover:underline' href={"/contactus"}>Contact Us</Link>
      <Link className='hover:text-blue-600 hover:underline' href={"/services"}>Services</Link>
      <Link className='hover:text-blue-600 hover:underline' href={"/gallery"}>Gallery</Link>
      <h2>Programatical Navigation</h2>
      <Link className='hover:text-blue-600 hover:underline' href={"/place-order"}>Place Order</Link>
    </div>
    </div>
  );
}
