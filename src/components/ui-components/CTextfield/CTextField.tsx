import { TextFieldProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { StyledTextField } from "./CTextFiled.styles";

export type CTextFieldProps = Omit<TextFieldProps, "ref">;

export const CTextField = forwardRef(
  <T extends HTMLDivElement>(
    { type, inputProps, ...props }: CTextFieldProps,
    ref: ForwardedRef<T>
  ) => {
    return (
      <StyledTextField
        ref={ref}
        inputProps={{
          ...(type === "number" && {
            inputMode: "numeric",
          }),
          ...inputProps,
        }}
        size="small"
        variant="standard"
        {...props}
      />
    );
  }
);

CTextField.displayName = "CTextField";
