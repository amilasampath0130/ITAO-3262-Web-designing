import Image from "next/image";
import { colors } from "@/constants/colors";

const storyBlocks = [
  {
    title: "Who we are",
    text: "We Mart is a modern e-commerce brand focused on simple shopping, dependable service, and a clean digital experience that feels easy to use every day.",
  },
  {
    title: "What we do",
    text: "We bring fashion, accessories, electronics, and everyday picks into one curated storefront so customers can discover quality products in a single place.",
  },
  {
    title: "Why it matters",
    text: "Our goal is to make browsing, ordering, and support feel direct and trustworthy, backed by a visual style that stays clear across every page.",
  },
];

const AboutPage = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      <section className="relative isolate overflow-hidden border-b">
        <div
          className="absolute inset-x-0 top-0 h-72"
          style={{
            background: `radial-gradient(circle at top center, ${colors.primary}18, transparent 38%), linear-gradient(180deg, #ffffff 0%, ${colors.background} 100%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              We Mart Cooperation.
            </h1>
            <h1
              className="mt-3 text-3xl font-black leading-tight sm:text-3xl"
              style={{ color: colors.primary }}
            >
              Building a more thoughtful online shopping experience.
            </h1>
            <p
              className="mx-auto mt-4 max-w-3xl text-sm leading-7 sm:text-base"
              style={{ color: colors.textSecondary }}
            >
              We provide high-quality fashion, electronics, and lifestyle
              products with a modern and user-friendly shopping experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div
          className="rounded-4xl border p-6 text-center sm:p-8"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: `${colors.primary}14`,
            boxShadow: `0 18px 40px ${colors.primary}10`,
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.24em]"
            style={{ color: colors.primary }}
          >
            Who We Are
          </p>
          <p
            className="mx-auto mt-3 max-w-4xl text-sm leading-7 sm:text-base"
            style={{ color: colors.textSecondary }}
          >
            We focus on delivering quality products with a smooth and enjoyable
            shopping experience for everyone.
          </p>
          <div
            className="mx-auto mt-6 h-3 w-full max-w-5xl rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryHover} 100%)`,
              boxShadow: `0 12px 24px ${colors.primary}22`,
            }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <article
            className="overflow-hidden rounded-4xl border"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: `${colors.primary}14`,
              boxShadow: `0 16px 34px ${colors.primary}0d`,
            }}
          >
            <div className="relative h-72 overflow-hidden sm:h-80">
              <Image
                src="/images/aboutus01.jpg"
                alt="Modern office environment representing the company workspace"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 92vw"
                priority
              />
            </div>
          </article>

          <article
            className="overflow-hidden rounded-4xl border"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: `${colors.primary}14`,
              boxShadow: `0 16px 34px ${colors.primary}0d`,
            }}
          >
            <div className="relative h-72 overflow-hidden sm:h-80">
              <Image
                src="/images/aboutus02.jpg"
                alt="Customer browsing products online through the e-commerce experience"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 92vw"
              />
            </div>
          </article>

          <article
            className="overflow-hidden rounded-4xl border"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: `${colors.primary}14`,
              boxShadow: `0 16px 34px ${colors.primary}0d`,
            }}
          >
            <div className="relative h-72 overflow-hidden sm:h-80">
              <Image
                src="/images/aboutus03.jpg"
                alt="Team member preparing products and packaging for orders"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 92vw"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div
          className="rounded-4xl border p-6 sm:p-8"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: `${colors.primary}14`,
            boxShadow: `0 18px 40px ${colors.primary}10`,
          }}
        >
          <div className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.24em]"
              style={{ color: colors.primary }}
            >
              Short description about company
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              A brand shaped by simplicity, consistency, and customer trust.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {storyBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-3xl border px-5 py-5"
                style={{
                  borderColor: `${colors.primary}12`,
                  backgroundColor: `${colors.primary}06`,
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{ color: colors.primary }}
                >
                  {block.title}
                </p>
                <p
                  className="mt-3 text-sm leading-7 sm:text-base"
                  style={{ color: colors.textSecondary }}
                >
                  {block.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
