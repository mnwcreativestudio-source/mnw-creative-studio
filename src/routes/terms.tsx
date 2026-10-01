import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

const title = "Terms & Conditions — MNW Creative Studio";
const description =
  "Review the terms, pricing guidelines, scope specifications, client responsibilities, and service policies for MNW Creative Studio web design projects.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Engagement terms, pricing guidelines, client responsibilities, and service policies."
      lastUpdated="October 2026"
      activePath="/terms"
    >
      <div className="space-y-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
        {/* 1. About MNW Creative Studio */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            1. About MNW Creative Studio
          </h2>
          <p className="mt-3">
            MNW Creative Studio is an independent web design and development studio. We design and
            build bespoke, high-performance websites for businesses, creators, and entrepreneurs
            globally.
          </p>
          <p className="mt-3">
            By accessing our website, initiating a project inquiry, or commissioning web design or
            development work from MNW Creative Studio, you agree to these Terms & Conditions.
          </p>
        </section>

        {/* 2. Scope of Services */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            2. Scope of Services
          </h2>
          <p className="mt-3">
            MNW Creative Studio provides bespoke digital design and development services, including
            but not limited to:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-background/40 p-4">
              <h3 className="font-semibold text-foreground text-sm">Web Design</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                UI/UX wireframing, modern visual layout creation, and brand aesthetic refinement.
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/40 p-4">
              <h3 className="font-semibold text-foreground text-sm">Website Development</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Responsive, high-speed, modern front-end engineering using clean and scalable code.
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/40 p-4">
              <h3 className="font-semibold text-foreground text-sm">Website Redesign</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Modernizing outdated web platforms into conversion-focused, luxury web experiences.
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/40 p-4">
              <h3 className="font-semibold text-foreground text-sm">
                Business & E-Commerce Websites
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tailored corporate sites, lead generation pages, catalogs, and online shopping
                solutions.
              </p>
            </div>
          </div>
          <p className="mt-4">
            Custom digital solutions, bespoke web applications, and advanced API integrations are
            scoped individually based on client requirements.
          </p>
        </section>

        {/* 3. Project Scope & Initiation */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            3. Project Scope & Initiation
          </h2>
          <p className="mt-3">
            Every engagement begins with an agreed scope based on our published plans or a formal
            custom quotation. Work officially commences once:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>The project scope, requirements, and deliverables have been mutually confirmed.</li>
            <li>The required initial deposit or package payment has been received.</li>
            <li>
              Essential preliminary assets (branding guidelines, initial text copy, or functional
              specs) have been provided by the client.
            </li>
          </ul>
        </section>

        {/* 4. Client Responsibilities */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            4. Client Responsibilities
          </h2>
          <p className="mt-3">
            Smooth project delivery is a collaborative partnership. As the client, you agree to:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Provide Accurate Content:</strong> Supply all
              necessary text, logos, high-resolution imagery, video assets, brand guidelines, and
              third-party credentials in a timely manner.
            </li>
            <li>
              <strong className="text-foreground">Timely Feedback & Approvals:</strong> Review
              design mockups, staged revisions, and deliverables within agreed timelines (typically
              3 to 5 business days) to prevent project bottlenecks.
            </li>
            <li>
              <strong className="text-foreground">Content Rights:</strong> Ensure that all text,
              imagery, trademarks, and media provided to MNW Creative Studio are owned by you or
              appropriately licensed.
            </li>
          </ul>
        </section>

        {/* 5. Pricing Structure */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            5. Pricing Structure
          </h2>
          <p className="mt-3">Our standard website packages are priced as follows:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/80 bg-background/50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Starter</span>
              <p className="mt-1 font-display text-xl font-extrabold text-foreground">$200 USD</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Up to 5 pages, mobile-friendly design, contact form, basic SEO, and performance
                optimization.
              </p>
            </div>
            <div className="rounded-xl border border-gold/40 bg-gold/5 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                Professional (Recommended)
              </span>
              <p className="mt-1 font-display text-xl font-extrabold text-foreground">$400 USD</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Up to 10 pages, premium custom design, advanced SEO setup, WhatsApp/social
                integration, and priority support.
              </p>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Premium</span>
              <p className="mt-1 font-display text-xl font-extrabold text-foreground">
                Starting at $700+ USD
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Advanced custom website, custom functionality, integrations, and ongoing support.
              </p>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                Advanced Projects
              </span>
              <p className="mt-1 font-display text-xl font-extrabold text-foreground">
                $1,200–$2,500+ USD
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                E-commerce platforms, complex booking systems, custom web apps, and enterprise
                digital solutions.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-gold/25 bg-gold/5 p-4">
            <p className="text-xs leading-relaxed text-foreground/90">
              <strong className="text-gold">Notice on Pricing Variations:</strong> Published rates
              reflect baseline package parameters. Prices can vary when actual project scope,
              additional pages, custom backend features, third-party integrations, or specialized
              development requirements differ from baseline specifications.
            </p>
          </div>
        </section>

        {/* 6. Payment Terms */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            6. Payment Terms
          </h2>
          <p className="mt-3">Payment arrangements depend on the chosen package:</p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Standard Fixed Packages:</strong> Full upfront
              payment or an agreed two-part split (e.g. 50% deposit before design, 50% prior to
              final live deployment/handover).
            </li>
            <li>
              <strong className="text-foreground">Custom & Advanced Projects:</strong> Governed by a
              bespoke quotation detailing agreed milestone stages and scheduled payments.
            </li>
            <li>
              Payments may be made via supported secure payment channels (such as Razorpay or PayPal
              when enabled) or verified direct electronic transfer.
            </li>
          </ul>
        </section>

        {/* 7. Revisions & Scope Changes */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            7. Revisions & Scope Changes
          </h2>
          <p className="mt-3">
            Each project includes reasonable revision rounds during the design phase to align the
            website with your vision:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              Revisions cover layout tweaks, color balancing, typography adjustments, and content
              insertion within the agreed scope.
            </li>
            <li>
              Requests for major structural overhauls after design sign-off, or the addition of new
              pages, custom workflows, or complex plugins not included in the original scope, are
              treated as scope additions and quoted separately.
            </li>
          </ul>
        </section>

        {/* 8. Delivery Timelines */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            8. Delivery Timelines
          </h2>
          <p className="mt-3">
            Estimated project delivery timeframes depend on project complexity, prompt client
            feedback, and timely provision of required copy and assets:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              Typical baseline turnaround ranges from 7 to 21 business days, depending on project
              tier.
            </li>
            <li>
              Turnaround estimates are targeted projections and are not guaranteed delivery dates
              unless specifically agreed in writing. Delays resulting from missing client content or
              delayed feedback naturally extend the completion timeline.
            </li>
          </ul>
        </section>

        {/* 9. Third-Party Services & Ongoing Costs */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            9. Third-Party Services & Ongoing Costs
          </h2>
          <p className="mt-3">
            MNW Creative Studio builds custom websites, but ongoing third-party infrastructure
            remains the client's financial and contractual responsibility:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Domain name registration and annual renewals.</li>
            <li>Web hosting, SSL, and server infrastructure.</li>
            <li>Premium third-party plugins, APIs, stock photo licenses, or SaaS subscriptions.</li>
            <li>
              Payment gateway transaction fees charged directly by payment processors (such as
              Razorpay, PayPal, or Stripe).
            </li>
          </ul>
        </section>

        {/* 10. Intellectual Property Rights */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            10. Intellectual Property Rights
          </h2>
          <p className="mt-3">Upon receipt of full and final agreed payment:</p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Client Ownership:</strong> You receive full
              ownership and usage rights to the custom design, code, and graphical layouts produced
              specifically for your project.
            </li>
            <li>
              <strong className="text-foreground">Third-Party Assets:</strong> Any open-source
              libraries, frameworks, third-party plugins, fonts, and licensed media assets remain
              subject to their respective creators' and vendors' licenses.
            </li>
          </ul>
        </section>

        {/* 11. Portfolio Rights */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            11. Portfolio Rights
          </h2>
          <p className="mt-3">
            MNW Creative Studio takes pride in its craftsmanship. Unless explicitly agreed otherwise
            in writing prior to project kickoff, we reserve the right to display screenshots,
            preview links, and summaries of completed work in our digital portfolio, case studies,
            and social media channels.
          </p>
        </section>

        {/* 12. Acceptable Use & Client Content */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            12. Acceptable Use & Client Content
          </h2>
          <p className="mt-3">
            We reserve the right to decline or terminate projects that involve deceptive practices,
            malicious code, hate speech, illegal products or services, intellectual property
            infringement, or defamatory material.
          </p>
        </section>

        {/* 13. Limitation of Liability */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            13. Limitation of Liability
          </h2>
          <p className="mt-3">
            MNW Creative Studio strives for engineering excellence and quality assurance. However,
            to the maximum extent permitted by applicable law:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              MNW Creative Studio shall not be liable for any indirect, incidental, punitive, or
              consequential damages, including loss of profits, business interruptions, third-party
              hosting outages, or cyber attacks beyond our reasonable control.
            </li>
            <li>
              Our total cumulative liability arising out of or related to any project engagement is
              strictly limited to the actual amount paid by the client to MNW Creative Studio for
              the specific service in dispute.
            </li>
          </ul>
        </section>

        {/* 14. Changes to Terms */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            14. Changes to Terms
          </h2>
          <p className="mt-3">
            We reserve the right to update these Terms & Conditions as our studio services evolve.
            Existing confirmed projects remain governed by the agreed terms in effect at the time of
            project commissioning.
          </p>
        </section>

        {/* 15. Governing Law & Dispute Resolution */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            15. Dispute Resolution
          </h2>
          <p className="mt-3">
            We value positive, collaborative client relationships. In the event of any disagreement
            or concern, both parties agree to first seek an amicable, good-faith resolution through
            direct, informal communication before pursuing formal legal avenues.
          </p>
        </section>

        {/* 16. Contact Information */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            16. Contact Information
          </h2>
          <p className="mt-3">For questions regarding these Terms & Conditions, please contact:</p>
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
