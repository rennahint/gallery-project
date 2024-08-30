import Link from 'next/link';

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        About
        <p>I'm Finn Walters, creater of custom shoes, and custom artwork</p>

        <Link className="bg-orange-900 text-orange-50" href="/commissions">Create a Commission </Link>

        <Link className="bg-orange-900 text-orange-50" href="/gallery"> Checkout my Art </Link>
       </main>
    )
}