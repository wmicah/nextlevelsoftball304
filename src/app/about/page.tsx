import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ContentSection } from "@/components/sections/content-section";
import { Features } from "@/components/sections/features";
import { CTASection } from "@/components/sections/cta-section";
import { Heart, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: <Target className="h-8 w-8 text-black" />,
    title: "Excellence",
    description:
      "We set high standards and work tirelessly to help every player achieve their personal best.",
  },
  {
    icon: <Heart className="h-8 w-8 text-black" />,
    title: "Passion",
    description:
      "Our love for the game drives everything we do. We share that passion with every player we coach.",
  },
  {
    icon: <Users className="h-8 w-8 text-black" />,
    title: "Integrity",
    description:
      "We believe in honest feedback, ethical coaching, and building character alongside athletic skills.",
  },
  {
    icon: <Award className="h-8 w-8 text-black" />,
    title: "Growth",
    description:
      "Every challenge is an opportunity. We foster a growth mindset that extends beyond the field.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-black text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                About
              </h1>
            </div>
          </div>
        </section>

        <ContentSection
          title="The Coach's Story"
          bgColor="offwhite"
        >
          <div className="space-y-6 text-base leading-relaxed text-black">
            <p>
              With over 15 years of coaching experience and a deep background in
              competitive softball, our head coach has dedicated their career to
              understanding the art and science of pitching. Having worked with
              players from youth leagues to college programs, they&apos;ve developed
              a comprehensive approach that combines technical expertise with
              practical wisdom.
            </p>
            <p>
              The journey to founding Next Level Softball came from a
              recognition that many players weren&apos;t receiving the personalized
              attention and advanced instruction they needed to truly excel.
              After years of coaching in various settings, the decision was made
              to create a program where quality instruction and individual
              development would always come first.
            </p>
            <p>
              Today, we continue to refine our methods, staying current with the
              latest research in biomechanics and sports performance, while
              never losing sight of what matters most: helping each player reach
              their next level.
            </p>
          </div>
        </ContentSection>

        <ContentSection
          title="Our Values"
          subtitle="The principles that guide everything we do"
          bgColor="white"
        >
          <Features features={values} columns={4} />
        </ContentSection>

        <ContentSection
          title="What Makes Us Different"
          bgColor="dark"
        >
          <div className="space-y-6 text-base leading-relaxed text-light">
            <p>
              Next Level Softball stands apart through our commitment to
              personalized instruction, comprehensive development, and results
              that speak for themselves. Here&apos;s what sets us apart:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-base">
              <li>
                <strong>Small Class Sizes:</strong> We maintain low
                student-to-coach ratios to ensure every player receives
                individual attention and tailored feedback.
              </li>
              <li>
                <strong>Progressive Curriculum:</strong> Our programs are
                structured to build skills systematically, from fundamentals to
                advanced techniques, ensuring solid foundations at every level.
              </li>
              <li>
                <strong>Holistic Approach:</strong> We develop not just pitching
                mechanics, but overall athleticism, mental toughness, and game
                intelligence.
              </li>
              <li>
                <strong>Proven Track Record:</strong> Our players consistently
                see measurable improvements in speed, accuracy, and overall
                performance.
              </li>
              <li>
                <strong>Long-Term Development:</strong> We&apos;re committed to your
                growth over time, not just quick fixes. Our relationships with
                players extend beyond individual sessions.
              </li>
            </ul>
            <p>
              We&apos;re not just another training facility. We&apos;re a community
              dedicated to helping each player discover their potential and
              achieve their goals, whatever they may be.
            </p>
          </div>
        </ContentSection>

        <CTASection
          title="Ready to Join Us?"
          description="Start your journey with Next Level Softball today"
          primaryCtaText="View Programs"
          primaryCtaHref="/programs"
          secondaryCtaText="Get In Touch"
          secondaryCtaHref="/contact"
          bgColor="black"
        />
      </main>
      <Footer />
    </>
  );
}

