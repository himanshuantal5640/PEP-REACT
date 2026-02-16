import React from "react";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Create Exams",
      "Auto Evaluation",
      "Student Reports",
      "Email Support"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "₹499/mo",
    features: [
      "Everything in Basic",
      "Cheating Detection",
      "Teacher Review Panel",
      "Analytics Dashboard"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Students",
      "Cloud Storage",
      "Priority Support",
      "Dedicated Server"
    ],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>

        <h2 className={styles.heading}>Simple Pricing</h2>
        <p className={styles.subheading}>
          Choose the perfect plan for your institution
        </p>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.card} ${plan.highlight ? styles.highlight : ""}`}
            >
              <h3>{plan.name}</h3>
              <h1 className={styles.price}>{plan.price}</h1>

              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>

              <button className={styles.btn}>
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
