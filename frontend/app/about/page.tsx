import Link from 'next/link';
import PageHeaderBanner from "@/components/PageHeaderBanner"
import LeftImageButtonBanner from '@/components/LeftImageButtonBanner';
import RightImageButtonBanner from '@/components/RightImageButtonBanner';

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center">

          < PageHeaderBanner 
                src="/black-background-with-shoe.png" // Path to your image
                alt="Black background with Naruto Shoe design"
                width={300}
                height={300}
                pageTitle="About Me"
                pageDescription="I'm Finn Walters, creater of custom shoes, and custom artwork. I create fun art!"
            />

        < LeftImageButtonBanner
          src="/black-background-with-shoe.png" // Path to your image
          alt="Black background with Naruto Shoe design"
          width={300}
          height={300}
          pageTitle="Interested in a Custom Design?"
          buttonTitle="Create a Commission"
          pageDescription=""
          pageLink="/commissions"
        />

        < RightImageButtonBanner
          src="/black-background-with-shoe.png" // Path to your image
          alt="Black background with Naruto Shoe design"
          width={300}
          height={300}
          pageTitle="Interested in my Art?"
          buttonTitle="View my Art"
          pageDescription=""
          pageLink="/gallery"
        />    
       </main>
    )
}