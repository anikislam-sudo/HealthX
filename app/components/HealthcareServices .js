import Image from 'next/image';
import styles from '../styles/HealthcareServices.module.css';
import doctor from "../assets/Group 30.png";
import group from "../assets/Group 2.png";
import border from "../assets/Background+Border.png";
import border1 from "../assets/Background+Border (1).png";
import border2 from "../assets/Background+Border (2).png";

const HealthcareServices = () => {
  return (
    <div className={styles.container}>
      {/* Text Section */}
      <div className={styles.textSection}>
      <div className={styles.headerHero}>
            <Image className={styles.heroImage1} src={group} alt="" />
            <p className={styles.headerHeroPara}>Why Choose Us </p>
            </div>
        <h2>We Remain Continuously <br />Available for Your Health <br /> Services</h2>
        <div className={styles.feature}>
        <div className={styles.borderFlex}>
        <Image className={styles.heroImage1} src={border} alt="" />
          <h3>Compassionate & Expert Care</h3>
          </div>
          <p>
          Our team of dedicated healthcare professionals combines years
of experience with a genuine commitment to providing.
          </p>
        </div>
        <div className={styles.feature}>
        <div className={styles.borderFlex}>
        <Image className={styles.heroImage1} src={border1} alt="" />
          <h3>Patient-Centered Approach</h3>
          </div>
          <p>
          Your health and well-being are our top priorities. We take the time
          to listen to your concerns, answer your questions.
          </p>
        </div>
        <div className={styles.feature}>
            <div className={styles.borderFlex}>
        <Image className={styles.heroImage1} src={border2} alt="" />
          <h3>Personalized Treatment Plans</h3>
          </div>
          <p>
          We understand that every patient is unique, and their healthcare
          needs may vary. That's why we create individualized treatment.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className={styles.imageSection}>
        <Image src={doctor} alt="Doctor" width={400} height={400} />
      </div>
    </div>
  );
};

export default HealthcareServices;
