import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage( {params} : {params:{vid:string}} ) {

    const venueDetail = await getVenue(params.vid);

    return(
        <main className="text-center p-5 font-mono ">
            <div className="flex flex-row my-5 justify-center  ">
                <Image src={venueDetail.data.picture}
                    alt="Venue Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] "
                />
                <div className="text-left mx-20">{venueDetail.data.description}
                    <div className="text-3xl text-md mx-5 my-3 
                    bg-gradient-to-r from-[#161D6F]  to-[#BE5985] bg-clip-text text-transparent">{venueDetail.data.name}</div>
                    <hr className="my-3 border border-stone-300" />
                    <div className="text-lg mx-5 text-cyan-600">
                        <span className="text-[#161D6F]">Address:</span> {venueDetail.data.address} <br />
                        <span className="text-[#161D6F]">District:</span> {venueDetail.data.district} <br />
                        <span className="text-[#161D6F]">Province:</span> {venueDetail.data.province} <br />
                        <span className="text-[#161D6F]">Postal Code:</span> {venueDetail.data.postalcode} <br />
                        <span className="text-[#161D6F]">Tel:</span> {venueDetail.data.tel} <br />
                        <span className="text-[#161D6F]">Daily Rental Rate:</span> {venueDetail.data.dailyrate} <br />
                    </div>
                </div>
            </div>
        </main>
    );
}

// export async function generateStaticParams() {
//     return [{vid: '001'}, {vid: '002'}, {vid: '003'}];
// }