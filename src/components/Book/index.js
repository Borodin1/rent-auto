//styles
import styles from "./Book.module.css";

//assets
import wherevote from "../../assets/where_to_vote.png";

export const Book = () => {
  return (
    <div className={styles["book-info"]}>
      <div className={styles["book"]}>
        <div className={styles["book-text"]}>
          <h1>Book your dream car now!</h1>
          <p>
            Rent a car online now from one of our worldwide locations. With over
            20 years’ experience in luxury car and customer services, all we
            need is your ID and you can book any car.
          </p>
        </div>
        <div className={styles["book-inputs"]}>
          <div className={styles['book-inputs-icons']}>
            <input type="text" />
          <img src={wherevote} alt="vote" />
          </div>
          <div className={styles['book-inputs-icons']}>
            <input type="text" />
          <img src={wherevote} alt="vote"/>
          </div>

          <input type="date" />
          <button>Book</button>
        </div>
      </div>
    </div>
  );
};
