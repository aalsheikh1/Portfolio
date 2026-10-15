"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center gap-6 p-4 text-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          className={
            pathname === link.href
              ? "text-green-400"
              : "text-zinc-300 hover:text-green-400"
          }
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
