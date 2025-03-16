import React, { useState } from "react";
import Modal from "react-modal";
import perfil from "../assets/images/perfil.jpeg";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const neonShadowStyle = {
    boxShadow:
      "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #00ffff, 0 0 20px #00ffff, 0 0 20px #00ffff",
  };

  return (
    <section className="w-full text-center py-2 text-black flex flex-col justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col justify-center items-center w-[95%] p-4 rounded shadow-md bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/bg-presentacion.jpg')]">
        <div className="service p-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-md mb-8">
          <h3 className="text-2xl font-bold mb-2 font-raleway-regular">
            Presentación
          </h3>
        </div>

        <div className="service p-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform -rotate-6">
          <img
            src={perfil}
            className="rounded-full w-48"
            alt="Foto de perfil"
          />
        </div>

        <div className="text-justify mt-6 text-white font-semibold">
          <p className="text-lg font-raleway-regular">
            Soy una apasionada desarrolladora Fullstack y diseñadora gráfica con
            más de cinco años de experiencia en la creación de soluciones
            tecnológicas innovadoras para organizaciones públicas y privadas. Mi
            trayectoria profesional se caracteriza por una sólida combinación de
            habilidades técnicas y creativas, lo que me permite abordar
            proyectos desde múltiples perspectivas y ofrecer resultados
            integrales y de alta calidad.
          </p>
          <p className="text-lg mt-4 font-raleway-regular">
            Mi experiencia abarca desde el desarrollo de sistemas estáticos y
            dinámicos hasta la creación de contenido gráfico y audiovisual,
            utilizando una amplia gama de tecnologías y herramientas. Mi
            objetivo es colaborar con equipos de alto rendimiento para idear y
            ejecutar soluciones impactantes a nivel nacional e internacional.
          </p>
       
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Información de Contacto"
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
      >
        <motion.div
          className="w-[80%] bg-white p-6 rounded-lg max-w-md mx-auto text-center relative border-t-[6px] border-b-[6px] border-l-[6px] border-r-[6px] border-purple-500"
          style={neonShadowStyle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4 text-purple-600">
            Información de contacto
          </h2>
          <p className="mb-4 text-gray-700">
            ¡Hola! Si mientras exploras mi portafolio encuentras algo que te
            interesa, no dudes en ponerte en contacto conmigo. ¡Hay iconos a lo
            largo de todo el sitio que te facilitarán hacerlo! <br />Por favor, ten en
            cuenta que varios de mis proyectos están en constante actualización.
            Espero que esto no afecte tu visión sobre mi trabajo y, por el
            contrario, te permita apreciar mi dedicación y atención al detalle.
            ¡Gracias por tu comprensión y por visitar mi portafolio!
          </p>
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

          <motion.button
            onClick={closeModal}
            className="bg-[#5411F5] text-white font-bold px-6 py-3 rounded mt-4 hover:bg-[#450eb5] active:bg-[#3a0ca0] border-2 border-purple-700"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Cerrar
          </motion.button>
        </motion.div>
      </Modal>
    </section>
  );
};

export default ServicesSection;
