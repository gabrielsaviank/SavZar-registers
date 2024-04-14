import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./helpers/PrivateRoute";
import { useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import Login from "./pages/Auth/Login/Login";
import Main from "./pages/Persons/MainPage/Main";
import CreatePerson from "./pages/Persons/CreateRegister/CreatePerson";
import EditPerson from "./pages/Persons/EditPerson/EditPerson";

const App = () => {
    const { isAuthenticated } = useSelector(state => state?.auth);

    return (
        <Router>
            {isAuthenticated && <Header />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/main' element={<Main/>}/>
                    <Route exact path='/create' element={<CreatePerson/>}/>
                    <Route exact path='/edit/:id' element={<EditPerson/>}/>
                </Route>
            </Routes>
        </Router>
    );
};
export default App;
