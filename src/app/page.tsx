"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const accessVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    [heroVideoRef.current, accessVideoRef.current].forEach((video) => {
      if (video) {
        video.muted = true;
        video.playsInline = true;

        if (video === accessVideoRef.current) {
          video.playbackRate = 0.65;
        }

        video.play().catch(() => {});
      }
    });

    return () => lenis.destroy();
  }, []);

  const luxuryGold = "#EACF98";

  const goldText = {
    color: luxuryGold,
    textShadow:
      "0 1px 2px rgba(0,0,0,0.85), 0 0 18px rgba(234,207,152,0.22)",
  };

  const goldLine = {
    background:
      "linear-gradient(90deg, rgba(234,207,152,1) 0%, rgba(234,207,152,0.28) 100%)",
    boxShadow: "0 0 22px rgba(234,207,152,0.22)",
  };

  const eyebrowClass =
    "text-[10px] font-semibold uppercase tracking-[0.32em] md:tracking-[0.46em]";

  const headingClass =
    "font-[family-name:var(--font-cormorant)] font-semibold tracking-[-0.045em] text-white";

  const fieldClass =
    "w-full border border-white/10 bg-[#0b0b0b]/80 px-5 py-4 text-[15px] text-white outline-none transition placeholder:text-white/30 focus:border-white/35 focus:bg-[#101010]";

  const labelClass =
    "block text-[10px] font-semibold uppercase tracking-[0.26em] text-white/52";

  const accessPoints = [
    {
      kicker: "Flagship Stage",
      title: "Indy 500",
      image: "/cmm-new/images/final-selects/cmm-indy-prestige.jpg",
      label: "National Brand Stage",
      copy: "National attention, premium hospitality, and executive brand presence around one of the most recognized events in motorsport.",
    },
    {
      kicker: "Value Entry",
      title: "Indy NXT",
      image: "/cmm-new/images/final-selects/cmm-blackgold-sideprofile.jpg",
      label: "Regional Entry Point",
      copy: "A strategic lower-cost path into motorsport with regional race access, season-long exposure, and scalable brand involvement.",
    },
    {
      kicker: "Private Market",
      title: "Thermal Club",
      image: "/cmm-new/images/final-selects/miami-paddock-access.jpg",
      label: "Private Client Access",
      copy: "A private motorsport environment built around exclusivity, high-value relationships, curated hospitality, and client experience.",
    },
    {
      kicker: "Future Expansion",
      title: "IMSA",
      image: "/cmm-new/images/final-selects/miami-blackgold-track.jpg",
      label: "Future Growth Market",
      copy: "A developing opportunity in sports car racing, opening future access to luxury automotive, endurance racing, and lifestyle audiences.",
    },
  ];

  const platformPoints = [
    "Executive hospitality",
    "Regional market access",
    "Season-long visibility",
    "Premium customer engagement",
    "Private relationship environments",
    "Custom brand activations",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030303] font-[family-name:var(--font-geist-sans)] text-white">
      <div className="pointer-events-none fixed inset-0 z-[999] opacity-[0.03] mix-blend-soft-light">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <a
        href="#inquiry"
        className="fixed bottom-4 left-4 right-4 z-50 border border-white/15 bg-black/80 px-5 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.26em] text-white/80 backdrop-blur-xl transition hover:border-white/40 hover:text-white md:hidden"
      >
        Private Inquiry
      </a>

      <nav className="fixed left-1/2 top-5 z-50 hidden w-[calc(100%-56px)] max-w-[1400px] -translate-x-1/2 items-center justify-between border border-white/10 bg-black/50 px-6 py-3 backdrop-blur-2xl md:flex">
        <a href="#top" className="flex items-center">
          <Image
            src="/cmm-new/cmm-logo-final.png"
            alt="Cusick Morgan Motorsports"
            width={210}
            height={110}
            priority
            className="h-auto max-h-[58px] w-auto"
          />
        </a>

        <div className="flex items-center gap-8 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/56">
          <a href="#platform" className="transition hover:text-white">
            Platform
          </a>
          <a href="#access" className="transition hover:text-white">
            Access
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a
            href="#inquiry"
            className="border border-white/16 px-5 py-3 text-white/78 transition hover:border-white/40 hover:text-white"
          >
            Inquiry
          </a>
        </div>
      </nav>

      <section id="top" className="relative min-h-[100svh] overflow-hidden">
        <video
          ref={heroVideoRef}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
          src="/cmm-new/videos/cmm-hero-reel.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.93)_38%,rgba(3,3,3,0.65)_70%,rgba(3,3,3,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#030303_0%,rgba(3,3,3,0.04)_40%,#030303_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(255,255,255,0.06),transparent_38%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-6 py-6 md:px-10 lg:px-14">
          <header className="flex items-center justify-between md:opacity-0">
            <Image
              src="/cmm-new/cmm-logo-final.png"
              alt="Cusick Morgan Motorsports"
              width={220}
              height={120}
              priority
              className="h-auto max-h-[76px] w-auto"
            />
          </header>

          <div className="flex flex-1 items-center pb-28 pt-20 md:pb-20 md:pt-36">
            <div className="max-w-5xl">
              <p className={`mb-7 ${eyebrowClass}`} style={goldText}>
                Premium Motorsport Partnership Platform
              </p>

              <h1
                className={`${headingClass} max-w-5xl text-[3.55rem] leading-[0.9] md:text-[5.95rem] lg:text-[7rem] xl:text-[7.55rem]`}
              >
                Advertising Beyond Traditional Media.
              </h1>

              <div className="mt-8 h-px w-28" style={goldLine} />

              <p className="mt-10 max-w-3xl text-[1.08rem] leading-8 text-white/76 md:text-[1.2rem] md:leading-9">
                Cusick Morgan Motorsports connects brands with nationally
                visible motorsport audiences through hospitality, relationship
                access, live-event engagement, and flexible entry points across
                premium racing environments.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row md:mt-12">
                <a
                  href="#inquiry"
                  className="border border-white/70 bg-white px-8 py-4 text-center text-[11px] font-black uppercase tracking-[0.28em] text-black shadow-[0_0_38px_rgba(255,255,255,0.12)] transition hover:bg-[#f4f4f4]"
                >
                  Request Opportunities
                </a>

                <a
                  href="#access"
                  className="border border-white/15 bg-black/25 px-8 py-4 text-center text-[11px] font-black uppercase tracking-[0.28em] text-white transition hover:border-white/35"
                >
                  View Access Points
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="platform"
        className="relative border-t border-white/10 bg-[#020202] py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-12">
            <div>
              <p className={eyebrowClass} style={goldText}>
                Motorsport Presence
              </p>

              <h2
                className={`${headingClass} mt-7 max-w-5xl text-5xl leading-[0.95] md:text-7xl lg:text-[6.6rem] lg:leading-[0.92]`}
              >
                Built for brands that want more than visibility.
              </h2>
            </div>

            <div className="pb-0 lg:pb-3">
              <p className="max-w-xl text-base leading-8 text-white/62 md:text-xl md:leading-9">
                This is not just logo placement. It is a flexible platform for
                hospitality, regional market access, content capture, executive
                relationships, and custom brand activation.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden border border-white/10 bg-[#050505]">
              <div className="relative bg-black md:h-[620px]">
                <Image
                  src="/cmm-new/images/final-selects/cmm-event-scale.jpg"
                  alt="Indianapolis event scale"
                  width={1400}
                  height={950}
                  className="h-auto w-full object-contain md:h-full md:object-cover md:object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/76 via-black/10 to-transparent" />
              </div>

              <div className="px-7 py-8 md:px-12 md:py-10">
                <p className={eyebrowClass} style={goldText}>
                  National Stage
                </p>

                <h3
                  className={`${headingClass} mt-4 max-w-2xl text-4xl leading-[1] md:text-6xl md:leading-[0.98]`}
                >
                  A motorsport environment built for attention.
                </h3>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative overflow-hidden border border-white/10 bg-black">
                <Image
                  src="/cmm-new/images/final-selects/cmm-motion-car.jpg"
                  alt="Motorsport motion"
                  width={900}
                  height={700}
                  className="h-auto w-full object-contain md:h-[350px] md:object-cover md:object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/20" />
              </div>

              <div className="border border-white/10 bg-[#080808] p-7 md:p-10">
                <p className={eyebrowClass} style={goldText}>
                  Platform Value
                </p>

                <div className="mt-9 space-y-6 md:mt-10 md:space-y-7">
                  {platformPoints.map((item) => (
                    <div key={item} className="border-t border-white/10 pt-5">
                      <p className="text-xl leading-8 tracking-[-0.03em] text-white/78 md:text-2xl">
                        {item}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="access"
        className="relative overflow-hidden border-t border-white/10 bg-[#020202] py-24 md:py-40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_38%)]" />

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <div className="max-w-5xl">
            <p className={eyebrowClass} style={goldText}>
              Motorsport Access
            </p>

            <h2
              className={`${headingClass} mt-7 text-5xl leading-[0.95] md:text-7xl lg:text-[7rem] lg:leading-[0.9]`}
            >
              Multiple ways in. Different audiences. One premium platform.
            </h2>

            <div className="mt-8 h-px w-28" style={goldLine} />

            <p className="mt-10 max-w-3xl text-lg leading-9 text-white/64 md:text-xl">
              Brands can enter through different motorsport environments based
              on market, budget, audience, and relationship goals.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {accessPoints.map((point, index) => (
              <div
                key={point.title}
                className="group relative overflow-hidden border border-white/10 bg-[#080808] transition duration-500 hover:border-[#EACF98]/30 hover:bg-[#0d0d0d]"
              >
                <div className="relative h-[260px] overflow-hidden bg-black">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover object-center opacity-78 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/18 to-transparent" />
                </div>

                <div className="relative z-10 flex h-full flex-col p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <p
                      className="text-[9px] font-semibold uppercase tracking-[0.28em]"
                      style={goldText}
                    >
                      {point.kicker}
                    </p>

                    <span className="text-[10px] text-white/18">
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`${headingClass} mt-8 text-[2.8rem] leading-[0.92]`}
                  >
                    {point.title}
                  </h3>

                  <div className="mt-8 h-px w-20" style={goldLine} />

                  <p className="mt-8 text-base leading-8 text-white/64">
                    {point.copy}
                  </p>

                  <div className="mt-12 border-t border-white/10 pt-5">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">
                      {point.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden border border-white/10 bg-[#070707]">
              <div className="relative h-[420px] overflow-hidden md:h-[560px]">
                <Image
                  src="/cmm-new/images/final-selects/cmm-indy-access.jpg"
                  alt="Indy access"
                  fill
                  className="object-cover object-center transition duration-1000 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.5)_48%,rgba(0,0,0,0.2)_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />

                <div className="absolute bottom-0 left-0 max-w-xl p-8 md:p-12">
                  <p className={eyebrowClass} style={goldText}>
                    Regional + National Reach
                  </p>

                  <h3
                    className={`${headingClass} mt-5 text-4xl leading-[0.95] md:text-[4.7rem] md:leading-[0.92]`}
                  >
                    Season-long visibility across premium racing environments.
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-white/10 bg-[#080808] p-8 md:p-12">
              <div>
                <p className={eyebrowClass} style={goldText}>
                  Flexible Partnership Structure
                </p>

                <h3
                  className={`${headingClass} mt-6 text-4xl leading-[0.95] md:text-6xl`}
                >
                  Built around the brand, not a fixed package.
                </h3>

                <p className="mt-8 text-lg leading-9 text-white/62">
                  Opportunities can be shaped around audience alignment,
                  geography, hospitality goals, executive networking, customer
                  engagement, or long-term motorsport activation strategy.
                </p>
              </div>

              <div className="mt-14 space-y-5">
                {[
                  "National event visibility",
                  "Regional race market access",
                  "Executive hospitality environments",
                  "Private client entertainment",
                  "Season-long activation potential",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-t border-white/10 pt-5"
                  >
                    <div className="h-[6px] w-[6px] rounded-full bg-[#EACF98]" />
                    <p className="text-base text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative overflow-hidden border-t border-white/10 bg-[#030303] py-24 md:py-36"
      >
        <div className="mx-auto grid max-w-[1600px] gap-8 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
          <div className="relative min-h-[620px] overflow-hidden border border-white/10 bg-black">
            <video
              ref={accessVideoRef}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-74"
              src="/cmm-new/videos/miami-access.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="auto"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
          </div>

          <div className="flex flex-col justify-center border border-white/10 bg-[#070707] p-7 md:p-14">
            <p className={eyebrowClass} style={goldText}>
              The Experience
            </p>

            <h3
              className={`${headingClass} mt-6 max-w-2xl text-[4rem] leading-[0.92] md:text-7xl md:leading-[0.95]`}
            >
              This is not passive media.
            </h3>

            <div className="mt-10 h-px w-full bg-white/10" />

            <p className="mt-10 text-base leading-8 text-white/68 md:text-lg md:leading-9">
              Partnerships extend beyond placement. Brands become part of the
              environment through hospitality, driver access, live-event
              integration, content capture, social amplification, and direct
              audience engagement.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Driver access",
                "Trackside hospitality",
                "VIP guest experience",
                "Content capture",
              ].map((item) => (
                <div key={item} className="border border-white/10 p-5">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-white/44">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#030303] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <p className={eyebrowClass} style={goldText}>
            Editorial Motorsport
          </p>

          <h2
            className={`${headingClass} mt-7 max-w-5xl text-5xl leading-[0.96] md:text-7xl md:leading-[0.92]`}
          >
            A visual environment built for brand storytelling.
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              "/cmm-new/images/final-selects/miami-driver-portrait.jpg",
              "/cmm-new/images/final-selects/cmm-driver-focus.jpg",
              "/cmm-new/images/final-selects/miami-cockpit-closeup.jpg",
              "/cmm-new/images/final-selects/miami-driver-prep.jpg",
              "/cmm-new/images/final-selects/miami-track-wall.jpg",
              "/cmm-new/images/final-selects/cmm-blackgold-sideprofile.jpg",
            ].map((src) => (
              <div
                key={src}
                className="relative h-[420px] overflow-hidden border border-white/10 bg-black"
              >
                <Image
                  src={src}
                  alt="Cusick Morgan Motorsports"
                  fill
                  className="object-cover object-center opacity-82 transition duration-700 hover:scale-[1.04] hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
        <Image
          src="/cmm-new/images/final-selects/miami-cinematic-track.jpg"
          alt="Race atmosphere"
          fill
          className="object-cover object-center opacity-32"
        />

        <div className="absolute inset-0 bg-black/78" />

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <p className={eyebrowClass} style={goldText}>
            Partnership Intent
          </p>

          <h2
            className={`${headingClass} mt-8 max-w-5xl text-5xl leading-[0.96] md:text-7xl md:leading-[0.92] lg:text-[6.8rem]`}
          >
            Designed for brands looking beyond ordinary media.
          </h2>

          <p className="mt-10 max-w-3xl text-base leading-8 text-white/68 md:mt-12 md:text-xl md:leading-9">
            Cusick Morgan Motorsports gives select partners a platform to build
            presence, create relationship momentum, and activate inside one of
            the most emotionally charged environments in sport.
          </p>
        </div>
      </section>

      <section
        id="inquiry"
        className="relative overflow-hidden border-t border-white/10 bg-[#030303] py-24 md:py-40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_8%,rgba(255,255,255,0.045),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid max-w-[1600px] gap-12 px-6 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-14">
          <div className="lg:pt-8">
            <p className={eyebrowClass} style={goldText}>
              Private Partnership Inquiry
            </p>

            <h2
              className={`${headingClass} mt-8 max-w-4xl text-5xl leading-[1] md:text-7xl`}
            >
              Begin the partnership conversation.
            </h2>

            <p className="mt-10 max-w-xl text-base leading-8 text-white/60 md:text-lg md:leading-9">
              Tell us who you are, the audience you want to reach, and the type
              of motorsport experience worth building around your brand.
            </p>

            <div className="mt-12 max-w-xl border-t border-white/10 pt-8 md:mt-14">
              <p className="text-sm leading-7 text-white/42">
                Every inquiry is reviewed individually. Opportunities are shaped
                around the brand, the audience, and the level of access needed
                to make the partnership matter.
              </p>
            </div>
          </div>

          <form
            action="mailto:don.cusick@cusickmotorsports.com,billy.morgan@cusickmotorsports.com"
            method="POST"
            encType="text/plain"
            className="border border-white/12 bg-[#060606]/88 p-6 shadow-[0_0_90px_rgba(0,0,0,0.55)] backdrop-blur-xl md:p-12"
          >
            <div className="mb-10 border-b border-white/10 pb-7">
              <p className={eyebrowClass} style={goldText}>
                Inquiry Details
              </p>
              <p className="mt-3 text-sm leading-6 text-white/38">
                Prepared for direct review.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
              <label className="space-y-3">
                <span className={labelClass}>Name</span>
                <input
                  name="Name"
                  type="text"
                  required
                  className={fieldClass}
                  placeholder="Your name"
                />
              </label>

              <label className="space-y-3">
                <span className={labelClass}>Company</span>
                <input
                  name="Company"
                  type="text"
                  required
                  className={fieldClass}
                  placeholder="Brand or company"
                />
              </label>

              <label className="space-y-3">
                <span className={labelClass}>Email</span>
                <input
                  name="Email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="name@company.com"
                />
              </label>

              <label className="space-y-3">
                <span className={labelClass}>Interest</span>
                <select
                  name="Partnership Interest"
                  defaultValue=""
                  required
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Indy 500 partnership</option>
                  <option>Indy NXT access</option>
                  <option>Thermal Club experience</option>
                  <option>IMSA / future expansion</option>
                  <option>Regional race market access</option>
                  <option>Custom motorsport platform</option>
                </select>
              </label>

              <label className="space-y-3 md:col-span-2">
                <span className={labelClass}>Investment Range</span>
                <select
                  name="Estimated Investment Range"
                  defaultValue=""
                  required
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option>$25K-$50K</option>
                  <option>$50K-$100K</option>
                  <option>$100K-$250K</option>
                  <option>$250K+</option>
                  <option>Exploring fit</option>
                </select>
              </label>

              <label className="space-y-3 md:col-span-2">
                <span className={labelClass}>Message</span>
                <textarea
                  name="Message"
                  required
                  rows={5}
                  className="w-full resize-none border border-white/10 bg-[#0b0b0b]/80 px-5 py-4 text-[15px] leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-white/35 focus:bg-[#101010]"
                  placeholder="Share the audience, market, access point, or brand experience you want to build."
                />
              </label>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-xs leading-6 text-white/36">
                Your inquiry will be prepared for direct email submission to
                Cusick Morgan Motorsports.
              </p>

              <button
                type="submit"
                className="border border-white/16 px-9 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white/76 transition hover:border-white/40 hover:bg-white hover:text-black"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#030303] px-6 pb-28 pt-14 md:px-10 md:py-10 lg:px-14">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="relative h-[88px] w-[240px] md:h-[110px] md:w-[300px]">
            <Image
              src="/cmm-new/cmm-logo-final.png"
              alt="Cusick Morgan Motorsports"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.28em] text-white/42 md:flex-row md:gap-8">
            <span>Premium Motorsport Partnerships</span>
            <span>Executive Hospitality</span>
            <span>Private Brand Access</span>
          </div>
        </div>
      </footer>
    </main>
  );
}