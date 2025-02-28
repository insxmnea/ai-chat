import { FC } from "react";
import styles from "./Chat.module.scss";
import { ChatField } from "src/widgets/chat-field";
import { ChatFieldActive } from "src/widgets/chat-field-active";

export const Chat: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ChatField />
        <ChatFieldActive />
      </div>
    </div>
  );
};
