import { motion } from "framer-motion";
import React from "react";
import "../index.css";

const Error_404 = () => {
  return (
    <section className="h-screen flex items-end justify-center text-center py-20 bg-contain bg-center bg-no-repeat bg-[url('/src/assets/images/404.png')]">
      <motion.a
        href="/"
        className="bg-pink-600 text-white font-bold px-6 py-3 rounded font-raleway-regular inline-block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Volver al Inicio
      </motion.a>
     
    </section>
  );
};

export default Error_404;
