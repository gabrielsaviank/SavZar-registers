import React from "react";
import { Card ,CardContent, Typography } from "@mui/material";
import { AddressType } from "../../helpers/types";

export const AddressCard = ({ address }: {address: AddressType}) => (
    <Card variant="outlined">
        <CardContent>
            <Typography variant="h6" component="h3">
                {address?.neighbourhood}, {address?.city} - {address?.state}
            </Typography>
            <Typography color="textSecondary">
                Postcode: {address?.postCode} | Number: {address?.number} | Complement: {address?.complement}
            </Typography>
        </CardContent>
    </Card>
);
