import Image from "next/image";
import Link from "next/link";
import { colors } from "@/constants/colors";
import { products } from "@/data/product";

const categoryCards = Array.from(
  new Map(products.map((product) => [product.category, product])).values(),
).slice(0, 5);

const customerFavorites = products.slice(0, 3);

const Page = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-135 -z-10 transform-gpu overflow-hidden blur-3xl"
          style={{
            background: `radial-gradient(circle at top right, ${colors.primary}22, transparent 38%), linear-gradient(180deg, #ffffff 0%, ${colors.background} 72%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div
            className="overflow-hidden rounded-4xl border p-4 shadow-2xl sm:p-5"
            style={{
              borderColor: `${colors.primary}1f`,
              backgroundColor: "rgba(255,255,255,0.9)",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/banner.png"
                alt="Store banner featuring fashion, accessories, and electronics offers"
                width={1536}
                height={913}
                priority
                className="h-65 w-full object-cover sm:h-85 lg:h-105"
              />
            </div>

            <div className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 sm:py-10">
              <p
                className="text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm"
                style={{ color: colors.primary }}
              >
                NEW COLLECTION
              </p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Fresh arrivals for
                <span className="block" style={{ color: colors.primary }}>
                  every Style.
                </span>
              </h1>
              <p
                className="mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base"
                style={{ color: colors.textSecondary }}
              >
                Discover trending fashion and essentials for every style. Shop
                now and elevate your wardrobe with our latest arrivals.
              </p>
              <div className="mt-7 flex justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: colors.primary,
                    boxShadow: `0 16px 32px ${colors.primary}33`,
                  }}
                >
                  Start shopping
                </Link>
              </div>
              <div
                className="mx-auto mt-8 h-1.5 w-24 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryHover} 100%)`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: colors.primary }}
            >
              Start your style journey
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Browse the main collections
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold"
            style={{ color: colors.primary }}
          >
            View all products
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {categoryCards.map((product) => (
            <Link
              key={product.category}
              href="/products"
              className="group overflow-hidden rounded-[1.75rem] border p-4 transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: `${colors.primary}14`,
                backgroundColor: colors.cardBackground,
                boxShadow: `0 12px 34px ${colors.primary}12`,
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: colors.textSecondary }}
                  >
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold capitalize">
                    {product.category}
                  </h3>
                  <p className="mt-3 text-sm" style={{ color: colors.primary }}>
                    Explore now
                  </p>
                </div>
                <span
                  className="rounded-2xl px-3 py-1 text-xs font-bold uppercase"
                  style={{
                    backgroundColor: `${colors.accent}1a`,
                    color: colors.accent,
                  }}
                >
                  New
                </span>
              </div>

              <div className="relative mt-4 aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1280px) 18vw, (min-width: 768px) 42vw, 90vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div
          className="rounded-4xl border p-6 sm:p-8"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: `${colors.primary}14`,
            boxShadow: `0 16px 36px ${colors.primary}12`,
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.25em]"
                style={{ color: colors.primary }}
              >
                Why customers choose us
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Everything you need in one place
              </h2>
            </div>
            <Link
              href="/contact"
              className="text-sm font-semibold"
              style={{ color: colors.primary }}
            >
              Need help?
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <article
              className="rounded-3xl border p-5"
              style={{
                borderColor: `${colors.primary}14`,
                backgroundColor: `${colors.primary}06`,
              }}
            >
              <h3 className="text-lg font-black">Fast delivery</h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: colors.textSecondary }}
              >
                Quick and reliable shipping with order updates so you always
                know where your package is.
              </p>
            </article>

            <article
              className="rounded-3xl border p-5"
              style={{
                borderColor: `${colors.primary}14`,
                backgroundColor: `${colors.primary}06`,
              }}
            >
              <h3 className="text-lg font-black">Secure payments</h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: colors.textSecondary }}
              >
                Shop with confidence using trusted payment methods and protected
                checkout experience.
              </p>
            </article>

            <article
              className="rounded-3xl border p-5"
              style={{
                borderColor: `${colors.primary}14`,
                backgroundColor: `${colors.primary}06`,
              }}
            >
              <h3 className="text-lg font-black">Friendly support</h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: colors.textSecondary }}
              >
                Our support team is ready to help with product questions,
                delivery issues, and returns.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: colors.primary }}
            >
              Customer favorites
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Trending picks this week
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold"
            style={{ color: colors.primary }}
          >
            See more picks
          </Link>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {customerFavorites.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-3xl border p-4"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: `${colors.primary}14`,
                boxShadow: `0 12px 30px ${colors.primary}10`,
              }}
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 92vw"
                />
              </div>

              <h3 className="mt-4 text-lg font-black">{product.title}</h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: colors.textSecondary }}
              >
                {product.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className="text-sm font-semibold uppercase"
                  style={{ color: colors.primary }}
                >
                  {product.category}
                </span>
                <Link
                  href="/products"
                  className="rounded-xl px-3 py-1.5 text-xs font-bold uppercase text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  Shop
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
