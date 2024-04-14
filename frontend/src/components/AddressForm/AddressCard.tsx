import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";

import { BaseButton } from "../BaseButton/BaseButton";
import { BaseInput } from "../BaseInput/BaseInput";
import { AddressType } from "../../helpers/types";

type  AddressCardType =  {
    address: AddressType;
    onDelete: () => void;
    onChange: (field: string, value: string | number) => void;
    action?: string;
}

export const AddressCard: React.FC<AddressCardType> = ({ address, onDelete, onChange, action }) => {
    const handleFieldChange = (field: string, value: string | number) => {
        onChange(field, value);
    };

    const onDeleteAddress = () => {
        console.log("Delete");
    };

    return (
        <Card style={{ width: "35%", marginTop: "20px" }}>
            <CardContent>
                <BaseInput
                    label={action === "edit" ? null : "Post code"}
                    value={address.postCode}
                    onChange={(event) => handleFieldChange("postCode", event.target.value)}
                />
                <BaseInput
                    label={action === "edit" ? null : "Neighbourhood"}
                    value={address.neighbourhood}
                    onChange={(event) => handleFieldChange("neighbourhood", event.target.value)}
                />
                <BaseInput
                    label={action === "edit" ? null : "Number *"}
                    value={address.number}
                    onChange={(event) => handleFieldChange("number", Number(event.target.value))}
                />
                <BaseInput
                    label={action === "edit" ? null : "Complement"}
                    value={address.complement}
                    onChange={(event) => handleFieldChange("complement", event.target.value)}
                />
                <BaseInput
                    label={action === "edit" ? null : "Street"}
                    value={address.street}
                    onChange={(event) => handleFieldChange("street", event.target.value)}
                />
                <BaseInput
                    label={action === "edit" ? null : "City"}
                    value={address.city}
                    onChange={(event) => handleFieldChange("city", event.target.value)}
                />
                <BaseInput
                    label={action === "edit" ? null : "State"}
                    value={address.state}
                    onChange={(event) => handleFieldChange("state", event.target.value)}
                />
            </CardContent>
            <CardActions>
                {action === "edit" ? (
                    <BaseButton color="error" onClick={onDeleteAddress}>
                        Delete
                    </BaseButton>
                    ) : (
                    <BaseButton color="primary" onClick={onDelete}>
                        Close
                    </BaseButton>
                )}

            </CardActions>
        </Card>
    );
};
