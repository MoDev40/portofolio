"use client";
import { useProjectStore } from "@/app/store/useProjectStore";
import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import Project from "./Project";

const ProjectsSkeleton = () => (
  <div className="container mx-auto text-center">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="bg-white dark:bg-gray-800 rounded-xl h-96 shadow-lg"
          />
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const {
    projects,
    loading,
    error,
    filter,
    searchTerm,
    fetchProjects,
    setFilter,
    setSearchTerm,
  } = useProjectStore();

  useEffect(() => {
    setMounted(true);
    fetchProjects();
  }, [fetchProjects]);

  const languages = [
    "all",
    ...Array.from(
      new Set(projects.map((project) => project.language).filter(Boolean))
    ),
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.language === filter;
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (!mounted) {
    return <ProjectsSkeleton />;
  }

  if (loading) {
    return (
      <section className="py-16 p-4 bg-gray-50 dark:bg-gray-900">
        <ProjectsSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 p-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-red-500 dark:text-red-400">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 p-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setFilter(lang)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105
                    ${
                      filter === lang
                        ? "bg-blue-500 dark:bg-blue-600 text-white shadow-lg"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  {lang || "Other"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Suspense fallback={<ProjectsSkeleton />}>
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Project project={project} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </Suspense>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 mt-8"
          >
            No projects found matching your criteria
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Projects;
