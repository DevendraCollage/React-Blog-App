import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";

const Navbar = () => {
  return (
    // ! ⬇️ This is our main container component for the navbar
    <div className={styles.container}>
      {/* ⬇️ This is the social media icons show on the left */}
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/Linkedin.png" alt="linkedin" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      {/* ⬇️ This is the logo will show in the navbar in the center */}
      <div className={styles.logo}>DevBlog</div>
      {/* ⬇️ This is the links will move to that this will show on the navbar to the right side */}
      <div className={styles.links}>
        {/* ⬇️ This is our theme toggle button to toggle to dark and light mode */}
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/">
          Contact
        </Link>
        <Link className={styles.link} href="/">
          About
        </Link>
        {/* ⬇️ This is our authentication component to check the user will logged in or not */}
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
