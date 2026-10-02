import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact as ContactComponent } from "@/components/site/Contact";

const title = "Contact & Start a Project — MNW Creative Studio";
const description =
  "Get in touch with MNW Creative Studio. Secure, verified project inquiries, direct email liaison, and prompt consultation response.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Direct Studio Liaison"
          title="Let’s Build Something"
          titleHighlight="Exceptional."
          description="Have a new project, redesign, or tailored platform in mind? Complete our verified inquiry flow below or connect directly via email to begin your consultation."
          badge="Direct Inquiry Hub"
        />

        {/* Full Contact Form with Resend Email OTP Verification & Supabase integration */}
        <ContactComponent />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
