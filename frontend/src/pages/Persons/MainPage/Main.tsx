import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersons } from "../../../ducks/actions/PersonsActions";
import { BaseTable } from "../../../components/Table/Table";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";


const Main = () => {
    const dispatch: ThunkDispatch<RootState<any, any, any>, unknown, any> = useDispatch();

    const { persons }  = useSelector((state: any) => state?.persons);
    // const isLoading = useSelector((state) => state.persons.isLoading);
    // const error = useSelector((state) => state.persons.error);

    useEffect(() => {
        dispatch(fetchPersons());
    }, []);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 5 }}>
            <Container>
                <Typography variant="h4">Registers</Typography>
                <BaseTable data={persons}/>
                <Stack spacing={2}>
                    <Pagination
                        count={persons.length}
                        page={1}
                        onChange={() => console.log("here")}
                    />
                </Stack>
            </Container>
        </Box>
    );
};


export default Main;
