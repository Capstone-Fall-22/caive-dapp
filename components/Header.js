import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '../public/icons/icons.js';

import styles from '../styles/Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);
  const menuItems = [
    {
        path: "/nft",
        name: "NFT",
        image: Icons.NFT
    },
    {
        path: "/tech",
        name: "Tech",
        image: Icons.Tech
    },
    {
        path: "/about",
        name: "About",
        image: Icons.About
    },
    {
        path: "/timeline",
        name: "Timeline",
        image: Icons.TimeLine
    }

  ];
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>CAiVE</div>
      <div className={styles.connectWallet}><button>Connect Wallet</button></div>
      <div className={styles.menuButton}>
        <Image onClick={toggle} className={styles.blackIcon} height='25px' width='25px' src={Icons.ThreeBars}/>
        <div className={menuOpen? styles.dropDownMenu : styles.hide}>
          {menuItems.map((item, index) => {
            return (
              <div key={index}>
                <Link href={item.path}>
                  <div>
                    <Image src={item.image} height='25px' width='25px'/>
                    <span className={styles.linkName}>{item.name}</span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header;

