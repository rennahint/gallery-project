import Link from 'next/link';

export default function Footer() {
    return (
      <footer>
        <nav >
          <ul className="flex justify-center flex-row bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 from-10%">
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