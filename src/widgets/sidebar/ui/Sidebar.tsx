import { FC } from "react";
import styles from "./Sidebar.module.scss";
import { LogoIcon } from "src/shared/assets/icons/logo";
import { LangDropdown } from "src/widgets/lang-dropdown";

export const Sidebar: FC = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.sidebarTitle}>
        <LogoIcon />
        <LangDropdown />
      </div>
    </aside>
  );
};
