import React from 'react';
import styles from '../styles/footer.module.css';
import logo from "../assets/Group 2.png";
import facebook from "../assets/a.elementor-icon.png";
import twitter from "../assets/a.elementor-icon (3).png";
import youtube from "../assets/a.elementor-icon (1).png";
import pinterest from "../assets/a.elementor-icon (2).png";
import Image from 'next/image';



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerCompany}>
            <div className={styles.logoContainer}>
              <Image src={logo} alt="Health Logo" className={styles.logo} />
              <h3 className={styles.logoText}>Health</h3>
            </div>
            <p className={styles.companyInfo}>Shahabad, Ghaziabad, Uttar Pradesh 201005</p>
            <p className={styles.companyInfo}>+91 987-654-7687</p>
            <p className={styles.companyInfo}>info@demohealthcare.com</p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
            <Image src={facebook} alt=''></Image>
              </a>
              <a href="#" className={styles.socialIcon}>
              <Image src={twitter} alt=''></Image>
              </a>
              <a href="#" className={styles.socialIcon}>
              <Image src={youtube} alt=''></Image>
              </a>
              <a href="#" className={styles.socialIcon}>
              <Image src={pinterest} alt=''></Image>
              </a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linksColumn}>
              <h4 className={styles.linksTitle}>Quick Links</h4>
              <ul className={styles.linksList}>
                <li><a href="#" className={styles.link}>About Us</a></li>
                <li><a href="#" className={styles.link}>Our Pricing</a></li>
                <li><a href="#" className={styles.link}>Our Gallery</a></li>
                <li><a href="#" className={styles.link}>Appointment</a></li>
                <li><a href="#" className={styles.link}>Privacy Policy</a></li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.linksTitle}>Department</h4>
              <ul className={styles.linksList}>
                <li><a href="#" className={styles.link}>Ortiology</a></li>
                <li><a href="#" className={styles.link}>Neurology</a></li>
                <li><a href="#" className={styles.link}>Dental Care</a></li>
                <li><a href="#" className={styles.link}>Opthalmology</a></li>
                <li><a href="#" className={styles.link}>Cardiology</a></li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.linksTitle}>Useful Links</h4>
              <ul className={styles.linksList}>
                <li><a href="#" className={styles.link}>About Us</a></li>
                <li><a href="#" className={styles.link}>Our Blog</a></li>
                <li><a href="#" className={styles.link}>Our Gallery</a></li>
                <li><a href="#" className={styles.link}>Appointment</a></li>
                <li><a href="#" className={styles.link}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; 2024 Health.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
