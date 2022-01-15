import { Check } from "@components/icons";
import classNames from "classnames";
import { FC } from "react";
import styles from "./ProductSwatch.module.css";
import { isDark } from "lib/color";

interface Props {
  size?: "sm" | "md" | "lg";
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
  size = "md",
  ...rest
}) => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();

  const rootClassName = classNames(styles.root, {
    [styles.active]: active,
    [styles.size]: variant === "サイズ",
    [styles.color]: color,
    [styles.dark]: color && isDark(color),
    [styles.sm]: size === "sm",
  });

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === "色" && active && (
        <span>
          <Check />
        </span>
      )}

      {variant === "サイズ" ? label : null}
    </button>
  );
};

export default ProductSwatch;
