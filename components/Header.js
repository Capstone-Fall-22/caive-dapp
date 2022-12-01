import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../public/icons/icons.js';
import styles from '../styles/Header.module.css';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from './providerOption.js';
import PopUp from './PopUp.js';
import { useRouter } from 'next/router.js';

const Header = () => {
  const router = useRouter();

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
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggle = () => setMenuOpen(!menuOpen);

  const [Web3Provider, setWeb3Provider] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const web3Modal = new Web3Modal({
      network: "Goerli", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });
    setModal(web3Modal);
    if(web3Modal.cachedProvider){
      instance = web3Modal.connect().then(() => {
        provider = new ethers.providers.Web3Provider(instance);
        if (provider) {
          setWeb3Provider(provider);
        }
      });

      instance.on("accountsChanged", (accounts) => {
        modal.clearCachedProvider();
        setWeb3Provider(null);
        setAddress('');
        router.push("/");
      });
      
    }
  }, []);
  

  const click = async () => {
    
    instance = await modal.connect();
    // instance.on('accountsChanged', () => {
    //   modal.clearCachedProvider();
    // });
    // instance.on('chainChanged', () => {
    //   modal.clearCachedProvider();
    // });

    provider = new ethers.providers.Web3Provider(instance);
    if (provider) {
      setWeb3Provider(provider)
    }

    signer = provider.getSigner();
    setAddress(await signer.getAddress());
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.left}>
        <Link href='/'>
          <h1 className={styles.logo}>SCAiPES</h1>
        </Link>
        <ul className={styles.dropDownContent}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path} replace>
                  <div className={styles.link}>
                    <Image src={item.image} alt={item.name} height='30px' width='30px' />
                    <span className={styles.linkName}>{item.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.right}>
        <div id="connectionInfo">
          {Web3Provider == null
            ? <button className={styles.connect} onClick={click}>connect</button>
            : <Link href='/user'><p className={styles.account}>address:  {address.substr(0, 5) + '...' + address.substr(address.length - 4, address.length)} </p></Link>
          }
        </div>
      </div>
      {showPopup? <PopUp text={popUpText} /> : null }
    </div>
  )
}

export default Header;

