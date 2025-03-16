import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, link, imageSrc, icons }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden p-6 m-4 max-w-sm mx-auto transform transition-transform duration-300"
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
        />
      )}
      <div className="flex items-center mb-2">
        {icons && icons.map((Icon, index) => (
          <Icon key={index} className="text-blue-500 mr-2" />
        ))}
        <h2 className="text-xl font-semibold ml-2">{title}</h2>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
      >
        Ver Proyecto
      </a>
    </motion.div>
  );
};

export default ProjectCard;
