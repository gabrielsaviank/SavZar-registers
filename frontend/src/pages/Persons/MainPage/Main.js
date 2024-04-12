import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersons } from "../../../ducks/actions/PersonsActions";
import { BaseTable } from "../../../components/Table/Table";
import { Container, Pagination, Stack } from "@mui/material";


const Main = () => {
    const dispatch = useDispatch();
    const { persons }  = useSelector((state) => state.persons);
    // const isLoading = useSelector((state) => state.persons.isLoading);
    // const error = useSelector((state) => state.persons.error);

    useEffect(() => {
        dispatch(fetchPersons());
    }, []);

    return (
        <Container>
            <h1>Persons</h1>
            <BaseTable data={persons}/>
            <Stack spacing={2}>
                <Pagination
                    count={persons.length}
                    page={null}
                    onChange={() => {}}
                />
            </Stack>
        </Container>
    );
};


export default Main;
