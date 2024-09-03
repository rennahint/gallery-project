import Link from 'next/link';
import Image from 'next/image';
import headerImage from './IMG_3462.jpg'
import PageHeaderBanner from "@/components/PageHeaderBanner"

export default function Commissions() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
            
            
            < PageHeaderBanner 
                src="/black-background-with-shoe.png" // Path to your image
                alt="Balck background with Naruto Shoe design"
                width={400}
                height={100}
                pageTitle="Commissions"
                pageDescription="To get a custom shoe design, please use the form below to start an inquiry about a commission!"
            />
            
            <div className='flex p-8 justify-center items-center h-screen flex-col w-max'>
                <form className='flex flex-col p-3 w-96 h-inherit'>
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 max-h-2.5' id='email' type='email' aria-label='email address' placeholder='Enter your email address' />
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 max-h-2.5' id='name' type='string' aria-label='name' placeholder='Enter your first and last name' />
                    
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 ' id='description' type='string' aria-label='name' placeholder='Enter the description of your design' />
                    
                    <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
                    Send
                    </button>
                </form>
            </div>
       </main>
    )
}