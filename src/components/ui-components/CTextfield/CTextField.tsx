import { TextField, TextFieldProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

export type CTextFieldProps = Omit<TextFieldProps, "ref">;

export const CTextField = forwardRef(
  <T extends HTMLDivElement>(
    { type, size = "small", inputProps, ...props }: CTextFieldProps,
    ref: ForwardedRef<T>
  ) => {
    return (
      <TextField
        ref={ref}
        inputProps={{
          ...(type === "number" && {
            inputMode: "numeric",
          }),
          ...inputProps,
        }}
        {...props}
      />
    );
  }
);

CTextField.displayName = "CTextField";
