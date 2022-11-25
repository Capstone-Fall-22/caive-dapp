import React from 'react'
import styles from '../styles/User.module.css'

const user = () => {
    return (
        <div className={styles.users}>
            <h3>owned NFTs</h3>
            <div className={styles.ListOwnNft}>
                <div className={styles.OwnNft}>1</div>
                <div className={styles.OwnNft}>2</div>
                <div className={styles.OwnNft}>3</div>
                <div className={styles.OwnNft}>4</div>
                <div className={styles.OwnNft}>5</div>
                <div className={styles.OwnNft}>6</div>
                <div className={styles.OwnNft}>7</div>
                <div className={styles.OwnNft}>8</div>
                <div className={styles.OwnNft}>9</div>
                <div className={styles.OwnNft}>10</div>
                <div className={styles.OwnNft}>11</div>
                <div className={styles.OwnNft}>12</div>
                <div className={styles.OwnNft}>13</div>
                <div className={styles.OwnNft}>14</div>
            </div>
            <p>move to galery page to see all NFTs</p>
        </div>
    )
}

export default user
