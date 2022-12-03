import React from 'react'
import styles from '../styles/User.module.css'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from '../components/providerOption.js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GalleryImage from '../components/GalleryImage';
import Image from 'next/image';
import Close from '../public/Close.png'

import fs from 'fs';
import path from 'path';

const user = ({ abi, provider, contractAddress }) => {
    const router = useRouter();
    const [imageURLs, setimageURLs] = useState({})
    const getOwnedTokens = async (address, web3Provider) => {
        const contract = new ethers.Contract(contractAddress, abi, web3Provider);
        const numTokensOwned = await contract.balanceOf(address);

        let ownedTokens = [];
        for (let i = 0; i < numTokensOwned; i++) {
            const token = await contract.tokenOfOwnerByIndex(address, i);
            ownedTokens.push(token);
        }

        ownedTokens = ownedTokens.map((token) => {
            return Number(token);
        });

        ownedTokens = [...new Set(ownedTokens)];

        return ownedTokens;
    }
    const getImageURLs = async (address, web3Provider) => {
        let ownedTokenIds = await getOwnedTokens(address, web3Provider);
        let ownedTokenMetadataURLs = [];
        for (let i = 0; i < ownedTokenIds.length; i++) {
            ownedTokenMetadataURLs.push(`https://storage.googleapis.com/scaipes-metadata/${ownedTokenIds[i]}.json`);
        }

        let ownedTokenImageURLs = {};
        for (let i = 0; i < ownedTokenMetadataURLs.length; i++) {
            const response = await fetch(ownedTokenMetadataURLs[i]);
            const data = await response.json();
            ownedTokenImageURLs[ownedTokenIds[i]] = data.image.replace('ipfs://', 'https://nftstorage.link/ipfs/');
        }

        return ownedTokenImageURLs;
    }
    const [selectedImage, setSelectedImage] = useState();
    // On load, check if the user has connected their wallet already if not,
    // redirect them to the home page. If they have, get their owned tokens
    useEffect(() => {
        const web3Modal = new Web3Modal({
            network: "Goerli", // optional
            cacheProvider: true, // optional
            providerOptions // required
        });

        const cachedProviderName = web3Modal.cachedProvider;

        if (!cachedProviderName) {
            router.push('/');
        } else {
            const web3Modal = new Web3Modal({
                network: "Goerli", // optional
                cacheProvider: true, // optional
                providerOptions // required
            });

            web3Modal.connectTo(web3Modal.cachedProvider).then(async (instance) => {
                const web3Provider = new ethers.providers.Web3Provider(instance);
                const signer = web3Provider.getSigner();
                const address = await signer.getAddress();
                const ownedImageURLs = await getImageURLs(address, web3Provider);
                return ownedImageURLs
            }).then((ownedImageURLs) => {
                setimageURLs(ownedImageURLs);
            });
        }
    }, []);

    const burn = async (token) => {
        // Load contract from process.env
        // const contractAddress = contractAddress;
        // Load ABI from file instead
        // const abi = abi
        const web3Modal = new Web3Modal({
            network: "Goerli", // optional
            cacheProvider: true, // optional
            providerOptions // required
        });
        const instance = await web3Modal.connect();

        console.log(selectedImage)
        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer)
        await contract.burnToken(token)
        router.reload()
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggle = () => setModalIsOpen(!modalIsOpen)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedToken, setSelectedToken] = useState(0);
    return (
        <div className={styles.users}>
            <h3>owned NFTs</h3>
            {Object.keys(imageURLs).length > 0 ?
                <div className={styles.ListOwnNft}>
                    {Object.keys(imageURLs).map((tokenId, index) => {
                        return (
                            <div key={tokenId} className={styles.OwnNft} onClick={() => { toggle(); setSelectedIndex(index); setSelectedToken(tokenId) }}>
                                <GalleryImage url={imageURLs[tokenId]} />
                                {/* {imageURLs[tokenId]} {tokenId} */}
                                {imageURLs[tokenId].substr(8, 8) + '...' + imageURLs[tokenId].substr(imageURLs[tokenId].length - 5, imageURLs[tokenId].length)}
                                <br />
                                {tokenId}
                            </div>
                        )
                    })}
                    <h1>{Object.keys(imageURLs).length}</h1>
                </div>
                :
                <h1>you do not own any NFTs</h1>
            }
            <p>move to galery page to see all NFTs</p>
            <div id='popup' style={{ display: modalIsOpen ? "block" : "none" }} className={styles.pop}>
                <Image src={Close} alt='close' onClick={toggle} className={styles.Close} height="30px" width="30px" />
                <button onClick={() => burn(selectedToken)} className={styles.burn} >burn</button>
                <div >
                    <Image src={Object.values(imageURLs)[selectedIndex]} className={styles.imageView} width={1080} height={720} alt={selectedIndex} />
                </div>
                {/* <GalleryImage url={Object.values(imageURLs)[selectedIndex]} className={styles.imageView} /> */}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const abi = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'json', `${process.env.CONTRACT_ADDRESS}.json`), 'utf8')).abi;
    let provider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_API_KEY);
    provider = JSON.parse(JSON.stringify(provider))

    return {
        props: {
            abi,
            provider,
            contractAddress: process.env.CONTRACT_ADDRESS
        }
    }
}

export default user
