import React, { useEffect, useState } from "react";

import { Edit } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { BaseInput } from "../../../components/BaseInput/BaseInput";
import { AddressCard } from "../../../components/AddressForm/AddressCard";
import { BaseButton } from "../../../components/BaseButton/BaseButton";
import { fetchPersonById } from "../../../ducks/actions/PersonsActions";


const EditPerson = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { persons }  = useSelector((state: any) => state?.persons);
    const dispatch = useDispatch();

    const [personData, setPersonData] = useState({
        name: "",
        sex: "",
        birthDate: "",
        maritalStatus: "",
        addresses: [],
    });

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(fetchPersonById(id));
        setPersonData({
            name: persons.name,
            sex: persons.sex,
            birthDate: persons.birthdate,
            maritalStatus: persons.maritalStatus,
            addresses: persons.addresses,
        });
    }, []);


    const handleSubmit = () => {
        console.log("here");
    };

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setPersonData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Container style={{ paddingTop: 30, paddingBottom: 30 }}>
            <Typography variant="h4">Update Person</Typography>
            <form onSubmit={handleSubmit}>
                <BaseInput
                    label="Name"
                    type="text"
                    value={personData.name}
                    onChange={handleChange}
                />
                <BaseInput
                    label="Sex"
                    type="text"
                    value={personData.sex}
                    onChange={handleChange}
                />
                <BaseInput
                    type="date"
                    value={personData.birthDate}
                    onChange={handleChange}
                />
                <BaseInput
                    label="Marital Status"
                    type="text"
                    value={personData.maritalStatus}
                    onChange={handleChange}
                />
                <Typography variant="h6">Addresses</Typography>
                {
                    personData?.addresses.length > 0 && (
                        personData.addresses.map((address, index) => (
                            <AddressCard
                                address={address}
                                key={index}
                                action="edit"
                                onChange={() => console.log("here")}
                                onDelete={() => console.log("here")}
                            />
                        ))
                    )
                }
                <div style={{ paddingTop: 40 }}>
                    {/*<BaseButton*/}
                    {/*    type="button"*/}
                    {/*    variant="contained"*/}
                    {/*    color="primary"*/}
                    {/*    onClick={() => handleAddAddress()}*/}
                    {/*>*/}
                    {/*    Add Address*/}
                    {/*</BaseButton>*/}
                    <BaseButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => handleSubmit}
                        style={{ marginTop: "30px" }}
                    >
                        Submit
                    </BaseButton>
                </div>
            </form>
        </Container>
    );
};

export default EditPerson;
