import AlleSysApi from "../../../api/AlleSysApi";
import { PersonType } from "../../../helpers/types";
import {
    addPersonsFailure,
    addPersonsStart,
    addPersonsSuccess,
    deletePersonFailure,
    deletePersonStart,
    deletePersonSuccess, fetchPersonByIdFailure,
    fetchPersonByIdStart, fetchPersonByIdSuccess,
    fetchPersonsFailure,
    fetchPersonsStart,
    fetchPersonsSuccess,
    updatePersonFailure,
    updatePersonStart,
    updatePersonSuccess
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

export const fetchPersonById = (id: string) => async (dispatch: Dispatch<any>) => {
    dispatch(fetchPersonByIdStart());
    try {
        const response = await AlleSysApi.get(`/persons/${id}`, { withCredentials: true });

        console.log("ACTION RESPONSE", response.data);

        dispatch(fetchPersonByIdSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchPersonByIdFailure(error.message));
        } else {
            dispatch(fetchPersonByIdFailure("An unknown error occurred."));
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

        dispatch(addPersonsSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(addPersonsFailure(error.message));
        } else {
            dispatch(addPersonsFailure("An unknown error occurred."));
        }
    }
};

export const updatePerson = (personData: PersonType, id: string) => async (dispatch: Dispatch<any>) => {
    dispatch(updatePersonStart());
    try {
        const response = await AlleSysApi.patch(`/persons/update/${id}`, {
            name: personData.name,
            sex: personData.sex,
            birthdate: personData.birthDate,
            maritalStatus: personData.maritalStatus,
        }, { withCredentials: true });

        console.log("RESPONSE UPDATE", response.data);

        dispatch(updatePersonSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(updatePersonFailure(error.message));
        } else {
            dispatch(updatePersonFailure("An unknown error occurred."));
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

