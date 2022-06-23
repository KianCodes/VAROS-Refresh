import React from 'react'
import styles from 'styles/Home.module.scss'

const ProductBlock = () => {
  return (
    <div id="product" className={styles.mainProduct}>
        <div className={styles.productWrapper}>
          <h1 className={styles.subTitle}>Product</h1>
          <p>
            Facilitate the success of 
            <span className={styles.lightRed}>
              {" patients, healthcare practitioners, "}
            </span> and
            <span className={styles.lightRed}> {" pharmaceutical "} </span>
            companies through the use of 
            <span className={styles.lightOrange}>{" innovative technology "}</span> 
            to
            <span className={styles.lightOrange}>{" improve health literacy. "}</span>
          </p>
        </div>
      </div>
  )
}

export default ProductBlock