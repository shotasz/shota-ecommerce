import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  ComponentType,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import { LoadingDots } from "@components/ui";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  isLoading?: boolean;
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>;
  href?: string;
}

const Button: FC<Props> = ({
  children,
  className,
  isLoading = false,
  Component = "button",
  ...rest
}) => {
  const rootClassName = classNames(styles.root, className, {
    [styles.loading]: isLoading,
  });

  return (
    <Component className={classNames(rootClassName)} type="button" {...rest}>
      {children}
      {isLoading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </Component>
  );
};

export default Button;
