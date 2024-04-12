import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export const Header = () => {
    return (
        <AppBar position="static" color={"transparent"}>
            <Toolbar>
                <Typography variant="h4">SavZar</Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
                    <Button color="inherit" sx={{ textTransform: "none" }}>
                    <span>
                      <Typography variant="body1">Registers</Typography>
                    </span>
                    </Button>
                    <Button color="inherit" sx={{ textTransform: "none" }}>
                    <span>
                      <Typography variant="body1">New Register</Typography>
                    </span>
                    </Button>
                    <Button color="inherit" sx={{ textTransform: "none" }}>
                        <span>
                          <Typography variant="body1">Profile</Typography>
                        </span>
                    </Button>
                    <Button color="primary" sx={{ textTransform: "none" }}>
                        <span>
                          <Typography variant="body1">Sign Out</Typography>
                        </span>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
