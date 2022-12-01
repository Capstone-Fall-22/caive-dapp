import React from 'react'
import GalleryImage from '../components/GalleryImage';

import fs from 'fs';
import path from 'path';
import { ethers } from 'ethers';

const Gallery = ({ imageURLs }) => {
  return (
    <div>
        {
            Object.values(imageURLs).map((url) => {
                return (
                    <GalleryImage url={url} />
                )
            })
        }

    </div>
  )
}

export async function getServerSideProps() {
    // Get list of burned IDs from contract
    // Load their metadata from google storage
    // return list of image URLS (load the images on the client side since ipfs can take a while)
    const abi = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'json', `${process.env.CONTRACT_ADDRESS}.json`), 'utf8')).abi;
    const provider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_API_KEY);
    const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, provider);
    const burnedIds = await contract.getBurntTokenIds();
  
    let burnedTokenMetadataURLs = {};
    burnedIds.map((id) => {
      burnedTokenMetadataURLs[id] = `https://storage.googleapis.com/scaipes-metadata/${id}.json`;
    });
  
    let imageURLs = {};
    for (const [id, url] of Object.entries(burnedTokenMetadataURLs)) {
      let metadata = await fetch(url);
      metadata = await metadata.json();
      imageURLs[id] = metadata.image;
    }
  
    for (const [id, url] of Object.entries(imageURLs)) {
      imageURLs[id] = url.replace('ipfs://', 'https://ipfs.io/ipfs/');
    }
  
    return {
      props: {
        imageURLs
        // contract
      }
    }
  }

export default Gallery