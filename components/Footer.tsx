import Link from "next/link";
import { colors } from "@/constants/colors";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="fixed inset-x-0 bottom-0 z-30 border-t shadow-[0_-10px_30px_rgba(37,99,235,0.08)]"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: `${colors.primary}14`,
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p
            className="text-lg font-black"
            style={{ color: colors.textPrimary }}
          >
           We mart cooperation
          </p>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            &copy; {new Date().getFullYear()} ITAO3262 Web Designing. All rights
            reserved.
          </p>
        </div>



        <p className="text-sm" style={{ color: colors.textSecondary }}>
          229181 - Rathnayake RMAS
        </p>
      </div>
    </footer>
  );
}
