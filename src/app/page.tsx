"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Factory,
  Globe2,
  Settings,
  ShieldCheck,
  Wrench,
  type LucideIcon,
  ArrowDown,
  ArrowUp,
  Play,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const heroVideoUrl =
  "https://www.youtube.com/embed/AQSqc1kFTRw?autoplay=1&mute=1&loop=1&playlist=AQSqc1kFTRw&controls=0&playsinline=1&rel=0&modestbranding=1";

const productImage = "/images/products/water-filling-60-head.jpg";

const products = [
  {
    title: "Water Treatment",
    description: "High-efficiency reverse osmosis and multi-media filtration systems.",
    spec: "10-100 T/H",
    image: "/images/products/water-treatment-system.png",
  },
  {
    title: "Blow Molding",
    description: "Automatic PET bottle blowing machines with energy-saving IR heating.",
    spec: "MAX 12000 BPH",
    image: "/images/products/blow-molding-machine.jpg",
  },
  {
    title: "Filling Machine",
    description: "3-in-1 rotary monoblock for rinsing, filling, and capping precision.",
    spec: "ISO-BARIC / GRAVITY",
    image: productImage,
  },
  {
    title: "Packaging System",
    description: "Automatic shrink wrapping and case packing for finished products.",
    spec: "99.8% EFFICIENCY",
    image: "/images/products/packaging-system-wrapper.jpg",
  },
];

const solutions = [
  {
    title: "Water Filling Line (PET/Glass)",
    description:
      "Advanced solutions for 350ml-1500ml formats, reaching capacities up to 36,000 BPH.",
    image: "/images/solutions/water-line.jpg",
    videoUrl: "https://youtu.be/6o8UcZ2xSUA",
  },
  {
    title: "Carbonated Drink Line",
    description:
      "High-stability isobaric filling technology for sparkling water and soft drinks.",
    image: "/images/solutions/csd-line.png",
    videoUrl: "https://youtu.be/hgHOXGUHOOc",
  },
  {
    title: "Juice & Carbonated Production Line",
    description:
      "Precision hot filling and carbonated beverage systems for multiple bottle shapes and sizes.",
    image: "/images/solutions/juice-line.jpg",
    videoUrl: "https://youtu.be/4FUFwxLdCL0",
  },
  {
    title: "Oil Filling Line",
    description: "Stable filling, capping, labeling, and packing automation for edible oil lines.",
    image: "/images/solutions/oil-filling-line.jpg",
    videoUrl: "https://youtu.be/763Ah2alqYQ",
  },
  {
    title: "Beer Filling Line",
    description:
      "Glass bottle beer filling and packaging systems designed for stable foam control and product integrity.",
    image: "/images/solutions/beer-line.jpg",
    videoUrl: "https://www.youtube.com/watch?v=y5Orw6k5ycE",
  },
];

const workshopImages = [
  "/images/about-workshop/workshop-01.jpg",
  "/images/about-workshop/workshop-02.jpg",
  "/images/about-workshop/cnc-machining.jpg",
  "/images/about-workshop/engineering-design.jpg",
];

const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXMZP50E1W4dXapuw-Zv-9_uOL14etByiuFAlpHiYUkte-JzENtLG3Fb656MMGMdJVTeVwFelp3kiGOyi59lSII2X7GMoNjo1VKyvWGf1Sr89V7P7-NEc-JoEQSo1c688Q0n61OiORxdJ91g98ZykFc0KE2djG58nf0ozB3SR7P9GtGg9T-dLADQMMhdBGOoj4x3GPxidmqtSWtmKHWgGqIHYzDUi6RPGVmwc59oPO5yOCLguEGeOkvRIrDuW05tTfaFA30nsk5cw";

const advantages: {
  Icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    Icon: Factory,
    title: "Factory Direct",
    description:
      "Direct manufacturer pricing eliminates intermediary costs while ensuring absolute quality control.",
  },
  {
    Icon: Wrench,
    title: "Custom Engineering",
    description:
      "Bespoke system designs optimized for your specific facility layout and production targets.",
  },
  {
    Icon: Globe2,
    title: "Global Network",
    description:
      "Specialized engineering teams deployed worldwide for on-site installation, training, and maintenance.",
  },
  {
    Icon: Settings,
    title: "Life-time Support",
    description:
      "24/7 technical assistance and rapid spare parts logistics to ensure zero production downtime.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="font-bold text-primary">/</span>
      <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
        {children}
      </span>
    </div>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center justify-center gap-4 bg-primary px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">
      {children}
    </button>
  );
}

export default function Home() {
  const [activeSolution, setActiveSolution] = useState(0);
  const solution = solutions[activeSolution];

  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="HOME" />

        <section className="relative flex min-h-[760px] items-center overflow-hidden bg-white pt-24">
          <div className="absolute inset-0">
            <iframe
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 opacity-95"
              src={heroVideoUrl}
              title="Sokos filling machine production line video"
              allow="autoplay; encrypted-media; picture-in-picture"
              tabIndex={-1}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-16">
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  ISO 9001:2015 Certified
                </span>
              </div>
              <h1 className="mb-8 max-w-4xl text-3xl font-bold uppercase leading-tight text-[#131314] md:text-5xl">
                Complete Beverage Filling & Packaging Solutions
              </h1>
              <p className="mb-12 max-w-2xl text-lg leading-8 text-slate-600">
                Global leader in engineering excellence, providing integrated turnkey
                production lines for water, juice, and carbonated beverages with precision
                manufacturing.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <PrimaryButton>
                  Request A Quote <ArrowRight size={16} />
                </PrimaryButton>
                <button className="border border-black/10 bg-white px-8 py-4 text-center font-mono text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary">
                  View Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-24 lg:py-[120px]" id="turnkey-solutions">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-16">
            <div className="mb-12 text-center">
              <span className="mb-4 block font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Complete Engineering
              </span>
              <h2 className="mb-4 text-4xl font-bold uppercase">Turnkey Production Lines</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Integrated production lines engineered for beverage plants that need stable
                output and clean layouts.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-5 lg:flex-row lg:items-center">
              <article className="relative min-h-[420px] flex-1 overflow-hidden border border-[#e2e8f0] bg-white shadow-xl">
                <img
                  alt={solution.title}
                  className="size-full min-h-[420px] object-cover"
                  src={solution.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 text-white md:p-12">
                  <h3 className="mb-2 text-2xl font-semibold uppercase md:text-3xl">
                    {solution.title}
                  </h3>
                  <p className="mb-6 max-w-2xl text-white/85">{solution.description}</p>
                  {solution.videoUrl ? (
                    <a
                      className="inline-flex items-center justify-center gap-4 bg-primary px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                      href={solution.videoUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="flex size-8 items-center justify-center rounded-full bg-white/20">
                        <Play fill="currentColor" size={14} />
                      </span>
                      Watch Video
                    </a>
                  ) : null}
                </div>
              </article>

              <button
                aria-label="Show next production line"
                className="flex h-14 w-full items-center justify-center text-primary transition-colors hover:text-[#131314] lg:h-[420px] lg:w-16"
                onClick={() => setActiveSolution((current) => (current + 1) % solutions.length)}
              >
                <span className="flex flex-col items-center gap-12">
                  <ArrowUp size={34} strokeWidth={1.15} />
                  <ArrowDown size={34} strokeWidth={1.15} />
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="industrial-grid bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <SectionLabel>Core Products</SectionLabel>
                <h2 className="mb-6 text-3xl font-semibold uppercase text-[#131314]">
                  Industrial Grade Machinery
                </h2>
                <p className="text-slate-600">
                  Precision-engineered equipment designed for high-capacity production and
                  long-term operational reliability.
                </p>
              </div>
              <a
                className="flex items-center gap-2 border-b border-black/10 pb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-primary"
                href="#"
              >
                Explore Full Catalog <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <article
                  className="group border border-[#e2e8f0] bg-white transition-all duration-500 hover:border-primary/30 hover:shadow-xl"
                  key={product.title}
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#f5f7fa]">
                    <img
                      alt={product.title}
                      className="size-full object-cover transition-all duration-700 group-hover:scale-105"
                      src={product.image}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-semibold uppercase tracking-tight">
                      {product.title}
                    </h3>
                    <p className="mb-8 line-clamp-2 text-slate-600">{product.description}</p>
                    <div className="flex items-center justify-between border-t border-[#e2e8f0] pt-6">
                      <span className="font-mono text-sm text-primary">{product.spec}</span>
                      <ArrowRight
                        className="text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-primary"
                        size={18}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 lg:py-[120px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url('/images/about-factory-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-white/45" />
          <div className="relative mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="max-w-3xl">
              <SectionLabel>About Us</SectionLabel>
              <h2 className="mb-8 text-4xl font-bold uppercase leading-tight">
                Beverage Filling Machinery Built for Global Plants
              </h2>
              <p className="mb-12 text-lg leading-8 text-slate-800">
                Sokos Machinery designs and manufactures complete beverage production systems
                for water, juice, carbonated drinks, beer, oil, and sauce applications. From
                project layout to commissioning, our engineering team helps customers build
                stable, efficient, and easy-to-maintain filling lines.
              </p>
              <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex items-start gap-4">
                  <Bot className="mt-1 text-primary" size={30} />
                  <div>
                    <h4 className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#131314]">
                      Turnkey Engineering
                    </h4>
                    <p className="text-sm text-slate-800">
                      Complete line planning from water treatment to final packaging.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-1 text-primary" size={30} />
                  <div>
                    <h4 className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#131314]">
                      Reliable Delivery
                    </h4>
                    <p className="text-sm text-slate-800">
                      Factory-tested equipment with installation support for global projects.
                    </p>
                  </div>
                </div>
              </div>
              <button className="border border-primary px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-white">
                Learn More About Sokos
              </button>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {workshopImages.map((image, index) => (
                <img
                  alt={`Sokos workshop ${index + 1}`}
                  className="aspect-[4/3] w-full border border-[#e2e8f0] object-cover"
                  key={image}
                  src={image}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e2e8f0] bg-[#f5f7fa] py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <h2 className="mb-16 text-center text-4xl font-bold uppercase">The Sokos Advantage</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {advantages.map(({ Icon, title, description }) => (
                <article
                  className="border border-[#e2e8f0] bg-white p-8 transition-all duration-500 hover:border-primary hover:shadow-lg lg:p-10"
                  key={title}
                >
                  <div className="mb-8 flex size-12 items-center justify-center bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold uppercase tracking-tight">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionLabel>Global Reach</SectionLabel>
                <h2 className="mb-8 text-4xl font-bold uppercase leading-tight">
                  Trusted by Industry Leaders Worldwide
                </h2>
                <p className="mb-12 text-lg leading-8 text-slate-600">
                  Over 2,000 installations across Southeast Asia, the Middle East, Africa,
                  and South America. We engineer for regional compliance and performance.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    ["Dubai Project", "12,000 BPH Water Production Line"],
                    ["Ethiopia Project", "16,000 BPH Carbonated Drink Line"],
                    ["Indonesia Project", "8,000 BPH Edible Oil Line"],
                  ].map(([location, project]) => (
                    <div
                      className="border border-[#e2e8f0] bg-[#f5f7fa] p-6 transition-all hover:bg-white hover:shadow-md"
                      key={location}
                    >
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                        {location}
                      </span>
                      <p className="text-sm font-bold uppercase">{project}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[500px] lg:col-span-7">
                <div className="industrial-grid absolute inset-0 opacity-40" />
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20 grayscale"
                  style={{ backgroundImage: `url(${mapImage})` }}
                />
                <div className="absolute left-[75%] top-[45%] size-3 animate-pulse rounded-full bg-primary shadow-[0_0_15px_#064c95]" />
                <div className="absolute left-[45%] top-[55%] size-3 animate-pulse rounded-full bg-primary shadow-[0_0_15px_#064c95]" />
                <div className="absolute left-[25%] top-[65%] size-3 animate-pulse rounded-full bg-primary shadow-[0_0_15px_#064c95]" />
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
