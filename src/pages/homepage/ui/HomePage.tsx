import { FC } from "react";
import styles from "./HomePage.module.scss";
import { Sidebar } from "src/widgets/sidebar";
import { Chat } from "src/widgets/chat";

export const HomePage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Chat />
    </div>
  );
};
