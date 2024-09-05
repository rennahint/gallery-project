import Image from "next/image";
import Link from 'next/link';
import PageHeaderBanner from "@/components/PageHeaderBanner"
import LeftImageButtonBanner from '@/components/LeftImageButtonBanner';
import RightImageButtonBanner from '@/components/RightImageButtonBanner';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      

      < PageHeaderBanner 
                src="/black-background-with-shoe.png" // Path to your image
                alt="Black background with Naruto Shoe design"
                width={300}
                height={300}
                pageTitle="FlynnFrost Art Gallery and Commissions"
                pageDescription=""
          />

< LeftImageButtonBanner
          src="/black-background-with-shoe.png" // Path to your image
          alt="Black background with Naruto Shoe design"
          width={300}
          height={300}
          buttonTitle="Learn More About Me"
          pageDescription=""
          pageLink="/commissions"
        />

        < RightImageButtonBanner
          src="/black-background-with-shoe.png" // Path to your image
          alt="Black background with Naruto Shoe design"
          width={300}
          height={300}
          buttonTitle="Checkout My Art"
          pageDescription=""
          pageLink="/gallery"
        /> 
    </main>
  );
}
