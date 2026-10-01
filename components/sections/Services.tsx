"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FIVERR_GIG_URL } from "@/lib/constants";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive React websites and landing pages for businesses and personal brands.",
    cta: "Order on Fiverr — Starting at $50",
    href: FIVERR_GIG_URL,
    ariaLabel: "Order website development on Fiverr (opens in a new tab)",
    external: true,
  },
  {
    title: "Python Data Analysis & Machine Learning",
    description: "Data cleaning, analysis, visualization, and ML models in Python.",
    cta: "Discuss a Project",
    href: "#contact",
    external: false,
  },
  {
    title: "AI-Powered Web Apps",
    description:
      "Web applications with dashboards, login systems, and databases using React + Supabase.",
    cta: "Discuss a Project",
    href: "#contact",
    external: false,
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-6xl px-4 py-24 md:px-8"
    >
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
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={slideUpVariants}>
            <Card className="flex h-full flex-col gap-4">
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <div className="mt-auto pt-2">
                <Button
                  variant="secondary"
                  href={service.href}
                  {...(service.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": service.ariaLabel,
                      }
                    : {})}
                  className="w-full text-xs sm:w-auto"
                >
                  {service.cta}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
