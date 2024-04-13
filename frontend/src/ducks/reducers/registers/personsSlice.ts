import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonType } from "../../../helpers/types";


type PersonsState = {
    persons: PersonType[];
    isLoading: boolean;
    error: string | null;
}

const initialState: PersonsState = {
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
        fetchPersonsSuccess: (state, action: PayloadAction<PersonType[]>) => {
            state.isLoading = false;
            state.persons = action.payload;
        },
        fetchPersonsFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        addPersonsStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        addPersonsSuccess: (state, action: PayloadAction<PersonType>) => {
            state.isLoading = false;
            state.persons.push(action.payload);
        },
        addPersonsFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});


export const {
    fetchPersonsStart,
    fetchPersonsSuccess,
    fetchPersonsFailure,
    addPersonsStart,
    addPersonsSuccess,
    addPersonsFailure,

} = personsSlice.actions;

export default personsSlice.reducer;
