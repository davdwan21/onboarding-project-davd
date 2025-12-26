"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/project", label: "Project" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
