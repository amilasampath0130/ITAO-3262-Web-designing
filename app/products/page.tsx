"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { colors } from "@/constants/colors";
import { products } from "@/data/product";
import { addToCart } from "@/utils/cart";
import Toast from "@/components/Toast";

const categories = Array.from(
  new Set(products.map((product) => product.category)),
);

const formatCurrency = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

const formatCategory = (category: string) =>
  category.charAt(0).toUpperCase() + category.slice(1);

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");
  const [toastMessage, setToastMessage] = useState("");
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesTag =
        tagFilter === "all" ||
        (tagFilter === "featured" && product.isFeatured) ||
        (tagFilter === "bestSeller" && product.isBestSeller);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, selectedCategory, tagFilter]);

  const handleAddToCart = (productId: number) => {
    addToCart(productId, 1);

    const selectedProduct = products.find(
      (product) => product.id === productId,
    );
    setToastMessage(
      selectedProduct
        ? `${selectedProduct.title} added to cart`
        : "Product added to cart",
    );

    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage("");
      toastTimerRef.current = null;
    }, 2000);
  };

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      <Toast message={toastMessage} />

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
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search shirts, phones, shoes, and more"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
            {/* Header category section */}
            <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
                style={{
                  color:
                    selectedCategory === "all"
                      ? colors.cardBackground
                      : colors.primary,
                  backgroundColor:
                    selectedCategory === "all"
                      ? colors.primary
                      : `${colors.primary}0d`,
                }}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    color:
                      selectedCategory === category
                        ? colors.cardBackground
                        : colors.primary,
                    backgroundColor:
                      selectedCategory === category
                        ? colors.primary
                        : `${colors.primary}0d`,
                  }}
                >
                  {formatCategory(category)}
                </button>
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
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("all")}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left"
                    style={{
                      backgroundColor:
                        selectedCategory === "all"
                          ? `${colors.primary}18`
                          : `${colors.primary}08`,
                    }}
                  >
                    <span className="text-sm font-semibold capitalize">
                      All
                    </span>
                    <span
                      className="rounded-full px-2.5 py-1 text-xs font-bold"
                      style={{
                        color: colors.primary,
                        backgroundColor: colors.cardBackground,
                      }}
                    >
                      {products.length}
                    </span>
                  </button>
                  {categories.map((category) => {
                    const total = products.filter(
                      (product) => product.category === category,
                    ).length;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left"
                        style={{
                          backgroundColor:
                            selectedCategory === category
                              ? `${colors.primary}18`
                              : `${colors.primary}08`,
                        }}
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
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 space-y-2">
                  <label
                    htmlFor="product-tag-filter"
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: colors.textSecondary }}
                  >
                    Filter
                  </label>
                  <select
                    id="product-tag-filter"
                    value={tagFilter}
                    onChange={(event) => setTagFilter(event.target.value)}
                    className="w-full rounded-2xl border px-3 py-2 text-sm outline-none"
                    style={{
                      borderColor: `${colors.primary}20`,
                      backgroundColor: colors.cardBackground,
                    }}
                  >
                    <option value="all">All products</option>
                    <option value="featured">Featured only</option>
                    <option value="bestSeller">Best sellers only</option>
                  </select>
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
              <div className="flex items-center gap-4">
                <p
                  className="text-sm font-semibold"
                  style={{ color: colors.textSecondary }}
                >
                  Showing {filteredProducts.length}
                </p>
                <Link
                  href="/cart"
                  className="text-sm font-semibold"
                  style={{ color: colors.primary }}
                >
                  View cart
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
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
                      <button
                        type="button"
                        onClick={() => handleAddToCart(product.id)}
                        className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                        style={{
                          backgroundColor: colors.primary,
                          boxShadow: `0 12px 28px ${colors.primary}25`,
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div
                className="mt-6 rounded-3xl border p-6 text-center"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: `${colors.primary}14`,
                }}
              >
                <p className="text-base font-semibold">No products found</p>
                <p
                  className="mt-2 text-sm"
                  style={{ color: colors.textSecondary }}
                >
                  Try changing your search text or filter options.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
