import React from "react";
import "../index.css"

const SkillsSection = () => {
  // Mapeo de niveles a porcentajes
  const levelToPercentage = {
    "Avanzado": 90,
    "Intermedio": 70,
    "Básico": 50,
  };

  const categories = {
    "Lenguajes de Programación": [
      { name: "JS/TS", nivel: "Avanzado", color: "bg-blue-500" },
      { name: "Python", nivel: "Intermedio", color: "bg-green-500" },
      { name: "Java", nivel: "Intermedio", color: "bg-yellow-500" },
      { name: "Swift", nivel: "Intermedio", color: "bg-teal-500" },
      { name: "Kotlin", nivel: "Intermedio", color: "bg-cyan-500" },
    ],
    "Frameworks y Librerías": [
      { name: "React", nivel: "Avanzado", color: "bg-teal-500" },
      { name: "React Native", nivel: "Avanzado", color: "bg-cyan-500" },
      { name: "Next.js", nivel: "Avanzado", color: "bg-orange-500" },
      { name: "Angular", nivel: "Intermedio", color: "bg-lime-500" },
      { name: "Vue.js", nivel: "Avanzado", color: "bg-fuchsia-500" },
      { name: "Express.js", nivel: "Intermedio", color: "bg-gray-500" },
      { name: "Django", nivel: "Intermedio", color: "bg-amber-500" },
      { name: "Spring Boot", nivel: "Intermedio", color: "bg-sky-500" },
      { name: "Flask", nivel: "Intermedio", color: "bg-violet-500" },
      { name: "Tailwind CSS", nivel: "Avanzado", color: "bg-rose-500" },
    ],
    "Bases de Datos": [
      { name: "SQL", nivel: "Avanzado", color: "bg-light-blue-500" },
      { name: "NoSQL", nivel: "Avanzado", color: "bg-blue-500" },
      { name: "MySQL", nivel: "Avanzado", color: "bg-green-500" },
      { name: "PostgreSQL", nivel: "Intermedio", color: "bg-yellow-500" },
      { name: "MongoDB", nivel: "Intermedio", color: "bg-red-500" },
      { name: "Firebase", nivel: "Intermedio", color: "bg-indigo-500" },
    ],
    "Desarrollo Web": [
      { name: "HTML/CSS", nivel: "Avanzado", color: "bg-teal-500" },
      { name: "Sass/SCSS", nivel: "Avanzado", color: "bg-cyan-500" },
      { name: "Bootstrap", nivel: "Avanzado", color: "bg-orange-500" },
      { name: "Webpack", nivel: "Intermedio", color: "bg-lime-500" },
      { name: "Babel", nivel: "Intermedio", color: "bg-fuchsia-500" },
      { name: "SEO", nivel: "Avanzado", color: "bg-gray-500" },
    ],
    "Diseño y Prototipado": [
      { name: "Figma", nivel: "Avanzado", color: "bg-amber-500" },
      { name: "Illustrator", nivel: "Avanzado", color: "bg-emerald-500" },
      { name: "Photoshop", nivel: "Avanzado", color: "bg-sky-500" },
      { name: "Adobe XD", nivel: "Avanzado", color: "bg-violet-500" },
      { name: "After Effects", nivel: "Avanzado", color: "bg-rose-500" },
    ],
    "Control de Versiones": [
      { name: "Git", nivel: "Avanzado", color: "bg-blue-500" },
      { name: "GitHub", nivel: "Avanzado", color: "bg-green-500" },
      { name: "GitLab", nivel: "Avanzado", color: "bg-yellow-500" },
      { name: "Bitbucket", nivel: "Intermedio", color: "bg-red-500" },
    ],
    "Desarrollo de APIs": [
      { name: "REST", nivel: "Intermedio", color: "bg-purple-500" },
      { name: "GraphQL", nivel: "Intermedio", color: "bg-pink-500" },
      { name: "SOAP", nivel: "Intermedio", color: "bg-indigo-500" },
    ],
    "Nube": [
      { name: "AWS", nivel: "Avanzado", color: "bg-amber-500" },
      { name: "Azure", nivel: "Intermedio", color: "bg-emerald-500" },
      { name: "Google Cloud", nivel: "Avanzado", color: "bg-sky-500" },
      { name: "Zoho", nivel: "Avanzado", color: "bg-blue-900" },
    ],
    "Almacenamiento en la Nube": [
      { name: "AWS S3", nivel: "Avanzado", color: "bg-blue-500" },
      { name: "Google Cloud Storage", nivel: "Intermedio", color: "bg-green-500" },
      { name: "Azure Blob Storage", nivel: "Intermedio", color: "bg-yellow-500" },
      { name: "Dropbox", nivel: "Intermedio", color: "bg-red-500" },
    ],
    "UI/UX": [
      { name: "UI/UX Design", nivel: "Avanzado", color: "bg-purple-500" },
      { name: "Wireframing", nivel: "Avanzado", color: "bg-pink-500" },
      { name: "Prototyping", nivel: "Avanzado", color: "bg-indigo-500" },
    ],
    "Herramientas": [
      { name: "FileZilla", nivel: "Avanzado", color: "bg-teal-500" },
      { name: "Postman", nivel: "Intermedio", color: "bg-cyan-500" },
      { name: "Visual Studio Code", nivel: "Avanzado", color: "bg-orange-500" },
      { name: "JIRA", nivel: "Avanzado", color: "bg-lime-500" },
    ],
    "Habilidades Blandas": [
      { name: "Resolución de Problemas", nivel: "Avanzado", color: "bg-gray-500" },
      { name: "Comunicación", nivel: "Avanzado", color: "bg-amber-500" },
      { name: "Trabajo en Equipo", nivel: "Avanzado", color: "bg-emerald-500" },
      { name: "Gestión del Tiempo", nivel: "Avanzado", color: "bg-sky-500" },
      { name: "Adaptabilidad", nivel: "Avanzado", color: "bg-violet-500" },
    ],
  };

  return (
    <section className="w-full text-center py-20 bg-gradient-to-r from-black to-purple-900 text-white font-raleway-regular">
      <h2 className="text-3xl font-bold mb-8">Mis conocimientos</h2>
      <div className="my-6 space-x-4 flex justify-center">
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
          </div>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="mb-10 ">
          <h3 className="text-2xl font-semibold mb-4">{category}</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center justify-center mb-4">
                  <div className="w-1/3 text-right mr-4">
                    <p className="text-lg font-semibold">{skill.name}</p>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <div className="bg-gray-300 rounded-full h-4 overflow-hidden flex-1 mr-2">
                      <div
                        className={`h-4 rounded-full ${skill.color}`}
                       
                        style={{
                          width: `${levelToPercentage[skill.nivel]}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm">{skill.nivel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
