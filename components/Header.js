import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../public/icons/icons.js';
import styles from '../styles/Header.module.css';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from './providerOption.js';


const Header = () => {
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
  let provider;
  let instance;
  let signer;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);

  const [Web3Provider, setWeb3Provider] = useState(null);
  const click = async () => {
    const web3Modal = new Web3Modal({
      network: "Goerli", // optional
      cacheProvider: false, // optional
      providerOptions // required
    });

    instance = await web3Modal.connect();

    provider = new ethers.providers.Web3Provider(instance);
    if (provider) setWeb3Provider(provider)

    signer = provider.getSigner();
  }
  return (
    <div className={styles.navBar}>
      <Link href='/'>
        <h1 className={styles.logo}>SCAiPES</h1>
      </Link>
      <div className={styles.left}>
        <div id="connectionInfo">
          {Web3Provider == null
            ? <button className={styles.connect} onClick={click}>connect</button>
            : <Link href='/user'><p className={styles.acount}>address:  {Web3Provider.provider.selectedAddress} </p></Link>
          }
        </div>
        <div className={styles.dropDownMenu}>
          <Image onClick={toggle} role='button' alt='menu' className={styles.blackIcon} height='25px' width='25px' src={Icons.ThreeBars} />
          <div className={styles.dropDownContent} style={{ display: menuOpen ? "block" : "none" }}>
            <ul>
              {menuItems.map((item) => {
                return (
                  <>
                    <li>
                      <Link href={item.path}>
                        <div className={styles.navPage}>
                          <Image src={item.image} alt={item.name} height='25px' width='25px' />
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    </li>
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

