import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ContentSection } from "@/components/sections/content-section";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

// Placeholder images - replace with actual image paths
const galleryImages = [
  {
    src: "/placeholder-gallery-1.jpg",
    alt: "Pitching instruction session",
    caption: "Individual coaching session",
  },
  {
    src: "/placeholder-gallery-2.jpg",
    alt: "Player practicing technique",
    caption: "Technique refinement",
  },
  {
    src: "/placeholder-gallery-3.jpg",
    alt: "Group training session",
    caption: "Small group training",
  },
  {
    src: "/placeholder-gallery-4.jpg",
    alt: "Video analysis in progress",
    caption: "Video analysis session",
  },
  {
    src: "/placeholder-gallery-5.jpg",
    alt: "Player demonstrating form",
    caption: "Proper form demonstration",
  },
  {
    src: "/placeholder-gallery-6.jpg",
    alt: "Training facility",
    caption: "Our training facility",
  },
  {
    src: "/placeholder-gallery-7.jpg",
    alt: "Success celebration",
    caption: "Celebrating progress",
  },
  {
    src: "/placeholder-gallery-8.jpg",
    alt: "Coaching moment",
    caption: "One-on-one instruction",
  },
  {
    src: "/placeholder-gallery-9.jpg",
    alt: "Player in action",
    caption: "Player in action",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContentSection
          title="Gallery"
          subtitle="A look at Next Level Softball in action"
          bgColor="black"
          alignment="center"
        >
          <div className="space-y-6 text-base leading-relaxed text-light">
            <p>
              See our training in action. These images showcase the dedication,
              focus, and progress that happens every day at Next Level Softball.
            </p>
          </div>
        </ContentSection>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <GalleryGrid images={galleryImages} columns={3} />
          </div>
        </section>

        <ContentSection
          title="Join the Next Level"
          subtitle="Ready to see yourself in our gallery?"
          bgColor="offwhite"
          alignment="center"
        >
          <div className="space-y-6 text-base leading-relaxed text-black">
            <p>
              Every player in these images started with a goal to improve. They
              committed to the process, worked hard, and achieved their next
              level. You can too.
            </p>
          </div>
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}


