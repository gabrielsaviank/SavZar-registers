import React, { FormEvent, useState } from "react";
import { Container, Card } from "@mui/material";
import { Typography } from "@mui/material";

import { BaseInput } from "../../../components/BaseInput/BaseInput";
import { BaseButton } from "../../../components/BaseButton/BaseButton";
import { useDispatch } from "react-redux";

import { createPerson } from "../../../ducks/actions/PersonsActions";
import { RootState } from "@reduxjs/toolkit/query";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AddressCard } from "../../../components/AddressForm/AddressCard";

const CreatePerson = () => {
    const dispatch: ThunkDispatch<RootState<any, any, any>, unknown, any> = useDispatch();
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [showAddressCard, setShowAddressCard] = useState(false);
    const [addresses, setAddresses] = useState([]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(createPerson({ name, sex, birthDate, maritalStatus, addresses }));
    };

    const handleAddAddress = () => {
        setShowAddressCard(true);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setAddresses([...addresses, {
            postCode: "",
            neighbourhood: "",
            number: 0,
            complement: "",
            street: "",
            city: "",
            state: ""
        }]);
    };

    console.log("ADDRESSES", addresses);
    const handleDeleteAddress = (index: number) => {
        const updatedAddresses = [...addresses];
        updatedAddresses.splice(index, 1);
        setAddresses(updatedAddresses);
    };

    const handleAddressChange = (index: number, field: string, value: string | number) => {
        setAddresses(prevAddresses => {
            const updatedAddresses = [...prevAddresses];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const updatedAddress = { ...updatedAddresses[index], [field]: value };
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            updatedAddresses[index] = updatedAddress;
            return updatedAddresses;
        });
    };

    console.log("ADDRESSES", addresses);
    return (
        <Container style={{ paddingTop: 30 }}>
            <Typography variant="h4">Create Person</Typography>
            <form onSubmit={handleSubmit}>
                <BaseInput
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <BaseInput
                    label="Sex"
                    type="text"
                    value={sex}
                    onChange={(event) => setSex(event.target.value)}
                />
                <BaseInput
                    type="date"
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                />
                <BaseInput
                    label="Marital Status"
                    type="text"
                    value={maritalStatus}
                    onChange={(event) => setMaritalStatus(event.target.value)}
                />
                <Typography variant="h6">Addresses</Typography>
                {
                    showAddressCard && (
                        addresses.map((address, index) => (
                            <AddressCard
                                address={address}
                                key={index}
                                onChange={(field, value) => handleAddressChange(index, field, value)}
                                onDelete={() => handleDeleteAddress(index)}
                            />
                        ))
                    )
                }
                <div style={{ paddingTop: 40 }}>
                    <BaseButton
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={() => handleAddAddress()}
                    >
                        Add Address
                    </BaseButton>
                    <BaseButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => handleSubmit}
                    >
                        Submit
                    </BaseButton>
                </div>
            </form>
        </Container>
    );
};

export default CreatePerson;
