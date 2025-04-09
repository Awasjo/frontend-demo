import React from 'react';

const DemoBanner = () => {
  return (
    <div className="bg-yellow-100 border-b border-yellow-300 text-center p-2 w-full">
      <p className="text-sm">
        This is a demonstration version of AstraVita. For the complete application, visit our 
        <a 
          href="https://github.com/Awasjo/AstraVita-MERN-Project" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium mx-1"
        >
          GitHub repository
        </a>
        to access all necessary files and learn how to run the full application with Docker Compose.
      </p>
    </div>
  );
};

export default DemoBanner;
