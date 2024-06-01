import React from 'react'
import styles from "../Navbar.module.css";
import COLORS from '../Themes.js'

export const Navbar = () => {
  return (
   
    <div className={styles.container}>
        <span className={styles.left}>sneha</span>
        <span className={styles.right}>
            <span className='Link'>*</span>
            <span className='Link'>*</span>
            <span className='Link'>*</span>
        </span>
    </div>
  )
}
