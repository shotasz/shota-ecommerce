import styles from "./Layout.module.css";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <main className="fit">{children}</main>
    </div>
  );
};

export default Layout;
