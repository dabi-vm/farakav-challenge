import { MenuItem } from "@mui/material";
import { ComponentProps, ForwardedRef, forwardRef } from "react";
import { CTextField } from "../CTextfield/CTextField";

interface IProps extends Omit<ComponentProps<typeof CTextField>, "ref"> {
  options: {
    label: string;
    value: string | number;
  }[];
}

export const CSelect = forwardRef(
  <T extends HTMLInputElement>(
    { options, ...props }: IProps,
    ref: ForwardedRef<T>
  ) => {
    return (
      <CTextField
        {...props}
        ref={ref}
        fullWidth
        variant="outlined"
        size="small"
        select
        SelectProps={{
          native: false,
        }}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CTextField>
    );
  }
);

CSelect.displayName = "CSelect";
