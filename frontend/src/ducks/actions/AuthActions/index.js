import { createAsyncThunk } from "@reduxjs/toolkit";

import AlleSysApi from "../../../api/AlleSysApi";
import { loginFailure, loginStart, loginSuccess } from "../../reducers/AuthSlice";

export const login = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await AlleSysApi.post("/auth/signin", { email: credentials.email, password: credentials.password });
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
