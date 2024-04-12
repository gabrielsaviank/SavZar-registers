import AlleSysApi from "../../../api/AlleSysApi";
import { loginFailure, loginStart, loginSuccess } from "../../reducers/AuthSlice";
import Cookies from "js-cookie";

export const login = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await AlleSysApi.post("/auth/signin", {
            email: credentials.email,
            password: credentials.password
        });

        console.log("RESPONSE", response);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
