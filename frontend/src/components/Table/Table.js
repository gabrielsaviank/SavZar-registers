import React from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";


// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

export const BaseTable = ({ data }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Sex</TableCell>
                    <TableCell>Birthdate</TableCell>
                    <TableCell>Marital Status</TableCell>
                    <TableCell>Addresses</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.sex}</TableCell>
                        <TableCell>{row.birthdate}</TableCell>
                        <TableCell>{row.maritalStatus}</TableCell>
                        <TableCell>{row.addresses.length}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

