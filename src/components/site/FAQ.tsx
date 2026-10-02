import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FAQItem = {
  question: string;
  answer: string;
  category: "Process" | "Tech" | "Commercial";
};

export const faqs: FAQItem[] = [
  {
    category: "Process",
    question: "How long does it take to design and launch a website?",
    answer:
      "A Starter website is typically completed in 7–10 days. A custom Professional project takes 2–3 weeks, and Premium or Advanced custom web platforms take 3–5+ weeks depending on feature complexity, content readiness, and custom integrations.",
  },
  {
    category: "Process",
    question: "How do revisions work throughout the project?",
    answer:
      "Every plan includes structured review rounds during both the design concept and the engineering build phases. We work closely with you through iterative milestone demos to ensure the final website exceeds your expectations.",
  },
  {
    category: "Tech",
    question: "Do you provide custom domain setup and cloud hosting?",
    answer:
      "Yes. We configure custom domains, SSL/HTTPS certificates, and deploy high-performance modern cloud hosting (such as Vercel, Cloudflare, or AWS), or we can deploy directly to your existing infrastructure.",
  },
  {
    category: "Tech",
    question: "Can you modernize and redesign my existing website?",
    answer:
      "Yes. We frequently transform outdated sites into modern, high-performing digital experiences—improving user experience, typography, page load speed, mobile responsiveness, and conversion architecture while preserving your brand equity and search ranking.",
  },
  {
    category: "Tech",
    question: "What technical SEO standards are included?",
    answer:
      "Every website is built with foundational on-page and technical SEO: clean semantic HTML5 markup, optimal Core Web Vitals, mobile optimization, meta descriptions, Open Graph social share cards, XML sitemaps, and search-friendly routing.",
  },
  {
    category: "Commercial",
    question: "Do you design and build e-commerce storefronts?",
    answer:
      "Yes. We design and develop custom storefronts complete with high-definition product catalogs, fluid shopping carts, secure checkout gateways, and intuitive customer navigation designed to drive repeat purchases.",
  },
  {
    category: "Commercial",
    question: "What payment methods and gateways do you support?",
    answer:
      "We accept all major credit/debit cards, UPI, and NetBanking through verified Razorpay Live checkout, as well as international cards, PayPal, and direct wire transfers upon request.",
  },
  {
    category: "Tech",
    question: "Can I request custom interactive functionality or APIs?",
    answer:
      "Absolutely. From interactive appointment schedulers and price calculators to third-party API integrations, webhook automations, and authenticated portals, we build tailored functionality shaped to your exact business workflow.",
  },
  {
    category: "Process",
    question: "What information or assets are required to begin?",
    answer:
      "To initiate your project, we clarify your business goals, target audience, preferred pages, and aesthetic inspirations. If you already have branding assets (logo, brand guidelines, copywriting, photography), we integrate them seamlessly.",
  },
  {
    category: "Commercial",
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Yes. We provide ongoing support covering security updates, framework maintenance, content additions, and performance monitoring to ensure your digital platform stays fast, secure, and up to date.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Process", "Tech", "Commercial"];

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background">
      {/* Ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.035] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions"
            description="Clear answers about our design process, pricing, timelines, technology stack, and deliverables."
          />
          <Link
            to="/faq"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft w-fit"
          >
            <span>View Complete Knowledge Base</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300",
                activeCategory === cat
                  ? "bg-gold text-primary-foreground shadow-[var(--shadow-gold)]"
                  : "bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground",
              )}
            >
              {cat === "All" ? "All Questions" : cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="mt-8 space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 25}>
                <div
                  className={cn(
                    "rounded-[1.75rem] border backdrop-blur-xl transition-all duration-400 overflow-hidden",
                    isOpen
                      ? "border-gold/60 bg-charcoal/75 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.12)]"
                      : "border-white/[0.08] bg-charcoal/35 hover:border-gold/40 hover:bg-charcoal/55",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 py-5 px-6 sm:px-8 text-left transition-colors"
                  >
                    <span className="flex items-center gap-4 font-display text-base sm:text-lg font-bold text-foreground">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold text-xs font-bold border border-gold/30">
                        {index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-background/50 text-gold transition-all duration-300",
                        isOpen && "rotate-180 border-gold/40 bg-gold/15",
                      )}
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-6 sm:px-8 sm:pb-7 pt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-white/[0.06] animate-in fade-in duration-200"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-white/[0.08] bg-charcoal/50 px-6 py-3.5 text-xs text-muted-foreground/90 backdrop-blur-md shadow-sm">
            <span className="flex items-center gap-2">
              <HelpCircle className="size-4 text-gold shrink-0" />
              <span>Have a specific architectural or project question?</span>
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 font-bold text-gold hover:underline"
            >
              <span>Speak directly with our team</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
