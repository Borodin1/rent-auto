//styles
import styles from "./Blog.module.css";

//assetsSVG
import { Settings } from "../../assets/svg/Settings";
import { Travel } from "../../assets/svg/Travel";
import { User } from "../../assets/svg/User";

const DUMMY_DATA_BLOG = [
  {
    id: "bl1",
    title: "Book with flexibility",
    description: "Easily find car and book   with no change fees.",
    img: <Travel />,
  },
  {
    id: "bl2",
    title: "Trusted and free",
    description: "We’re completely free to use – no hidden charges or fees..",
    img: <Settings />,
  },
  {
    id: "bl3",
    title: "We know travel ",
    description:
      "With 10 years of experience, we're ready to help find your perfect car",
    img: <User />,
  },
];

export const Blog = () => {
  return (
    <div className={styles["blog"]}>
      <div className={styles["blog-title"]}>
        <h2>Fell the best experience with our luxury car</h2>
      </div>
      <div className={styles["blog-cards"]}>
      
        {DUMMY_DATA_BLOG.map((props) => {
          const isBackGr = props.id === "bl2" || props.id === "bl3";

          return (
            <div key={props.id} className={styles["blog-card"]}>
              <div className={isBackGr ? styles["blog-pic"] : ""}>
                {props.img}
              </div>
              <div className={styles["blog-text"]}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
