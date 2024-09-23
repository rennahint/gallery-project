import Link from 'next/link';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';
import LeftImageButtonBanner from '@/components/LeftImageButtonBanner';
import PageHeaderBanner from "@/components/PageHeaderBanner"

export default async function Gallery() {
  let data = await fetch('http://127.0.0.1:3000/art_pieces')
    let art_pieces = await data.json()
    return (
      <main className="flex min-h-screen flex-col items-center">
        <div className=" flex flex-col w-full bg-gradient-to-b text-orange-50 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-500 to-zinc-300">
                <div className=" flex title text-5xl p-10 justify-center">
                    Gallery
                </div>
                <div className="flex description text-xl p-10 justify-center">
                    Check out my artwork!
                </div>
            </div>

        <div>
          <ul>
            <div>
            {art_pieces.map((art_piece: { id: Key | null | undefined; description: string; budget: Float32Array }) => (
              <li key={art_piece.id}>{art_piece.description} {art_piece.budget}</li>
              
            ))}
            </div>
          </ul>
        </div>

        < LeftImageButtonBanner
          src="/black-background-with-shoe.png" // Path to your image
          alt="Black background with Naruto Shoe design"
          width={300}
          height={300}
          pageTitle="Interested?"
          buttonTitle="Create a commission!"
          pageDescription=""
          pageLink="/commissions"
        />
       </main>
    )
}