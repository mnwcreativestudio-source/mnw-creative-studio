import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically, a Starter website is completed in 7–10 days, a Professional project takes 2–3 weeks, and Premium or Advanced custom solutions take 3–5+ weeks depending on scope, feature complexity, and content readiness.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "We assist and guide you in selecting the best domain and setting up high-performance modern cloud hosting (such as Vercel or Cloudflare), or we can deploy directly to your existing provider.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Every plan includes structured review rounds during both the design and build phases. We work closely with you through iterative feedback to ensure the final website aligns with your expectations.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We frequently modernize outdated sites, improving user experience, typography, page load speed, mobile responsiveness, and conversion architecture while preserving your brand identity.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. Every site includes foundational on-page and technical SEO: clean semantic markup, fast Core Web Vitals, mobile optimization, meta descriptions, Open Graph cards, and search-friendly architecture.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We design and develop custom storefronts complete with product catalogs, shopping carts, secure checkout gateways, and intuitive customer navigation designed to drive sales.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI, and NetBanking through verified Razorpay Live checkout, as well as international PayPal and direct bank transfers upon request.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes. We offer ongoing maintenance and support packages covering security checks, framework updates, content additions, and performance monitoring to keep your site in prime condition.",
  },
  {
    question: "Can I request custom functionality?",
    answer:
      "Absolutely. From interactive appointment schedulers and price calculators to third-party API integrations and member portals, we build tailored functionality shaped to your exact business workflow.",
  },
  {
    question: "What information do you need before starting a project?",
    answer:
      "To start, we discuss your business goals, target audience, preferred pages, design inspirations, and any existing branding assets, logos, or copy you have available.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background">
      {/* Ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about our design process, pricing, timelines, and deliverables."
        />

        <div className="mt-14 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 30}>
                <div
                  className={cn(
                    "rounded-[1.5rem] border backdrop-blur-xl transition-all duration-400 overflow-hidden",
                    isOpen
                      ? "border-gold/60 bg-charcoal/70 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.12)]"
                      : "border-white/[0.08] bg-charcoal/35 hover:border-gold/40 hover:bg-charcoal/55",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 py-4.5 px-5 sm:py-5 sm:px-7 text-left transition-colors"
                  >
                    <span className="flex items-center gap-3.5 font-display text-base sm:text-lg font-bold text-foreground">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold text-xs font-bold border border-gold/30 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
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
                      className="px-5 pb-5 sm:px-7 sm:pb-6 pt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-white/[0.06] animate-in fade-in duration-200"
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
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-charcoal/50 px-6 py-3 text-xs text-muted-foreground/90 backdrop-blur-md shadow-sm">
            <HelpCircle className="size-3.5 text-gold" />
            <span>Have a specific question not covered here?</span>
            <a href="#contact" className="font-bold text-gold hover:underline ml-1">
              Contact us directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
