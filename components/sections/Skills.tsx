"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl px-4 py-24 md:px-8"
    >
      <motion.h2
        id="skills-heading"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-2xl font-bold md:text-3xl"
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.name} variants={slideUpVariants}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
