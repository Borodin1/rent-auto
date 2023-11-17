//styles
import styles from './Footer.module.css'

//assets
import {Twitter} from '../../assets/svg/Twitter'
import {Instagram} from '../../assets/svg/Instagram'
import {Facebook} from '../../assets/svg/Facebook'

export const Footer= ()=>{
    return(
        <div className={styles['footer']}>
        <div className={styles['footer-main']}>
<div className={styles['footer-links']}>
<div className={styles['footer-link-title']}>
Reservation
</div>
<ul className={styles['footer-link']}>
    <li>car hire</li>
    <li>modify or cancel</li>
    <li>Get a receipt</li>
</ul>
</div>
<div className={styles['footer-links']}>
<div className={styles['footer-link-title']}>
Customer servives  
</div>
<ul className={styles['footer-link']}>
    <li>Help / fAQS</li>
    <li>press</li>
    <li>blog</li>
    <li>contact Us</li>
</ul>
</div>
<div className={styles['footer-links']}>
<div className={styles['footer-link-title']}>
Company
</div>
<ul className={styles['footer-link']}>
    <li>About us</li>
    <li>carrer</li>
    <li>report & gorvenance</li>
</ul>
</div>
</div>
<div className={styles['footer-line']}></div>
<div className={styles['footer-logo']}>
    <h1>LuxuryCars</h1>
    <div className={styles['footer-social-networks']}>
        <Twitter/>
        <Facebook/>
        <Instagram/>
    </div>
</div>
        </div>)
}