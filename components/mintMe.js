import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from './providerOption.js';
import styles from '../styles/Nft.module.css'
const MintMe = ({ imageToken, abi, contractAddress }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupText, setPopupText] = useState("");

    const timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }

    const displayPopup = async (text, time) => {
        setPopupText(text);
        setShowPopup(true);
        await timeout(time);
        setShowPopup(false);
    }
    const router = useRouter()
    const mint = async (token) => {
        console.log(token)
        console.log(abi)
        console.log(contractAddress)
        const web3Modal = new Web3Modal({
            network: "Goerli", // optional
            cacheProvider: true, // optional
            providerOptions // required
        });

        const instance = await web3Modal.connect();

        const provider = new ethers.providers.Web3Provider(instance);

        const { chainId } = await provider.getNetwork();
        if (chainId != 5) {
            displayPopup("Please connect to Goerli Testnet", 5000);
            return;
        }

        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            await contract.publicMint(token, { value: ethers.utils.parseEther("0.01") })
        } catch (e) {
            displayPopup(e.message.substring(0, 100), 5000);
            return;
        }
        displayPopup("Minting successful", 3000);
        router.push("/user")

    }
    return (
        <>
            <button className={styles.mintButton} onClick={() => {
                mint(imageToken)
            }}>Mint</button>

        </>
    )
}

export default MintMe
