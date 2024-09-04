import Link from 'next/link';
import PageHeaderBanner from "@/components/PageHeaderBanner"

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

          < PageHeaderBanner 
                src="/black-background-with-shoe.png" // Path to your image
                alt="Black background with Naruto Shoe design"
                width={300}
                height={300}
                pageTitle="About Me"
                pageDescription="I'm Finn Walters, creater of custom shoes, and custom artwork"
            />

        <Link className="bg-orange-900 text-orange-50" href="/commissions">Create a Commission </Link>

        <Link className="bg-orange-900 text-orange-50" href="/gallery"> Checkout my Art </Link>
       </main>
    )
}