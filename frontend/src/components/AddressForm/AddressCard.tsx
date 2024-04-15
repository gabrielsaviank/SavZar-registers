import React, { useEffect, useState } from "react";
import { Card, CardContent, CardActions } from "@mui/material";

import { BaseButton } from "../BaseButton/BaseButton";
import { BaseInput } from "../BaseInput/BaseInput";
import { AddressCardType } from "../../helpers/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchViaCep } from "../../ducks/actions/ViaActions";

export const AddressCard: React.FC<AddressCardType> = ({
   address,
   onDelete,
   onDeleteAddress,
   onChange,
    onCreateAddress,
   action,
   onUpdate
}) => {
    const dispatch = useDispatch();
    const { via } = useSelector((state: any) => state);
    const [populatedAddress, setPopulatedAddress] = useState({ ...address });

    useEffect(() => {
        const populateAddress = () => {
            if (action === "create") {
                setPopulatedAddress({
                    neighbourhood: via.data.bairro || "",
                    city: via.data.localidade || "",
                    complement: via.data.complemento || "",
                    state: via.data.uf || "",
                    street: via.data.logradouro || "",
                });
            }
        };

        populateAddress();
    }, [via, address]);

    const handleFieldChange = (field: string, value: string | number) => {
        onChange(field, value);


        if (action === "create" && field === "postCode") {
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                dispatch(fetchViaCep(value.toString()));
            } catch (error) {
                console.error("Error fetching address details:", error);
            }
        }
    };

    return (
        <Card style={{ width: "35%", marginTop: "20px" }}>
            <CardContent>
                <BaseInput
                    label={address?.postCode ? null : "Post code"}
                    value={populatedAddress?.postCode}
                    onChange={(event) => handleFieldChange("postCode", event.target.value)}
                />
                <BaseInput
                    label={address?.neighbourhood ? null : "Neighbourhood"}
                    value={populatedAddress?.neighbourhood}
                    onChange={(event) => handleFieldChange("neighbourhood", event.target.value)}
                />
                <BaseInput
                    label={address?.number ? null : "Number *"}
                    value={address.number}
                    onChange={(event) => handleFieldChange("number", Number(event.target.value))}
                />
                <BaseInput
                    label={address?.complement ? null : "Complement"}
                    value={populatedAddress?.complement}
                    onChange={(event) => handleFieldChange("complement", event.target.value)}
                />
                <BaseInput
                    label={address?.street ? null : "Street"}
                    value={populatedAddress.street}
                    onChange={(event) => handleFieldChange("street", event.target.value)}
                />
                <BaseInput
                    label={address?.city ? null : "City"}
                    value={populatedAddress.city}
                    onChange={(event) => handleFieldChange("city", event.target.value)}
                />
                <BaseInput
                    label={address?.state ? null : "State"}
                    value={populatedAddress.state}
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
