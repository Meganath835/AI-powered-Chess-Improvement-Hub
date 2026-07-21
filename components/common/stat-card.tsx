import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps extends React.ComponentProps<typeof Card> {
  icon?: LucideIcon;
  label: string;
  value: string;
}

function StatCard({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: StatCardProps) {
  return (
    <Card className={cn("ring-border/60", className)} {...props}>
      <CardContent className="flex items-center gap-4">
        {Icon && (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="size-5 text-primary" aria-hidden="true" />
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-heading text-2xl font-semibold text-foreground">
            {value}
          </span>
          <span className="text-sm text-muted-foreground">{label}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export { StatCard };
