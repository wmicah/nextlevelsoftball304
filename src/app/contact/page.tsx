import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ContentSection } from "@/components/sections/content-section";
import { ContactForm } from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContentSection
          title="Contact Us"
          subtitle="Get in touch to start your journey"
          bgColor="black"
          alignment="center"
        >
          <div className="space-y-6 text-base leading-relaxed text-light">
            <p>
              Have questions about our programs? Ready to schedule your first
              session? We&apos;re here to help. Reach out through the form below, or
              contact us directly.
            </p>
          </div>
        </ContentSection>

        <ContactForm />

        <section className="bg-offwhite py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Location</h3>
                <p className="text-base text-gray leading-relaxed">
                  Our training facility offers a professional environment for instruction and practice. Address details available upon inquiry.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Hours</h3>
                <ul className="space-y-2 text-base text-black">
                  <li>Monday - Friday: 3:00 PM - 8:00 PM</li>
                  <li>Saturday: 9:00 AM - 5:00 PM</li>
                  <li>Sunday: By appointment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

