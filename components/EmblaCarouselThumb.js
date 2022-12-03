import React from "react";
import Image from 'next/image';
import styles from '../styles/Nft.module.css'

export const Thumb = ({ selected, onClick, imgSrc, name }) => (
    <div
        className={`${styles['embla__slide']} ${styles["embla__slide--thumb"]} ${selected ? styles['is-selected'] : ""
            }`}
    >
        <button
            onClick={onClick}
            className={`${styles["embla__slide__inner"]} ${styles["embla__slide__inner--thumb"]}`}
            type="button"
        >
            <Image className={styles["embla__slide__thumbnail"]} src={imgSrc} alt={name} width={1080} height={720} layout="responsive" />
        </button>
    </div>
);
