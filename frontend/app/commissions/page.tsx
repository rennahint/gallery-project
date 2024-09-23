import Link from 'next/link';
import Image from 'next/image';
import headerImage from './IMG_3462.jpg'
import PageHeaderBanner from "@/components/PageHeaderBanner"
import LeftImageButtonBanner from '@/components/LeftImageButtonBanner';
import RightImageButtonBanner from '@/components/RightImageButtonBanner';

export default async function Commissions() {
    
    return (
      <main className="flex min-h-screen flex-col items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-500 to-zinc-300">
            < PageHeaderBanner 
                src="/black-background-with-shoe.png" // Path to your image
                alt="Black background with Naruto Shoe design"
                width={300}
                height={300}
                pageTitle="Looking at getting a Commissioned Design?"
                pageDescription="To get a custom shoe design, please use the form below to start an inquiry about a commission!"
            />
            
            <div className="w-max">
                <div className=" flex justify-center text-3xl text-orange-50">
                    Submit a Commission
                </div>
                <form className='flex flex-col p-3 w-128 h-inherit text-center'>
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 max-h-5' id='email' type='email' aria-label='email address' placeholder='Email Address' />
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 max-h-5 ' id='first_name' type='string' aria-label='first_name' placeholder='First Name' />
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 max-h-5 ' id='last_name' type='string' aria-label='last_name' placeholder='Last Name' />
                    <textarea name="text" rows={5} cols={10} wrap="soft" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 ' placeholder='Description of design'></textarea>
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 max-h-5 ' id='name' type='string' aria-label='name' placeholder='Budget for Commission' />
                    <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
                        Send
                    </button>
                </form>
            </div>
       </main>
    )
}