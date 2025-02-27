import { FC } from "react";
import styles from "./LangDropdown.module.scss";
import { ArrowDownIcon } from "src/shared/assets/icons/arrow-down";
import { LangIcon } from "src/shared/assets/icons/lang";

export const LangDropdown: FC = () => {
  return (
    <div className={styles.wrapper}>
      <LangIcon />
      <span className={styles.text}>RU</span>
      <ArrowDownIcon />
    </div>
  );
};
