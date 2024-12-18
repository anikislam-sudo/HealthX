import React from 'react';
import styles from '../styles/serviceCard.module.css';
import group from "../assets/Group 2.png"
import Image from 'next/image';
const ServiceCard = () => {
    const services = [
        {
          icon:'https://i.ibb.co.com/6nJnwdV/Background-4.png',

          title: 'Internal Medicine',
          description: '30+ Doctors',
          url: '#'
        },
        {
          icon: 'https://i.ibb.co.com/rGsFvBq/Background.png',
          title: 'Dental Care',
          description: '30+ Doctors',
          url: '#'
        },
        {
          icon: 'https://i.ibb.co.com/523thvK/Background-5.png',
          title: 'Urology Care',
          description: '30+ Doctors',
          url: '#'
        },
        {
          icon: 'https://i.ibb.co.com/g9sXKDS/Background-6.png',
          title: 'Neurology Care',
          description: '30+ Doctors',
          url: '#'
        },
        {
          icon: 'https://i.ibb.co.com/858BHNz/Background-1.png',
          title: 'Gynecologists',
          description: '30+ Doctors',
          url: '#'
        },
        {
          icon: 'https://i.ibb.co.com/g9sXKDS/Background-6.png',
          title: 'Ophthalmology',
          description: '30+ Doctors',
          url: '#'
        },
        {
          icon: 'https://i.ibb.co.com/mG6XJYm/Background-2.png',
          title: 'Orthopedics',
          description: '30+ Doctors',
          url: '#'
        },
        {
          icon: 'https://i.ibb.co.com/LZvQp1D/Background-3.png',
          title: 'Cardiology',
          description: '30+ Doctors',
          url: '#'
        }
      ];

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
      <div className={styles.headerHero}>
            <Image className={styles.heroImage1} src={group} alt="" />
            <p className={styles.headerHeroPara}>Our Services</p>
            </div>
        <h1>Our Mediax Specialties <br /> Service</h1>
        </header>
    <div className={styles.servicesGrid}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceCard}>
          <div className={styles.serviceIcon}>
            <img src={service.icon} alt={service.title} />
          </div>
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <p className={styles.serviceDescription}>{service.description}</p>
          <a href={service.url} className={styles.readMoreButton}>
            Read More
          </a>
        </div>
      ))}
    </div>
    <footer className={styles.footer}>
        <p>&copy; You Get Our 20+ More services... <span>Explore All Services</span></p>
      </footer>
    </div>

  );
};

export default ServiceCard;