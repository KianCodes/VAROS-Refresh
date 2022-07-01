import React from 'react'
import styles from 'styles/Home.module.scss'
import Link from 'next/link'

const ProductBlock = () => {
  return (
    <div id="product" className={styles.mainProduct}>
        <img className={styles.mobileApp} alt="MobileApp" src="/images/product2.png" />
        <div className={styles.productWrapper}>
          <h1 className={styles.subTitle}>Product</h1>
          <p>
            <span className={styles.lightRed}>
              {"Mobile-based "}
            </span> application for
            <span className={styles.lightRed}> {" subject-specific adherence "} </span>
            and
            <span className={styles.lightOrange}>{" web-based "}</span> 
            graphics editor for 
            <span className={styles.lightOrange}>{" clinical study enrollment. "}</span>
            <Link className={styles.threejsLink} href="/threejs">
              <img className={styles.webEditor} alt="WebEditor" src="images/webeditor.png" />
            </Link>
          </p>
        </div>
      </div>
  )
}

export default ProductBlock