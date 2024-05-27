import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    //! ⬇️ This is main container for the featured post at the top of the app
    <div className={styles.container}>
      <h1 className={styles.title}>
        {/* ⬇️ This is the title of the featured post */}
        <b className={styles.bold}>Hey, Devendra Parmar here!</b> Discover my
        stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          {/* ⬇️ This is the image of the featured post */}
          <Image
            className={styles.image}
            src="/p1.jpeg"
            alt="Image"
            fill
          ></Image>
        </div>
        <div className={styles.textContainer}>
          {/* ⬇️ This is the title of the featured post */}
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
            quae!
          </h1>
          {/* ⬇️ This is the description of the featured post */}
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            minus aspernatur dignissimos commodi ipsa debitis ipsam eveniet,
            sunt odio omnis error iusto, veniam aperiam? Nulla deserunt quisquam
            non fuga id enim voluptas velit, voluptates possimus alias quis
            veniam suscipit debitis, odit perspiciatis distinctio ipsum totam
            impedit iure eum. Reprehenderit, sint.
          </p>
          {/* ⬇️ This is the button for read more of the featured post */}
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
