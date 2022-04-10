import React from 'react'
import styles from '../../styles/Layout.module.scss'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
