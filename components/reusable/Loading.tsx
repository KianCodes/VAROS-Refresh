import React from 'react'
import styles from 'styles/Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loading}></div>
        <div className={styles.loadingText}>loading</div>
    </div>
  )
}

export default Loading
