import Link from 'next/link';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';
import LeftImageButtonBanner from '@/components/LeftImageButtonBanner';

export default async function Gallery() {
  let data = await fetch('http://127.0.0.1:3000/art_pieces')
    let art_pieces = await data.json()
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Gallery
        <ul>
          {art_pieces.map((art_piece: { id: Key | null | undefined; description: string; budget: Float32Array }) => (
            <li key={art_piece.id}>{art_piece.description} {art_piece.budget}</li>
            
          ))}
         
        </ul>

        < LeftImageButtonBanner
          src="/black-background-with-shoe.png" // Path to your image
          alt="Black background with Naruto Shoe design"
          width={300}
          height={300}
          buttonTitle="Create a Commission"
          pageDescription=""
          pageLink="/commissions"
        />
       </main>
    )
}