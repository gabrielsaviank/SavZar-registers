import React from "react";
import { Route, Router } from "react-router-dom";


import history from "./history";
import Login from "./pages/Auth/Login";

const App = () => {
    return(
        <div>
            <Router history={history}>
                <Route path="/" exact component={Login}/>
            </Router>
        </div>
    );
};
export default App;
