import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./ducks";

const store = configureStore({
    reducer: rootReducer
});

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ReduxApp />
    </React.StrictMode>
);
