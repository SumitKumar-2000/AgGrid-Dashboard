import create from "zustand";
import {devtools} from "zustand/middleware"
import {immer } from 'zustand/middleware/immer'

const useFilteredBookingStore = create(
    devtools(immer((set) => ({
        BookingDates: {
            startDate : '2015-07-01',
            endDate : '2015-08-09'
        },
        setBookingDates: ({ startDate, endDate }) => {
            set((state) => {
                state.BookingDates.startDate = startDate;
                state.BookingDates.endDate = endDate;
            });
        },
    })))
)

export default useFilteredBookingStore


// ⚠️immer is important to reflect changes to states
