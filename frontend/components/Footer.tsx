import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="flex">
        <nav >
          <ul className="flex flex-row">
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