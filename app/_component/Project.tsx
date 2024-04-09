"use client"
import Link from 'next/link';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  project: Project;
}

interface Project {
  id: number;
  image: string;
  name: string;
  description: string;
  demoLink: string;
  sourceCodeLink: string;
}

const Project: React.FC<Props> = ({ project }) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      scale: 1.05,
      rotate: 5,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      scale: 1,
      rotate: 0,
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
    });
  };

  return (
    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-md mb-6"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 1, rotate: 0, boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)' }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-40 object-cover object-center"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex justify-between">
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Demo
            </Link>
            <Link
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Source
            </Link>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Project;