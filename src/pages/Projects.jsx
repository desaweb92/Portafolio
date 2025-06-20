import React from "react";
import ProjectCard from "../components/ProjectCard";
import LogoGogoz from "../assets/images/Imagen-logo.jpg";
import LogoHPT from "../assets/images/logo.png";
import LogoEnvia from "../assets/images/logo-envia-01.jpg"
import LogoLucca from "../assets/images/logo-lucca-2.png"
import { FaReact, FaNodeJs } from 'react-icons/fa';
const LogoDiseño = "https://i.imgur.com/SKwdMty.png";
const Projects = () => {
  const projects = [
    
    {
      title: "Proyecto 1",
      description: "Proyecto personal, en React y JS.",
      link: "https://propuestastudio.netlify.app",
      imageSrc: LogoDiseño,
      icons: [FaReact, FaNodeJs], // Iconos para el tercer proyecto
    },
    {
      title: "Proyecto 2",
      description: "Landing page en react y JS.",
      link: "https://landingogoz.netlify.app",
      imageSrc: LogoGogoz,
      icons: [FaReact, FaNodeJs], // Icono para el cuarto proyecto
    },
    {
      title: "Proyecto 3",
      description: "Landing page precios.",
      link: "https://precios-helados-para-todos.netlify.app",
      imageSrc: LogoHPT,
      icons: [FaReact, FaNodeJs], // Icono para el cuarto proyecto
    },
     {
      title: "Proyecto 4",
      description: "Landing rastreos envía.",
      link: "https://rastreo-envia.netlify.app",
      imageSrc: LogoEnvia,
      icons: [FaReact, FaNodeJs], // Icono para el sexto proyecto
    },
       {
      title: "Proyecto 5",
      description: "Landing rastreos envía.",
      link: "https://tourmaline-kitten-2ecfb5.netlify.app",
      imageSrc: LogoLucca,
      icons: [FaReact, FaNodeJs], // Icono para el septimo proyecto
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 ">
      <div className="text-center mb-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Mis Proyectos</h1>
        <p className="w-[80%]  text-gray-600 mt-2">
          Explora algunos de mis trabajos recientes en desarrollo web.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
            icons={project.icons}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
