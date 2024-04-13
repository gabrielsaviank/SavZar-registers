import AlleSysApi from "../../../api/AlleSysApi";
import { fetchPersonsFailure, fetchPersonsStart, fetchPersonsSuccess } from "../../reducers/registers/personsSlice";

export const fetchPersons = () => async (dispatch) => {
    dispatch(fetchPersonsStart());
    try {
        const response = await AlleSysApi.get("/persons", { withCredentials: true });

        dispatch(fetchPersonsSuccess(response.data));
    } catch (error) {
        dispatch(fetchPersonsFailure(error.message));
    }
};

export const createPersons = (body) => async (dispatch) => {
    dispatch(fetchPersonsStart());
    try {
        const response = await AlleSysApi.post("/persons", body, { withCredentials: true });

        dispatch(fetchPersonsSuccess(response.data));
    } catch (error) {
        dispatch(fetchPersonsFailure(error.message));
    }
};
