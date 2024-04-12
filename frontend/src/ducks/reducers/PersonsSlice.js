import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    persons: [],
    isLoading: false,
    error: null,
};

const personsSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {
        fetchPersonsStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchPersonsSuccess: (state, action) => {
            state.isLoading = false;
            state.persons = action.payload;
        },
        fetchPersonsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchPersonsStart,
    fetchPersonsSuccess,
    fetchPersonsFailure
} = personsSlice.actions;

export default personsSlice.reducer;
