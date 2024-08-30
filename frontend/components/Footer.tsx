import Link from 'next/link';

export default function Footer() {
    return (
      <footer>
        <nav >
          <ul className="flex flex-row bg-gradient-to-r from-yellow-700 from-30%">
            <li className="p-4">
              <Link href="https://www.instagram.com">Instagram</Link>
            </li>
            <li className="p-4 flex flex-col">
              <p>Contact Me </p>
              <p>flynnfrost@gmail.com </p>

            </li>
            
          </ul>
        </nav>
      </footer>
    );
  }