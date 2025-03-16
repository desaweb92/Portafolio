import React from "react";
import ProjectCard from "../components/ProjectCard";
import TarjetaAnimada from "../assets/images/Tarjeta_animada.jpg";
import LogoSkillForge from "../assets/images/Logo-SkillForge.jpeg";
import { FaReact, FaNodeJs, FaDesktop } from 'react-icons/fa';
import { TbBrandReactNative } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Tarjeta animada React Native.",
      link: "felizcumplecosita.netlify.app",
      imageSrc: TarjetaAnimada,
      icons: [TbBrandReactNative], // Icono para el primer proyecto
    },
    {
      title: "Proyecto 2",
      description: "Tarjeta animada en React.",
      link: "https://tarjetaanimada.netlify.app/",
      imageSrc: TarjetaAnimada,
      icons: [FaReact], // Icono para el segundo proyecto
    },
    {
      title: "Proyecto 3",
      description: "Proyecto personal, en React y JS.",
      link: "skillforgeandrea.netlify.app",
      imageSrc: LogoSkillForge,
      icons: [FaReact, FaNodeJs], // Iconos para el tercer proyecto
    },
    {
      title: "Proyecto 4",
      description: "Descripción del cuarto proyecto. Este proyecto es una aplicación de escritorio.",
      link: "https://proyecto4.com",
      imageSrc: "https://via.placeholder.com/300x200?text=Proyecto+4",
      icons: [FaDesktop], // Icono para el cuarto proyecto
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
