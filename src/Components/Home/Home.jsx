import React from "react";
import style from "../Home/Home.module.css";
import Navebar from "../Navebar/Navebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import About from "../About/About";
import OurServices from "../OurServices/OurServices";
import Portfolio from "../Protfolio/Protfolio";
import ClientTestimonials from "../ClientTestimonials/ClientTestimonials";
import OurDesignPhilosophy from "../OurDesignPhilosophy/OurDesignPhilosophy";
import FAQs from "../FAQs/FAQs";
import ScrollToHash from "../ScrollToHash/ScrollToHash";

export default function Home() {
  return (
    <>
    <ScrollToHash/>
      {/* Hero Section */}
      <div
        id="header"
        className={`${style.src} mb-40 relative w-full h-lvh pb-7 bg-center text-white`}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <Navebar  className="" />
        <Header />
      </div>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services">
        <OurServices />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <ClientTestimonials />
      </section>

      {/* Design Philosophy Section */}
      <section id="philosophy">
        <OurDesignPhilosophy />
      </section>

      {/* FAQs Section */}
      <section id="faqs">
        <FAQs />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
