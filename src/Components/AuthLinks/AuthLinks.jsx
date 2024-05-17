import React from 'react'
import styles from "./AuthLinks.module.css"
import Link from 'next/link'

const AuthLinks = () => {
  //* This is temporary
  const status = "Not Authenticated"
  
  return (
    <>
      {status === "Not Authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.Link}>Logout</span>
        </>
      )}
    </>
  )
}

export default AuthLinks
