//! ⬇️ We are going to use the component as an client component because by default in the next js component will be used as an server side component
"use client";

import React, { useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  //* This is temporary for getting status from the state
  const status = "Not Authenticated";

  return (
    // ? ⬇️ This is condition we are going to use if the user not authenticated then show only that login
    <>
      {status === "Not Authenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        // ? ⬇️ If it logged in then show the Write and Logout
        <>
          <Link className={styles.link} href="/write">
            Write
          </Link>
          <span className={styles.Link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* ⬇️ If its open then create my own menu for mobile view */}
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "Not Authenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.Link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
