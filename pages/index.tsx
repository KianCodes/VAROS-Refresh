import Head from 'next/head'
import React, { useEffect, useState, useRef } from 'react'
import styles from '/styles/Home.module.scss'
import TeamMemberBlock from '@/components/home/TeamMemberBlock'
import MissionBlock from '@/components/home/MissionBlock'
import ProductBlock from '@/components/home/ProductBlock'
import TimelineBlock from '@/components/home/TimelineBlock'
import WelcomeBlock from '@/components/home/WelcomeBlock'

export default function Home() {

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
          <video width="650px" controls/*ref={videoRef}*/>
            <source
              src="/videos/VAROS_Liver_ANI.1.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <MissionBlock />
        <ProductBlock />
        <TimelineBlock />
        <TeamMemberBlock />
      </main>
    </div>
  )
}
