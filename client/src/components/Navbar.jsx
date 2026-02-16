
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

      
        <div className={styles.logo}>MyBrand</div>

        {/* Desktop Menu */}
        <div className={styles.menu}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>

          <button className={styles.cta}>Get Started</button>
        </div>

        {/* Mobile Button */}
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenuOpen}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <button className={styles.cta}>Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

