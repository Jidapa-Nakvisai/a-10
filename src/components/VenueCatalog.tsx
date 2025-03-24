'use client'
import Card from "./Card";
import Link from "next/link";

export default async function VenueCatalog( {venuesJson} : {venuesJson:Promise<VenueJson>} ) {

    const venuesJsonReady = await venuesJson;

    return(
        <>
        <h1 className="text-2xl bg-gradient-to-r from-[#161D6F] to-[#BE5985] inline-block bg-clip-text text-transparent">
            Explore {venuesJsonReady.count}  venues in our catalog</h1>
        <div style={{margin:"20px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
            {
                venuesJsonReady.data.map((venueItem:VenueItem) => (
                    <Link href={`/venue/${venueItem.id}`} className="w-1/5">
                        <Card venueName={venueItem.name} imgSrc={venueItem.picture} />
                    </Link>
                ))
            }
        </div>
        </>
    );
}