import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Layout = ({ children }: PageProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1238px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
