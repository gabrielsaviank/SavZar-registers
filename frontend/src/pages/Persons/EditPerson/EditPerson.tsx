import React, { useEffect, useState } from "react";

import { Edit } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { BaseInput } from "../../../components/BaseInput/BaseInput";
import { AddressCard } from "../../../components/AddressForm/AddressCard";
import { BaseButton } from "../../../components/BaseButton/BaseButton";
import { fetchPersonById, updatePerson } from "../../../ducks/actions/PersonsActions";


const EditPerson = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { persons } = useSelector((state: any) => state?.persons);
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
    }, [dispatch, id]);

    useEffect(() => {
        if (persons) {
            setPersonData({
                name: persons.name,
                sex: persons.sex,
                birthDate: persons.birthdate,
                maritalStatus: persons.maritalStatus,
                addresses: persons.addresses,
            });
        }
    }, [persons]);

    const handleSubmit = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(updatePerson(personData, id));
        navigate("/main");
    };

    const handleChange = (field: string, value: string) => {
        setPersonData((prevData: any) => ({
            ...prevData,
            [field]: value,
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
                    onChange={(event) => handleChange("name", event.target.value)}
                />
                <BaseInput
                    label="Sex"
                    type="text"
                    value={personData.sex}
                    onChange={(event) => handleChange("sex", event.target.value)}
                />
                <BaseInput
                    type="date"
                    value={personData.birthDate}
                    onChange={(event) => handleChange("birthDate", event.target.value)}
                />
                <BaseInput
                    label="Marital Status"
                    type="text"
                    value={personData.maritalStatus}
                    onChange={(event) => handleChange("maritalStatus", event.target.value)}
                />
                <Typography variant="h6">Addresses</Typography>
                {
                    personData?.addresses?.length > 0 && (
                        personData.addresses.map((address, index) => (
                            <AddressCard
                                address={address}
                                key={index}
                                action="edit"
                                onChange={(newAddress) => {
                                    setPersonData((prevData: any) => {
                                        const updatedAddresses = [...prevData.addresses];
                                        updatedAddresses[index] = newAddress;
                                        return {
                                            ...prevData,
                                            addresses: updatedAddresses,
                                        };
                                    });
                                }}
                                onDelete={() => {
                                    setPersonData((prevData: any) => {
                                        const updatedAddresses = [...prevData.addresses];
                                        updatedAddresses.splice(index, 1);
                                        return {
                                            ...prevData,
                                            addresses: updatedAddresses,
                                        };
                                    });
                                }}
                            />
                        ))
                    )
                }
                <div style={{ paddingTop: 40 }}>
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
