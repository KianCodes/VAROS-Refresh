import React from 'react'
import styles from '../../styles/Layout.module.scss'
import Image from 'next/image'
function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/KianCodes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by &nbsp;
        <Image
          src="/images/hunnysoft-pot.png"
          alt="Hunnysoft Logo"
          height={48}
          width={48}
        />
      </a>
    </footer>
  )
}

export default Footer
