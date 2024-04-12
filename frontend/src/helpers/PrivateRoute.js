import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const isAuthenticated = useSelector(state => state?.auth);

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
