import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Venue() {

    const venues = getVenues();

    return(
        <main className="text-center p-5 font-mono">
            <h1 className="text-4xl font-medium py-5
                bg-gradient-to-r from-[#161D6F] to-[#BE5985] 
                inline-block bg-clip-text text-transparent">
                View The Venues
            </h1> <br />
            <Suspense fallback={<p>Loading ...<LinearProgress/> </p>}>
                <VenueCatalog venuesJson={venues} />
            </Suspense>
        </main>
    );
}