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
      path: "#nft",
      name: "NFT",
      image: Icons.NFT
    },
    {
      path: "#tech",
      name: "Tech",
      image: Icons.Tech
    },
    {
      path: "#about",
      name: "About",
      image: Icons.About
    },
    {
      path: "#timeline",
      name: "Timeline",
      image: Icons.TimeLine
    }

  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className={styles.navBar}>
      <h1 className={styles.logo} onClick={scrollToTop}>SCAiPES</h1>
      <div className={styles.left}>
        <button className={styles.connect}>connect</button>
        <div className={styles.dropDownMenu}>
          <Image onClick={toggle} role='button' alt='menu' className={styles.blackIcon} height='25px' width='25px' src={Icons.ThreeBars} />
          <div className={styles.dropDownContent} style={{ display: menuOpen ? "block" : "none" }}>
            <ul>
              {menuItems.map((item) => {
                return (
                  <>
                    <Link href={item.path}>
                      <li>
                        <div>
                          <Image src={item.image} alt={item.name} height='25px' width='25px' />
                          <span className={styles.linkName}>{item.name}</span>
                        </div>
                      </li>
                    </Link>
                  </>
                )
              })}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;

