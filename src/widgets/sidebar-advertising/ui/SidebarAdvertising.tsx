import { FC } from "react";
import styles from "./SidebarAdvertising.module.scss";
import { DefaultAvatarIcon } from "src/shared/assets/icons/default-avatar";
import { LogoutIcon } from "src/shared/assets/icons/logout";
import { ButtonWithIcon } from "src/shared/ui/button-with-icon";

export const SidebarAdvertising: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <DefaultAvatarIcon />
        </div>

        <div className={styles.info}>
          <span className={styles.name}>Василий</span>
          <span className={styles.tokens}>9 012 TKN</span>
        </div>
      </div>

      <ButtonWithIcon>
        <LogoutIcon />
      </ButtonWithIcon>
    </div>
  );
};
