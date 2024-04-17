import React from "react";
import { Card, Typography, Container, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
    const navigate = useNavigate();
    const { auth }  = useSelector((state: any) => state);

    return (
        <Container style={{ marginTop: 30 }}>
            <Typography variant="h4">Profile</Typography>
            <Card style={{ height: 200 }}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                >
                    <Typography variant="h6">Email:</Typography>
                    <Typography variant="body1">{auth.user.email}</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={() => navigate("/")}
                    >
                        Delete
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};


export default Profile;
