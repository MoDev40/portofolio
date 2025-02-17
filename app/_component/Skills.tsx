"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiDocker,
  SiPrisma,
  SiPostgresql,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: "frontend" | "backend" | "database" | "tools" | "cloud";
  level: number;
  description: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: <SiReact />,
    color: "#61DAFB",
    category: "frontend",
    level: 90,
    description: "Building modern, responsive UIs with React and its ecosystem",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
    category: "frontend",
    level: 85,
    description: "Creating fast, SEO-friendly applications with Next.js",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
    category: "frontend",
    level: 85,
    description: "Writing type-safe, maintainable code",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
    category: "frontend",
    level: 90,
    description: "Core language expertise with modern ES6+ features",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "#E34F26",
    category: "frontend",
    level: 95,
    description: "Semantic markup and accessibility",
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    color: "#1572B6",
    category: "frontend",
    level: 90,
    description: "Modern layouts with Flexbox and Grid",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
    category: "frontend",
    level: 80,
    description: "State management for complex applications",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38B2AC",
    category: "frontend",
    level: 90,
    description: "Utility-first CSS framework expertise",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "#339933",
    category: "backend",
    level: 85,
    description: "Server-side JavaScript runtime",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "#000000",
    category: "backend",
    level: 85,
    description: "Fast, unopinionated web framework",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
    category: "database",
    level: 80,
    description: "NoSQL database for flexible data storage",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "#336791",
    category: "database",
    level: 75,
    description: "Robust relational database",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "#2D3748",
    category: "database",
    level: 80,
    description: "Next-generation ORM for TypeScript",
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "#F05032",
    category: "tools",
    level: 85,
    description: "Version control and collaboration",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    color: "#181717",
    category: "tools",
    level: 85,
    description: "Project hosting and collaboration",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    color: "#2496ED",
    category: "tools",
    level: 75,
    description: "Containerization and deployment",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    color: "#000000",
    category: "cloud",
    level: 80,
    description: "Frontend deployment and hosting",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "tools", name: "Tools" },
  { id: "cloud", name: "Cloud" },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Card className="relative group overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className="text-4xl relative"
              animate={isHovered ? { scale: 1.2, y: -10 } : { scale: 1, y: 0 }}
              style={{ color: skill.color }}
            >
              {skill.icon}
              <motion.div
                className="absolute -bottom-1 left-1/2 w-8 h-1 -translate-x-1/2 bg-primary/20 rounded-full"
                initial={false}
                animate={
                  isHovered
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
              />
            </motion.div>

            <div className="text-center">
              <h3 className="font-medium text-sm mb-1 text-foreground">
                {skill.name}
              </h3>
              <div className="w-full bg-muted rounded-full h-1.5 mb-2">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={
                    isInView ? { width: `${skill.level}%` } : { width: 0 }
                  }
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-muted-foreground text-center"
                >
                  {skill.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

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
          <AnimatePresence mode="popLayout">
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
