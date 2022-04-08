import Head from 'next/head'
import React, { useEffect,useState,useRef } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(true)
  const endPosition = 349;
  
  
  useEffect(() => {
    
    videoRef.current.play()

    document.addEventListener('scroll', function(e) {
      let scrollEvent = window.pageYOffset;
      if(inView && scrollEvent > endPosition) {
        videoRef.current.pause()
        setInView(false)
      }
      if(!inView && scrollEvent <= endPosition) {
        videoRef.current.play()
      }


      // if(videoRef.current.currentTime === videoRef.current.duration) {
      //   videoRef.current.defaultPlaybackRate = 0;
      // }

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
      <div id="about" className={styles.mainTeam}>
        <h1 className={styles.subTitle}>
          Meet the team
        </h1>
        <div className={styles.teamWrapper}>
          <div className={styles.teamRow}>
            <div className={styles.teamItem}>

              <div className={styles.imgLinkContainer}>
                <img className={styles.image} alt="andrew" src="/images/team/Andrew.jpg" />
                <div className={styles.imgLink}>
                  <a href="https://linktr.ee/andrewbouras">LinkTree</a>
                </div>
                
              </div>
              
              <h3>Andrew Bouras</h3>
              <p>President & CEO</p>
            </div>
            <div className={styles.teamItem}>

              <div className={styles.imgLinkContainer}>
                <img className={styles.image} alt="saket" src="/images/team/Saket.png" />
                <div className={styles.imgLink} >
                  <a href="https://www.linkedin.com/in/saket-bikmal-620692173/">LinkedIn</a>
                </div>
              </div>

                <h3>Saket Bikmal</h3>
              <p>Vice-President & COO</p>
            </div>
            <div className={styles.teamItem}>

              <div className={styles.imgLinkContainer}> 
                <img className={styles.image} alt="leo" src="/images/team/kian2.jpg" />
                <div className={styles.imgLink} >
                  <a href="https://www.linkedin.com/in/gunnar-nelson-3878ba114/">LinkedIn</a>
                </div>
              </div>

              <h3>Leo Stone</h3>
              <p>Software Engineer & Project Manager</p>
            </div>
          </div>
          <div className={styles.teamRow}>
            <div className={styles.teamItem}>

              <div className={styles.imgLinkContainer}> 
                <img className={styles.image} alt="cam" src="/images/team/Cam.JPG" />
                <div className={styles.imgLink} >
                  <a href="https://www.linkedin.com/in/cameron-ardani-b4a5011b3/">LinkedIn</a>
                </div>
              </div>

              <h3>Cameron Ardani</h3>
              <p>Biological Sciences & Sales</p>
            </div>
            <div className={styles.teamItem}>
              
              <div className={styles.imgLinkContainer}> 
                <img className={styles.image} alt="josh" src="/images/team/Josh.jpeg" />
                <div className={styles.imgLink} >
                  <a href="https://www.linkedin.com/in/josh-b-005613133/">LinkedIn</a>
                </div>
              </div>

              <h3>Josh Bradley</h3>
              <p>Finance, Marketing, & Sales</p>
            </div>
            <div className={styles.teamItem}>
              
              <div className={styles.imgLinkContainer}> 
                <img className={styles.image} alt="shakiba" src="/images/team/Shakiba.png" />
                <div className={styles.imgLink} >
                  <a href="https://www.linkedin.com/in/sdavari/">LinkedIn</a>
                </div>
              </div>

              <h3>Shakiba Davari</h3>
              <p>Software Engineer</p>
            </div>
          </div>
          <div className={styles.teamRow}>
            <div className={styles.teamItem}>

              <div className={styles.imgLinkContainer}> 
                <img className={styles.image} alt="ronny" src="/images/team/Ronny.png" />
                <div className={styles.imgLink} >
                  <a href="linkedin.com/in/ronny-ghaida-82021918a">LinkedIn</a>
                </div>
              </div>
              
              <h3>Ronny Ghaida</h3>
              <p>Graphic Artist</p>
            </div>
            <div className={styles.teamItem}>
              
              <div className={styles.imgLinkContainer}> 
                <img className={styles.image} alt="michael" src="/images/team/Michael.jpeg" />
                <div className={styles.imgLink} >
                  <a href="https://www.linkedin.com/in/michael-j-joseph711/">LinkedIn</a>
                </div>
              </div>

              <h3>Michael Joseph</h3>
              <p>Web Developer</p>
            </div>
            <div className={styles.teamItem}>

              <div className={styles.imgLinkContainer}>   
                <img className={styles.image} alt="kian" src="/images/team/kian1.jpg" />
                <div className={styles.imgLink} >
                  <a href="https://github.com/KianCodes">GitHub</a>
                </div>
              </div>  

              <h3>Kian Maranon</h3>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
