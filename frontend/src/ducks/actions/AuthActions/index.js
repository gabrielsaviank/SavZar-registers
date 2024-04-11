import { createAsyncThunk } from "@reduxjs/toolkit";

import AlleSysApi from "../../../api/AlleSysApi";

export const login = createAsyncThunk(
"auth/signin",
    async (data, { rejectWithValue }) => {

        console.log("HERE");
        try {
            const response = await AlleSysApi.post("/auth/signin", data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
