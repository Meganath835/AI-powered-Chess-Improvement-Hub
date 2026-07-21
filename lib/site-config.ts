import type { FooterLinkGroup, NavLink } from "@/types/navigation";

export const siteConfig = {
  name: "Checkmate AI",
  tagline: "Your personal AI chess coach.",
};

export const primaryNavLinks: NavLink[] = [
  { label: "Features", href: "#features" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [{ label: "Features", href: "#features" }],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];
