import styles from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
