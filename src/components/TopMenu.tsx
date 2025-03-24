import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Link from 'next/link';

export default async function TopMenu() {

    const session = await getServerSession(authOptions);

    return(
        <div className='bg-white h-[60px] inset-x-0 top-0 z-30 flex flex-row justify-end fixed 
        px-8 py-2 font-mono bg-gradient-to-r from-[#BE5985]  to-[#161D6F] text-white'>
            <TopMenuItem title='Booking' pageRef='/booking' />
            <Image src={'/img/logo.png'} alt='logo' 
            width={0} height={0} sizes='100vh' 
            className='h-[100%] w-auto rounded-[50%]'/>

            <div className='flex flex-row absolute left-0 top-0 h-full'>
                {
                    session ? <Link href='/api/auth/signout'>
                        <div className='flex items-center h-full px-5 text-white text-lg '>
                            Sign-Out
                        </div>
                    </Link>
                    : <Link href='/api/auth/signin'>
                        <div className='flex items-center h-full px-5 text-white text-lg'>
                            Sign-In
                        </div>
                    </Link>
                }

                <TopMenuItem title='My Booking' pageRef='/mybooking' />
            </div>

        </div>
    );
}