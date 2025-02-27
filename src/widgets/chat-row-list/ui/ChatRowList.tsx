import { FC } from "react";
import styles from "./ChatRowList.module.scss";
import { ChatRowItem } from "src/widgets/chat-row-item";

export const ChatRowList: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.chatsList}>
        <ChatRowItem />
        <ChatRowItem />
        <ChatRowItem />
        <ChatRowItem />
        <ChatRowItem />
      </ul>
    </div>
  );
};
