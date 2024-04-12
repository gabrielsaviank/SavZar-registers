import { combineReducers } from "redux";
import authReducer from "./reducers/AuthSlice";
import authSlice from "./reducers/AuthSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
});

