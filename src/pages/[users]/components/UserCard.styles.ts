import { Avatar, Card, Chip, styled } from "@mui/material";

export const StyledUserCard = styled(Card)(({ theme }) => ({
  position: "relative",
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
}));

export const StyledUserAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  marginBottom: theme.spacing(4),
}));

export const StyledUserChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(2),
}));
