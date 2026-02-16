import React from "react";
import styles from "./Features.module.css";

const features = [
  {
    title: "AI Answer Evaluation",
    desc: "Automatically checks subjective answers using NLP models and gives accurate marks."
  },
  {
    title: "Cheating Detection",
    desc: "Detects tab switching, copy paste and suspicious behavior during exam."
  },
  {
    title: "Teacher Review Panel",
    desc: "Teachers can override marks and add comments manually."
  },
  {
    title: "Instant Results",
    desc: "Students receive results immediately after submission."
  },
  {
    title: "Analytics Dashboard",
    desc: "Performance graphs and class level insights for teachers."
  },
  {
    title: "Secure Storage",
    desc: "All answers securely stored on cloud database."
  }
];

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>

        <h2 className={styles.heading}>Powerful Features</h2>
        <p className={styles.subheading}>
          Everything you need to conduct and evaluate exams automatically
        </p>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div className={styles.card} key={i}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
