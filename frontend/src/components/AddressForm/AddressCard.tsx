import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";

import { BaseButton } from "../BaseButton/BaseButton";
import { BaseInput } from "../BaseInput/BaseInput";
import { AddressCardType } from "../../helpers/types";

export const AddressCard: React.FC<AddressCardType> = ({
   address,
   onDelete,
   onDeleteAddress,
   onChange,
    onCreateAddress,
   action,
   onUpdate,
}) => {
    const handleFieldChange = (field: string, value: string | number) => {
        onChange(field, value);
    };
    return (
        <Card style={{ width: "35%", marginTop: "20px" }}>
            <CardContent>
                <BaseInput
                    label={address?.postCode ? null : "Post code"}
                    value={address?.postCode}
                    onChange={(event) => handleFieldChange("postCode", event.target.value)}
                />
                <BaseInput
                    label={address?.neighbourhood ? null : "Neighbourhood"}
                    value={address?.neighbourhood}
                    onChange={(event) => handleFieldChange("neighbourhood", event.target.value)}
                />
                <BaseInput
                    label={address?.number ? null : "Number *"}
                    value={address?.number}
                    onChange={(event) => handleFieldChange("number", Number(event.target.value))}
                />
                <BaseInput
                    label={address?.complement ? null : "Complement"}
                    value={address?.complement}
                    onChange={(event) => handleFieldChange("complement", event.target.value)}
                />
                <BaseInput
                    label={address?.street ? null : "Street"}
                    value={address.street || address.street}
                    onChange={(event) => handleFieldChange("street", event.target.value)}
                />
                <BaseInput
                    label={address?.city ? null : "City"}
                    value={address.city}
                    onChange={(event) => handleFieldChange("city", event.target.value)}
                />
                <BaseInput
                    label={address?.state ? null : "State"}
                    value={address?.state}
                    onChange={(event) => handleFieldChange("state", event.target.value)}
                />
            </CardContent>
            <CardActions>
                {action === "edit" ? (
                    <>
                        <BaseButton color="error" onClick={onDeleteAddress}>
                            Delete
                        </BaseButton>
                        <BaseButton color="primary" onClick={onUpdate}>
                            Update
                        </BaseButton>
                    </>
                ) : (
                    <>
                        <BaseButton color="primary" onClick={onDelete}>
                            Close
                        </BaseButton>
                        {onCreateAddress && (
                            <BaseButton color="primary" onClick={() => onCreateAddress(address)}>
                                Add new Address
                            </BaseButton>
                        )}
                    </>
                )}
            </CardActions>
        </Card>
    );
};
