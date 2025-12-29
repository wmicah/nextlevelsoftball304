import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
	title: string
	description?: string
	primaryCtaText: string
	primaryCtaHref: string
	secondaryCtaText?: string
	secondaryCtaHref?: string
	bgColor?: "white" | "offwhite" | "black" | "dark"
}

export function CTASection({
	title,
	description,
	primaryCtaText,
	primaryCtaHref,
	secondaryCtaText,
	secondaryCtaHref,
	bgColor = "black",
}: CTASectionProps) {
	const bgClasses = {
		white: "bg-white text-black",
		offwhite: "bg-offwhite text-black",
		black: "bg-black text-white",
		dark: "bg-dark text-white",
	}

	const isLightBackground = bgColor === "white" || bgColor === "offwhite"
	const primaryTextColor = isLightBackground ? "text-black" : "text-white"
	const secondaryTextColor = isLightBackground ? "text-gray" : "text-light"

	// Button variants: on light backgrounds use primary (black), on dark backgrounds use primary (black bg, white text)
	// For secondary buttons on dark: use ghost variant with white text override
	const primaryButtonVariant = "primary"
	const secondaryButtonVariant = isLightBackground ? "secondary" : "ghost"
	const secondaryButtonClasses = !isLightBackground
		? "border border-white text-white hover:bg-white hover:text-black"
		: ""

	return (
		<section className={`py-16 md:py-24 ${bgClasses[bgColor]}`}>
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2
						className={`mb-6 text-3xl font-semibold ${primaryTextColor} md:text-4xl`}
					>
						{title}
					</h2>
					{description && (
						<p
							className={`mb-10 text-lg leading-relaxed ${secondaryTextColor}`}
						>
							{description}
						</p>
					)}
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button asChild variant={primaryButtonVariant} size="lg">
							<Link href={primaryCtaHref}>{primaryCtaText}</Link>
						</Button>
						{secondaryCtaText && secondaryCtaHref && (
							<Button
								asChild
								variant={secondaryButtonVariant}
								size="lg"
								className={secondaryButtonClasses}
							>
								<Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
							</Button>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
