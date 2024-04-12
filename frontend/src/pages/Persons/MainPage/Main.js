import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersons } from "../../../ducks/actions/PersonsActions";
import { BaseTable } from "../../../components/Table/Table";


const Main = () => {
    const dispatch = useDispatch();
    const { persons }  = useSelector((state) => state.persons);
    // const isLoading = useSelector((state) => state.persons.isLoading);
    // const error = useSelector((state) => state.persons.error);

    useEffect(() => {
        dispatch(fetchPersons());
    }, []);

    return (
        <div>
            <h1>Persons</h1>
            <BaseTable data={persons}/>
        </div>
    );
};

export default Main;
