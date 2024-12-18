import React from "react";
import styles from "../styles/doctorProfile.module.css";
import Image from "next/image";
import group from "../assets/Group 2.png";
const DoctorProfile = () => {
  const doctors = [
    {
      name: "Dr. Dredor Smith",
      speciality: "Medicine Specialist",
      rating: "3.9",
      reviews: "252",
      patients: "4895",
      hospital: "Intermedia Hospital, NYC",
      image: "https://i.ibb.co.com/FJJZYKT/image-2.png",
    },
    {
      name: "Dr. Amrita Sen Gupta",
      speciality: "General Surgeon",
      rating: "4.8",
      reviews: "599",
      patients: "1698",
      hospital: "Mediplus Hospital, NYC",
      image: "https://i.ibb.co.com/FJjntsD/image-1.png",
    },
    {
      name: "Dr. Christine Jones",
      speciality: "Pediatrician",
      rating: "4.8",
      reviews: "321",
      patients: "9375",
      hospital: "Advocate Hospital, NYC",
      image: "https://i.ibb.co.com/9ZC8GDt/Rectangle-30.png",
    },
  ];

  return (
    <div className={styles.container}>
       <div className={styles.headerHero}>
            <Image className={styles.heroImage1} src={group} alt="" />
            <p className={styles.headerHeroPara}>Our doctor's </p>
            </div>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Our Special Doctors</h2>
        <p className={styles.headerText}>
          Our team of specialists is at the forefront of medical innovation.
          Each specialist <br />brings a unique blend of expertise, empathy, and
          experience to ensure that your <br />health is in the best hands.
        </p>
      </div>

      <div className={styles.grid}>
        {doctors.map((doctor, index) => (
          <div key={index} className={styles.card}>
            <img
              src={doctor.image}
              alt={doctor.name}
              className={styles.images}
            />
          
            <h3 className={styles.cardTitle}>{doctor.name}</h3>
            <div className={styles.specialityRating}>
            <p className={styles.cardSpeciality}>{doctor.speciality}</p>
           
            <div className={styles.rating}>
              <span>⭐</span>
              <span className={styles.ratingText}>
                {doctor.rating} ({doctor.reviews})
              </span>
            </div>
            </div>
            <div className={styles.statusHospital}>
            <p className={styles.stats}>{doctor.patients} Patients</p>
            <p className={styles.hospital}>{doctor.hospital}</p>
            </div>
          </div>
        ))}
      </div>

    
      <footer className={styles.footer}>
        <p>&copy; You Get Our 20+ More services... <span>Explore All Services</span></p>
      </footer>
    </div>
  );
};

export default DoctorProfile;
