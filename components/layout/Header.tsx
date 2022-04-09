import React from 'react'
import styles from "../../styles/Layout.module.scss"
import NavBar from './NavBar'

function Header() {
  return (
    <div className = {styles.headerContainer}>
        <NavBar />
    </div>
  )
}

export default Header