import React from 'react'
import styles from '../styles/Timeline.module.css'
import cn from 'classnames'
const highlight = [
    {
        name: 'hightlight 1',
        bullets: {
            1: {
                name: 'project proposal',
                discription: 'we created a project proposal for our project'
            }
        }
    },
    {
        name: 'hightlight 2',
        bullets: {
            1: {
                name: "model dataset",
                discription: "we created a model dataset for our project"
            },
            2: {
                name: "kserve v1",
                discription: "we created a kserve v1 for our project"
            },
            3: {
                name: "frontEnd v1",
                discription: "we created a frontEnd v1 for our project"
            }
        }
    },
    {
        name: 'hightlight 3',
        bullets: {
            1: {
                name: "nft contract v1",
                discription: "we created a nft contract v1 for our project"
            },
            2: {
                name: "art generator v1",
                discription: "we created a art generator v1 for our project"
            },
        }
    },
    {
        name: 'hightlight 4',
        bullets: {
            1: {
                name: "nft contract v2",
                discription: "we created a nft contract v2 for our project"
            },
            2: {
                name: "tensorflow serving v1",
                discription: "we created a tensorflow serving v1 for our project"
            },
            3: {
                name: "frontEnd v2",
                discription: "we created a frontEnd v2 for our project"
            },
            4: {
                name: "bacnkEnd v1",
                discription: "we created a backEnd v1 for our project"
            }
        }
    }
]


const Timeline = () => {
    return (
        <div id='timeline' className={styles.timeline}>
            <h1>Timeline</h1>
            {
                highlight.map((item, index) => {
                    return (
                        <div key={index} className={styles.timelineMap}>
                            {index % 2 === 0 ?
                                //when mouse is over div, change opacity to 0
                                <div key={index} className={`${styles["container"]} ${styles["left"]}`}
                                    onMouseOver={(e) => {
                                        e.target.style.opacity = 1
                                    }}
                                >
                                    <div className={styles.content}>
                                        <h2 className={styles.highlight}>{item.name}</h2>
                                        <div className={styles.bullets}>
                                            {
                                                Object.values(item.bullets).map((bullet, index) => {
                                                    return (
                                                        <div key={index} className={styles.bullet}>
                                                            <h3>{bullet.name}</h3>
                                                            <p>{bullet.discription}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div> :
                                <div key={index} className={`${styles["container"]} ${styles["right"]}`}
                                    onMouseOver={(e) => {
                                        e.target.style.opacity = 1
                                    }}>
                                    <div className={styles.content}>
                                        <h2 className={styles.highlight}>{item.name}</h2>
                                        <div className={styles.bullets}>
                                            {
                                                Object.values(item.bullets).map((bullet, index) => {
                                                    return (
                                                        <div key={index} className={styles.bullet}>
                                                            <h3>{bullet.name}</h3>
                                                            <p>{bullet.discription}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                }
                )}
        </div>
    )
}

export default Timeline