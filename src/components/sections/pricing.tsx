import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: PricingFeature[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}

interface PricingProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
}

export function Pricing({ title = "Programs & Pricing", subtitle, plans }: PricingProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-black md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray">
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`transition-all hover:shadow-md ${
                plan.featured
                  ? "border-2 border-black ring-2 ring-black ring-offset-2"
                  : ""
              }`}
            >
              {plan.featured && (
                <div className="bg-black text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                {plan.description && (
                  <CardDescription className="text-base mt-2">
                    {plan.description}
                  </CardDescription>
                )}
                <div className="mt-4">
                  <span className="text-4xl font-bold text-black">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-gray ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-start gap-3 ${
                        feature.included ? "text-black" : "text-light"
                      }`}
                    >
                      {feature.included ? (
                        <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-black" />
                      ) : (
                        <span className="h-5 w-5 flex-shrink-0 mt-0.5">—</span>
                      )}
                      <span className="text-base">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="primary" className="w-full">
                  <Link href={plan.ctaHref}>{plan.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


