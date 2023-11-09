//styles
import styles from './Header.module.css'


export const Header=()=>{

    return(
    <div className={styles.header}>
<div className={styles["header-logo"]}>
    <h1>LuxuryCars</h1>
</div>
<div>
<div className={styles['header-navigation']}>
<ul>
    <li>Home</li>
    <li>Services</li>
    <li>Blog</li>
    <li>Contact us</li>
</ul>
</div>
</div>
    </div>)
}