import { FC } from "react";
import styles from "./ModalAuth.module.scss";
import { ButtonWithIcon } from "src/shared/ui/button-with-icon";
import { CloseIcon } from "src/shared/assets/icons/close";
import { InputField } from "src/widgets/input-field";

export const ModalAuth: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleRow}>
        <span className={styles.title}>Авторизация</span>
        <ButtonWithIcon>
          <CloseIcon />
        </ButtonWithIcon>
      </div>
      <form className={styles.body}>
        <InputField label="E-Mail" placeholder="Ваш E-Mail" />
        <InputField label="Пароль" placeholder="Ваш пароль" />
        <button className={styles.button}>Войти</button>
      </form>
    </div>
  );
};
