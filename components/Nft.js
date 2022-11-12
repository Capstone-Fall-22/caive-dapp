import styles from '../styles/Nft.module.css'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { images } from '../public/images/images.js'
import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'

const Nft = ({ slides }) => {
    const menuItems = [
        {
            name: "billboard",
            image: images.billboard
        },
        {
            name: "spotify",
            image: images.spotify
        },
        {
            name: "wiki",
            image: images.wiki
        }
    ]

    // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
    // useEffect(() => {
    //     if (emblaApi) {
    //         // Embla API is ready
    //     }
    // }, [emblaApi])
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

    return (
        <div id='nft' className={styles["nftPage"]}>
            <h1>NFT</h1>
            {/* a carousel that contains images from images.js */}
            {/* <div>
                <Image src={images[0]} alt="nft1" />
                <Image src={images[1]} alt="nft2" />
                <image src={images[2]} alt="nft3" />
            </div> */}

            <div className={styles["embla"]}>
                <div className={styles["embla__viewport"]} ref={mainViewportRef}>
                    <div className={styles["embla__Container"]}>
                        {menuItems.map((img, index) => {
                            return (
                                <div key={index} className={`${styles.testImage} ${styles.embla__slide}`}>
                                    <div className="embla__slide__inner">
                                        <Image src={img.image} alt={img.name} className={styles.embla__slide__img} />
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nft;
