import React, { useState } from "react";
import { Avatar, Container, CssBaseline, Typography } from "@mui/material";
import { BaseInput } from "../../../components/BaseInput/BaseInput";
import { BaseButton } from "../../../components/BaseButton/BaseButton";
import { PersonAdd } from "@mui/icons-material";

import { styles } from "../Login/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../../ducks/actions/AuthActions";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await dispatch(signup({ email, password }));
        await toast.success("🎉 User created successfully!");
        navigate("/main");
    };

    return (
        <div style={styles.mainDiv}>
            <Container component="main" maxWidth="xs">
                <ToastContainer/>
                <CssBaseline/>
                <div style={styles.paper as React.CSSProperties}>
                    <Avatar style={styles.avatar}>
                        <PersonAdd/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
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
                        <BaseButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={styles.submit}
                        >
                            Sign Up
                        </BaseButton>

                        <BaseButton
                            fullWidth
                            variant="contained"
                            color="warning"
                            style={styles.submit}
                            onClick={() => navigate("/")}
                        >
                            Back
                        </BaseButton>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Signup;
