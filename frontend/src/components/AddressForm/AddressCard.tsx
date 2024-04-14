import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";


import { BaseButton } from "../BaseButton/BaseButton";
import { BaseInput } from "../BaseInput/BaseInput";

interface Address {
    postCode?: string;
    neighbourhood?: string;
    number?: number;
    complement?: string;
    street?: string;
    city?: string;
    state?: string;
}

interface AddressCardProps {
    address: Address;
    onDelete: () => void;
    onChange: (field: string, value: string | number) => void;
}

export const AddressCard: React.FC<AddressCardProps> = ({ address, onDelete, onChange }: any) => {

    const handleFieldChange = (field: string, value: string | number) => {
        onChange(field, value);
    };
    return (
        <Card style={{ width: "35%" }}>
            <CardContent>
                <BaseInput
                    label="Post Code"
                    value={address.postCode}
                    onChange={(event) => handleFieldChange("postCode", event.target.value)}
                />
                <BaseInput
                    label="Neighbourhood"
                    value={address.neighbourhood}
                    onChange={(event) => handleFieldChange("neighbourhood", event.target.value)}
                />
                <BaseInput
                    label="Number"
                    value={address.number}
                    onChange={(event) => handleFieldChange("number", event.target.value)}
                />
                <BaseInput
                    label="Complement"
                    value={address.complement}
                    onChange={(event) => handleFieldChange("complement", event.target.value)}
                />
                <BaseInput
                    label="Street"
                    value={address.street}
                    onChange={(event) => handleFieldChange("street", event.target.value)}
                />
                <BaseInput
                    label="City"
                    value={address.city}
                    onChange={(event) => handleFieldChange("city", event.target.value)}
                />
                <BaseInput
                    label="State"
                    value={address.state}
                    onChange={(event) => handleFieldChange("state", event.target.value)}
                />
            </CardContent>
            <CardActions>
                <BaseButton color="primary" onClick={onDelete}>
                    Close
                </BaseButton>
            </CardActions>
        </Card>
    );
};
