import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "Classic Cotton Tee",
    price: 24.99,
    description:
      "A clean everyday t-shirt with a soft cotton feel and an easy regular fit.",
    category: "clothing",
    image: "/images/products/cloth01.jpg",
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Minimal Streetwear Top",
    price: 27.5,
    description:
      "A lightweight casual top designed for daily wear and simple styling.",
    category: "clothing",
    image: "/images/products/cloth02.jpg",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Relaxed Fit Layered Shirt",
    price: 31.99,
    description:
      "An easygoing layered look that works well for casual weekends and campus wear.",
    category: "clothing",
    image: "/images/products/cloth03.jpg",
  },
  {
    id: 4,
    title: "Urban Casual Essential",
    price: 29.99,
    description:
      "A modern casual piece with a clean silhouette and all-day comfort.",
    category: "clothing",
    image: "/images/products/cloth04.jpg",
  },
  {
    id: 5,
    title: "Weekend Comfort Wear",
    price: 33.99,
    description:
      "Soft, breathable fabric paired with a relaxed shape for everyday movement.",
    category: "clothing",
    image: "/images/products/cloth05.jpg",
    isBestSeller: true,
  },
  {
    id: 6,
    title: "Modern Casual Outfit",
    price: 35.5,
    description: "A balanced mix of comfort and style for casual city looks.",
    category: "clothing",
    image: "/images/products/cloth06.jpg",
  },
  {
    id: 7,
    title: "Everyday Layer Set",
    price: 38.99,
    description:
      "A versatile clothing pick built for repeat wear through the week.",
    category: "clothing",
    image: "/images/products/cloth07.jpg",
  },
  {
    id: 8,
    title: "UltraBook Pro 13",
    price: 899.99,
    description:
      "A slim performance laptop for study, work, and streaming on the go.",
    category: "laptops",
    image: "/images/products/lap01.jpg",
    isFeatured: true,
  },
  {
    id: 9,
    title: "Creator Laptop X15",
    price: 1099.99,
    description:
      "Designed for multitasking with a bright display and dependable battery life.",
    category: "laptops",
    image: "/images/products/lap02.jpg",
    isBestSeller: true,
  },
  {
    id: 10,
    title: "Notebook Air 14",
    price: 979.99,
    description:
      "A lightweight laptop with a modern finish and fast daily performance.",
    category: "laptops",
    image: "/images/products/lap03.jpg",
  },
  {
    id: 11,
    title: "SmartPhone Nova 5",
    price: 499.99,
    description:
      "A sleek smartphone with a bright display, sharp camera, and reliable battery.",
    category: "phones",
    image: "/images/products/phone01.jpg",
    isFeatured: true,
  },
  {
    id: 12,
    title: "SmartPhone Nova 6",
    price: 579.99,
    description:
      "Built for smooth scrolling, social content, and everyday productivity.",
    category: "phones",
    image: "/images/products/phone02.jpg",
  },
  {
    id: 13,
    title: "SmartPhone Max View",
    price: 649.99,
    description:
      "A larger-screen phone that balances entertainment, messaging, and work.",
    category: "phones",
    image: "/images/products/phone03.jpg",
    isBestSeller: true,
  },
  {
    id: 14,
    title: "SmartPhone Pocket Lite",
    price: 429.99,
    description:
      "A compact smartphone option with a clean design and simple everyday power.",
    category: "phones",
    image: "/images/products/phone04.jpg",
  },
  {
    id: 15,
    title: "Tailored Smart Shirt",
    price: 39.99,
    description:
      "A polished shirt with a neat collar and comfortable regular structure.",
    category: "shirts",
    image: "/images/products/shirt01.jpg",
    isFeatured: true,
  },
  {
    id: 16,
    title: "Classic Formal Shirt",
    price: 42.99,
    description:
      "An easy formalwear option suited to office settings and evening events.",
    category: "shirts",
    image: "/images/products/shirt02.jpg",
  },
  {
    id: 17,
    title: "Runner Flex 01",
    price: 64.99,
    description:
      "Athletic shoes with a lightweight feel and a cushioned everyday step.",
    category: "shoes",
    image: "/images/products/shoes01.jpg",
    isBestSeller: true,
  },
  {
    id: 18,
    title: "Runner Flex 02",
    price: 66.99,
    description:
      "A sporty silhouette made for walking, commuting, and casual use.",
    category: "shoes",
    image: "/images/products/shoes02.jpg",
  },
  {
    id: 19,
    title: "Street Sneaker Low",
    price: 59.99,
    description:
      "A low-profile sneaker with a clean finish for versatile styling.",
    category: "shoes",
    image: "/images/products/shoes03.jpg",
  },
  {
    id: 20,
    title: "Street Sneaker High",
    price: 72.99,
    description: "A bold high-top shape designed for standout casual outfits.",
    category: "shoes",
    image: "/images/products/shoes04.jpg",
    isFeatured: true,
  },
  {
    id: 21,
    title: "Active Pace Trainer",
    price: 69.99,
    description:
      "Comfort-first trainers that fit well into active everyday routines.",
    category: "shoes",
    image: "/images/products/shoes05.jpg",
  },
  {
    id: 22,
    title: "Motion Sport Runner",
    price: 74.99,
    description:
      "A breathable running-style shoe with a modern athletic profile.",
    category: "shoes",
    image: "/images/products/shoes06.jpg",
  },
  {
    id: 23,
    title: "Urban Walk Sneaker",
    price: 61.99,
    description:
      "A dependable sneaker choice for daily errands and casual outfits.",
    category: "shoes",
    image: "/images/products/shoes07.jpg",
  },
  {
    id: 24,
    title: "Core Comfort Trainer",
    price: 68.99,
    description:
      "Balanced support and a sporty look make this pair easy to wear all day.",
    category: "shoes",
    image: "/images/products/shoes08.jpg",
  },
  {
    id: 25,
    title: "Summit Trail Sneaker",
    price: 79.99,
    description:
      "A sturdier sneaker option with a confident outsole and bold finish.",
    category: "shoes",
    image: "/images/products/shoes09.jpg",
    isBestSeller: true,
  },
  {
    id: 26,
    title: "Chrono Steel Watch",
    price: 119.99,
    description:
      "A polished wristwatch with a timeless face and an everyday metal band.",
    category: "watches",
    image: "/images/products/watch01.jpg",
    isFeatured: true,
  },
  {
    id: 27,
    title: "Classic Dial Watch",
    price: 129.99,
    description:
      "A classic watch design that pairs well with smart and casual looks.",
    category: "watches",
    image: "/images/products/watch02.jpg",
  },
  {
    id: 28,
    title: "Midnight Metal Watch",
    price: 139.99,
    description:
      "A darker metallic finish with a refined dial for a sharp modern look.",
    category: "watches",
    image: "/images/products/watch03.jpg",
  },
  {
    id: 29,
    title: "Silver Edge Watch",
    price: 124.99,
    description:
      "An understated silver-tone watch made for regular wear and clean styling.",
    category: "watches",
    image: "/images/products/watch04.jpg",
  },
  {
    id: 30,
    title: "Executive Timepiece",
    price: 149.99,
    description:
      "A formal watch with a premium look suited for office and occasion wear.",
    category: "watches",
    image: "/images/products/watch05.jpg",
    isBestSeller: true,
  },
  {
    id: 31,
    title: "Heritage Wrist Watch",
    price: 134.99,
    description:
      "A balanced everyday watch with a neat profile and dependable style.",
    category: "watches",
    image: "/images/products/watch06.jpg",
  },
];
