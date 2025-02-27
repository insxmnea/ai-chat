import { FC } from "react";
import styles from "./Sidebar.module.scss";
import { LogoIcon } from "src/shared/assets/icons/logo";
import { LangDropdown } from "src/widgets/lang-dropdown";
import { MinimizeIcon } from "src/shared/assets/icons/minimize";
import { AddChatIcon } from "src/shared/assets/icons/add-chat";
import { SearchIcon } from "src/shared/assets/icons/search";
import { ChatRowList } from "src/widgets/chat-row-list";

export const Sidebar: FC = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.sidebarTitle}>
        <LogoIcon />
        <LangDropdown />
      </div>

      <div className={styles.sidebarTop}>
        <div className={styles.buttonPanel}>
          <button className={styles.addChatButton}>
            <AddChatIcon />
          </button>

          <button className={styles.searchButton}>
            <SearchIcon />
          </button>
        </div>

        <MinimizeIcon />
      </div>

      <ChatRowList />
    </aside>
  );
};
