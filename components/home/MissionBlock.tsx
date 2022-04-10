import React from 'react'
import styles from 'styles/Home.module.scss'

const MissionBlock = () => {
  return (
    <div id="mission" className={styles.mainMission}>
        <img alt="Organs" src="/images/redOrgans.png" />
        <div className={styles.missionWrapper}>
          <h1 className={styles.subTitle}>Mission</h1>
          <p>
            Facilitate the success of patients, healthcare practitioners, and
            pharmaceutical companies through the use of innovative technology to
            improve health literacy.
          </p>
        </div>
      </div>
  )
}

export default MissionBlock