'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
    const [index, setIndex] = useState(0);

    const router = useRouter();
    const {data: session} = useSession();

    return(
        <div className={styles.banner} onClick={() => setIndex(index + 1)}>
            <Image src={covers[index % 4]} alt='Banner' 
            fill={true} objectFit='cover' priority
            />
            <div className={styles.cover}></div>

            <div className={styles.bannerText}>
                <h1 className='text-4xl'>where every event finds its venue</h1>
                <h3 className='text-xl'>Host your special event with us! Perfect for weddings, parties, and corporate events. Enjoy top facilities and excellent service</h3>
            </div>
            {
                session? <div className='z-30 absolute right-10 top-5 font-semibold text-yellow-300 text-3xl'>
                    Welcome {session.user?.name}
                    </div> : null
            }

            <button className='bg-none text-white border-4 border-white
            font-semibold text-xl px-5 py-3 mx-10 my-5 rounded z-30 absolute bottom-0 right-0
            transition duration-300 ease-in-out hover:scale-110'
            onClick={(e) => {e.stopPropagation(); router.push('/venue'); }}>
                Select Venue
            </button>
        </div>
    );
}