import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

const title = "Privacy Policy — MNW Creative Studio";
const description =
  "Learn how MNW Creative Studio collects, uses, protects, and handles personal and project information submitted through our website and inquiry forms.";

export const Route = createFileRoute("/privacy-policy")({
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
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How MNW Creative Studio handles and protects personal and business information."
      lastUpdated="October 2026"
      activePath="/privacy-policy"
    >
      <div className="space-y-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
        {/* 1. Introduction */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            1. Introduction
          </h2>
          <p className="mt-3">
            Welcome to MNW Creative Studio. We are an independent web design and development studio
            dedicated to creating modern, high-performing websites for businesses and founders. We
            value your privacy and are committed to being transparent about how we collect, use, and
            protect information submitted to us.
          </p>
          <p className="mt-3">
            This Privacy Policy explains what information we collect when you visit our website,
            interact with our portfolio, or submit project inquiries through our forms, and how that
            information is handled.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            2. Information We Collect
          </h2>
          <p className="mt-3">
            We collect only the information necessary to evaluate project inquiries, prepare
            proposals, communicate with clients, and deliver web design and development services.
          </p>
          <div className="mt-4 rounded-2xl border border-border/70 bg-background/40 p-5 space-y-3">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Information Voluntarily Provided by You:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Full Name:</strong> To identify who we are
                communicating with.
              </li>
              <li>
                <strong className="text-foreground">Email Address:</strong> To respond to your
                project requests, send quotations, and provide design updates.
              </li>
              <li>
                <strong className="text-foreground">Business / Brand Name:</strong> To understand
                the entity or brand you represent.
              </li>
              <li>
                <strong className="text-foreground">Project Type & Selected Plan:</strong> Such as
                Starter ($200 USD), Professional ($400 USD), Premium ($700+ USD), or Advanced
                Projects ($1,200–$2,500+ USD).
              </li>
              <li>
                <strong className="text-foreground">Message & Project Requirements:</strong>{" "}
                Specific details, goals, design inspirations, timelines, and technical requirements
                you voluntarily share with us.
              </li>
            </ul>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Basic Technical Information:</strong> Like most
            websites, standard non-identifying technical data such as browser type, operating
            system, and standard server log entries may be processed automatically by our hosting
            and CDN infrastructure for site performance, stability, and security purposes.
          </p>
        </section>

        {/* 3. How We Use Information */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            3. How We Use Information
          </h2>
          <p className="mt-3">
            Information gathered from our contact and project inquiry forms is used strictly for
            legitimate business and client service purposes, including:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Responding promptly to your inquiries and consultation requests.</li>
            <li>Discussing project vision, specifications, and deliverable timelines.</li>
            <li>Preparing transparent quotations, scope agreements, and invoices.</li>
            <li>Designing, developing, and deploying requested web solutions.</li>
            <li>Processing payments through secure third-party payment providers when enabled.</li>
            <li>Providing ongoing customer support, client revisions, and maintenance.</li>
            <li>
              Protecting our website, studio, and clients against fraud, unauthorized activity, and
              security threats.
            </li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or trade your personal information to third-party marketing
            companies or data brokers.
          </p>
        </section>

        {/* 4. Payment Information */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            4. Payment Information
          </h2>
          <p className="mt-3">
            When online payments are enabled or processed, transactions are handled directly through
            authorized third-party payment gateways such as{" "}
            <strong className="text-foreground">Razorpay</strong> or{" "}
            <strong className="text-foreground">PayPal</strong>.
          </p>
          <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/5 p-5 space-y-2">
            <p className="text-sm">
              <strong className="text-foreground">Security Note:</strong> MNW Creative Studio does
              not collect, process, or store complete credit card numbers, debit card numbers, CVV
              security codes, online banking passwords, or other sensitive payment credentials on
              our servers.
            </p>
            <p className="text-xs text-muted-foreground">
              All payment details entered during checkout are submitted directly to the third-party
              payment processor via encrypted connections. We encourage you to review the privacy
              policy and terms of service of the applicable payment provider prior to making
              payment.
            </p>
          </div>
        </section>

        {/* 5. Third-Party Services */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            5. Third-Party Services
          </h2>
          <p className="mt-3">
            To provide a secure and reliable experience, MNW Creative Studio uses a limited number
            of vetted third-party service providers:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Payment Processors:</strong> Razorpay and PayPal
              (if/when enabled) for processing client invoices and package payments.
            </li>
            <li>
              <strong className="text-foreground">Email Communications:</strong> Standard email
              infrastructure (Google Workspace / Gmail) to receive inquiries and correspond with
              clients.
            </li>
            <li>
              <strong className="text-foreground">Hosting & Content Delivery:</strong> Cloud hosting
              infrastructure to serve website assets efficiently and securely.
            </li>
          </ul>
          <p className="mt-3">
            We do not integrate extraneous or unverified trackers, advertising networks, or
            third-party behavioral analytics on this website.
          </p>
        </section>

        {/* 6. Data Security */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            6. Data Security
          </h2>
          <p className="mt-3">
            We employ commercially reasonable technical and administrative safeguards to protect
            your personal information and project data against unauthorized access, alteration,
            disclosure, or destruction. All communication with our website is encrypted via Secure
            Sockets Layer / Transport Layer Security (HTTPS).
          </p>
          <p className="mt-3">
            However, please note that no method of transmission over the Internet or electronic
            storage can be guaranteed to be 100% secure. While we take diligent precautions, we
            cannot guarantee absolute data security.
          </p>
        </section>

        {/* 7. Data Retention */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            7. Data Retention
          </h2>
          <p className="mt-3">
            We retain personal information and project correspondence only for as long as reasonably
            necessary to fulfill the purposes outlined in this policy, including:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Maintaining communication regarding open or past website projects.</li>
            <li>Providing ongoing support, updates, or future expansion work.</li>
            <li>Complying with accounting, tax, record-keeping, and legal requirements.</li>
            <li>Resolving any potential disputes or enforcing our service agreements.</li>
          </ul>
        </section>

        {/* 8. User Choices and Requests */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            8. User Choices & Your Rights
          </h2>
          <p className="mt-3">
            You maintain full control over the personal information you share with us. At any time,
            you may contact MNW Creative Studio to:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Request a summary of what personal information we hold about you.</li>
            <li>Request corrections or updates to your contact or business information.</li>
            <li>
              Request the deletion of your inquiry details from our correspondence records, subject
              to applicable legal or accounting retention obligations.
            </li>
          </ul>
          <p className="mt-3">
            To submit any request regarding your personal data, please email us directly at{" "}
            <a
              href="mailto:mnwcreativestudio@gmail.com"
              className="text-gold underline hover:text-gold/90"
            >
              mnwcreativestudio@gmail.com
            </a>
            .
          </p>
        </section>

        {/* 9. Children's Privacy */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            9. Children's Privacy
          </h2>
          <p className="mt-3">
            Our website and creative services are strictly directed to businesses, entrepreneurs,
            and individuals aged 18 and older. We do not knowingly solicit or collect personal
            information from children under the age of 13. If you believe a child has provided us
            with personal information, please contact us immediately so we can remove it.
          </p>
        </section>

        {/* 10. Policy Updates */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            10. Policy Updates
          </h2>
          <p className="mt-3">
            As MNW Creative Studio expands its digital offerings and introduces new features or
            services, this Privacy Policy may be updated periodically. Any updates will be posted on
            this page with an updated "Last Updated" date. We encourage visitors to review this page
            periodically to stay informed.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            11. Contact Us
          </h2>
          <p className="mt-3">
            If you have questions, comments, or concerns regarding this Privacy Policy or our data
            practices, please reach out to:
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
