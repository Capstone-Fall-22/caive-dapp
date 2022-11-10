import React from 'react'
import styles from '../styles/Tech.module.css'
const technologies = [
    {
        "title": "Web Scraping",
        "body": "this is web scraping"
    }, {
        "title": "Smart Contracts",
        "body": "this is smart contracts"
    }, {
        "title": "backEnd",
        "body": "this is backend"
    }, {
        "title": "frontEnd",
        "body": "this is frontend"
    }
]
const Tech = () => {
    return (
        <div id="Tech" className={styles["Tech"]}>
            <h1 className={styles["pageTitle"]}>Tech</h1>
            <div className={styles["tech-container"]}>
                {technologies.map((item, index) => {
                    return (
                        <div key={index} className={styles["technology"]}>
                            <h1 className={styles["title"]}>{item.title}</h1>
                            <h3>{item.body}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tech
