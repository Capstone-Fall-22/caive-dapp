import styles from '../styles/Nft.module.css'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { images } from '../public/images/images.js'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from "./EmblaCarouselThumb";
// import GeneratePop from './GeneratePop';

import Close from '../public/Close.png'
import Generate from './Generate';

const Nft = () => {
    const menuItems = [
        {
            name: "image1",
            image: images.image1
        },
        {
            name: "image2",
            image: images.image2
        },
        {
            name: "image3",
            image: images.image3
        },
        {
            name: "image4",
            image: images.image4
        }
    ]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        selectedClass: "",
        dragFree: true
    });
    //thumbnail scroll on click
    const onThumbClick = useCallback(
        (index) => {
            if (!embla || !emblaThumbs) return;
            if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
        },
        [embla, emblaThumbs]
    );
    const onSelect = useCallback(() => {
        if (!embla || !emblaThumbs) return;
        setSelectedIndex(embla.selectedScrollSnap());
        emblaThumbs.scrollTo(embla.selectedScrollSnap());
    }, [embla, emblaThumbs, setSelectedIndex]);
    useEffect(() => {
        if (!embla) return;
        onSelect();
        embla.on("select", onSelect);
    }, [embla, onSelect]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggle = () => setModalIsOpen(!modalIsOpen)

    // const openImg = (image, imgName) => {
    //     toggle
    //     return (
    //         <div id='popup'>
    //             <Image src={Close} alt='close' />
    //             <Image src={image} alt={imgName} />
    //             <Generate />

    //         </div>
    //     )
    //     // < GeneratePop   imgSrc = { image } title = { imgName } />
    // }
    return (
        <div id='nft' className={styles["nftPage"]}>
            <h1 className={styles.pageTitle}>NFT</h1>
            <div className={styles["embla"]}>
                <div className={styles["embla__viewport"]} ref={mainViewportRef}>
                    <div className={styles["embla__container"]}>
                        {menuItems.map((img, index) => {
                            return (
                                <div key={index} className={styles.embla__slide}>
                                    <div className={styles["embla__slide__inner"]}>
                                        <Image src={img.image} alt={img.name}
                                            className={`${styles.embla__slide__img}`}
                                            onClick={toggle}
                                        // onClick={<GeneratePop imgSrc={img.image} name={img.name} />}
                                        />
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
            <div className={`${styles["embla"]} ${styles["embla--thumb"]}}`}>
                <div className={styles["embla__viewport"]} ref={thumbViewportRef}>
                    <div className={`${styles["embla__container"]} ${styles["embla__container--thumb"]}`}>
                        {menuItems.map((img, index) => (
                            <Thumb
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                imgSrc={img.image}
                                name={img.name}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div id='popup' style={{ display: modalIsOpen ? "block" : "none" }} className={styles.pop}>
                <Image src={Close} alt='close' onClick={toggle} className={styles.Close} />
                {/* <div className={styles.underline}></div> */}
                <div>
                    <Image src={menuItems[selectedIndex].image} className={styles.imageView} alt={menuItems[selectedIndex].name} />
                </div>
            </div>
        </div>
    )

}

export default Nft;
