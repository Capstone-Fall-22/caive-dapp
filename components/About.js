import React, { useEffect, useState } from "react";
// import about from './Json/About.json'
import styles from '../styles/About.module.css'

let team = [
    {
        "name": "Chen",
        "body": "Chen is currently a senior at Hunter College studying computer science. In the past, he has explored blockchain technologies and is a big believer in the future of blockchain and crypto. For this project, he worked on the art generating AI. For this, leveraged the power of openly available datasets and GANs. He hopes that the art generated can inspire you to create something amazing."
    }, {
        "name": "Zayen",
        "body": "Zayen Yusuf, Senior at Hunter College. Working on the backend of the project. Previous experiences include image editing and game modifications. Interesting in becoming a game dev"
    }, {
        "name": "Suresh",
        "body": "Suresh Dangol, a senior student at Hunter College majoring in computer science. I'm graduating in the Fall of 2022. On this 'AI Generated NFTs' project, I'm working on smart contracts, where the users can mint, burn, or replace the NFTs."
    }, {
        "name": "Kevin",
        "body": "Senior at Hunter College majoring in Computer Science. As the frontend of a website is something everyone will experience first, I hope to attract the right group of viewers to our page. I am interested in the intersection of technology and art. For this project, I worked on the front-end and back-end of the website. I hope that this project can inspire people to create their own NFTs."
    }
]
const About = () => {
    return (
        <div id="about" className={styles["About"]}>
            <h1 className={styles["pageTitle"]}>About</h1>
            <div className={styles["team-container"]}>
                {team.map((item, index) => {
                    return (
                        <div key={index} className={styles["member"]}>
                            <h1 className={styles["name"]}>{item.name}</h1>
                            <p>{item.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default About