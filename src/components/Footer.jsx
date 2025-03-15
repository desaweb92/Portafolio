import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-r from-black to-purple-900 text-white text-center font-raleway-regular">
      <div className="container mx-auto">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Mi portafolio - Andrea Xiomara Díaz Gómez 
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
      </div>
    </footer>
  );
}

export default Footer;
