import Link from "next/link";
import { BrainCircuit } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { footerLinkGroups, siteConfig } from "@/lib/site-config";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <PageContainer className="py-16">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <BrainCircuit
                className="size-6 text-primary"
                aria-hidden="true"
              />
              <span className="text-base font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}

export { Footer };
