import { Check } from "@components/icons";
import classNames from "classnames";
import { FC } from "react";
import styles from "./ProductSwatch.module.css";
import { isDark } from "lib/color";

interface Props {
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
  active?: boolean;
  onClick: () => void;
}

const ProductSwatch: FC<Props> = ({
  color,
  label,
  variant,
  active,
  ...rest
}) => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();

  const rootClassName = classNames(styles.root, {
    [styles.active]: active,
    [styles.size]: variant === "size",
    [styles.color]: color,
    [styles.dark]: color && isDark(color),
  });

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}

      {variant === "size" ? label : null}
    </button>
  );
};

export default ProductSwatch;
