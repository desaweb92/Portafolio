import React, { useState } from 'react';
import "../index.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white font-raleway-regular relative">
      <div className="logo">
        <h1 className="text-2xl font-bold text-pink-500">Portafolio</h1>
      </div>

      <div className="mt-4 space-x-4 flex justify-center md:flex md:mt-0 md:space-x-4">
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

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>

      <nav className={`absolute top-full right-0 mt-2 bg-black p-4 rounded-lg shadow-lg transform transition-transform duration-300 md:static md:bg-transparent md:shadow-none md:p-0 md:mt-0 md:transform-none ${isMenuOpen ? 'translate-y-0' : '-translate-y-[300px]'}`}>
        <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <li><a href="/" className="hover:text-pink-500">Home</a></li>
          <li><a href="/stepssection" className="hover:text-pink-500">Mis conocimientos</a></li>
          <li><a href="/projects" className="hover:text-pink-500">Proyectos</a></li>
        </ul>
      </nav>

   
    </header>
  );
};

export default Header;
