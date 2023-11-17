//styles
import styles from "./InviteList.module.css";

export const InviteList = () => {
  return (
    <div className={styles["invite-list"]}>
      <div className={styles["invite-list-info"]}>
        <div className={styles["invite-list-text"]}>
          <h2>become a driver </h2>
          <h2 className={styles["invite-list-goal"]}>
            Your time. Your goals. You're the boss.
          </h2>
        </div>
        <div className={styles["invite-list-box"]}>
          <h3>suscribe and joins us</h3>
          <div className={styles['invite-list-input']}>
            <input type="text" placeholder="Email"/>
            <button type="button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
