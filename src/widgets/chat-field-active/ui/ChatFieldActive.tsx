import { FC } from "react";
import { ChatSettings } from "src/widgets/chat-settings";
import { InputMessage } from "src/widgets/input-message";
import styles from "./ChatFieldActive.module.scss";

export const ChatFieldActive: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ChatSettings />
      <InputMessage />
    </div>
  );
};
