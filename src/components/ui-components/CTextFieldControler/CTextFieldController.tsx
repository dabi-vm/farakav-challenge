import { Grid, GridProps } from "@mui/material";
import { ComponentPropsWithoutRef } from "react";
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import { CTextField } from "../CTextfield/CTextField";

interface IProps<T extends FieldValues> {
  inputProps?: ComponentPropsWithoutRef<typeof CTextField>;
  formProvider: UseFormReturn<T, any>;
  name: Path<T>;
  defaultValue?: any;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
  gridProps?: GridProps;
}

export const CTextFieldController = <T extends FieldValues>({
  inputProps,
  formProvider,
  name,
  defaultValue,
  rules,
  gridProps,
}: IProps<T>) => {
  return (
    <Grid item {...gridProps}>
      <Controller<T>
        name={name}
        control={formProvider.control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: controllerField }) => (
          <CTextField
            {...controllerField}
            {...inputProps}
            value={controllerField.value}
            onChange={controllerField.onChange}
            helperText={formProvider.formState.errors?.message as any}
            error={!!formProvider.formState.errors.name}
          />
        )}
      />
    </Grid>
  );
};
