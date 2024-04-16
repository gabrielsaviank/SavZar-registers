import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";


type BaseInputType = {
    id?: string | undefined;
    label?: string | null;
    type?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
    autoComplete?: string;
};

export const BaseInput = ({
  label,
  type,
  value,
  onChange,
  autoFocus,
  autoComplete,
  ...props
}: BaseInputType) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={label}
            type={showPassword ? "text" : type}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            InputProps={{
                endAdornment: type === "password" && (
                    <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            {...props}
        />
    );
};
