import { BarChart3, BrainCircuit, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "@/components/common/feature-card";
import { PageContainer } from "@/components/layout/page-container";
import { SectionContainer } from "@/components/layout/section-container";

const placeholderFeatures = [
  {
    icon: BrainCircuit,
    title: "Feature One",
    description: "Description of this feature goes here.",
  },
  {
    icon: Target,
    title: "Feature Two",
    description: "Description of this feature goes here.",
  },
  {
    icon: BarChart3,
    title: "Feature Three",
    description: "Description of this feature goes here.",
  },
];

export default function Home() {
  return (
    <>
      <SectionContainer className="pt-24 sm:pt-32">
        <PageContainer className="flex flex-col items-center gap-6 text-center">
          <Badge variant="secondary">Coming soon</Badge>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Hero placeholder headline
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Hero placeholder subheading goes here.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </PageContainer>
      </SectionContainer>

      <SectionContainer id="features">
        <PageContainer>
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Features placeholder heading
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Features placeholder description goes here.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </PageContainer>
      </SectionContainer>
    </>
  );
}
