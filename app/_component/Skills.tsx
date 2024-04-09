"use client"
import React from 'react';
import skillsData from '@/app/assets/skills.json';
import { shuffle } from 'lodash';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center uppercase">Working with</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {shuffle(skillsData).map((skill) => (
            <div key={skill.id} className="text-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 1 }}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 rounded-md object-center mx-auto mb-4"
                />
                <motion.p
                  className={`text-sm opacity-0 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 text-white rounded-md`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {skill.name}
                </motion.p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;