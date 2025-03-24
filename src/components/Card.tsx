import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function Card( {venueName, imgSrc, onRating} : 
    {venueName:string, imgSrc:string, onRating?:Function} ) {

    const [rating, setRating] = useState<number | null>(0);
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                    alt='Venue Picture'
                    fill={true}
                    objectFit='cover'
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>
                <h4 className='pb-5 text-blue-800 text-xl'>{venueName}</h4>
            </div>
            {
                onRating ? <div className='w-fit h-[10%] px-2'>
                <Rating name={venueName + " Rating"} defaultValue={0} 
                id={venueName + " Rating"}
                data-testid={venueName + " Rating"}
                value={rating}
                onChange={(e, newValue) => {
                    setRating(newValue);
                    onRating(venueName, newValue);
                }}
                onClick={(e) => {
                    e.stopPropagation();
                }}/>
            </div> : ''
            }
        </InteractiveCard>
    );
}