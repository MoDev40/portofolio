import React from 'react';
import projectsData from "@/app/assets/projects.json"
import Project from './Project';
const Projects: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Project key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects