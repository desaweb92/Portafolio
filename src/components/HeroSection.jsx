import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const HeroSection = () => {
  return (
    <section className="text-center py-20 bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/bg-home1.jpg')]">
      <h2 className="text-[40px] font-bold mb-4 text-white font-big-shoulders">
        Bienvenido a mi portafolio
      </h2>
      <p className="text-[20px] font-semibold mb-8 text-black font-raleway-regular">
        Explora mis proyectos.
      </p>
      <Link to="/projects">
        <motion.button
          className="bg-[#5411F5] text-white font-bold px-6 py-3 rounded font-raleway-regular inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Empezar
        </motion.button>
      </Link>

      <div className="mt-4 space-x-4 flex justify-center">
        <a
          href="https://wa.me/04123687582"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <i className="fab fa-whatsapp fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/andrea-xiomara-diaz-gomez-026643311"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="skype:live:.cid.3374ab41ca3ba99d"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <i className="fab fa-skype fa-lg"></i>
        </a>
        <a
          href="https://teams.microsoft.com/l/chat/0/andreadiaz9205@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <i className="fab fa-microsoft fa-lg"></i>
        </a>
        <a
          href="mailto:andreadiaz9205@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <i className="fab fa-google fa-lg"></i>
        </a>
        <a
          href="https://github.com/desaweb92?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
