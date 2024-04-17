import AlleSysApi from "../../../api/AlleSysApi";
import {
    loginFailure,
    loginStart,
    loginSuccess,
    logoutSuccess,
    logoutStart,
    logoutFailure,
    signUpStart, signUpSuccess, signUpFailure, getProfileStart, getProfileSuccess, getProfileFailure
} from "../../reducers/auth/authSlice";
import { Dispatch } from "react";
import { UserType } from "../../../helpers/types";

export const login = (credentials: UserType) => async (dispatch: Dispatch<any>) => {
    dispatch(loginStart());
    try {
        const response = await AlleSysApi.post("/auth/signin", {
            email: credentials.email,
            password: credentials.password
        }, { withCredentials: true });

        dispatch(loginSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(loginFailure(error.message));
        } else {
            dispatch(loginFailure("An unknown error occurred."));
        }
    }
};

export const signup = (credentials: UserType) => async (dispatch: Dispatch<any>) => {
    dispatch(signUpStart());
    try {
        const response = await AlleSysApi.post("/auth/signup", {
            email: credentials.email,
            password: credentials.password
        }, { withCredentials: true });

        dispatch(signUpSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(signUpFailure(error.message));
        } else {
            dispatch(signUpFailure("An unknown error occurred."));
        }
    }
};

export const logout = () => async (dispatch: Dispatch<any>) => {
    dispatch(logoutStart());
    try {
        await AlleSysApi.post("/auth/signout", {}, { withCredentials: true });
        dispatch(logoutSuccess());
    } catch (error) {
        if (error instanceof Error) {
            dispatch(logoutFailure(error.message));
        } else {
            dispatch(logoutFailure("An unknown error occurred."));
        }
    }
};

export const getProfile = (id: string) => async (dispatch: Dispatch<any>) => {
    dispatch(getProfileStart());
    try {
        const response = await AlleSysApi.get(`/auth/${id}`, { withCredentials: true });

        dispatch(getProfileSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(getProfileFailure(error.message));
        } else {
            dispatch(getProfileFailure("An unknown error occurred."));
        }
    }
};
