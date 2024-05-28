import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          {/* ⬇️ This is the post image of the recent post */}
          <Image className={styles.image} src="/p1.jpeg" alt="" fill></Image>
        </div>
        {/* ⬇️ This is the text for the given post of the recent post */}
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            {/* ⬇️ This is the date of the post */}
            <span className={styles.date}>11.02.2024 - </span>
            {/* ⬇️ This is the category of the post we are going to upload */}
            <span className={styles.category}>CULTURE</span>
          </div>
          {/* ⬇️ This is the heading of the posts */}
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            impedit neque assumenda, voluptates dicta id voluptate, dolores
            maiores distinctio ullam illum minus?
          </h1>
          {/* ⬇️ This is the description of the post */}
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            deserunt doloremque dicta alias eum, repudiandae ratione cupiditate
            maxime nam tempore. Omnis nulla tempora magnam perspiciatis eum quos
            aperiam ad, excepturi officiis saepe consectetur id iure.
          </p>
          {/* ⬇️ This is the button for read more of the recent post */}
          <Link className={styles.link} href="/">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
