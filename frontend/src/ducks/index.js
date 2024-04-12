import { combineReducers } from "redux";
import authReducer from "./reducers/auth/signInSlice";
import personsReducer from "./reducers/registers/fetchPersonsSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    persons: personsReducer
});

