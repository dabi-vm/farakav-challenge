import Layout from "@farakav-challenge/components/layout";
import Providers from "@farakav-challenge/components/providers";
import { PropsWithChildren } from "react";

export default function Home({ children }: PropsWithChildren<{}>) {
  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  );
}
