import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./ducks";
import { Router } from "react-router-dom";

const store = configureStore({
    reducer: rootReducer
});


createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
