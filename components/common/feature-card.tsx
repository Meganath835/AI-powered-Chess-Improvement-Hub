import * as React from "react";
import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.ComponentProps<typeof Card> {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "ring-border/60 transition-colors hover:ring-border",
        className
      )}
      {...props}
    >
      <CardHeader>
        <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" aria-hidden="true" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export { FeatureCard };
