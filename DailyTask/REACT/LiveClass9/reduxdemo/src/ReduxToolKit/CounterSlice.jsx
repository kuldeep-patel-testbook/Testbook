import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter:10
    },
    reducers: {
        increment: (state)=> {
            state.counter +=1
        },
        decrement: (state) => {
            state.counter -=1
        }
    }
})

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;