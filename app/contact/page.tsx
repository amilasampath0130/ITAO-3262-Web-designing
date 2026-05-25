"use client";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { colors } from "@/constants/colors";
import Toast from "@/components/Toast";

const contactMethods = [
  { label: "Phone", value: "+94 70 632 0234" },
  { label: "Email", value: "amilasampath0130@gmail.com" },
  { label: "WhatsApp", value: "+94 77 614 0234" },
  { label: "Office", value: "Badulla, Sri Lanka" },
  { label: "Hours", value: "8:30 AM - 6:00 PM" },
];
const ContactPage = () => {
  const [toastMessage, setToastMessage] = useState("");
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToastMessage("Message sent successfully! We will get back to you soon.");

    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage("");
      toastTimerRef.current = null;
    }, 2200);
  };

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      <Toast message={toastMessage} />

      <section className="relative isolate overflow-hidden border-b">
        <div
          className="absolute inset-x-0 top-0 h-72"
          style={{
            background: `radial-gradient(circle at top left, ${colors.primary}18, transparent 38%), linear-gradient(180deg, #ffffff 0%, ${colors.background} 100%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: colors.primary }}
          >
            Contact us
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            We&apos;d love to hear from you. Have questions?
            <span className="block" style={{ color: colors.primary }}>
              Get in touch with us.
            </span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="overflow-hidden rounded-4xl border"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: `${colors.primary}14`,
              boxShadow: `0 20px 44px ${colors.primary}10`,
            }}
          >
            <div className="p-5 sm:p-6">
              <div
                className="relative overflow-hidden rounded-[1.75rem]"
                style={{ backgroundColor: `${colors.primary}08` }}
              >
                <Image
                  src="/images/contactUS.png"
                  alt="Customer support representative working on a laptop for e-commerce help"
                  width={820}
                  height={1024}
                  className="h-auto w-full object-cover sm:h-96 lg:h-112"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            className="rounded-4xl border p-6 sm:p-7"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: `${colors.primary}14`,
              boxShadow: `0 20px 44px ${colors.primary}10`,
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.24em]"
              style={{ color: colors.primary }}
            >
              Send message
            </p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              We reply quickly with order, delivery, and product support.
            </h2>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.22em]"
                    style={{ color: colors.textSecondary }}
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                    style={{
                      borderColor: `${colors.primary}16`,
                      backgroundColor: `${colors.primary}05`,
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.22em]"
                    style={{ color: colors.textSecondary }}
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                    style={{
                      borderColor: `${colors.primary}16`,
                      backgroundColor: `${colors.primary}05`,
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{ color: colors.textSecondary }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Order issue, product question, delivery help"
                  className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                  style={{
                    borderColor: `${colors.primary}16`,
                    backgroundColor: `${colors.primary}05`,
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{ color: colors.textSecondary }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={7}
                  placeholder="Write your message here"
                  className="mt-2 w-full rounded-[1.6rem] border px-4 py-3 text-sm outline-none"
                  style={{
                    borderColor: `${colors.primary}16`,
                    backgroundColor: `${colors.primary}05`,
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                style={{
                  backgroundColor: colors.primary,
                  boxShadow: `0 16px 32px ${colors.primary}28`,
                }}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <div className="grid ">
          <div
            className="rounded-4xl border p-5 sm:p-6"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: `${colors.primary}14`,
              boxShadow: `0 16px 34px ${colors.primary}0d`,
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.24em]"
              style={{ color: colors.primary }}
            >
              Quick contact
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex min-w-28 flex-1 items-center gap-3 rounded-2xl border px-4 py-3"
                  style={{
                    borderColor: `${colors.primary}12`,
                    backgroundColor: `${colors.primary}06`,
                  }}
                >
                  <div className="min-w-0">
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: colors.textSecondary }}
                    >
                      {method.label}
                    </p>
                    <p className="truncate text-sm font-semibold">
                      {method.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
