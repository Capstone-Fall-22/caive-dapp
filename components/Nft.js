import styles from '../styles/Nft.module.css'
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

// const slides = [
//     {
//         title: "Machu Picchu",
//         subtitle: "Peru",
//         description: "Adventure is never far away",
//         image:
//             "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Chamonix",
//         subtitle: "France",
//         description: "Let your dreams come true",
//         image:
//             "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Mimisa Rocks",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Four",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Five",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     }
// ];
const Nft = () => {
    // let imgObject = [
    //     "https://placeimg.com/450/450/any",
    //     "https://placeimg.com/450/450/animals",
    //     "https://placeimg.com/450/450/architecture",
    //     "https://placeimg.com/450/450/nature",
    //     "https://placeimg.com/450/450/people",
    //     "https://placeimg.com/450/450/tech",
    //     "https://picsum.photos/id/1/450/450",
    //     "https://picsum.photos/id/8/450/450",
    //     "https://picsum.photos/id/12/450/450",
    //     "https://picsum.photos/id/15/450/450",
    //     "https://picsum.photos/id/5/450/450",
    // ];

    // let mainImg = 0;
    // let prevImg = imgObject.length - 1;
    // let nextImg = 1;

    // function loadGallery() {

    //     let mainView = document.getElementById("mainView");
    //     mainView.style.background = "url(" + imgObject[mainImg] + ")";

    //     let leftView = document.getElementById("leftView");
    //     leftView.style.background = "url(" + imgObject[prevImg] + ")";

    //     let rightView = document.getElementById("rightView");
    //     rightView.style.background = "url(" + imgObject[nextImg] + ")";

    //     let linkTag = document.getElementById("linkTag")
    //     linkTag.href = imgObject[mainImg];

    // };

    // function scrollRight() {

    //     prevImg = mainImg;
    //     mainImg = nextImg;
    //     if (nextImg >= (imgObject.length - 1)) {
    //         nextImg = 0;
    //     } else {
    //         nextImg++;
    //     };
    //     loadGallery();
    // };

    // function scrollLeft() {
    //     nextImg = mainImg
    //     mainImg = prevImg;

    //     if (prevImg === 0) {
    //         prevImg = imgObject.length - 1;
    //     } else {
    //         prevImg--;
    //     };
    //     loadGallery();
    // };

    // document.getElementById("navRight").addEventListener("click", scrollRight);
    // document.getElementById("navLeft").addEventListener("click", scrollLeft);
    // document.getElementById("rightView").addEventListener("click", scrollRight);
    // document.getElementById("leftView").addEventListener("click", scrollLeft);
    // document.addEventListener('keyup', function (e) {
    //     if (e.keyCode === 37) {
    //         scrollLeft();
    //     } else if (e.keyCode === 39) {
    //         scrollRight();
    //     }
    // });

    // loadGallery();
    return (
        <div id='nft' className={styles["nftPage"]}>
            <h1>NFT</h1>
            <div className={styles["carousel"]}>
                <div className={styles["carousel-body"]}>
                    <div className={styles["carousel-prev"]}>
                        <div id='leftView'></div>
                        <button id='navLeft' className={styles["navBtns"]}>
                            <img src={FaAngleLeft} alt="arrow-left" />
                        </button>
                    </div>
                    <div className={styles["carousel-items"]}>
                    </div>
                    <div className={styles["carousel-next"]}>
                        <div id='rightView'></div>
                        <button id='navRight' className={styles["navBtns"]}>
                            <img src={FaAngleRight} alt="arrow-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nft;
