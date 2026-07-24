"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-6xl px-4 py-24 md:px-8"
    >
      <motion.h2
        id="experience-heading"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-2xl font-bold md:text-3xl"
      >
        Experience
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={slideUpVariants}>
            <Card className="flex flex-col gap-3 h-full">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="category">{exp.category}</Badge>
                {exp.period && (
                  <span className="text-xs text-text-secondary">
                    {exp.period}
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold">{exp.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {exp.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
