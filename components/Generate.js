import React from 'react'
import { useState } from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from './providerOption.js';
import styles from '../styles/generate.module.css';
import { useRouter } from 'next/router'
import PopUp from './PopUp.js';

const Generate = ({ abi, contractAddress }) => {
    const router = useRouter()
    const [showPopup, setShowPopup] = useState(false);
    const [popupText, setPopupText] = useState("");

    const timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }
    //show popup for error if user cancels or unable to generate
    const displayPopup = async (text, time) => {
        setPopupText(text);
        setShowPopup(true);
        await timeout(time);
        setShowPopup(false);
    }
    const execute = async () => {

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
            await contract.publicMint(0, { value: ethers.utils.parseEther("0.01") })
        } catch (e) {
            displayPopup(e.message.substring(0, 100), 5000);
            return;
        }
        displayPopup("Minting successful", 3000);
        router.push("/user")

    }
    return (
        <>
            {showPopup ? <PopUp text={popupText} /> : null}
            <button onClick={() => { execute() }} className={styles.Generate}>Generate</button>
        </>
    )
}
export default Generate