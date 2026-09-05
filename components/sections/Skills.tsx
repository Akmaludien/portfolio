"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

/**
 * Ledger composition instead of the 6-tile equal-weight grid:
 * each category is one row — mono label left, skills flowing right.
 * Density up, tiles gone (slop tell #3).
 */
export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl px-4 py-20 md:px-8"
    >
      <motion.h2
        id="skills-heading"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10 text-2xl font-bold md:text-3xl"
      >
        Skills
      </motion.h2>

      <motion.div
        className="border-t border-border"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            variants={slideUpVariants}
            className="grid gap-2 border-b border-border py-6 md:grid-cols-[200px_1fr] md:gap-8"
          >
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-text-secondary md:pt-1">
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
