import Head from 'next/head'
import React, { useEffect,useState,useRef } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const videoRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false)
  const videoScrollRange = 349;

  useEffect(() => {
    const videoTimeRange = videoRef.current.duration;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
    
    document.addEventListener('scroll', function(e) {
      observer.observe(videoRef.current)

      let scrollEvent = window.pageYOffset;
      let videoTime = (scrollEvent/videoScrollRange)*videoTimeRange;
      videoRef.current.currentTime = videoTime;
    })
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>VAROS</title>
        <meta name="description" content="Virtual and Augmented Reality Organ Systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
        </h1>
        <img alt="VAROS Logo" src="/images/TransparentLogo-DarkTheme.png" />
        <span className={styles.varos}>
          <b className = {styles.vLight}>{"Virtual "}</b>
          <b> {" & "}</b>
          <b className = {styles.aRed} >{"Augmented "}</b>
          <b className = {styles.rLight} >{" Reality "}</b>
          <b className = {styles.oOrange} >{"Organ "}</b>
          <b className = {styles.sRedWhite}>Systems</b>
        </span>
        <div className = {styles.videoMask}  >
          <video width="650" ref={videoRef}>
            <source src="/videos/VAROS_Liver_ANI.1.mp4" type="video/mp4"></source>
          </video>
        </div>
      </main>
      <div id="mission" className={styles.mainMission}>
        <img alt="Organs" src="/images/redOrgans.png" />
        <div className={styles.missionWrapper}>
          <h1 className={styles.subTitle}>
            Mission
          </h1>
          <p>
            Facilitate the success of patients, healthcare practitioners, 
            and pharmaceutical companies through the use of innovative 
            technology to improve health literacy.
          </p>
        </div>
      </div>
      <div id="process" className={styles.mainProcess}>
        <h1 className={styles.subTitle}>
          Process
        </h1>
      </div>
      <div id="about" className={styles.mainTeam}>
        <h1 className={styles.subTitle}>
          Meet the team
        </h1>
      </div>
    </div>
  )
}
