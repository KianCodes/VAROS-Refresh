import React from 'react'
import styles from "../../styles/Layout.module.scss"

function NavBar() {
  return (
    <div className = {styles.navBar}>
        <ul className = {styles.navBarMenu}>
            <li className = {styles.navBarLogo}>
                <a href="/">
                    <img src="/images/TransparentLogo-DarkTheme.png" />
                </a>
            </li>
            <li className = {styles.navBarLinksWrapper}>
                <ul className = {styles.navBarLinks}>
                        <a href="/#mission">Mission</a>
                        <a href="/#process">Process</a>
                        <a href="/threejs">Demo</a>
                        <a href="/#about">About</a>
                </ul>
            </li>
            <li className = {styles.navBarContact}>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar