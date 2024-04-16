import React, { useEffect, useMemo } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

import { AddressCard } from "../../../components/AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPersonById } from "../../../ducks/actions/PersonsActions";
import { AddressType } from "../../../helpers/types";


const PersonDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { persons } = useSelector((state: any) => state?.persons);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(fetchPersonById(id));
    }, [dispatch, id]);

    const renderPersonDetails = useMemo(() => {
        if (!persons || !persons.addresses) return null;

        return (
            <div>
                <Typography variant="h5" component="h2">
                    {persons.name}
                </Typography>
                <Typography color="textSecondary">
                    Sex: {persons.sex} | Birthdate: {persons.birthDate} | Marital Status: {persons.maritalStatus}
                </Typography>
                {persons.addresses.map((address: AddressType, index: string) => (
                    <AddressCard key={index} address={address} />
                ))}
            </div>
        );
    }, [persons]);

    return (
        <Card style={{ marginTop: 50 }}>
            <CardContent>
                {renderPersonDetails}
            </CardContent>
            <Button color="primary" onClick={() => navigate("/main")}>
                Back
            </Button>
        </Card>
    );
};

export default PersonDetails;
