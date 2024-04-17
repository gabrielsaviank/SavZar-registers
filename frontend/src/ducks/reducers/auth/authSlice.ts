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
            state.token = action.payload.id;
            state.user = action.payload.id;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logoutStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        logoutFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logoutSuccess: (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        },
        signUpStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        signUpSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.token = action.payload.id;
            state.user = action.payload.id;
        },
        signUpFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        getProfileStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getProfileSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        getProfileFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
});


export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutFailure,
    logoutSuccess,
    signUpStart,
    signUpSuccess,
    signUpFailure,
    getProfileStart,
    getProfileSuccess,
    getProfileFailure
} = authSlice.actions;

export default authSlice.reducer;
