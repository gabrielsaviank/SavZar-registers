import React from "react";
import { Button } from "@mui/material";


export const BaseButton = ({
   children,
   type,
   fullWidth,
   variant,
   color,
   style,
   ...props
}) => {
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
