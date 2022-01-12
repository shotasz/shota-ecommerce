import { Container } from "@components/ui";
import { Usernav } from "@components/common";
import Link from "next/link";
import { FC } from "react";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={styles.logo}>Lite-EC</a>
          </Link>

          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={styles.link}>すべてのアイテム</a>
            </Link>

            <Link href="/">
              <a className={styles.link}>トップス</a>
            </Link>

            <Link href="/">
              <a className={styles.link}>ボトムス</a>
            </Link>

            <Link href="/">
              <a className={styles.link}>シューズ</a>
            </Link>
          </nav>

          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
