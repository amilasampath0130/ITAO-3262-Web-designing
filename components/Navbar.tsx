import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-wide">
          My E-commerce
        </Link>
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <Link href="/" className="rounded px-3 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/product" className="rounded px-3 py-2 hover:bg-gray-700">
            Product
          </Link>
          <Link href="/cart" className="rounded px-3 py-2 hover:bg-gray-700">
            Cart
          </Link>
          <Link href="/aboutUs" className="rounded px-3 py-2 hover:bg-gray-700">
            About us
          </Link>
          <Link href="/contactUs" className="rounded px-3 py-2 hover:bg-gray-700">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
