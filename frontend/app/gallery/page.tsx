import Link from 'next/link';

export default function Gallery() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Gallery

        <Link className="bg-orange-900 text-orange-50" href="/commissions">Create a Commission </Link>
       </main>
    )
}