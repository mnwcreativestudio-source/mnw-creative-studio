import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { Check, Compass, Palette, Code, CheckCircle, Rocket, LifeBuoy } from "lucide-react";

const title = "Service & Project Policy — MNW Creative Studio";
const description =
  "Explore how MNW Creative Studio plans, designs, engineers, tests, launches, and supports bespoke web projects.";

export const Route = createFileRoute("/service-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicePolicyPage,
});

function ServicePolicyPage() {
  const steps = [
    {
      icon: Compass,
      title: "1. Discovery & Planning",
      desc: "We analyze your brand, business goals, target audience, site architecture, and functional needs to define a clear, structured roadmap.",
    },
    {
      icon: Palette,
      title: "2. Design & Prototyping",
      desc: "We craft custom visual layouts, typography, color palettes, and interactive prototypes tailored to elevate your brand positioning.",
    },
    {
      icon: Code,
      title: "3. Development & Build",
      desc: "Once design concepts are approved, we engineer clean, high-performance, modern front-end code with responsive layouts and smooth micro-interactions.",
    },
    {
      icon: CheckCircle,
      title: "4. Testing & Quality Assurance",
      desc: "Rigorous cross-browser, multi-device (mobile/desktop), accessibility, speed, and responsive audits ensure a flawless user experience.",
    },
    {
      icon: Rocket,
      title: "5. Launch & Deployment",
      desc: "We deploy the website to production, configure your custom domain and SSL, submit search engine index requests, and verify live functionality.",
    },
    {
      icon: LifeBuoy,
      title: "6. Post-Launch Support",
      desc: "We provide dedicated post-launch support to ensure smooth operation, answer team questions, and address any unexpected launch anomalies.",
    },
  ];

  return (
    <LegalLayout
      title="Service & Project Policy"
      subtitle="The end-to-end blueprint of how MNW Creative Studio scopes, designs, builds, launches, and supports web projects."
      lastUpdated="October 2026"
      activePath="/service-policy"
    >
      <div className="space-y-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
        {/* 1. How a Project Starts */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            1. How a Project Starts
          </h2>
          <p className="mt-3">
            Every partnership at MNW Creative Studio begins with a collaborative consultation.
            Whether you select our Starter ($200 USD), Professional ($400 USD), Premium ($700+ USD),
            or an Advanced custom quote ($1,200–$2,500+ USD), our objective is to ensure total
            alignment on your business goals, target audience, and functional expectations before a
            single line of code is written.
          </p>
          <p className="mt-3">
            Once project scope and initial payment requirements are established, your project is
            formally scheduled on our production calendar.
          </p>
        </section>

        {/* 2. The 6-Stage Project Lifecycle */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            2. The 6-Stage Project Lifecycle
          </h2>
          <p className="mt-3">
            We follow a structured, transparent design and engineering process:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border/80 bg-background/50 p-5 transition-all hover:border-gold/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Client Approvals & Review Milestones */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            3. Client Approvals & Sign-off Milestones
          </h2>
          <p className="mt-3">
            To ensure efficiency and prevent miscommunication, our projects feature clear sign-off
            checkpoints:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Design Approval:</strong> You review the visual
              concepts, typography, layout, and mobile viewports. Your approval signals our
              transition into full development.
            </li>
            <li>
              <strong className="text-foreground">Staging Review:</strong> Prior to public launch,
              you review the live staging build to test all interactive forms, buttons, links, and
              content presentation.
            </li>
            <li>
              <strong className="text-foreground">Final Launch Sign-off:</strong> Following final
              review and approval, we point your custom domain and deploy your website to
              production.
            </li>
          </ul>
        </section>

        {/* 4. What Is Included vs. Excluded */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            4. Scope Inclusions vs. Exclusions
          </h2>
          <p className="mt-3">
            Transparency prevents surprises. Below is an overview of what is included within
            standard engagements versus services that require separate scoping:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {/* Inclusions */}
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold">
                What Is Standard & Included
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2 text-foreground/90">
                  <Check className="size-4 shrink-0 text-gold mt-0.5" />
                  <span>Custom UI/UX layout aligned with your brand aesthetic</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <Check className="size-4 shrink-0 text-gold mt-0.5" />
                  <span>Full mobile, tablet, and desktop responsive adaptation</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <Check className="size-4 shrink-0 text-gold mt-0.5" />
                  <span>Performance optimization (fast loading, asset minification)</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <Check className="size-4 shrink-0 text-gold mt-0.5" />
                  <span>Foundational technical SEO (meta tags, sitemap, semantic markup)</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <Check className="size-4 shrink-0 text-gold mt-0.5" />
                  <span>Functional contact and inquiry form setup</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <Check className="size-4 shrink-0 text-gold mt-0.5" />
                  <span>Assistance connecting custom domains and launching live</span>
                </li>
              </ul>
            </div>

            {/* Exclusions */}
            <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Typically Excluded (Quoted Separately)
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-gold">•</span>
                  <span>Writing original business copy or content from scratch</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-gold">•</span>
                  <span>Purchasing paid stock photography or premium video assets</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-gold">•</span>
                  <span>Ongoing annual web hosting or domain registration bills</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-gold">•</span>
                  <span>Third-party SaaS monthly subscriptions or transaction fees</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-gold">•</span>
                  <span>Complex backend architecture outside agreed scope</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Additional Features & Scope Changes */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            5. Additional Features & Scope Changes
          </h2>
          <p className="mt-3">
            We understand that project visions evolve during creative collaboration. If you request
            new pages, additional integrations, or complex custom functionality outside the
            originally agreed package:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              We provide a transparent estimate of additional hours and cost before initiating the
              change.
            </li>
            <li>
              Scope additions are formally agreed in writing to prevent surprises on your invoice or
              unexpected delivery delays.
            </li>
          </ul>
        </section>

        {/* 6. Domain & Hosting Responsibilities */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            6. Domain & Hosting Responsibilities
          </h2>
          <p className="mt-3">
            To ensure complete ownership and autonomy over your digital presence:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Domain Ownership:</strong> Clients should purchase
              and maintain direct ownership of their custom domain name through an ICANN-accredited
              registrar.
            </li>
            <li>
              <strong className="text-foreground">Hosting Environment:</strong> Clients maintain
              direct billing ownership of their hosting or cloud provider. MNW Creative Studio
              manages the technical configuration, DNS records, and deployment setup for you.
            </li>
          </ul>
        </section>

        {/* 7. Maintenance & Support After Delivery */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            7. Maintenance & Support After Delivery
          </h2>
          <p className="mt-3">Our relationship does not end at launch:</p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Launch Warranty:</strong> Every new website
              includes a 14-day warranty period following live deployment to address any unforeseen
              bugs, display issues, or formatting anomalies in the delivered scope.
            </li>
            <li>
              <strong className="text-foreground">Ongoing Maintenance:</strong> Clients seeking
              ongoing content updates, periodic feature additions, or proactive technical
              maintenance can engage MNW Creative Studio on a flexible monthly retainer or ad-hoc
              basis.
            </li>
          </ul>
        </section>

        {/* 8. Contact Information */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            8. Contact Information
          </h2>
          <p className="mt-3">
            If you have questions about how we handle projects or would like to discuss an upcoming
            website build:
          </p>
          <div className="mt-4 rounded-xl border border-border/80 bg-background/50 p-4 text-sm space-y-1">
            <p className="font-bold text-foreground">MNW Creative Studio</p>
            <p>
              Email:{" "}
              <a href="mailto:mnwcreativestudio@gmail.com" className="text-gold underline">
                mnwcreativestudio@gmail.com
              </a>
            </p>
            <p>Instagram: @mnwcreativestudio</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
