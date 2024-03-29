import Layout from "@farakav-challenge/components/layout";
import Providers from "@farakav-challenge/components/providers";
import "@farakav-challenge/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
