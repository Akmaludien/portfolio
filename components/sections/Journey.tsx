"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { journey } from "@/data/journey";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="mx-auto max-w-6xl px-4 py-24 md:px-8"
    >
      <motion.h2
        id="journey-heading"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-2xl font-bold md:text-3xl"
      >
        Journey
      </motion.h2>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          className="relative ml-4 border-l-2 border-border pl-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {journey.map((milestone) => (
            <motion.div
              key={milestone.id}
              variants={slideUpVariants}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <h3 className="text-base font-semibold md:text-lg">
                {milestone.title}
              </h3>
              {milestone.description && (
                <p className="mt-1 text-sm text-text-secondary">
                  {milestone.description}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div variants={slideUpVariants} className="relative pt-2">
            <div className="absolute -left-[calc(2rem+5px)] top-3 h-3 w-3 rounded-full bg-accent" />
            <p className="text-sm font-medium italic text-accent">
              Never finished. Always evolving.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="overflow-hidden rounded-2xl border border-border"
        >
          <Image
            src="/images/journey-aws.jpg"
            alt="Akmaludien during his AWS learning journey"
            width={1200}
            height={1600}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
