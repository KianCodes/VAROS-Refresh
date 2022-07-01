import React from 'react'
import styles from 'styles/Home.module.scss'

const TimelineBlock = () => {
  return (
    <div id="timeline" className={styles.mainTimeline}>
      <div className={styles.timelineWrapper}>
        <h1 className={styles.subTitle}>Timeline</h1>
        <div className={styles.timelineP}>
              <h3>Website</h3>
              <ul>
                <li>
                  Design web-based 
                  <span className={styles.lightRed}>
                    {" recruitment material"}
                  </span>
                </li>
              </ul>
              <h3>App</h3>
              <ul>
                <li>
                  Develop a mobile application for 
                  <span className={styles.lightRed}>
                    {" subject adherence"}
                  </span>
                </li>
              </ul>
              <h3>Augmented Reality</h3>
              <ul>
                <li>
                  Incorporate augmented reality 
                  <span className={styles.lightRed}>
                    {" cross-compatibility"}
                  </span>
                </li>
              </ul>
              <h3>Virtual Reality</h3>
              <ul>
                <li>
                  Implement virtual reality technology into 
                  <span className={styles.lightRed}>
                    {" clinical trials"}
                  </span>
                </li>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default TimelineBlock