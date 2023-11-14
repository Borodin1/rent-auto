//styles
import styles from './Brand.module.css'

export const Brands =({name,id,img})=>{
    return(
        <div className={styles['brand']} key={id}>
        <div className={styles['brand-image']}>
          <img src={img} alt={name}/>
        </div>
        <h3>{name}</h3>
      </div>
    )
}