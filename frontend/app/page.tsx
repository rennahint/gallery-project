import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      FlynnFrost Art Gallery and Commissions

      <Link  className="bg-orange-900 text-orange-50" href="/gallery">Check out the artwork </Link>

      <Link className="bg-orange-900 text-orange-50" href="/about">Learn more about me </Link>
    </main>
  );
}
