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
import { useDispatch } from "react-redux";
import { login } from "../../../ducks/actions/AuthActions";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(login({ email, password }));
        navigate("/main");
    };

    return (
        <div style={styles.mainDiv}>
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
                                <Link
                                    to="/signup"
                                    onClick={() => navigate("/signup")} variant="body2"
                                >
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

