//styles
import styles from "./Info.module.css";
import { Vector } from "../../assets/svg/Vector";

export const Info = () => {
  return (
    <div className={styles["services-info"]}>
      <h1>Our Services</h1>
      <div className={styles["services-info-options"]}>
        <div className={styles["services-info-option"]}>
          <Vector />
          <div className={styles["services-info-text"]}>
            <h3>Car Hire</h3>
            <p>
              We pride ourselves in always going the extra mile for our
              customers.
            </p>
          </div>
        </div>
        <div className={styles["services-info-option"]}>
          <Vector />
          <div className={styles["services-info-text"]}>
            <h3>Car Sales</h3>
            <p>
              we sale the best luxury cars across the world at a competitive
              price.
            </p>
          </div>
        </div>
        <div className={styles["services-info-option"]}>
          <Vector />
          <div className={styles["services-info-text"]}>
            <h3>Hire a driver</h3>
            <p>
              you want to travel and fell confortable , our drivers are
              available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
