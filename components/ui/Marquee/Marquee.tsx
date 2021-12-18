import { ReactNode, FC } from "react";
import Ticker from "react-ticker";
import classNames from "classnames";
import styles from "./Marquee.module.css";

interface Props {
  children: ReactNode[];
  variant?: "primary" | "secondary";
}

const Marquee: FC<Props> = ({ children, variant = "primary" }) => {
  const rootClassName = classNames(styles.root, {
    [styles.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() => <div className={styles.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
