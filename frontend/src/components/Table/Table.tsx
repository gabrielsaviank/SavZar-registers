import React from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody, Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PersonType } from "../../helpers/types";

export const BaseTable = ({ data }: any) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Sex</TableCell>
                    <TableCell>Birthdate</TableCell>
                    <TableCell>Marital Status</TableCell>
                    <TableCell>Addresses</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.map((row: any) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.sex}</TableCell>
                        <TableCell>{row.birthdate}</TableCell>
                        <TableCell>{row.maritalStatus}</TableCell>
                        <TableCell>{row.addresses.length}</TableCell>
                        <TableCell>
                            <Button onClick={() => console.log("")} style={{ color: "#348ceb" }}>
                                <EditIcon />
                            </Button>

                            <Button onClick={() => console.log("")} style={{ color: "#fc8114" }}>
                                <DeleteIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

