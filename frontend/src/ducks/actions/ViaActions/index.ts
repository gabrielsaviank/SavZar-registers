import axios from "axios";

import { fetchViaFail, fetchViaStart, fetchViaSuccess } from "../../reducers/viaApi/viaSlice";
import { Dispatch } from "react";


export const fetchViaCep = (cep: string) => async (dispatch: Dispatch<any>) => {
  dispatch(fetchViaStart());
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log("RESPONSE", response);
    dispatch(fetchViaSuccess(response.data));
  } catch (error) {
      if (error instanceof Error) {
          dispatch(fetchViaFail(error.message));
      } else {
          dispatch(fetchViaFail("An unknown error occurred."));
      }
  }
};
