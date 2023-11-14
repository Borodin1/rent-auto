//styles
import styles from './Card.module.css'

//assets
import speedmeter from "../../assets/speedmeter.png";
import pause from "../../assets/pause_circle_outline.png";
import vector from "../../assets/Vector.png";


export const Card = (props)=>{
    const {nameCar,id,img,year,mileage,pauseCircle,gas,price,offer} = props


    return(
        <div className={styles["container-auto"]} key={id}>
                <div className={styles["container-title"]}>
                  <h2>{nameCar}</h2>
                </div>
                <div className={styles["container-img"]}>
                  <img src={img} alt={nameCar} />
                </div>
                <div className={styles["container-description"]}>
                  <div className={styles["container-date"]}>{year}</div>
                  <div className={styles["container-indicators"]}>
                    <div>
                      <img src={speedmeter} alt="speedmeter" />
                      {mileage}
                    </div>
                    <div>
                      <img src={pause} alt="pauseCircle" />
                      {pauseCircle}
                    </div>
                    <div>
                      <img src={vector} alt="vector" />
                      {gas}
                    </div>
                  </div>
                  <div className={styles["container-price"]}>
                    <p>{price}$</p>

                    <button className={styles["container-offer"]}>
                      {offer}
                    </button>
                  </div>
                </div>
              </div>
    )
}