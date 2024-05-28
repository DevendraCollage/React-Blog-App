import React from "react";
import styles from "./Menu.module.css";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    // 👇 This is one of the component of the menu
    // ⬇️ This is the our menu main container in that we are going display all the component
    <div className={styles.container}>
      {/* ⬇️ This is the title of the menu */}
      <h2 className={styles.subtitle}>What's hot</h2>
      {/* ⬇️ This is the Main Title of the menu */}
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.item}>
        {/* 1️⃣ Category-1 Travel */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 2️⃣ Category-2 Culture */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 3️⃣ Category-3 Food */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 4️⃣ Category-4 Fashion */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 5️⃣ Category-5 Coding */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 6️⃣ Category-6 Style */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.style}`}>Style</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
      </div>

      {/* 👇 This is another component of the menu */}
      {/* ⬇️ This is the title of the menu */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      {/* ⬇️ This is the Main Title of the menu */}
      <h1 className={styles.title}>Categories</h1>

      {/* 👇 This is another component of the menu */}
      {/* ⬇️ This is the title of the menu */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      {/* ⬇️ This is the Main Title of the menu */}
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.item}>
        {/* 1️⃣ Category-1 Travel */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 2️⃣ Category-2 Culture */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 3️⃣ Category-3 Food */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 4️⃣ Category-4 Fashion */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 5️⃣ Category-5 Coding */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
        {/* 6️⃣ Category-6 Style */}
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.style}`}>Style</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>11.02.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
