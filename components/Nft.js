import styles from '../styles/Nft.module.css'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import GalleryImage from "./GalleryImage";
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from "./EmblaCarouselThumb";
import Close from '../public/Close.png'
import MintMe from "./mintMe";

const Nft = ({ imageURLs, abi, contractAddress }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        selectedClass: "",
        dragFree: true
    });

    const onThumbClick = useCallback(
        (index) => {
            if (!embla || !emblaThumbs) return;
            if (emblaThumbs.clickAllowed()) { console.log(index); embla.scrollTo(index); }
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
    const [listOpen, setListOpen] = useState(false);
    const toggleList = () => setListOpen(!listOpen);
    const [imageToken, setImageToken] = useState(null);
    return (
        <div id='nft' className={styles["nftPage"]}>
            <h1 className={styles.pageTitle}>A Living Art Exhibit</h1>
            <div>
                <label className={styles["toggle"]} >
                    <input type="checkbox" onClick={toggleList} />
                    <span className={styles["slider"]}></span>
                    <span className={styles["labels"]} data-on="gallery" data-off="grid"></span>
                </label>
            </div>
            <div className={styles.carousel} style={{ display: listOpen ? "none" : "block" }}>
                <div className={`${styles["embla"]}`}>
                    <div className={styles["embla__viewport"]} ref={mainViewportRef}>
                        <div className={styles["embla__container"]}>
                            {Object.keys(imageURLs).map((id, index) => {
                                if (index < 5) {
                                    return (
                                        <div key={index} className={styles.embla__slide}>
                                            <div className={styles["embla__slide__inner"]} onClick={() => { toggle(); setImageToken(id) }}>
                                                <Image src={imageURLs[id]} width={1080} height={720} alt={selectedIndex} />
                                            </div>
                                        </div>
                                    )
                                }
                            }
                            )}
                        </div>
                    </div>
                </div>
                <div className={`${styles["embla--thumb"]} ${styles["embla"]} }`}>
                    <div className={styles["embla__viewport"]} ref={thumbViewportRef}>
                        <div className={`${styles["embla__container"]} ${styles["embla__container--thumb"]}`}>
                            {Object.keys(imageURLs).map((id, index) => {
                                if (index < 5) {
                                    return (
                                        <Thumb
                                            onClick={() => { onThumbClick(index); setSelectedIndex(index) }}
                                            selected={index === selectedIndex}
                                            imgSrc={imageURLs[id]}
                                            key={id}
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {
                modalIsOpen ?
                    <div id='popup' style={{ display: modalIsOpen ? "block" : "none" }} className={styles.pop}>
                        <Image src={Close} alt='close' onClick={toggle} className={styles.Close} height="30vh" width="30vw" />
                        <MintMe imageToken={imageToken} abi={abi} contractAddress={contractAddress} />
                        <div>
                            <Image src={Object.values(imageURLs)[selectedIndex]} width={1080} height={720} className={styles.imageView} alt={selectedIndex} />
                        </div>
                    </div>
                :
                    null
            }
            <div className={styles.list} style={{ display: listOpen ? "block" : "none" }}>
                <div className={styles.listContainer} >
                    {Object.keys(imageURLs).map((id, index) => {
                        if (index < 10) {
                            return (
                                <div key={id} className={styles.listItem}>
                                    <div className={styles.listItemInner} onClick={toggle}>
                                        <Image src={imageURLs[id]} className={`${styles.listItemImg}`} width={1080} height={720} onClick={toggle} alt={id} />
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}



export default Nft;
