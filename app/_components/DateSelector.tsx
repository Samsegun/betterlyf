"use client";

import {
    differenceInDays,
    isPast,
    isSameDay,
    isWithinInterval,
} from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useBooking } from "./BookingContext";
import { SpecialistType } from "../_types";

function isAlreadyBooked(range, datesArr) {
    return (
        range.from &&
        range.to &&
        datesArr.some(date =>
            isWithinInterval(date, { start: range.from, end: range.to })
        )
    );
}

function DateSelector({ specialist }: { specialist: SpecialistType }) {
    const { range, setRange, resetRange } = useBooking();

    // const { regularPrice, discount } = cabin;

    // const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

    // SETTINGS
    // const { minBookingLength, maxBookingLength } = settings;
    const minBookingLength = 4;
    const maxBookingLength = 21;
    // const numNights = differenceInDays(displayRange.to, displayRange.from);
    // const cabinPrice = numNights * (regularPrice - discount);

    const numNights = 4;
    const specialistPrice = 5000;

    return (
        <div className='flex flex-col justify-between'>
            <DayPicker
                className='pt-12 place-self-center'
                mode='range'
                onSelect={setRange}
                // selected={displayRange}
                min={minBookingLength}
                max={maxBookingLength}
                // fromMonth={new Date()}
                // fromDate={new Date()}
                // toYear={new Date().getFullYear() + 5}
                captionLayout='dropdown'
                numberOfMonths={2}
                // disabled={curDate =>
                //     isPast(curDate) ||
                //     bookedDates.some(date => isSameDay(date, curDate))
                // }
            />

            {/* <div className='flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]'>
                <div className='flex items-baseline gap-6'>
                    <p className='flex gap-2 items-baseline'>
                        <span className='text-2xl'>${specialistPrice}</span>

                        <span className=''>/night</span>
                    </p>
                    {numNights ? (
                        <>
                            <p className='bg-accent-600 px-3 py-2 text-2xl'>
                                <span>&times;</span> <span>{numNights}</span>
                            </p>
                            <p>
                                <span className='text-lg font-bold uppercase'>
                                    Total
                                </span>{" "}
                                <span className='text-2xl font-semibold'>
                                    ${specialistPrice}
                                </span>
                            </p>
                        </>
                    ) : null}
                </div>

                {range.from || range.to ? (
                    <button
                        className='border border-primary-800 py-2 px-4 text-sm font-semibold'
                        onClick={resetRange}>
                        Clear
                    </button>
                ) : null}
            </div> */}
        </div>
    );
}

export default DateSelector;
