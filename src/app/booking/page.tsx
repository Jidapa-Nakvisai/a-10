'use client'
import DateReserve from "@/components/DateReserve";
import TextField from '@mui/material/TextField';
import { Select, MenuItem } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {

    const [nameLastname, setNameLastname] = useState("");
    const [contact, setContact] = useState("");
    const [venue, setVenue] = useState("");
    const [bookDate, setBookDate] = useState<Dayjs|null>(null);

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNameLastname(e.target.value);
    }
    const handlecontactChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContact(e.target.value);
    }

    const dispatch = useDispatch<AppDispatch>();
    const makeBooking = () => {
        if(nameLastname && contact && venue && bookDate) {
            const item:BookingItem = {
                nameLastname: nameLastname,
                tel: contact,
                venue: venue,
                bookDate: bookDate.toString()
            }
            
            dispatch(addBooking(item));
        }
    }

    return(
        <div className="font-mono flex flex-col items-center ">
            
            <hr className="w-[80%] " />
            <div className="text-center flex flex-col items-center justify-center   
            border-2 rounded-xl p-10 w-fit mx-auto my-10 ">
                <h1 className="text-4xl py-5 font-medium bg-gradient-to-r from-[#161D6F] to-[#BE5985] 
                inline-block bg-clip-text text-transparent ">Venue Booking</h1>
                <div className="flex flex-col items-center">
                    
                    <TextField name="Name-Lastname" label="Name-Lastname" variant="standard" 
                    fullWidth onChange={handleNameChange} /> <br />
                    <TextField name="Contact-Number" label="Contact-Number" variant="standard" 
                    fullWidth onChange={handlecontactChange} />

                    <FormControl fullWidth className="my-5">
                        <InputLabel id="venue-label">Choose The Venue</InputLabel>
                        <Select
                        id="venue"
                        labelId="venue-label"
                        variant="standard"
                        name="venue"
                        defaultValue=""
                        onChange={(e) => setVenue(e.target.value)}
                        >
                            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                            <MenuItem value="Spark">Spark Space</MenuItem>
                            <MenuItem value="GrandTable">The Grand Table</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <DateReserve onDateChange={(value:Dayjs) => {setBookDate(value)}} />
                    <button className="block rounded-md px-3 py-2
                    text-white shadow-sm w-[100%] my-2
                    bg-gradient-to-r from-[#BE5985] to-[#161D6F]
                    hover:from-[#161D6F] hover:to-[#BE5985] transition duration-500 ease-in-out hover:scale-105"
                    name="Book Venue" onClick={makeBooking}>
                        Book Venue
                    </button>
                </div>
            </div>
            
        </div>
    );
}