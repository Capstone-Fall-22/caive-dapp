import React from 'react'
import styles from "../styles/PopUp.module.css";
const PopUp = (props) => {
  return (
    <div className={styles.popup}>
        {props.text}
    </div>
  )
}

export default PopUp