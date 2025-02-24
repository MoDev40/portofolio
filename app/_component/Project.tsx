"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Globe, Star, Calendar } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Props {
  project: {
    id: number;
    name: string;
    description: string;
    stars: number;
    language: string;
    demoLink: string;
    sourceCodeLink: string;
    topics: string[];
    image: string;
    updatedAt: string;
  };
}

const Project: React.FC<Props> = ({ project }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formattedDate = mounted
    ? format(new Date(project.updatedAt), "MMM d, yyyy")
    : "";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden h-full">
        <div className="relative overflow-hidden aspect-video">
          <Image
            width={600}
            height={300}
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 group-hover:via-black/40 group-hover:to-black/80 transition-colors duration-300" />
        </div>

        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
              {project.name}
            </CardTitle>
            {mounted && (
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-muted-foreground">
                  {project.stars}
                </span>
              </div>
            )}
          </div>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {mounted && project.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <Badge key={topic} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            {mounted && project.language && (
              <span className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                {project.language}
              </span>
            )}
            {mounted && (
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formattedDate}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between pt-4 border-t">
          {mounted && project.demoLink && (
            <Button variant="ghost" size="sm" asChild>
              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>Demo</span>
              </Link>
            </Button>
          )}
          {mounted && (
            <Button variant="ghost" size="sm" asChild>
              <Link
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Project;
