'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function DateReserve({onDateChange} : {onDateChange:Function}) {

    const [bookDate, setBookDate] = useState<Dayjs|null>(null);

    return(
        <div className="rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5  ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" 
                onChange={(value) => {setBookDate(value); onDateChange(value)}} />
            </LocalizationProvider>
        </div>
    );
}