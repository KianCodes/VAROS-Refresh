import React from 'react'
import styles from 'styles/Home.module.scss'
const WelcomeBlock = () => {
  return (
    <div className ={styles.welcomeBlock}>
      <h1 className={styles.title}>Welcome to </h1>
      <img
        className={styles.varosLogo}
        alt="VAROS Logo"
        src="/images/TransparentLogo-DarkTheme.png"
      />
      <span className={styles.varos}>
        <b className={styles.vLight}>{'Virtual '}</b>
        <b className={styles.andLight}> {' & '}</b>
        <b className={styles.aRed}>{'Augmented '}</b>
        <b className={styles.rLight}>{' Reality '}</b>
        <b className={styles.oOrange}>{'Organ '}</b>
        <b className={styles.sRedWhite}>Systems</b>
      </span>
    </div>
  )
}

export default WelcomeBlock
