import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure
} = authSlice.actions;
export default authSlice.reducer;
