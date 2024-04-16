import React, { FormEvent, useState } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

import { BaseInput } from "../../../components/BaseInput/BaseInput";
import { BaseButton } from "../../../components/BaseButton/BaseButton";
import { useDispatch, useSelector } from "react-redux";

import { createPerson } from "../../../ducks/actions/PersonsActions";
import { RootState } from "@reduxjs/toolkit/query";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AddressCard } from "../../../components/AddressForm/AddressCard";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { calculateAge, calculateDaysUntilBirthday } from "../../../helpers/calculateBirthdayDays";
import { fetchViaCep } from "../../../ducks/actions/ViaActions";
import "react-toastify/dist/ReactToastify.css";

const CreatePerson = () => {
    const dispatch: ThunkDispatch<RootState<any, any, any>, unknown, any> = useDispatch();
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [showAddressCard, setShowAddressCard] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const navigate = useNavigate();
    const { via } = useSelector((state: any) => state);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(createPerson({
            name,
            sex,
            birthDate,
            maritalStatus,
            addresses
        }));

        const age = calculateAge(birthDate);
        const daysUntilBirthday = calculateDaysUntilBirthday(birthDate);

        if (daysUntilBirthday === 0) {
            toast.success("🎉 Happy Birthday!");
        } else {
            toast.success(
                `🎉 Happy Birthday! You have ${age} and you have ${daysUntilBirthday} days until your birthday!`
            );
        }

        setTimeout(() => {
            navigate("/main");
        }, 3000);
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

    const handleDeleteAddress = (index: number) => {
        const updatedAddresses = [...addresses];
        updatedAddresses.splice(index, 1);
        setAddresses(updatedAddresses);
    };

    const handleAddressChange = async (index: number, field: string, value: string | number) => {
        if (field === "postCode" && value.toString().length === 8) {
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                await dispatch(fetchViaCep(value.toString()));
            } catch (error) {
                console.error("Error fetching address details:", error);
            }
        }

        const updatedFields = {
                postCode: via.data.cep,
                neighbourhood: via.data.bairro,
                city: via.data.localidade,
                complement: via.data.complemento,
                state: via.data.uf,
                street: via.data.logradouro,
        };

        const updatedAddress = { ...updatedFields, [field]: value };

        setAddresses(prevAddresses => {
            const updatedAddresses = [...prevAddresses];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            updatedAddresses[index] = updatedAddress;
            return updatedAddresses;
        });
    };

    return (
        <Container style={{ paddingTop: 30 }}>
            <Typography variant="h4">Create Person</Typography>
            <ToastContainer />
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
                                action={"create"}
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
                        style={{ marginTop: "30px" }}
                    >
                        Submit
                    </BaseButton>
                </div>
            </form>
        </Container>
    );
};

export default CreatePerson;
