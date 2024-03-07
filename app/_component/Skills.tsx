import React from 'react';
import skillsData from "@/app/assets/skills.json"

const Skills: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center uppercase">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-8">
          {skillsData.map((skill) => (
            <div key={skill.id} className="text-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 rounded-md object-center mx-auto mb-4"
              />
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills