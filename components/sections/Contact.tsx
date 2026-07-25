"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { content } from "@/data/content";
import { SOCIAL_LINKS } from "@/lib/constants";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl px-4 py-24 md:px-8"
    >
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          id="contact-heading"
          variants={slideUpVariants}
          className="text-2xl font-bold md:text-3xl"
        >
          {content.contact.headline}
        </motion.h2>
        <motion.p
          variants={slideUpVariants}
          className="mt-2 text-lg text-text-secondary"
        >
          {content.contact.subheading}
        </motion.p>
        <motion.p
          variants={slideUpVariants}
          className="mt-2 text-sm text-text-secondary"
        >
          {content.contact.formDescription}
        </motion.p>

        <motion.form
          variants={slideUpVariants}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-text-secondary"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              aria-required="true"
              value={formData.name}
              onChange={(e) =>
                setFormData((d) => ({ ...d, name: e.target.value }))
              }
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-text-secondary focus:border-accent focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-text-secondary"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              aria-required="true"
              value={formData.email}
              onChange={(e) =>
                setFormData((d) => ({ ...d, email: e.target.value }))
              }
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-text-secondary focus:border-accent focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-text-secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              aria-required="true"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData((d) => ({ ...d, message: e.target.value }))
              }
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-text-secondary focus:border-accent focus:outline-none"
              placeholder="Your message..."
            />
          </div>

          <Button
            type="submit"
            disabled={status === "sending"}
            className="self-start"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>

          {status === "sent" && (
            <p
              className="text-sm text-green-400"
              role="status"
              aria-live="polite"
            >
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400" role="alert">
              Something went wrong. Try emailing me directly at{" "}
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="underline underline-offset-2"
              >
                {SOCIAL_LINKS.email}
              </a>
              .
            </p>
          )}
        </motion.form>

        <motion.div
          variants={slideUpVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="primary" href={`mailto:${SOCIAL_LINKS.email}`}>
            Email
          </Button>
          <Button variant="secondary" href={SOCIAL_LINKS.github}>
            GitHub
          </Button>
          <Button variant="secondary" href={SOCIAL_LINKS.linkedin}>
            LinkedIn
          </Button>
          <Button variant="secondary" href={SOCIAL_LINKS.instagram}>
            Instagram
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
