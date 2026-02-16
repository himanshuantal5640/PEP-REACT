import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.left}>

          <h1 className={styles.title}>
            Build & Manage Exams
            <span> Smarter</span>
          </h1>

          <p className={styles.subtitle}>
            AI powered exam evaluation platform that automatically checks answers,
            detects cheating and helps teachers review results faster than ever.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>Live Demo</button>
          </div>

          <div className={styles.stats}>
            <div>
              <h3>10k+</h3>
              <p>Students</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Teachers</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Accuracy</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="hero"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
