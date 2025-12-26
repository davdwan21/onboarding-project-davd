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
    <nav
      style={{
        display: "flex",
        gap: 16,
        padding: 16,
        borderBottom: "1px solid #333",
      }}
    >
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{ fontWeight: active ? 700 : 400, textDecoration: "none" }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
