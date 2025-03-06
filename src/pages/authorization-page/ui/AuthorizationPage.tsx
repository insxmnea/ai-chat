import { FC } from "react";
import styles from "./AuthorizationPage.module.scss";
import { ModalAuth } from "src/widgets/modal-auth";

export const AuthorizationPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ModalAuth />
    </div>
  );
};
