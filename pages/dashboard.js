import React from 'react'
import styles from '../styles/dashboard.module.css'


const dashboard = () => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.leftmenu}>
                <ul>
                    <li>Profile</li>
                    <img src='./images/profile-svgrepo-com.svg'/>
                    <li>My Orders</li>
                    <img className={styles.imgorder} src='./images/social-connected-like-svgrepo-com.svg'/>
                    <li>Saved Articles</li>
                    <img className={styles.imgarticle} src='./images/rss-svgrepo-com.svg'/>
                    <li>Volunteers</li>
                    <img className={styles.imglist} src='./images/list-svgrepo-com.svg'/>
                    <li>Donate</li>
                    <img className={styles.imgdonate} src='./images/donate-svgrepo-com.svg'/>
                </ul>
            </div>
            <div className={styles.contentpage}>
                <h3>Smart School System</h3>
                <div>
                <img src='./images/undraw_educator_re_ju47.svg' alt='image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default dashboard