import { toUpperCaseFirstLetter } from "@farakav-challenge/utils/strings";
import { AppBar, Container, Toolbar } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const path = router.asPath.split("/");
  const lastPathPart = path[path.length - 1];

  const pageTitle =
    lastPathPart === ""
      ? "Home"
      : lastPathPart === "users"
      ? toUpperCaseFirstLetter(lastPathPart)
      : "";

  return (
    <>
      <Head>
        <title>Farakav Challenge</title>
      </Head>
      <main>
        <AppBar position="static">
          <Toolbar>{pageTitle}</Toolbar>
        </AppBar>
        <Container maxWidth="sm">{children}</Container>
      </main>
    </>
  );
};

export default Layout;
