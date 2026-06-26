"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Download,
  Factory,
  Globe2,
  Mail,
  MessageCircle,
  Settings,
  ShieldCheck,
  Wrench,
  type LucideIcon,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const heroImage = "/images/home-hero-filling-line.jpg";

const lineImage = "/images/water-line-2.jpg";
const productImage = "/images/product-filling-machine.jpg";

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
    cta: "VIEW SPECIFICATIONS",
    image: lineImage,
  },
  {
    title: "Juice Filling Line",
    description: "Precision hot filling systems designed for multiple bottle shapes and sizes.",
    cta: "EXPLORE JUICE SOLUTIONS",
    image: lineImage,
  },
  {
    title: "Carbonated Drink Line",
    description:
      "High-stability isobaric filling technology for sparkling water and soft drinks.",
    cta: "VIEW CSD SYSTEMS",
    image: lineImage,
  },
  {
    title: "5-Gallon Barrel Filling Line",
    description: "Industrial-grade automation for high-volume 18.9L water production.",
    cta: "LARGE FORMAT SPECS",
    image: lineImage,
  },
];

const workshopImages = [
  "/images/workshop/workshop-01.jpg",
  "/images/workshop/workshop-02.jpg",
  "/images/workshop/workshop-03.jpg",
  "/images/workshop/workshop-04.jpg",
  "/images/workshop/workshop-05.jpg",
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

const partnerBrands = [
  { name: "ABB", logo: "/images/brands/abb.svg" },
  { name: "SMC", logo: "/images/brands/smc.svg" },
  { name: "Mitsubishi Electric", logo: "/images/brands/mitsubishi-electric.svg" },
  { name: "Schneider Electric", logo: "/images/brands/schneider-electric.svg" },
  { name: "OMRON", logo: "/images/brands/omron.svg" },
  { name: "SIEMENS", logo: "/images/brands/siemens.svg" },
  { name: "FESTO", logo: "/images/brands/festo.svg" },
  { name: "TECO", logo: "/images/brands/teco.svg" },
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
  const [activeWorkshop, setActiveWorkshop] = useState(0);
  const solution = solutions[activeSolution];
  const visibleWorkshopImages = [0, 1, 2, 3, 4].map(
    (offset) => workshopImages[(activeWorkshop + offset) % workshopImages.length],
  );

  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="HOME" />

        <section className="relative flex min-h-[760px] items-center overflow-hidden bg-white pt-24">
          <div className="absolute inset-0">
            <div
              className="size-full scale-105 bg-cover bg-center opacity-95"
              style={{ backgroundImage: `url(${heroImage})` }}
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
              <h1 className="mb-8 max-w-4xl text-5xl font-bold uppercase leading-tight text-[#131314] md:text-7xl">
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

        <section className="border-y border-[#e2e8f0] bg-white py-12">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-10 px-5 md:grid-cols-4 md:px-16">
            {[
              ["20+", "Years of Excellence"],
              ["80+", "Countries Served"],
              ["100%", "Turnkey Capability"],
              ["CE", "International Quality"],
            ].map(([value, label]) => (
              <div className="flex flex-col gap-1" key={label}>
                <span className="text-4xl font-bold text-primary">{value}</span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
                  {label}
                </span>
              </div>
            ))}
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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  <div className="p-8">
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
                  <PrimaryButton>{solution.cta}</PrimaryButton>
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

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionLabel>About Us</SectionLabel>
                <h2 className="mb-8 text-4xl font-bold uppercase leading-tight">
                  Beverage Filling Machinery Built for Global Plants
                </h2>
                <p className="mb-12 text-lg leading-8 text-slate-600">
                  Sokos Machinery designs and manufactures complete beverage production systems
                  for water, juice, carbonated drinks, beer, oil, and sauce applications. From
                  project layout to commissioning, our engineering team helps customers build
                  stable, efficient, and easy-to-maintain filling lines.
                </p>
                <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <Bot className="mt-1 text-primary" size={30} />
                    <div>
                      <h4 className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em]">
                        Turnkey Engineering
                      </h4>
                      <p className="text-sm text-slate-600">
                        Complete line planning from water treatment to final packaging.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 text-primary" size={30} />
                    <div>
                      <h4 className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em]">
                        Reliable Delivery
                      </h4>
                      <p className="text-sm text-slate-600">
                        Factory-tested equipment with installation support for global projects.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="border border-primary px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-white">
                  Learn More About Sokos
                </button>
              </div>
              <div className="overflow-hidden border border-[#e2e8f0] bg-[#f5f7fa]">
                <img
                  alt="Sokos workshop"
                  className="aspect-[4/3] w-full object-cover"
                  src="/images/workshop/workshop-02.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold">Our workshop</h2>
              <p className="mx-auto max-w-2xl text-sm leading-6 text-[#131314]">
                CNC machines, welding stations, and quality control labs where every machine is
                tested before it ships
              </p>
            </div>

            <div className="relative overflow-hidden">
              <button
                aria-label="Previous workshop image"
                className="absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#9ca3af] bg-white text-[#131314] shadow-sm transition-colors hover:border-primary hover:text-primary"
                onClick={() =>
                  setActiveWorkshop((current) =>
                    current === 0 ? workshopImages.length - 1 : current - 1,
                  )
                }
                type="button"
              >
                <ArrowLeft size={18} />
              </button>

              <div className="flex gap-7">
                {visibleWorkshopImages.map((image, index) => (
                  <article
                    className="aspect-[4/3] shrink-0 basis-full overflow-hidden bg-[#d9d9d9] md:basis-[calc((100%-84px)/3.5)]"
                    key={`${image}-${index}`}
                  >
                    <img
                      alt={`Sokos workshop ${index + 1}`}
                      className="size-full object-cover"
                      src={image}
                    />
                  </article>
                ))}
              </div>

              <button
                aria-label="Next workshop image"
                className="absolute right-5 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#9ca3af] bg-white text-[#131314] shadow-sm transition-colors hover:border-primary hover:text-primary"
                onClick={() =>
                  setActiveWorkshop((current) => (current + 1) % workshopImages.length)
                }
                type="button"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-10 flex justify-center gap-2">
              {workshopImages.map((image, index) => (
                <button
                  aria-label={`Show workshop image ${index + 1}`}
                  className={`size-1.5 rounded-full transition-all ${
                    activeWorkshop === index ? "bg-[#131314]" : "bg-[#c4c4c4]"
                  }`}
                  key={`${image}-dot-${index}`}
                  onClick={() => setActiveWorkshop(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e2e8f0] bg-[#f5f7fa] py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Cooperation Brands</h2>
              <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-600">
                We integrate globally recognized electrical, pneumatic, and automation brands
                into reliable beverage production systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {partnerBrands.map((brand) => (
                <article
                  className="flex h-32 items-center justify-center border border-[#e2e8f0] bg-white px-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                  key={brand.name}
                >
                  <img
                    alt={brand.name}
                    className="max-h-20 max-w-full object-contain"
                    src={brand.logo}
                  />
                </article>
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
                    ["Nigeria Project", "12,000 BPH Water Production Line"],
                    ["Saudi Arabia Project", "8,000 BPH Juice Hot-Filling Facility"],
                    ["Vietnam Project", "6,000 BPH Carbonated Drink System"],
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

        <section className="bg-[#f5f7fa] py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] border-x border-[#e2e8f0] bg-white px-5 py-20 text-center md:px-16 lg:py-24">
            <h2 className="mb-8 text-4xl font-bold uppercase">Initiate Your Production Upgrade</h2>
            <p className="mx-auto mb-16 max-w-2xl text-lg text-slate-600">
              Consult with our engineering department for a technical evaluation and custom
              plant layout design.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <PrimaryButton>
                Request A Quote <Mail size={18} />
              </PrimaryButton>
              <button className="inline-flex items-center justify-center gap-4 border border-black/10 bg-white px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary">
                Download Catalog <Download size={18} />
              </button>
            </div>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-8 border-t border-[#e2e8f0] pt-12 text-slate-600 md:gap-12">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-primary" size={20} />
                <span className="font-mono text-sm">WHATSAPP: +86-138-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <span className="font-mono text-sm">EMAIL: INFO@SOKOSMACHINERY.COM</span>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
