import Layout from "@farakav-challenge/components/layout";
import { PropsWithChildren } from "react";

export default function Home({ children }: PropsWithChildren<{}>) {
  return <Layout>{children}</Layout>;
}
