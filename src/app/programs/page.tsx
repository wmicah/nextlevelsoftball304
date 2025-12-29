import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const programs = [
  {
    title: "Fastpitch Lessons",
    description:
      "Master the fundamentals of fastpitch pitching with personalized one-on-one instruction. Perfect for players at any level looking to improve their technique, speed, and accuracy.",
  },
  {
    title: "Pitching Development",
    description:
      "Advanced techniques and mechanics for experienced players. Focus on refining your skills, developing new pitches, and taking your game to the next level.",
  },
  {
    title: "Strength & Mechanics Training",
    description:
      "Physical conditioning combined with proper pitching form. Build strength, flexibility, and endurance while maintaining optimal mechanics to prevent injury and maximize performance.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-black text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Programs / Lessons
              </h1>
              <p className="text-lg leading-relaxed text-light">
                Professional pitching instruction tailored to your goals
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-16">
              {programs.map((program, index) => (
                <article
                  key={index}
                  className="border-b border-light pb-16 last:border-0"
                >
                  <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                    {program.title}
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-gray">
                    {program.description}
                  </p>
                  <Button asChild variant="primary" size="lg">
                    <Link href="/contact">Schedule a Lesson</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Ready to elevate your softball performance?
              </h2>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Start Lessons</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

