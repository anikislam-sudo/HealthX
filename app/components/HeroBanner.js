import React from 'react';
import styles from '../styles/HeroBanner.module.css';
import bannerImage from "../assets/hero_image.png";
import group from "../assets/Group 2.png"
import Image from 'next/image';
const HeroBanner = () => {
    return (
        <div className={styles.container}>
        <div className={styles.heroBanner}>
        <div className={styles.heroContent}>
            <div className={styles.headerHero}>
            <Image className={styles.heroImage1} src={group} alt="" />
            <p className={styles.headerHeroPara}>24/7 Emergency Service</p>
            </div>
          <h1>Caring for Health</h1>
          <h2>Caring for You</h2>
          <p>A brief statement outlining the purpose and mission of the clinic. This can include the commitment to patient care, community health.</p>
          <div className={styles.heroButtons}>
            <a href="/" className={styles.discoverMoreBtn}>Discover More</a>
            <a href="/" className={styles.servicesBtn}>See All Services</a>
          </div>
        </div>
        <div className={styles.heroImage}>
         <Image src={bannerImage} alt=''></Image>
        </div>
        <div className={styles.searchContainer}>
    <input type="text" placeholder="ER. Doctor, Hospital" />
    <input type="text" placeholder="ER. Surgeon, Cardiology" />
    <input type="text" placeholder="Set your location" />
    <button className={styles.searchBtn}>Search</button>
  </div>
      </div>
      </div>
    );
};

export default HeroBanner;