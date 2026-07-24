"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { content } from "@/data/content";
import { SOCIAL_LINKS } from "@/lib/constants";
import { slideUpVariants, staggerContainer } from "@/lib/animations";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [emailConfigured, setEmailConfigured] = useState(false);

  useEffect(() => {
    fetch("/api/contact/health")
      .then((r) => r.json())
      .then((d) => setEmailConfigured(d.configured === true))
      .catch(() => setEmailConfigured(false));
  }, []);

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
      <motion.h2
        id="contact-heading"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-4 text-2xl font-bold md:text-3xl"
      >
        {content.contact.headline}
      </motion.h2>

      <motion.p
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 max-w-xl text-text-secondary"
      >
        {content.contact.subheading}
      </motion.p>

      {emailConfigured ? (
        <motion.form
          onSubmit={handleSubmit}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-lg space-y-4"
        >
          <motion.div variants={slideUpVariants}>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </motion.div>
          <motion.div variants={slideUpVariants}>
            <label htmlFor="email-input" className="sr-only">
              Email
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </motion.div>
          <motion.div variants={slideUpVariants}>
            <label htmlFor="message-input" className="sr-only">
              Message
            </label>
            <textarea
              id="message-input"
              placeholder="Message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </motion.div>
          <motion.div variants={slideUpVariants}>
            <Button type="submit" disabled={status === "sending"} className="w-full">
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Sent!"
                  : status === "error"
                    ? "Failed — Try Again"
                    : "Send Message"}
            </Button>
          </motion.div>
        </motion.form>
      ) : (
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-lg rounded-xl border border-border bg-card p-6 text-center"
        >
          <p className="text-sm text-text-secondary">
            Have a question or want to work together?{" "}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-accent underline underline-offset-2 hover:text-accent/80"
            >
              Send me an email
            </a>{" "}
            or connect through the links below.
          </p>
        </motion.div>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <Button variant="secondary" href={`mailto:${SOCIAL_LINKS.email}`}>
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
    </section>
  );
}
