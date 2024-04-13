import AlleSysApi from "../../../api/AlleSysApi";
import { PersonType } from "../../../helpers/types";
import {
    addPersonsFailure,
    addPersonsStart, addPersonsSuccess,
    fetchPersonsFailure,
    fetchPersonsStart,
    fetchPersonsSuccess
} from "../../reducers/registers/personsSlice";
import { Dispatch } from "react";

export const fetchPersons = () => async (dispatch: Dispatch<any>) => {
    dispatch(fetchPersonsStart());
    try {
        const response = await AlleSysApi.get("/persons", { withCredentials: true });

        dispatch(fetchPersonsSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchPersonsFailure(error.message));
        } else {
            dispatch(fetchPersonsFailure("An unknown error occurred."));
        }
    }
};

export const createPerson = ({ name, sex, birthDate, maritalStatus }: PersonType) => async (dispatch: Dispatch<any>) => {
    dispatch(addPersonsStart());
    try {
        const response = await AlleSysApi.post("/persons/create", {
            name: name,
            sex: sex,
            birthdate: birthDate,
            maritalStatus: maritalStatus,
        }, { withCredentials: true });

        dispatch(addPersonsSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(addPersonsFailure(error.message));
        } else {
            dispatch(addPersonsFailure("An unknown error occurred."));
        }
    }
};

