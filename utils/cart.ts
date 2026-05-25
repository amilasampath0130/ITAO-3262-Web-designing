export interface CartEntry {
  productId: number;
  quantity: number;
}

const CART_STORAGE_KEY = "wm_cart_v1";

export const readCart = (): CartEntry[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as CartEntry[];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (entry) =>
        Number.isInteger(entry.productId) &&
        Number.isInteger(entry.quantity) &&
        entry.quantity > 0,
    );
  } catch {
    return [];
  }
};

export const writeCart = (entries: CartEntry[]) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(entries));
};

export const addToCart = (productId: number, quantity = 1): CartEntry[] => {
  const current = readCart();
  const existing = current.find((entry) => entry.productId === productId);

  const next = existing
    ? current.map((entry) =>
        entry.productId === productId
          ? { ...entry, quantity: entry.quantity + quantity }
          : entry,
      )
    : [...current, { productId, quantity }];

  writeCart(next);
  return next;
};

export const setCartQuantity = (
  productId: number,
  quantity: number,
): CartEntry[] => {
  const current = readCart();

  const next =
    quantity <= 0
      ? current.filter((entry) => entry.productId !== productId)
      : current.map((entry) =>
          entry.productId === productId ? { ...entry, quantity } : entry,
        );

  writeCart(next);
  return next;
};

export const removeFromCart = (productId: number): CartEntry[] => {
  const next = readCart().filter((entry) => entry.productId !== productId);
  writeCart(next);
  return next;
};

export const clearCart = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(CART_STORAGE_KEY);
};
