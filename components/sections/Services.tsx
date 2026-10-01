"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FIVERR_URL } from "@/lib/constants";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

const services = [
  ["Python Data Analysis", "Clean, explore, and analyze your dataset in Python (Pandas/NumPy) and get findings you can act on."],
  ["Data Cleaning & Visualization", "Messy spreadsheets or CSVs turned into clean data and clear charts."],
  ["Machine Learning Models", "Forecasting and prediction models in Python (scikit-learn, TensorFlow/Keras), evaluated honestly — no overfitted demos."],
  ["Python Automation", "Scripts that remove repetitive manual work: data processing, scraping, file handling, reporting."],
  ["React Websites & Web Apps", "Responsive, modern web applications built with React, TypeScript, and Tailwind CSS."],
  ["AI-Powered App Prototypes", "Working prototypes of AI features and LLM-based tools, built fast so you can validate the idea."],
] as const;

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <motion.h2
        id="services-heading"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-2xl font-bold md:text-3xl"
      >
        What You Can Hire Me For
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map(([title, description]) => (
          <motion.div key={title} variants={slideUpVariants}>
            <Card className="h-full">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-8 text-sm leading-relaxed text-text-secondary">
        Also available: Mathematics &amp; Physics Tutoring · SKD/CPNS Learning Materials · Practice Question Development.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button href={FIVERR_URL}>Hire me on Fiverr</Button>
        <a href="#contact" className="text-sm text-text-secondary underline-offset-4 transition-colors hover:text-accent hover:underline">
          or send me a message
        </a>
      </div>
    </section>
  );
}
