"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "../styles/header.module.css";
import logo from "../assets/Group 2.png";
import frame from "../assets/Frame 1410087258.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Health Logo" className={styles.logo} />
        <h1 className={styles.title}>Health</h1>
      </div>
      <div
        className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        {!isMenuOpen ? (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <div className={styles.closeIcon}>X</div>
        )}
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/find-doctors" onClick={closeMenu}>
              <span
                className={`${styles.navLink} ${
                  pathname === "/find-doctors" ? styles.active : ""
                }`}
              >
                Find Doctors
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/hospitals" onClick={closeMenu}>
              <span
                className={`${styles.navLink} ${
                  pathname === "/hospitals" ? styles.active : ""
                }`}
              >
                Hospitals
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" onClick={closeMenu}>
              <span
                className={`${styles.navLink} ${
                  pathname === "/about" ? styles.active : ""
                }`}
              >
                About Us
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" onClick={closeMenu}>
              <span
                className={`${styles.navLink} ${
                  pathname === "/services" ? styles.active : ""
                }`}
              >
                Services
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" onClick={closeMenu}>
              <span
                className={`${styles.navLink} ${
                  pathname === "/contact" ? styles.active : ""
                }`}
              >
                Contact
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Image src={frame} alt="Health Frame" />
          </li>
          <li className={styles.navItem}>
            <div className={styles.heroButtons}>
              <a href="/" className={styles.servicesBtn}>
                Appointment Now
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
