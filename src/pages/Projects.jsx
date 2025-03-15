import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Asegúrate de que la ruta sea correcta

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del primer proyecto. Este proyecto utiliza React y Node.js.',
      link: 'https://proyecto1.com',
      imageSrc: 'https://via.placeholder.com/300x200?text=Proyecto+1'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del segundo proyecto. Este proyecto es una aplicación móvil.',
      link: 'https://proyecto2.com',
      imageSrc: 'https://via.placeholder.com/300x200?text=Proyecto+2'
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del tercer proyecto. Este proyecto es una API RESTful.',
      link: 'https://proyecto3.com',
      imageSrc: 'https://via.placeholder.com/300x200?text=Proyecto+3'
    },
    {
      title: 'Proyecto 4',
      description: 'Descripción del cuarto proyecto. Este proyecto es una aplicación de escritorio.',
      link: 'https://proyecto4.com',
      imageSrc: 'https://via.placeholder.com/300x200?text=Proyecto+4'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 ">
      <div className="text-center mb-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Mis Proyectos</h1>
        <p className="w-[80%]  text-gray-600 mt-2">Explora algunos de mis trabajos recientes en desarrollo web.</p>
        <div className="mt-4 space-x-4 flex justify-center">
       
       <a href="https://wa.me/04123687582" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
         <i className="fab fa-whatsapp fa-lg"></i>
       </a>
       <a href="https://www.linkedin.com/in/andrea-xiomara-diaz-gomez-026643311" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
         <i className="fab fa-linkedin fa-lg"></i>
       </a>
       <a href="skype:live:.cid.3374ab41ca3ba99d" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
         <i className="fab fa-skype fa-lg"></i>
       </a>
       <a href="https://teams.microsoft.com/l/chat/0/andreadiaz9205@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
         <i className="fab fa-microsoft fa-lg"></i>
       </a>
     
     </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
