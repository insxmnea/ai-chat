import { FC } from "react";
import { SidebarChatIcon } from "src/shared/assets/icons/sidebar-chat";
import { TrashIcon } from "src/shared/assets/icons/trash";
import styles from "./ChatRowItem.module.scss";

export const ChatRowItem: FC = () => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.content}>
        <SidebarChatIcon />
        <span>Новый чат</span>
      </div>
      <TrashIcon />
    </li>
  );
};
