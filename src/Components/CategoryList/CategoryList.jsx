"use client";

import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {/* ⬇️ Heading of the Popular Categories */}
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {/* 1️⃣ style category */}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <div className={styles.categoryContent}>
            <Image
              src="/style.png"
              alt="style"
              width={32}
              height={32}
              className={styles.image}
            />
            <span className="titleSpan">style</span>
          </div>
        </Link>
        {/* 2️⃣ fashion category */}
        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <div className={styles.categoryContent}>
            <Image
              src="/fashion.png"
              alt="fashion"
              width={32}
              height={32}
              className={styles.image}
            />
            <span>fashion</span>
          </div>
        </Link>
        {/* 3️⃣ culture category */}
        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <div className={styles.categoryContent}>
            <Image
              src="/culture.png"
              alt="culture"
              width={32}
              height={32}
              className={styles.image}
            />
            <span>culture</span>
          </div>
        </Link>
        {/* 4️⃣ coding category */}
        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <div className={styles.categoryContent}>
            <Image
              src="/coding.png"
              alt="coding"
              width={32}
              height={32}
              className={styles.image}
            />
            <span>coding</span>
          </div>
        </Link>
        {/* 5️⃣ food category */}
        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <div className={styles.categoryContent}>
            <Image
              src="/food.png"
              alt="food"
              width={32}
              height={32}
              className={styles.image}
            />
            <span>food</span>
          </div>
        </Link>
        {/* 6️⃣ travel category */}
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <div className={styles.categoryContent}>
            <Image
              src="/travel.png"
              alt="travel"
              width={32}
              height={32}
              className={styles.image}
            />
            <span>travel</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
