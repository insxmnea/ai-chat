import { FC } from "react";
import styles from "./InputMessage.module.scss";
import { SendIcon } from "src/shared/assets/icons/send";

export const InputMessage: FC = () => {
  return (
    <form className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Спроси о чем-нибудь..."
      />
      <button className={styles.sendButton}>
        <SendIcon />
      </button>
    </form>
  );
};
