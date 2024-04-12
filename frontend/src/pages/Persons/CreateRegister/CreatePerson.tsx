import React, { useState } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

import { BaseInput } from "../../../components/BaseInput/BaseInput";
import { BaseButton } from "../../../components/BaseButton/BaseButton";

const CreatePerson = () => {
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };


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
                <BaseButton
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={() => console.log("here")}
                >
                    Add Address
                </BaseButton>
                <BaseButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Submit
                </BaseButton>
            </form>
        </Container>
    );
};

export default CreatePerson;
