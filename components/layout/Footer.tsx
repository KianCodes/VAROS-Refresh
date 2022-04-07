import React from 'react'
import styles from "../../styles/Layout.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
        <a
          href="https://github.com/KianCodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <img src="/images/hunnysoft-pot.png" alt="Hunnysoft Logo"/>
          </span>
        </a>
      </footer>
  )
}

export default Footer