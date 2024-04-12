import { combineReducers } from "redux";
import authReducer from "./reducers/AuthSlice";
import personsReducer from "./reducers/PersonsSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    persons: personsReducer
});

