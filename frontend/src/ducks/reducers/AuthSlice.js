import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { signin } from "../actions/AuthActions";
import AlleSysApi from "../../api/AlleSysApi";

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

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await AlleSysApi.post("/auth/signin", { email: credentials.email, password: credentials.password });
        console.log("response", response);
        console.log(response);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export default authSlice.reducer;
