import AlleSysApi from "../../../api/AlleSysApi";
import { PersonType } from "../../../helpers/types";
import {
    addPersonsFailure,
    addPersonsStart, addPersonsSuccess, deletePersonFailure, deletePersonStart, deletePersonSuccess,
    fetchPersonsFailure,
    fetchPersonsStart,
    fetchPersonsSuccess
} from "../../reducers/registers/personsSlice";
import { Dispatch } from "react";

export const fetchPersons = (page: number, limit: number) => async (dispatch: Dispatch<any>) => {
    dispatch(fetchPersonsStart());
    try {
        const response = await AlleSysApi.get("/persons", {
            params: { page, limit },
            withCredentials: true
        });

        dispatch(fetchPersonsSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchPersonsFailure(error.message));
        } else {
            dispatch(fetchPersonsFailure("An unknown error occurred."));
        }
    }
};

export const createPerson = ({ name, sex, birthDate, maritalStatus, addresses }: PersonType) => async (dispatch: Dispatch<any>) => {
    dispatch(addPersonsStart());
    try {
        const response = await AlleSysApi.post("/persons/create", {
            name: name,
            sex: sex,
            birthdate: birthDate,
            maritalStatus: maritalStatus,
            addresses: addresses
        }, { withCredentials: true });

        console.log("RESPONSE", response.data);

        dispatch(addPersonsSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(addPersonsFailure(error.message));
        } else {
            dispatch(addPersonsFailure("An unknown error occurred."));
        }
    }
};

export const deletePerson = (id: number) => async (dispatch: Dispatch<any>) => {
    dispatch(deletePersonStart());
    try {
        const response = await AlleSysApi.delete(`/persons/delete/${id}`, { withCredentials: true });

        dispatch(deletePersonSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(deletePersonFailure(error.message));
        } else {
            dispatch(deletePersonFailure("An unknown error occurred."));
        }
    }
};

