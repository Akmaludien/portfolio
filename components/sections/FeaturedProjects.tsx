"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-4 py-24 md:px-8"
    >
      <motion.h2
        id="projects-heading"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-2xl font-bold md:text-3xl"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={slideUpVariants}>
            <Card className="flex flex-col gap-4 h-full">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.summary}`}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-semibold">{project.title}</h3>

              <p className="text-sm leading-relaxed text-text-secondary line-clamp-2">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <Button
                  variant="secondary"
                  href={project.viewProjectUrl}
                  className="text-xs px-4 py-2"
                >
                  View Project
                </Button>
                <Button
                  variant="ghost"
                  href={project.githubUrl}
                  className="text-xs px-4 py-2"
                >
                  GitHub
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
