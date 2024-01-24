import { CLink } from "@farakav-challenge/components/ui-components/CLink/Clink";
import { Card, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Home({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Card
        sx={{
          margin: 10,
          padding: 10,
        }}
      >
        <Typography variant="h4" mb={2}>
          Welcome
        </Typography>
        <CLink href="/users">Got to Users page</CLink>
      </Card>
      {children}
    </>
  );
}
