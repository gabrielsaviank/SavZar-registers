import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const viaSlice = createSlice({
    name: "via",
    initialState,
    reducers: {
        fetchViaStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchViaSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchViaFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchViaStart,
    fetchViaSuccess,
    fetchViaFail
} = viaSlice.actions;

export default viaSlice.reducer;
