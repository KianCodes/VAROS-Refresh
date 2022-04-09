import React from "react"
import styles from "../../styles/Layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = {
    children: React.ReactNode,
  };
  
  export default function Layout({ children }: LayoutProps) {
    return (
      <div className={styles.layoutContainer}>
        <Header />
        <div className={styles.contentContainer}>
          <div className={styles.pageContainer}>{children}</div>
        </div>
        <Footer />
      </div>
    );
  }