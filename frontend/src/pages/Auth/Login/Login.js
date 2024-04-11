import React, { useState } from "react";
import {
    Avatar,
    Button, Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    Typography
} from "@mui/material";


import { BaseInput } from "../../../components/BaseInput/BaseInput";
import { styles } from "./styles";
import { LockPersonOutlined } from "@mui/icons-material";
import { BaseButton } from "../../../components/BaseButton/BaseButton";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={styles.paper}>
                    <Avatar style={styles.avatar}>
                        <LockPersonOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <BaseInput
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                            autoComplete="email"
                        />
                        <BaseInput
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <BaseButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={styles.submit}
                        >
                            Sign In
                        </BaseButton>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgot-password" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register" variant="body2">
                                    Dont have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}

