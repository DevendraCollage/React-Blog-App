import React from 'react'
import styles from "./ThemeToggle.module.css"
import Image from 'next/image'

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt='' height={14} width={14}/>
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt='' height={14} width={14}/>
    </div>
  )
}

export default ThemeToggle
