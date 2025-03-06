import { FC } from "react";
import styles from "./InputField.module.scss";

type Props = {
  label: string;
  placeholder: string;
};

export const InputField: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <span>{props.label}</span>
      <input
        className={styles.input}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};
