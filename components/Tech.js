import React from 'react'
import styles from '../styles/Tech.module.css'
const technologies = [
    {
        "title": "Web Scraping",
        "body": "The purpose of this AI art generator is so that we can have images for our tokens without having to create these images ourselves \n AI has proven to be a great creative tool, especially when it comes to generating images \n We will leverage the specific generative model type known as GANs. \n To train this model we need, Dataset, Training environment + code, Hosting "
    }, {
        "title": "Smart Contracts",
        "body": "Computer program that stored on blockchain, Automate the execution of agreements, Works as Middleman "
    }, {
        "title": "BackEnd",
        "body": "To generate and upload the images Whenever an image is purchased, the backend sends a prediction to TensorFlow Serving to output a generated image. The resulting output is converted into an image and is uploaded to the InterPlanetary File System or IPFS and given a content identifier, or CID. That CID is then saved for whenever the image is needed, and can be used to regenerate the image."
    }, {
        "title": "FrontEnd",
        "body": "The frontend is a Visible, client-side part of any web application or web site which is responsible for user experience. Users interact with the front-end part using client devices (PC, smartphone) and web browsers. Frameworks include but not limited to React, AngularJS, Bootstrap, jQuery"
    }
]
const Tech = () => {
    return (
        <div id="tech" className={styles["Tech"]}>
            <h1 className={styles["pageTitle"]}>Tech</h1>
            <div className={styles["tech-container"]}>
                {technologies.map((item, index) => {
                    return (
                        <div key={index} className={styles["technology"]}>
                            <h1 className={styles["title"]}>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tech
