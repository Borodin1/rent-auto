//components
import { Book } from "../Book";

//styles
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles['home-page']}>
      <div className={styles["home"]}>
        <div className={styles["home-banner"]}>
          <div className={styles["home-text"]}>
            <h1>safer ,faster and comfortable</h1>
            <p>Get in touch with our luxury cars</p>
          </div>
        </div>
        <Book />
      </div>
    </div>
  );
};
