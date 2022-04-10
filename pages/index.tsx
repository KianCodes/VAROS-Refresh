import Head from 'next/head'
import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/Home.module.scss'
import TeamMemberBlock from '@/components/home/TeamMemberBlock'
import MissionBlock from '@/components/home/MissionBlock'
import WelcomeBlock from '@/components/home/WelcomeBlock'

export default function Home() {
  const videoRef = useRef(null)
  const [inView, setInView] = useState(true)
  const endPosition = 349

  useEffect(() => {
    videoRef.current.play()

    document.addEventListener('scroll', function (e) {
      let scrollEvent = window.pageYOffset
      if (inView && scrollEvent > endPosition) {
        videoRef.current.pause()
        setInView(false)
      }
      if (!inView && scrollEvent <= endPosition) {
        videoRef.current.play()
      }

      // if(videoRef.current.currentTime === videoRef.current.duration) {
      //   videoRef.current.defaultPlaybackRate = 0;
      // }
    })
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>VAROS</title>
        <meta
          name="description"
          content="Virtual and Augmented Reality Organ Systems"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WelcomeBlock />

        <div className={styles.videoMask}>
          <video width="650" ref={videoRef}>
            <source
              src="/videos/VAROS_Liver_ANI.1.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <MissionBlock />
        <TeamMemberBlock />
      </main>
    </div>
  )
}
