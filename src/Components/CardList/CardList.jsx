import React from "react";
import styles from "./CardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

const CardList = () => {
  return (
    // ⬇️ This is the main container in that we are going to display our Card of the recent post
    <div className={styles.container}>
      {/* ⬇️ This is our title for the recent post component */}
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
