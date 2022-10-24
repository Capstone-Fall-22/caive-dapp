import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer} style={{ position: "absolute", bottom: 0, width:"100vw", height: "5vh" }}>
        <button className={styles.mintButton}>Generate your own NFT now!</button>
    </div>
  )
}

export default Footer