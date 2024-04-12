import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Auth/Login/Login";
import Main from "./pages/Persons/MainPage/Main";
import PrivateRoute from "./helpers/PrivateRoute";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/main' element={<Main/>}/>
                </Route>
            </Routes>
        </Router>
    );
};
export default App;
