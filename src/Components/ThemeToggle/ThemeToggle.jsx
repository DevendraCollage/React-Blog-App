//! ⬇️ We are going to use the component as an client component because by default in the next js component will be used as an server side component
"use client";

import React, { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/Context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  // * ⬇️ This will be used for the check the condition for the theme toggler - this will be used temporarely
  // console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "light"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "white" }
      }
    >
      <Image src="/sun.png" alt="sun" width={18} height={15} />
      <div
        className={styles.ball}
        style={
          theme === "light"
            ? { left: 2, background: "white" }
            : { right: 2, background: "#0f172a" }
        }
      ></div>
      <Image src="/moon.png" alt="moon" width={17} height={15} />
    </div>
  );
};

export default ThemeToggle;
