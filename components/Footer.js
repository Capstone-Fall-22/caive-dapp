import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image';
import { socials } from '../public/socials/socials.js';


const socialItems = [
  {
    name: "Discord",
    image: socials.Discord,
    link: "https://discord.gg/2Z8Z7Yj"
  },
  {
    name: "Figma",
    image: socials.Figma,
    link: "https://www.figma.com/file/jKn9A5h6sD5xUpKYqKysFF/ai-gen-nft-display-page?node-id=5%3A38"
  },
  {
    name: "Github",
    image: socials.Github,
    link: "https://github.com/Capstone-Fall-22"
  },
  {
    name: "Opensea",
    image: socials.opensea,
    link: "https://testnets.opensea.io/"
  }
]


const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.logo}>SCAiPES</h1>
      <div className={styles.social}>
        {socialItems.map((item, index) => {
          return (
            <a href={item.link} key={index} padding="0 10px">
              <Image src={item.image} alt={socialItems.name} height='25px' width='25px' />
            </a>
          )
        }
        )}

      </div>
    </div>
  )
}

export default Footer