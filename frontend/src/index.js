import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {rootReducer} from "./ducks";

const store = configureStore({
    reducer: rootReducer
});

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <React.StrictMode>
        <ReduxApp />
    </React.StrictMode>,
    document.getElementById('root')
);
