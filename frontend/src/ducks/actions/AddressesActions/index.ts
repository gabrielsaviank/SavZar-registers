import {
    deleteAddressFailure,
    deleteAddressStart, deleteAddressSuccess,
    updateAddressFailure,
    updateAddressStart,
    updateAddressSuccess
} from "../../reducers/addresses/addressSlice";
import { AddressType } from "../../../helpers/types";
import AlleSysApi from "../../../api/AlleSysApi";
import { Dispatch } from "react";


export const updateAddress = (addressData: AddressType, id: string) => async (dispatch: Dispatch<any>) => {
    dispatch(updateAddressStart());
    try {
        const response = await AlleSysApi.patch(`/addresses/update/${id}`, {
            postCode: addressData.postCode,
            neighbourhood: addressData.neighbourhood,
            number: addressData.number,
            complement: addressData.complement,
            street: addressData.street,
            city: addressData.city,
            state: addressData.state
        }, { withCredentials: true });

        dispatch(updateAddressSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(updateAddressFailure(error.message));
        } else {
            dispatch(updateAddressFailure("An unknown error occurred."));
        }
    }
};


export const deleteAddress = (id: string) => async (dispatch: Dispatch<any>) => {
    dispatch(deleteAddressStart());
    try {
        const response = await AlleSysApi.delete(`/addresses/delete/${id}`, { withCredentials: true });
        dispatch(deleteAddressSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(deleteAddressFailure(error.message));
        } else {
            dispatch(deleteAddressFailure("An unknown error occurred."));
        }
    }
};

