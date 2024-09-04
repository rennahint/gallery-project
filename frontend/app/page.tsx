import Image from "next/image";
import Link from 'next/link';
import PageHeaderBanner from "@/components/PageHeaderBanner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      

      < PageHeaderBanner 
                src="/black-background-with-shoe.png" // Path to your image
                alt="Black background with Naruto Shoe design"
                width={300}
                height={300}
                pageTitle="FlynnFrost Art Gallery and Commissions"
                pageDescription=""
          />
      <Link  className="bg-orange-900 text-orange-50" href="/gallery">Check out the artwork </Link>

      <Link className="bg-orange-900 text-orange-50" href="/about">Learn more about me </Link>
    </main>
  );
}
