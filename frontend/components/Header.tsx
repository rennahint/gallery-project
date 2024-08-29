import Link from 'next/link';

export default function Header() {
    return (
      
    <header >
      <nav >
        <ul className="flex flex-row">
          <li className="p-4">
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