import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

const title = "Refund & Cancellation Policy — MNW Creative Studio";
const description =
  "Review the refund and cancellation policy for MNW Creative Studio. All project payments are non-refundable once confirmed or commenced.";

export const Route = createFileRoute("/refund-policy")({
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
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      subtitle="Payment terms, cancellation guidelines, and non-refundable policy for MNW Creative Studio projects."
      lastUpdated="October 2026"
      activePath="/refund-policy"
    >
      <div className="space-y-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
        {/* 1. General Refund Policy */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            1. General Refund Policy
          </h2>
          <p className="mt-3">
            All payments made to MNW Creative Studio are non-refundable once a project has been
            confirmed or work has commenced.
          </p>
          <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/5 p-5">
            <p className="text-xs leading-relaxed text-foreground/90 font-medium sm:text-sm">
              Because our web design and development services involve custom design, dedicated
              creative strategy, and reserved production schedules, all fees paid for our services
              are strictly non-refundable upon project confirmation or kickoff.
            </p>
          </div>
        </section>

        {/* 2. Client Cancellation */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            2. Client Cancellation
          </h2>
          <p className="mt-3">
            If a client cancels a project after confirmation or after work has started, payments
            already made are non-refundable.
          </p>
          <p className="mt-3">
            Canceling an engagement at any stage does not entitle the client to a reimbursement of
            deposits, milestone installments, or upfront payments made prior to cancellation.
          </p>
        </section>

        {/* 3. Completed Work & Milestones */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            3. Completed Work & Milestones
          </h2>
          <p className="mt-3">
            Payments related to completed work, approved milestones, design work, development work,
            reserved project time, or delivered files are non-refundable.
          </p>
          <p className="mt-3">
            Time, effort, and creative resources allocated to wireframes, mockups, prototypes, code
            architecture, revisions, and project staging are non-recoverable once performed.
          </p>
        </section>

        {/* 4. Third-Party Costs */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            4. Third-Party Costs
          </h2>
          <p className="mt-3">
            Domain names, hosting, paid plugins, licenses, stock assets, APIs, payment processing
            fees, and other third-party expenses purchased for a project are non-refundable.
          </p>
          <p className="mt-3">
            These costs are disbursed directly to external providers and third-party vendors and
            cannot be refunded or reimbursed under any circumstance.
          </p>
        </section>

        {/* 5. Custom Projects */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            5. Custom Projects
          </h2>
          <p className="mt-3">
            For Advanced Projects and custom development, all payment terms and project scope will
            be confirmed before work begins. Payments remain non-refundable after project
            confirmation.
          </p>
          <p className="mt-3">
            Custom quotations are tailored specifically to the agreed scope, feature requirements,
            and timeline for each client. Once confirmed, all scheduled installments and deposits
            remain non-refundable.
          </p>
        </section>

        {/* 6. Duplicate or Accidental Payments */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            6. Duplicate or Accidental Payments
          </h2>
          <p className="mt-3">
            If a duplicate payment is accidentally made, MNW Creative Studio may review the
            transaction and refund the verified excess payment.
          </p>
          <p className="mt-3">
            Clients should contact us immediately with payment receipts and transaction reference
            numbers so our team can verify the error and issue an appropriate reversal for the
            duplicate charge.
          </p>
        </section>

        {/* 7. Payment Disputes */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            7. Payment Disputes
          </h2>
          <p className="mt-3">
            Clients should contact MNW Creative Studio at{" "}
            <a href="mailto:mnwcreativestudio@gmail.com" className="text-gold underline">
              mnwcreativestudio@gmail.com
            </a>{" "}
            regarding any billing concern before initiating a payment dispute or chargeback.
          </p>
          <p className="mt-3">
            We are committed to prompt and transparent communication to address any questions,
            clarifications, or concerns amicably and directly.
          </p>
        </section>

        {/* 8. Refund Requests */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            8. Refund Requests
          </h2>
          <p className="mt-3">
            Because payments are non-refundable, refund requests will generally not be accepted
            except for verified duplicate or accidental payments.
          </p>
        </section>

        {/* 9. Contact */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">9. Contact</h2>
          <p className="mt-3">
            For any inquiries regarding this Refund & Cancellation Policy, please reach out to:
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
