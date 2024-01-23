import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Farakav Challenge</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
