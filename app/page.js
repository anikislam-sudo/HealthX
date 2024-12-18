import Image from "next/image";
import styles from "./globals.css";
import GetQuoteForm from "./components/GetQuoteForm";
import DoctorProfile from "./components/DoctorProfile";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import HealthcareServices from "./components/HealthcareServices ";

export default function Home() {


  return (
    <div>
<Header></Header>

    <HeroBanner></HeroBanner>
       <ServiceCard></ServiceCard>
       <HealthcareServices></HealthcareServices>
        <DoctorProfile></DoctorProfile>
      <GetQuoteForm></GetQuoteForm>

  
      <Footer />
    </div>
  );
}
