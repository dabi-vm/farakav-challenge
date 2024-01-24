import { ButtonProps, CircularProgress } from "@mui/material";
import { ForwardedRef, ReactNode, forwardRef } from "react";
import { CButtonRootStyle } from "./CButton.styles";

export interface CButtonProps extends Omit<ButtonProps, "ref"> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

export const CButton = forwardRef(
  <T extends HTMLButtonElement>(
    { children, leftIcon, rightIcon, loading, ...props }: CButtonProps,
    ref: ForwardedRef<T>
  ) => {
    return (
      <CButtonRootStyle {...props} ref={ref}>
        {rightIcon}
        {loading ? <CircularProgress size={24} /> : children}
        {leftIcon}
      </CButtonRootStyle>
    );
  }
);

CButton.displayName = "CButton";
CButton.defaultProps = {
  variant: "outlined",
  color: "primary",
};
