import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
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
          <a href="https://www.youtube.com/watch?v=q6EoRBvdVPQ">VAROS</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/threejs">
            <div className={styles.card}>
              <h2>Three.js &rarr;</h2>
              <p>Check out this cube bro</p>
            </div>
          </Link>
        </div>
      </main>

      
    </div>
  )
}
