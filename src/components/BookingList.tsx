'use client'
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
        {   
            bookItems.length !== 0 ? 
            bookItems.map((bookingItem) => (
                <div className="bg-purple-50 rounded px-5 mx-5 py-2 my-2 text-[#161D6F]" key={bookingItem.venue}>
                    <div className="text-xl" >Name: {bookingItem.nameLastname}</div>
                    <div className="text-lg" >Venue: {bookingItem.venue}</div>
                    <div className="text-md" >Tel: {bookingItem.tel}</div>
                    <div className="text-md" >Date: {bookingItem.bookDate}</div>
                    <button className="block rounded-md bg-red-600 hover:bg-red-800 p-2
                    text-white my-2 shadow-sm" onClick={() => dispatch(removeBooking(bookingItem))}>
                        Cancel Booking
                    </button>
                </div>
            ))
            : <div className="text-3xl text-center " >No Venue Booking</div>
        }
        </>
    );
}