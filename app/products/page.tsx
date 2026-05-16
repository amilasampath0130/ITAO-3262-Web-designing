import Image from "next/image";
import Link from "next/link";
import { colors } from "@/constants/colors";
import { products } from "@/data/product";

const categories = Array.from(
  new Set(products.map((product) => product.category)),
);
const featuredProducts = products
  .filter((product) => product.isFeatured)
  .slice(0, 3);
const bestSellerCount = products.filter(
  (product) => product.isBestSeller,
).length;

const formatCurrency = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

const formatCategory = (category: string) =>
  category.charAt(0).toUpperCase() + category.slice(1);

const ProductPage = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div
          className="rounded-[1.75rem] border p-4 sm:p-5"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: `${colors.primary}14`,
            boxShadow: `0 18px 40px ${colors.primary}0f`,
          }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search bar */}
            <div className="flex-1">
              <label
                htmlFor="product-search"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
                style={{ color: colors.textSecondary }}
              >
                Search bar
              </label>
              <div
                className="mt-2 flex items-center rounded-2xl border px-4 py-3"
                style={{
                  borderColor: `${colors.primary}18`,
                  backgroundColor: `${colors.primary}06`,
                }}
              >
                <input
                  id="product-search"
                  type="text"
                  placeholder="Search shirts, phones, shoes, and more"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
            {/* Header category section */}
            <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    color: colors.primary,
                    backgroundColor: `${colors.primary}0d`,
                  }}
                >
                  {formatCategory(category)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <div className="flex flex-col gap-6 xl:flex-row">
          <aside className="xl:w-72 xl:shrink-0">
            <div className="space-y-4">
              <div
                className="rounded-[1.75rem] border p-5"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: `${colors.primary}14`,
                  boxShadow: `0 16px 34px ${colors.primary}0d`,
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                  style={{ color: colors.primary }}
                ></p>
                <h2 className="mt-3 text-xl font-black">Categories</h2>
                <div className="mt-4 space-y-2">
                  {categories.map((category) => {
                    const total = products.filter(
                      (product) => product.category === category,
                    ).length;

                    return (
                      <div
                        key={category}
                        className="flex items-center justify-between rounded-2xl px-4 py-3"
                        style={{ backgroundColor: `${colors.primary}08` }}
                      >
                        <span className="text-sm font-semibold capitalize">
                          {category}
                        </span>
                        <span
                          className="rounded-full px-2.5 py-1 text-xs font-bold"
                          style={{
                            color: colors.primary,
                            backgroundColor: colors.cardBackground,
                          }}
                        >
                          {total}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                  style={{ color: colors.primary }}
                >
                  Products
                </p>
                <h2 className="mt-2 text-3xl font-black">All product cards</h2>
              </div>
              <Link
                href="/cart"
                className="text-sm font-semibold"
                style={{ color: colors.primary }}
              >
                View cart
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-[1.75rem] border p-3 sm:p-4"
                  style={{
                    backgroundColor: colors.cardBackground,
                    borderColor: `${colors.primary}14`,
                    boxShadow: `0 14px 30px ${colors.primary}0d`,
                  }}
                >
                  <div className="relative aspect-4/3 overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1280px) 18vw, (min-width: 640px) 30vw, 92vw"
                    />
                    <div className="absolute left-3 top-3 flex gap-2">
                      {product.isFeatured ? (
                        <span
                          className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase"
                          style={{
                            backgroundColor: colors.cardBackground,
                            color: colors.primary,
                          }}
                        >
                          Featured
                        </span>
                      ) : null}
                      {product.isBestSeller ? (
                        <span
                          className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase"
                          style={{
                            backgroundColor: colors.cardBackground,
                            color: colors.accent,
                          }}
                        >
                          Best seller
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="px-1 pb-1 pt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.2em]"
                          style={{ color: colors.textSecondary }}
                        >
                          {formatCategory(product.category)}
                        </p>
                        <h3 className="mt-2 text-lg font-black leading-snug">
                          {product.title}
                        </h3>
                      </div>
                      <p
                        className="text-base font-black"
                        style={{ color: colors.primary }}
                      >
                        {formatCurrency(product.price)}
                      </p>
                    </div>

                    <p
                      className="mt-3 text-sm leading-6"
                      style={{ color: colors.textSecondary }}
                    >
                      {product.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span
                        className="rounded-full px-3 py-1.5 text-xs font-bold uppercase"
                        style={{
                          backgroundColor: `${colors.primary}0d`,
                          color: colors.primary,
                        }}
                      >
                        In stock
                      </span>
                      <Link
                        href="/cart"
                        className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                        style={{
                          backgroundColor: colors.primary,
                          boxShadow: `0 12px 28px ${colors.primary}25`,
                        }}
                      >
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
