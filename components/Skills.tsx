import { AnimatePresence, motion, useInView } from "framer-motion";
import { useState } from "react";

import { categories, skills } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import SkillCard from "./Skill";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const filteredSkills = skills.filter(
    (skill) => selectedCategory === "all" || skill.category === selectedCategory
  );

  return (
    <section ref={containerRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of technologies I work with to build
            modern, scalable, and maintainable applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-accent text-muted-foreground"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="sync">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
