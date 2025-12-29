interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  location?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  title = "What Our Players Say",
  subtitle,
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray">
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-light bg-white p-8 text-left"
            >
              <blockquote className="mb-6 text-lg italic leading-relaxed text-gray">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-black text-base">
                  {testimonial.author}
                </p>
                {(testimonial.role || testimonial.location) && (
                  <p className="text-sm text-gray mt-1">
                    {testimonial.role}
                    {testimonial.role && testimonial.location && " • "}
                    {testimonial.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


