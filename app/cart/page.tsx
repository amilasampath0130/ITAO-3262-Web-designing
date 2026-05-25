"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/constants/colors";
import { products } from "@/data/product";
import Toast from "@/components/Toast";
import {
  clearCart,
  readCart,
  removeFromCart,
  setCartQuantity,
} from "@/utils/cart";

const formatCurrency = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

const CartPage = () => {
  const [cartEntries, setCartEntries] = useState(readCart());
  const [checkoutNotice, setCheckoutNotice] = useState("");

  const cartItems = useMemo(
    () =>
      cartEntries
        .map((entry) => {
          const product = products.find((item) => item.id === entry.productId);
          if (!product) {
            return null;
          }

          return {
            ...product,
            quantity: entry.quantity,
            lineTotal: product.price * entry.quantity,
          };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null),
    [cartEntries],
  );

  const grandTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.lineTotal, 0),
    [cartItems],
  );

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const increaseQuantity = (productId: number, currentQuantity: number) => {
    const updated = setCartQuantity(productId, currentQuantity + 1);
    setCartEntries(updated);
  };

  const decreaseQuantity = (productId: number, currentQuantity: number) => {
    const updated = setCartQuantity(productId, currentQuantity - 1);
    setCartEntries(updated);
  };

  const removeItem = (productId: number) => {
    const updated = removeFromCart(productId);
    setCartEntries(updated);
  };

  const handleCheckout = () => {
    setCheckoutNotice(
      `Order confirmed for ${totalItems} item${totalItems > 1 ? "s" : ""} (${formatCurrency(grandTotal)}).`,
    );
    clearCart();
    setCartEntries([]);
  };

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      <Toast message={checkoutNotice} onClose={() => setCheckoutNotice("")} />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.24em]"
              style={{ color: colors.primary }}
            >
              Cart
            </p>
            <h1 className="mt-2 text-3xl font-black">Your shopping cart</h1>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold"
            style={{ color: colors.primary }}
          >
            Continue shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div
            className="rounded-[1.75rem] border p-8 text-center"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: `${colors.primary}14`,
            }}
          >
            <p className="text-lg font-bold">Your cart is empty</p>
            <p className="mt-2 text-sm" style={{ color: colors.textSecondary }}>
              Add products from the catalog and they will appear here.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="grid grid-cols-[100px,1fr] items-start gap-4 rounded-[1.75rem] border p-4 sm:grid-cols-[124px,1fr]"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: `${colors.primary}14`,
                  boxShadow: `0 14px 30px ${colors.primary}0d`,
                }}
              >
                <div className="relative h-25 w-25 overflow-hidden rounded-xl sm:h-31 sm:w-31">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-black leading-snug">
                        {item.title}
                      </h2>
                      <p
                        className="text-base font-black"
                        style={{ color: colors.primary }}
                      >
                        {formatCurrency(item.lineTotal)}
                      </p>
                    </div>
                    <p
                      className="mt-2 text-sm leading-6"
                      style={{ color: colors.textSecondary }}
                    >
                      {item.description}
                    </p>
                    <p
                      className="mt-2 text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: colors.textSecondary }}
                    >
                      {item.category}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div
                      className="inline-flex items-center overflow-hidden rounded-md"
                      style={{
                        backgroundColor: `${colors.primary}e8`,
                        color: colors.cardBackground,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id, item.quantity)}
                        className="px-4 py-2 text-sm font-black"
                        aria-label={`Increase quantity for ${item.title}`}
                      >
                        +
                      </button>
                      <span className="min-w-20 px-4 py-2 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id, item.quantity)}
                        className="px-4 py-2 text-sm font-black"
                        aria-label={`Decrease quantity for ${item.title}`}
                      >
                        -
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-sm font-semibold"
                      style={{ color: colors.primary }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <div className="h-28" />
          </div>
        )}
      </section>

      {cartItems.length > 0 ? (
        <div className="fixed inset-x-0 bottom-20 z-40 px-4 sm:px-6">
          <div className="mx-auto w-full max-w-7xl">
            <div
              className="flex flex-col gap-3 rounded-2xl border p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: `${colors.primary}14`,
                boxShadow: `0 12px 30px ${colors.primary}20`,
              }}
            >
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: colors.textSecondary }}
                >
                  Total items: {totalItems}
                </p>
                <p
                  className="mt-1 text-2xl font-black"
                  style={{ color: colors.primary }}
                >
                  {formatCurrency(grandTotal)}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="rounded-md px-8 py-3 text-sm font-black uppercase tracking-[0.08em] text-white"
                style={{
                  backgroundColor: colors.primary,
                  boxShadow: `0 14px 30px ${colors.primary}25`,
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartPage;
