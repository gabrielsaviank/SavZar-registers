import AlleSysApi from "../../../api/AlleSysApi";
import Cookies from "js-cookie";
import { fetchPersonsFailure, fetchPersonsStart, fetchPersonsSuccess } from "../../reducers/PersonsSlice";


export const fetchPersons = () => async (dispatch) => {
    dispatch(fetchPersonsStart());
    try {
        const response = await AlleSysApi.get("/persons");
        dispatch(fetchPersonsSuccess(response.data));
    } catch (error) {
        dispatch(fetchPersonsFailure(error.message));
    }
};
