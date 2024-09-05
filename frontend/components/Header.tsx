import Link from 'next/link';

export default function Header() {
    return (
      
    <header >
      <nav >
        <ul className="flex flex-row justify-center md:justify-start bg-gradient-to-b text-orange-50 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900">
          <li className="p-4 ">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/commissions">Commissions</Link>
          </li>
          <li className="p-4">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
    );
  }