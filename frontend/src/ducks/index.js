import { combineReducers } from "redux";
import authReducer from "./reducers/auth/authSlice";
import personsReducer from "./reducers/registers/personsSlice";
import addressSlice from "./reducers/addresses/addressSlice";
import viaSlice from "./reducers/viaApi/viaSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    persons: personsReducer,
    address: addressSlice,
    via: viaSlice
});

