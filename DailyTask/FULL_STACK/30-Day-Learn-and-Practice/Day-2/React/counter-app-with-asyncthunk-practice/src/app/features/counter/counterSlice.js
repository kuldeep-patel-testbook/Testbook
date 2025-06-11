import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState : {
        counter: 0
    },
    reducers : {
        increment : (state) => {
            state.counter +=1;
        },
        decrement : (state) => {
            state.counter -=1;
        },
        incrementBypayload : (state, actions) => {
            state.counter +=actions.payload;
        },
        decrementBypayload : (state, actions) => {
            state.counter -=actions.payload;
        }
    }
});
export const {increment, decrement, incrementBypayload, decrementBypayload} = counterSlice.actions; 
export default counterSlice.reducer;