import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addresses: [],
    isLoading: false,
    error: null,
};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        updateAddressStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        updateAddressSuccess: (state, action) => {
            state.isLoading = false;
            state.addresses = action.payload;
        },
        updateAddressFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        deleteAddressStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        deleteAddressSuccess: (state, action) => {
            state.isLoading = false;
            state.addresses = action.payload;
        },
        deleteAddressFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});


export const {
    updateAddressStart,
    updateAddressSuccess,
    updateAddressFailure,
    deleteAddressStart,
    deleteAddressSuccess,
    deleteAddressFailure
} = addressSlice.actions;

export default addressSlice.reducer;
