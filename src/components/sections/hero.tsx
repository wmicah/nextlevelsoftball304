import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({
  title = "Elevate Your Softball Performance",
  subtitle = "Professional pitching instruction for serious athletes",
  ctaText = "Become a Student",
  ctaHref = "/contact",
}: HeroProps) {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-10 text-lg leading-relaxed text-light md:text-xl">
              {subtitle}
            </p>
          )}
          <div className="flex items-center justify-center">
            <Button asChild variant="primary" size="lg">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

