"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {
  FadeIn,
  HeroStagger,
  HeroStaggerItem,
} from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";
import { menuItems } from "@/data/menu";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { ParallaxHero } from "@/components/effects/ParallaxHero";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Coffee, 
  Flame, 
  Package, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  MessageCircle,
  Clock,
  MapPin,
  HeartHandshake,
  Star,
  Quote
} from "lucide-react";

const CoffeeBeansScene = dynamic(
  () =>
    import("@/components/effects/CoffeeBeansScene").then(
      (m) => m.CoffeeBeansScene
    ),
  { ssr: false }
);

const CoffeeCup3D = dynamic(
  () =>
    import("@/components/effects/CoffeeCup3D").then(
      (m) => m.CoffeeCup3D
    ),
  { ssr: false }
);

const heroImage =
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=88";

export function HomeClient() {
  const preview = menuItems.slice(0, 3);
  const reduce = useReducedMotion();
  const { t } = useI18n();

  const services = [
    { 
      title: t.home.service1Title, 
      text: t.home.service1Text,
      icon: Coffee,
      badge: "In-Shop"
    },
    { 
      title: t.home.service2Title, 
      text: t.home.service2Text,
      icon: Package,
      badge: "Packaged"
    },
    { 
      title: t.home.service3Title, 
      text: t.home.service3Text,
      icon: Flame,
      badge: "Custom"
    },
  ];

  const stats = [
    { number: t.home.stat1Number, label: t.home.stat1Label },
    { number: t.home.stat2Number, label: t.home.stat2Label },
    { number: t.home.stat3Number, label: t.home.stat3Label },
  ];

  return (
    <>
      {/* ── 1. HERO SECTION PREMIUM ── */}
      <ParallaxHero imageSrc={heroImage} imageAlt="Không gian và ly cà phê ấm áp">
        <CoffeeBeansScene className="absolute inset-0 z-[5] opacity-60 md:opacity-90" />
        
        {/* Glow orb light background */}
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[130px] pointer-events-none" />

        <div className="container relative z-10 flex min-h-[75vh] md:min-h-[min(92vh,920px)] flex-col justify-end pb-12 pt-24 md:pb-24 md:pt-40">
          <HeroStagger>
            {/* Pill Badge */}
            <HeroStaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-4 py-1.5 backdrop-blur-md shadow-soft">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-white/90">
                  {t.home.badgeCrafted}
                </span>
              </div>
            </HeroStaggerItem>

            {/* Brand Title */}
            <HeroStaggerItem className="mt-5">
              <motion.h1
                className="max-w-4xl font-primary text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
                style={{
                  textShadow: reduce
                    ? undefined
                    : "0 12px 40px rgba(0,0,0,0.45)",
                }}
                animate={
                  reduce
                    ? undefined
                    : {
                        textShadow: [
                          "0 12px 40px rgba(0,0,0,0.45)",
                          "0 16px 52px rgba(184,134,88,0.4)",
                          "0 12px 40px rgba(0,0,0,0.45)",
                        ],
                      }
                }
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {site.name}
              </motion.h1>
            </HeroStaggerItem>

            {/* Subtitle with gold accent accentuation */}
            <HeroStaggerItem className="mt-4">
              <p className="max-w-2xl text-lg font-medium leading-snug text-white/95 sm:text-xl md:text-2xl">
                {t.home.heroSubtitle}
              </p>
            </HeroStaggerItem>

            <HeroStaggerItem className="mt-3">
              <p className="max-w-xl text-balance text-base font-normal leading-relaxed text-white/80 md:text-lg">
                {t.home.heroIntro}
              </p>
            </HeroStaggerItem>

            {/* Action Buttons */}
            <HeroStaggerItem className="mt-8 sm:mt-9">
              <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <Button asChild size="lg" variant="default" className="w-full shadow-gold text-base">
                    <Link href="/menu" className="flex items-center justify-center gap-2">
                      <span>{t.home.viewMenu}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <Button asChild size="lg" variant="soft" className="w-full text-base">
                    <Link href="/gioi-thieu" className="flex items-center justify-center">{t.nav.about}</Link>
                  </Button>
                </motion.div>
              </div>
            </HeroStaggerItem>
          </HeroStagger>
        </div>

        {/* Scroll Indicator */}
        {!reduce ? (
          <motion.div
            className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
            aria-hidden
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
              {t.home.scrollDown}
            </span>
            <span className="h-7 w-px bg-gradient-to-b from-accent/90 to-transparent" />
          </motion.div>
        ) : null}
      </ParallaxHero>

      {/* ── 2. TRUST STATS STRIP ── */}
      <section className="relative z-20 -mt-8 mx-auto max-w-5xl px-4 md:-mt-10">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 divide-x divide-primary/10 rounded-2xl border border-accent/20 bg-surface-card/95 p-4 shadow-card backdrop-blur-xl sm:p-7">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-1 sm:px-4">
                <span className="font-primary text-xl font-extrabold text-accent sm:text-2xl md:text-3xl">
                  {s.number}
                </span>
                <span className="mt-1 font-secondary text-[10px] font-medium leading-tight text-secondary sm:text-sm">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── 3. STORY HIGHLIGHT BANNER (Kết nối linh hồn quán) ── */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <AmbientOrbs />
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Story Text */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                  <Coffee className="h-4 w-4" />
                  <span>{t.home.storyEyebrow}</span>
                </div>
                <h2 className="mt-3 font-primary text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-tight">
                  {t.home.storyTitle}
                </h2>
                <div className="mt-6 space-y-4 font-secondary text-base leading-relaxed text-secondary md:text-[1.05rem] md:leading-[1.8]">
                  <p>{t.home.storyDesc1}</p>
                  <p>{t.home.storyDesc2}</p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4">
                  <Button asChild variant="outline" className="group w-full sm:w-auto">
                    <Link href="/gioi-thieu" className="flex items-center justify-center gap-2">
                      <span>{t.home.storyReadMore}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <a
                    href={site.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Zalo: {site.phoneDisplay}</span>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Photo Collage with 3D tilt */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.1}>
                <Tilt3D maxTilt={7} glare={true}>
                  <div className="group relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-3xl shadow-card ring-1 ring-primary/[0.08]">
                    <Image
                      src="/assets/about/photo-1.jpg"
                      alt="Cà phê mộc nguyên bản Coffee Tình Bạn"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-85" />
                    
                    {/* Floating micro-badge inside image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/40 p-3 backdrop-blur-md ring-1 ring-white/10">
                      <div className="flex items-center gap-2.5 text-white">
                        <HeartHandshake className="h-5 w-5 text-accent" />
                        <span className="text-xs sm:text-sm font-medium">Đối đãi mỗi vị khách như tri âm</span>
                      </div>
                      <span className="text-xs text-accent font-semibold">Đắk Lắk</span>
                    </div>
                  </div>
                </Tilt3D>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


      {/* ── 5. SERVICES CARDS SECTION (Cải tiến với Icon badges & Glass) ── */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <AmbientOrbs />
        <div className="container relative z-10">
          <FadeIn>
            <SectionTitle
              eyebrow={t.home.servicesEyebrow}
              title={t.home.servicesTitle}
              subtitle={t.home.servicesSubtitle}
            />
          </FadeIn>

          <ul className="mt-12 grid gap-7 md:grid-cols-3">
            {services.map((s, i) => {
              const IconComponent = s.icon;
              return (
                <FadeIn
                  key={s.title}
                  as="li"
                  delay={i * 0.08}
                  className="h-full"
                >
                  <Tilt3D maxTilt={7} className="h-full">
                    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-accent/15 bg-surface-card/85 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lift">
                      <div>
                        {/* Top Icon Badge & Index */}
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/25 transition-transform duration-300 group-hover:scale-110">
                            <IconComponent className="h-6 w-6 stroke-[2]" />
                          </div>
                          <span className="font-primary text-3xl font-extrabold text-accent/25 transition-colors group-hover:text-accent/45">
                            0{i + 1}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="mt-5 font-primary text-xl font-bold text-primary transition-colors group-hover:text-accent md:text-2xl">
                          {s.title}
                        </h3>
                        <p className="mt-3 font-secondary text-sm leading-relaxed text-secondary md:text-[0.95rem] md:leading-[1.7]">
                          {s.text}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-primary/5 flex items-center justify-between text-xs font-semibold text-accent">
                        <span>{s.badge}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Tilt3D>
                </FadeIn>
              );
            })}
          </ul>

          <FadeIn
            delay={0.12}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild variant="outline">
              <Link href="/rang-xay" className="flex items-center gap-2">
                <span>{t.home.learnRoasting}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <a
              href={`tel:${site.phone}`}
              onClick={() => { window.location.href = `tel:${site.phone}`; }}
              className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <PhoneCall className="h-4 w-4" />
              <span>{t.home.call} {site.phoneDisplay}</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── 6. FEATURED PRODUCTS (Thực đơn nổi bật với 3 sản phẩm) ── */}
      <section className="relative overflow-hidden border-y border-cream-deep/40 bg-surface-card/45 py-12 md:py-24">
        <AmbientOrbs />
        <div className="container relative z-10">
          <FadeIn>
            <SectionTitle
              eyebrow={t.home.todayEyebrow}
              title={t.home.todayTitle}
              subtitle={t.home.todaySubtitle}
            />
          </FadeIn>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {preview.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08} className="h-full">
                <ProductCard item={item} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15} className="mt-12 text-center">
            <motion.div
              className="inline-block"
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              <Button asChild size="lg" variant="primary">
                <Link href="/menu" className="flex items-center gap-2">
                  <span>{t.home.viewFullMenu}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. INTERACTIVE 3D COFFEE CUP LAB (Trải nghiệm tương tác 3D chân thực) ── */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-surface-card/30 via-background to-surface-card/40">
        <AmbientOrbs />
        <div className="container relative z-10">
          <FadeIn>
            <SectionTitle
              eyebrow={t.home.interactive3dEyebrow}
              title={t.home.interactive3dTitle}
              subtitle={t.home.interactive3dSubtitle}
              className="mb-12"
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-accent/20 bg-surface-card/85 p-4 shadow-card backdrop-blur-md md:p-8">
              <CoffeeCup3D />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 8. KHÁCH HÀNG ĐÁNH GIÁ (Customer Reviews & Testimonials) ── */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-surface-subtle/40 border-y border-border-default/60">
        <AmbientOrbs />
        <div className="container relative z-10">
          <SectionTitle
            eyebrow={t.home.reviewsEyebrow}
            title={t.home.reviewsTitle}
            subtitle={t.home.reviewsSubtitle}
            className="mb-14 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                author: t.home.review1Author,
                role: t.home.review1Role,
                text: t.home.review1Text,
                tag: t.home.review1Tag,
                rating: 5,
              },
              {
                author: t.home.review2Author,
                role: t.home.review2Role,
                text: t.home.review2Text,
                tag: t.home.review2Tag,
                rating: 5,
              },
              {
                author: t.home.review3Author,
                role: t.home.review3Role,
                text: t.home.review3Text,
                tag: t.home.review3Tag,
                rating: 5,
              },
              {
                author: t.home.review4Author,
                role: t.home.review4Role,
                text: t.home.review4Text,
                tag: t.home.review4Tag,
                rating: 5,
              },
            ].map((review, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                <Tilt3D
                  maxTilt={8}
                  className="flex h-full flex-col justify-between rounded-2xl border border-accent/20 bg-surface-card/90 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-gold"
                >
                  <div>
                    {/* Stars & Quote */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, sIdx) => (
                          <Star
                            key={sIdx}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-accent/30 stroke-[1.8]" />
                    </div>

                    {/* Tag badge */}
                    <span className="inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent mb-3">
                      {review.tag}
                    </span>

                    {/* Review text */}
                    <p className="font-secondary text-sm leading-relaxed text-secondary italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Customer author info */}
                  <div className="mt-6 pt-4 border-t border-border-default/60 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 font-primary text-sm font-bold text-accent ring-1 ring-accent/30">
                      {review.author.slice(0, 1)}
                    </div>
                    <div>
                      <h4 className="font-primary text-sm font-semibold text-primary">
                        {review.author}
                      </h4>
                      <p className="font-secondary text-xs text-muted">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </Tilt3D>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. BOTTOM CALL TO ACTION BANNER (Ghé quán hoặc nhắn Zalo) ── */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <AmbientOrbs />
        <div className="container relative z-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-surface-card to-accent/5 p-8 shadow-card md:p-12">
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent ring-1 ring-accent/30 mb-4">
                  <Coffee className="h-6 w-6 stroke-[2.2]" />
                </span>
                <h2 className="font-primary text-2xl md:text-4xl font-bold tracking-tight text-primary">
                  {t.home.bannerCtaTitle}
                </h2>
                <p className="mt-3 font-secondary text-sm md:text-base leading-relaxed text-secondary">
                  {t.home.bannerCtaDesc}
                </p>

                <div className="mt-8 flex flex-col w-full gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
                  <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                    <a
                      href={site.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>{t.home.chatZalo}</span>
                    </a>
                  </Button>

                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <Link href="/lien-he" className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{t.home.contactNow}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
