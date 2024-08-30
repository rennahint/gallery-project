import Link from 'next/link';
import Image from 'next/image';
import headerImage from './IMG_3462.jpg'
export default function Commissions() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
            <div className="flex">
                
                <div>
                    <div className=" flex title text-5xl p-20">
                        Commissions
                    </div>
                    <div className="text-xl w-128 flex flex-wrap w-1/3">
                        Welcome to my commissions page! Please enter your email, name, and a in-depth description of the type of content you want!
                    </div>
                </div>
                <Image
                    src="/black-background-with-shoe.png" // Relative path in the public directory
                    alt="Description of the image"
                    width={400} // Image width
                    height={200} // Image height
                    className="rounded-lg shadow-lg" // Tailwind CSS classes
                />
            </div>
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