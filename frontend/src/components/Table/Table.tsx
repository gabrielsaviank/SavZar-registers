import React, { useMemo } from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody, Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deletePerson } from "../../ducks/actions/PersonsActions";
import { useNavigate } from "react-router-dom";

export const BaseTable = ({ data }: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(deletePerson(id));
    };

    const tableRows = useMemo(() => {
        if (data && Array.isArray(data)) {
            return data.map((row: any) => (
                <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.sex}</TableCell>
                    <TableCell>{row.birthdate}</TableCell>
                    <TableCell>{row.maritalStatus}</TableCell>
                    <TableCell>{row.addresses?.length}</TableCell>
                    <TableCell>
                        <Button onClick={() => navigate(`/details/${row.id}`)} style={{ color: "#348ceb" }}>
                            Details
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => navigate(`/edit/${row.id}`)} style={{ color: "#348ceb" }}>
                            <EditIcon />
                        </Button>
                        <Button onClick={() => handleDelete(row.id)} style={{ color: "#fc8114" }}>
                            <DeleteIcon />
                        </Button>
                    </TableCell>
                </TableRow>
            ));
        } else {
            return null;
        }
    }, [data, navigate, handleDelete]);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Sex</TableCell>
                    <TableCell>Birthdate</TableCell>
                    <TableCell>Marital Status</TableCell>
                    <TableCell>Addresses</TableCell>
                    <TableCell>Details</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableRows}
            </TableBody>
        </Table>
    );
};

