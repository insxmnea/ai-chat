import { FC, PropsWithChildren } from "react";
import styles from "./ButtonWithIcon.module.scss";

type Props = {
  handleClick?: () => void;
};

export const ButtonWithIcon: FC<PropsWithChildren<Props>> = ({
  children,
  handleClick,
}) => {
  return (
    <button className={styles.wrapper} onClick={handleClick}>
      {children}
    </button>
  );
};
