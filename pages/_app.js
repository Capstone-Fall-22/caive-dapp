import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { providerOptions } from '../components/providerOption.js';
// import Web3Modal from "web3modal";
// import { ethers } from 'ethers';

// import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  // const [Web3Provider, setWeb3Provider] = useState(null);

  // const [modal, setModal] = useState(null);



  // useEffect(() => {
  //   const web3Modal = new Web3Modal({
  //     network: "Goerli", // optional
  //     cacheProvider: true, // optional
  //     providerOptions // required
  //   });

  //   setModal(web3Modal);

  //   let instance = web3Modal.connect().then(() => {
  //       let provider = new ethers.providers.Web3Provider(instance);

  //       if (provider) {
  //         setWeb3Provider(provider);
  //       }
  //     }
  //   );

  // }, []);

  // useEffect(() => {
  //   pageProps.Web3Provider = Web3Provider;
  // }, [Web3Provider]);


  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
