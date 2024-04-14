import React from "react";
import { TextField } from "@mui/material";


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
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={label}
            type={type}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};
