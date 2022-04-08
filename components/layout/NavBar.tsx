import React from 'react'
import styles from "../../styles/Layout.module.scss"
import Link from 'next/link'

function NavBar() {
  return (
    <div className = {styles.navBar}>
        <ul className = {styles.navBarMenu}>
            <li className = {styles.navBarLogo}>
                <Link href="/">
                    <a>
                        <img alt="VAROS Logo" src="/images/TransparentLogo-DarkTheme.png" />
                    </a>
                </Link>
            </li>
            <li className = {styles.navBarLinksWrapper}>
                <ul className = {styles.navBarLinks}>
                    <Link href="/#mission"><a>Mission</a></Link>
                    <Link href="/threejs"><a>Demo</a></Link>
                    <Link href="/#about"><a>About</a></Link>
                </ul>
            </li>
            <li className = {styles.navBarContact}>
                <Link href="/contact"><a>Contact</a></Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar