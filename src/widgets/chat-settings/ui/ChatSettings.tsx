import { FC } from "react";
import { ChatGPTIcon } from "src/shared/assets/icons/chatgpt-icon";
import styles from "./ChatSettings.module.scss";
import { ArrowDownIcon } from "src/shared/assets/icons/arrow-down";

export const ChatSettings: FC = () => {
  return (
    <button className={styles.wrapper}>
      <ChatGPTIcon />
      <span className={styles.text}>ChatGPT</span>
      <ArrowDownIcon />
    </button>
  );
};
