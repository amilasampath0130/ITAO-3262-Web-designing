import Link from "next/link";
import { colors } from "@/constants/colors";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-40 w-full border-b backdrop-blur-sm"
      style={{
        backgroundColor: "rgba(248,250,252,0.92)",
        borderColor: `${colors.primary}14`,
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-black tracking-wide sm:text-xl"
          style={{ color: colors.textPrimary }}
        >
          My E-commerce
        </Link>
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-500 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
              style={{
                backgroundColor: "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
