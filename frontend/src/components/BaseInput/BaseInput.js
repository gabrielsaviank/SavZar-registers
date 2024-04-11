import React from "react";
import { TextField } from "@mui/material";

export const BaseInput = ({
  label,
  type,
  value,
  onChange,
  autoFocus,
  autoComplete,
  ...props
}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={label}
            label={label}
            type={type}
            name={label}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};
