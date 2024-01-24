import { Typography } from "@mui/material";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type CLinkProps = PropsWithChildren<LinkProps>;

export const CLink = ({ children, ...props }: CLinkProps) => {
  return (
    <Link
      {...props}
      style={{
        textDecoration: "none",
      }}
    >
      <Typography variant="button" color="blueviolet">
        {children}
      </Typography>
    </Link>
  );
};
