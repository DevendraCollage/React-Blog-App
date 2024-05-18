"use client";

import React, { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/Context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  console.log(theme);

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
      <Image src="/sun.png" alt="sun" width={16} height={16} />
      <div
        className={styles.ball}
        style={
          theme === "light"
            ? { left: 1, background: "white" }
            : { right: 1, background: "#0f172a" }
        }
      ></div>
      <Image src="/moon.png" alt="moon" width={16} height={16} />
    </div>
  );
};

export default ThemeToggle;
