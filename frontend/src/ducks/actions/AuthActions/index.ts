import AlleSysApi from "../../../api/AlleSysApi";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { loginFailure, loginStart, loginSuccess } from "../../reducers/auth/signInSlice";
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
