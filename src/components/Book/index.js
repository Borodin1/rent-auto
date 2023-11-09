//styles
import styles from "./Book.module.css";

export const Book = () => {
  return (
    <div className={styles['book-info']}>
    <div className={styles["book"]}>
      <div className={styles["book-text"]}>
        <h1>Book your dream car now!</h1>
        <p>
          Rent a car online now from one of our worldwide locations. With over
          20 years’ experience in luxury car and customer services, all we need
          is your ID and you can book any car.
        </p>
      </div>
      <div className={styles['book-inputs']}>
<input type="text"/>
<input/>
<input type="date"/>
<button/>
      </div>
      </div>
    </div>
  );
};
