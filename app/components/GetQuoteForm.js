"use client";
import { useState } from "react";
import styles from "../styles/getQuote.module.css";
import img from "../assets/Group 30 (1).png";
import Image from "next/image";
import group from "../assets/Group 2.png";
const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
       <div className={styles.headerHero}>
            <Image className={styles.heroImage1} src={group} alt="" />
            <p className={styles.headerHeroPara}>Contract Us   </p>
            </div>
      <h1 className={styles.title}>Get A Quote Today</h1>
      <p className={styles.subtitle}>
        Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The <br /> Industry's Standard Dummy Text Ever
        Since The 1500s
      </p>
      <div className={styles.formContainer}>
        <div className={styles.imageContainer}>
          <Image src={img} alt="Doctor" className={styles.doctorImage} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={styles.input}
                placeholder="First name"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={styles.input}
                placeholder="Last name"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="you@company.com"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone number
            </label>
            <div className={styles.phoneInput}>
              <select
                id="phone-code"
                className={styles.select}
                defaultValue="+1"
              >
                <option value="+1">US</option>
                <option value="+91">GBR</option>
                <option value="+88">BD</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                placeholder="(555) 555-0000"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>
              Select date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className={styles.input}
              defaultValue="2022-12-02"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Your message..."
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
          Appointment Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetQuoteForm;
