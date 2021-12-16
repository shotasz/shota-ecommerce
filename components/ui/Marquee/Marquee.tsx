import { ReactNode, FC } from "react";
import Ticker from "react-ticker";
import styles from "./Marquee.module.css";

interface Props {
  children: ReactNode[];
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <Ticker offset={80}>
      {() => (
        <div className={styles.root}>
          <div className={styles.container}>{children}</div>
        </div>
      )}
    </Ticker>
  );
};

export default Marquee;
