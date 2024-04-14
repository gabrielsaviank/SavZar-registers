import React from "react";
import { Button } from "@mui/material";

type BaseButtonType = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    fullWidth?: boolean;
    variant?: "text" | "outlined" | "contained";
    color?: "inherit" | "primary" | "secondary" | "success" | "warning" | "error";
    style?: React.CSSProperties;
    onClick?: () => void;
};

export const BaseButton = ({
   children,
   type,
   fullWidth,
   variant,
   color,
   style,
   ...props
}: BaseButtonType) => {
    return (
        <Button
            type={type}
            fullWidth={fullWidth}
            variant={variant}
            color={color}
            style={style}
            {...props}
        >
            {children}
        </Button>
    );
};
