import React from 'react'
import styles from "../../styles/Layout.module.scss"
import Link from 'next/link'

function NavBar() {
  return (
    <div className = {styles.navBar}>
        <ul className = {styles.navBarMenu}>
            <li className = {styles.navBarLogo}>
                <Link href="/">
                        <img alt="VAROS Logo" src="/images/TransparentLogo-DarkTheme.png" />
                </Link>
            </li>
            <li className = {styles.navBarLinksWrapper}>
                <ul className = {styles.navBarLinks}>
                    <Link href="/#mission">Mission</Link>
                    <Link href="/#product">Product</Link>
                    <Link href="/#timeline">Timeline</Link>
                    <Link href="/#about">About</Link>
                    {/* <Link href="/threejs"><a>Demo</a></Link> */}
                </ul>
            </li>
            <li className = {styles.navBarContact}>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar