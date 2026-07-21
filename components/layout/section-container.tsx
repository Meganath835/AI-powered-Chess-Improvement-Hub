import * as React from "react";

import { cn } from "@/lib/utils";

function SectionContainer({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("py-20 sm:py-28", className)} {...props} />;
}

export { SectionContainer };
