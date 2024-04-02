import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shivam</h1>
        <p className={styles.description}>
        Welcome to my portfolio website! I'm a software developer who loves 
        working with Java, MySQL, Spring Boot, and ReactJS. Want to know 
        more? Feel free to get in touch!
        </p>
        <a href="mailto:itssahu07@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
