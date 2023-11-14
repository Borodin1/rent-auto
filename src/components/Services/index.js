//styles
import styles from "./Services.module.css";

//assets
import icon from "../../assets/2021_mercedes-benz_classe-c_cabriolet_amg-c-63-s_014_149 1.png";
import { Info } from "../Info";

export const Services = () => {
  return (
    <div className={styles["services"]}>
      <div className={styles["services-icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="558"
          height="514"
          viewBox="0 0 558 514"
          fill="none">
          <path
            d="M537.015 358.662C443.829 531.335 236.955 523 166.43 503.641C95.9055 484.282 -72.691 422.177 35.9765 205.183C144.644 -11.8106 314.618 -85.5898 346.124 131.442C377.63 348.474 630.2 185.99 537.015 358.662Z"
            fill="#CBC9C2"
            fillOpacity="0.56"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="532"
          height="470"
          viewBox="0 0 532 470"
          fill="none">
          <path
            d="M32.0026 91.4899C153.956 -49.1695 362.5 10.4863 409.224 25.3282C455.948 40.1701 617.81 141.982 472.485 320.245C327.159 498.508 152.692 535.485 166.251 332.284C179.81 129.083 -89.9512 232.149 32.0026 91.4899Z"
            fill="#F1BC00"
            fillOpacity="0.56"
          />
        </svg>

        <img src={icon} alt="icon" />
      </div>
      <Info/>
    </div>
  );
};
