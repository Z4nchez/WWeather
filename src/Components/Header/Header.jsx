import React from 'react'
import styles from "../Header/Header.module.css"

function Header() {
  return (
    <div className={styles.Header}>
        <div className={styles.logoCont}>
            <img src="nubes2.svg" alt="" />
        </div>
    </div>
  )
}

export default Header