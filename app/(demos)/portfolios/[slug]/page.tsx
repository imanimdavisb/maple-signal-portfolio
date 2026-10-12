import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolio, portfolios } from "@/lib/portfolios";
import { GrowthTemplate } from "@/components/portfolio-demos/templates/growth/growth-template";
import { LaunchTemplate } from "@/components/portfolio-demos/templates/launch/launch-template";
import { TransitionTemplate } from "@/components/portfolio-demos/templates/transition/transition-template";

export function generateStaticParams() {
  return portfolios.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const profile = getPortfolio(slug);
  if (!profile) return {};
  return {
    title: { absolute: profile.seo.title },
    description: profile.seo.description,
    alternates: { canonical: `/portfolios/${profile.slug}` },
    openGraph: {
      type: "profile",
      title: profile.seo.title,
      description: profile.seo.description,
      url: `/portfolios/${profile.slug}`,
    },
    twitter: { card: "summary_large_image", title: profile.seo.title, description: profile.seo.description },
    // Demo profiles are fictional; keep them out of search results as people.
    robots: profile.fictional ? { index: false, follow: true } : undefined,
  };
}

export default async function PortfolioPage({ params }: PageProps<"/portfolios/[slug]">) {
  const { slug } = await params;
  const profile = getPortfolio(slug);
  if (!profile) notFound();

  switch (profile.template) {
    case "launch":
      return <LaunchTemplate profile={profile} />;
    case "transition":
      return <TransitionTemplate profile={profile} />;
    case "growth":
      return <GrowthTemplate profile={profile} />;
  }
}
