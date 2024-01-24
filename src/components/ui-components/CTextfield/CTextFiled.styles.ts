import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));
