import { Button, styled } from '@mui/material';

export const CButtonRootStyle = styled(Button)((props) => ({
  ...(props.size === undefined && {
    height: 40,
    minWidth: 130,
    margin: 2,
  }),
}));
