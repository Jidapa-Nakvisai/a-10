'use client'
import Card from "./Card";
import { useReducer } from "react";
import Link from "next/link";

export default function CardPanel() {

    let defaultVenue = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]);

    const cardReducer = (
        venueList: Map<string, number>,
        action: {type:string, venueName:string, rating?:number}
    ) => {
        switch(action.type) {
            case 'add' : {
                const newVenueList = new Map(venueList);
                newVenueList.set(action.venueName, action.rating??0);
                return newVenueList;
            }
            case 'remove' : {
                const newVenueList = new Map(venueList);
                newVenueList.delete(action.venueName);
                return newVenueList;
            }
            default : return venueList;
        }
    }

    const [venueRatingList, dispatchVenueRating] = useReducer(cardReducer, defaultVenue);

    const mockVenue = [
        {vid: "001", venueName: "The Bloom Pavilion", image: "/img/bloom.jpg"},
        {vid: "002", venueName: "Spark Space", image: "/img/sparkspace.jpg"},
        {vid: "003", venueName: "The Grand Table", image: "/img/grandtable.jpg"}
    ]

    return(
        <div className="font-mono">
            <div style={{margin:"20px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                {
                    mockVenue.map((venueItem) => (
                        <Link href={`/venue/${venueItem.vid}`} className="w-1/5">
                            <Card venueName={venueItem.venueName} imgSrc={venueItem.image} 
                            onRating={(venue:string, rate:number) => dispatchVenueRating({type:'add', venueName:venue, rating:rate})}/>
                        </Link>
                    ))
                }
            </div>

            <div className="p-10">
                <div className="w-full text-2xl font-medium">Venue List with Ratings : {venueRatingList.size}</div>
                {Array.from(venueRatingList).map(([venueName, rating]) => <div 
                data-testid={venueName} 
                key={venueName}
                onClick={() => dispatchVenueRating({type:'remove', venueName:venueName})}
                className="text-lg">
                    {venueName} {rating}
                </div>)}
            </div>
        </div>
    );
}