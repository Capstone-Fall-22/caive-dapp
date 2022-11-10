import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from '../styles/user.module.css';

const user = () => {
    return (
        <>
            <Header />
            <div>
                <div class={styles["grid-container"]}>
                    <div class="grid-item">1</div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>
                    <div class="grid-item">4</div>
                    <div class="grid-item">5</div>
                    <div class="grid-item">6</div>
                    <div class="grid-item">7</div>
                    <div class="grid-item">8</div>
                    <div class="grid-item">9</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default user
