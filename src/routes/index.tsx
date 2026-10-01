import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ValueStrip } from "@/components/site/ValueStrip";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Plans } from "@/components/site/Plans";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { CallToAction } from "@/components/site/CallToAction";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

const title = "MNW Creative Studio — Modern Websites for Modern Businesses";
const description =
  "A global web design and development studio creating modern, high-performing websites that help businesses build credibility, attract customers and grow online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <Services />
        <WhyUs />
        <Plans />
        <Work />
        <Process />
        <About />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
