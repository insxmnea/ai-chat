import { FC } from "react";
import { SidebarChatIcon } from "src/shared/assets/icons/sidebar-chat";
import { TrashIcon } from "src/shared/assets/icons/trash";
import styles from "./ChatRowItem.module.scss";
import { ButtonWithIcon } from "src/shared/ui/button-with-icon";

export const ChatRowItem: FC = () => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.content}>
        <SidebarChatIcon />
        <span>Новый чат</span>
      </div>
      <ButtonWithIcon>
        <TrashIcon />
      </ButtonWithIcon>
    </li>
  );
};
