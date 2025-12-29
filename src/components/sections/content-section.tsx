interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bgColor?: "white" | "offwhite" | "black" | "dark";
  alignment?: "left" | "center";
}

export function ContentSection({
  title,
  subtitle,
  children,
  bgColor = "white",
  alignment = "left",
}: ContentSectionProps) {
  const bgClasses = {
    white: "bg-white text-black",
    offwhite: "bg-offwhite text-black",
    black: "bg-black text-white",
    dark: "bg-dark text-white",
  };

  const textAlign = alignment === "center" ? "text-center" : "text-left";

  return (
    <section className={`py-16 md:py-24 ${bgClasses[bgColor]}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`mx-auto max-w-4xl ${textAlign}`}>
          {title && (
            <h2 className={`mb-4 text-3xl font-semibold md:text-4xl ${
              bgColor === "black" || bgColor === "dark"
                ? "text-white"
                : "text-black"
            }`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`mb-8 text-lg ${
              bgColor === "black" || bgColor === "dark"
                ? "text-light"
                : "text-gray"
            }`}>
              {subtitle}
            </p>
          )}
          <div className={`prose prose-lg max-w-none ${
            bgColor === "black" || bgColor === "dark"
              ? "prose-invert"
              : ""
          }`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}


