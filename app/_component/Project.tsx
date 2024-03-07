import Link from 'next/link';
import React from 'react'

interface Props{
    project:Project
}

interface Project {
    id:number;
    image:string;
    name:string;
    description:string;
    demoLink:string;
    sourceCodeLink:string;
}

const Project : React.FC<Props> = ({project}) => {
  return (
    <div  className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
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
          Source Code
        </Link>
      </div>
    </div>
  </div>  
  )
}

export default Project