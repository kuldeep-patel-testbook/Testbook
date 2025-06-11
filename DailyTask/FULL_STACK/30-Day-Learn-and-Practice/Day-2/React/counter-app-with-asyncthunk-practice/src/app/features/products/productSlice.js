import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

//Action
export const fetchProduct = createAsyncThunk('fetchProduct', async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
});

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data:null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchProduct.rejected, (state, action) => {
            console.log("Error at", action.payload);
            state.isError = true;
        });
    }
});

export default productSlice.reducer;