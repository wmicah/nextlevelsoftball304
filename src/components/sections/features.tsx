interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function Features({
  title,
  subtitle,
  features,
  columns = 3,
}: FeaturesProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div>
      {title && (
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
      )}
      <div className={`grid grid-cols-1 gap-16 ${gridCols[columns]}`}>
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            {feature.icon && (
              <div className="mb-6 flex justify-center">{feature.icon}</div>
            )}
            <h3 className="mb-4 text-xl font-bold text-black">
              {feature.title}
            </h3>
            <p className="text-base leading-relaxed text-gray">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

