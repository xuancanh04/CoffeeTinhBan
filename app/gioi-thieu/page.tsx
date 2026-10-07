"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { useI18n } from "@/lib/i18n";
import { 
  Quote, 
  Flame, 
  Compass, 
  HeartHandshake, 
  MapPin, 
  Send, 
  Coffee, 
  CheckCircle2, 
  Sliders 
} from "lucide-react";

export default function GioiThieuPage() {
  const { t } = useI18n();

  return (
    <div className="relative overflow-hidden pb-24 pt-10 md:pt-14">
      {/* Background Animated Atmosphere Orbs */}
      <AmbientOrbs />

      <div className="container relative z-10 max-w-4xl px-4 md:px-6">
        {/* Header / Hero */}
        <FadeIn>
          <SectionTitle
            eyebrow={t.about.eyebrow}
            title={t.about.title}
          />
        </FadeIn>

        {/* Pull Quote with Subtle Ambient Floating & Glow */}
        <FadeIn delay={0.05}>
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="group relative my-8 overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-r from-accent/[0.08] via-surface-card to-accent/[0.04] p-6 shadow-card md:p-8 backdrop-blur-sm transition-shadow duration-500 hover:shadow-gold/15"
          >
            {/* Animated glowing decorative icon */}
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute right-4 top-4 text-accent/15 md:right-8 md:top-6"
            >
              <Quote className="h-16 w-16 -rotate-12 md:h-24 md:w-24" />
            </motion.div>
            
            <blockquote className="relative z-10 font-serif text-lg italic leading-relaxed text-primary md:text-xl md:leading-loose">
              {t.about.quote}
            </blockquote>
          </motion.div>
        </FadeIn>

        {/* Section 1: Khởi nguồn từ một chữ "Thật" */}
        <section className="mt-14 md:mt-20">
          <FadeIn>
            <div className="flex items-center gap-3.5">
              <motion.span 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/20 cursor-pointer"
              >
                <Compass className="h-5 w-5 stroke-[2.2]" />
              </motion.span>
              <h2 className="font-primary text-2xl font-bold tracking-tight text-primary md:text-3xl">
                {t.about.sec1Title}
              </h2>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
            <FadeIn delay={0.08}>
              <div className="space-y-4 font-secondary text-[0.95rem] font-normal leading-relaxed text-secondary tracking-normal md:text-[1rem] md:leading-[1.75]">
                <p>
                  <strong className="font-bold text-primary">{t.about.sec1P1_1}</strong>
                  {t.about.sec1P1_2}
                </p>
                <p>
                  {t.about.sec1P2_start}
                  <span className="font-semibold text-primary">{t.about.sec1P2_that}</span>
                  {t.about.sec1P2_mid}
                </p>
                <p>
                  {t.about.sec1P3}
                </p>
                <p className="border-l-2 border-accent/40 pl-4 italic text-primary/90">
                  {t.about.sec1Quote}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="space-y-4">
                <Tilt3D maxTilt={6} glare={true}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-primary/[0.08]">
                    <Image
                      src="/assets/about/photo-1.jpg"
                      alt={t.about.img1Caption}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <p className="absolute bottom-3 left-4 right-4 text-xs font-medium text-white/90">
                      {t.about.img1Caption}
                    </p>
                  </div>
                </Tilt3D>

                <Tilt3D maxTilt={6} glare={true}>
                  <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl shadow-card ring-1 ring-primary/[0.08]">
                    <Image
                      src="/assets/anhhat2.jpg"
                      alt={t.about.img2Caption}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <p className="absolute bottom-3 left-4 right-4 text-xs font-medium text-white/90">
                      {t.about.img2Caption}
                    </p>
                  </div>
                </Tilt3D>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 2: Đứng ngoài trào lưu để lắng nghe từng nếp quen */}
        <section className="mt-14 md:mt-20">
          <FadeIn>
            <div className="flex items-center gap-3.5">
              <motion.span 
                whileHover={{ scale: 1.15 }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/20 cursor-pointer"
              >
                <HeartHandshake className="h-5 w-5 stroke-[2.2]" />
              </motion.span>
              <h2 className="font-primary text-2xl font-bold tracking-tight text-primary md:text-3xl">
                {t.about.sec2Title}
              </h2>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
            <FadeIn delay={0.08} className="order-2 md:order-1">
              <Tilt3D maxTilt={6} glare={true}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-primary/[0.08]">
                  <Image
                    src="/assets/about/photo-2.jpg"
                    alt={t.about.img3Caption}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <p className="absolute bottom-3 left-4 right-4 text-xs font-medium text-white/90">
                    {t.about.img3Caption}
                  </p>
                </div>
              </Tilt3D>
            </FadeIn>

            <FadeIn delay={0.12} className="order-1 md:order-2">
              <div className="space-y-4 font-secondary text-[0.95rem] font-normal leading-relaxed text-secondary tracking-normal md:text-[1rem] md:leading-[1.75]">
                <p>
                  {t.about.sec2P1_1}
                  <strong className="font-bold text-primary">Coffee Tình Bạn</strong>
                  {t.about.sec2P1_2}
                </p>
                <div className="space-y-2.5 rounded-2xl bg-surface-card p-5 ring-1 ring-primary/[0.04]">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="flex items-start gap-3 transition-colors"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <p className="text-sm md:text-[0.95rem] text-secondary">
                      <strong className="text-primary font-semibold">{t.about.cust1Label}</strong>
                      {t.about.cust1Text}
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="flex items-start gap-3 transition-colors"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <p className="text-sm md:text-[0.95rem] text-secondary">
                      <strong className="text-primary font-semibold">{t.about.cust2Label}</strong>
                      {t.about.cust2Text}
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="flex items-start gap-3 transition-colors"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <p className="text-sm md:text-[0.95rem] text-secondary">
                      <strong className="text-primary font-semibold">{t.about.cust3Label}</strong>
                      {t.about.cust3Text}
                    </p>
                  </motion.div>
                </div>
                <p>
                  <strong className="font-bold text-primary">Tình Bạn</strong>
                  {t.about.sec2P2_1}
                  <span className="font-medium text-primary">{t.about.sec2P2_highlight}</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 3: Dịch vụ rang xay */}
        <section className="mt-14 md:mt-20">
          <FadeIn>
            <div className="flex items-center gap-3.5">
              <motion.span 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/20"
              >
                <Flame className="h-5 w-5 stroke-[2.2]" />
              </motion.span>
              <h2 className="font-primary text-xl font-bold tracking-tight text-primary sm:text-2xl sm:whitespace-nowrap md:text-3xl">
                {t.about.sec3Title}
              </h2>
            </div>
            <p className="mt-4 font-secondary text-[0.95rem] font-normal leading-relaxed text-secondary tracking-normal md:text-[1rem] md:leading-[1.75]">
              {t.about.sec3Intro}
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <FadeIn delay={0.06}>
              <motion.div 
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                className="group h-full rounded-2xl bg-surface-card p-6 shadow-card ring-1 ring-primary/[0.04] transition-all hover:ring-accent/30 hover:shadow-lift"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                  <Coffee className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h3 className="mt-4 font-primary text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {t.about.card1Title}
                </h3>
                <p className="mt-2.5 font-secondary text-sm font-normal leading-relaxed text-secondary">
                  {t.about.card1Text}
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <motion.div 
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                className="group h-full rounded-2xl bg-surface-card p-6 shadow-card ring-1 ring-primary/[0.04] transition-all hover:ring-accent/30 hover:shadow-lift"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                  <Flame className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h3 className="mt-4 font-primary text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {t.about.card2Title}
                </h3>
                <p className="mt-2.5 font-secondary text-sm font-normal leading-relaxed text-secondary">
                  {t.about.card2Text}
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.14}>
              <motion.div 
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                className="group h-full rounded-2xl bg-surface-card p-6 shadow-card ring-1 ring-primary/[0.04] transition-all hover:ring-accent/30 hover:shadow-lift"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                  <Sliders className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h3 className="mt-4 font-primary text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {t.about.card3Title}
                </h3>
                <p className="mt-2.5 font-secondary text-sm font-normal leading-relaxed text-secondary">
                  {t.about.card3Text}
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Section 4: Lời mời thân tình */}
        <section className="mt-14 md:mt-20">
          <FadeIn>
            <div className="flex items-center gap-3.5">
              <motion.span 
                whileHover={{ scale: 1.15 }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/20"
              >
                <MapPin className="h-5 w-5 stroke-[2.2]" />
              </motion.span>
              <h2 className="font-primary text-2xl font-bold tracking-tight text-primary md:text-3xl">
                {t.about.sec4Title}
              </h2>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-8 md:grid-cols-5 md:items-center">
            <FadeIn delay={0.08} className="space-y-4 md:col-span-3">
              <p className="text-base font-medium text-primary">
                {t.about.sec4Welcome}
              </p>

              <ul className="space-y-2.5 font-secondary text-secondary">
                <motion.li 
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 text-sm md:text-[0.95rem]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span>{t.about.sec4Item1}</span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 text-sm md:text-[0.95rem]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span>{t.about.sec4Item2}</span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 text-sm md:text-[0.95rem]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span>{t.about.sec4Item3}</span>
                </motion.li>
              </ul>

              <div className="mt-5 border-t border-primary/10 pt-4 font-secondary text-sm font-normal leading-relaxed text-secondary md:text-[0.95rem] md:leading-[1.75]">
                <p className="flex items-start gap-3">
                  <motion.span 
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/20"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </motion.span>
                  <span>{t.about.sec4ZaloNote}</span>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12} className="md:col-span-2">
              <Tilt3D maxTilt={7} glare={true}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card ring-1 ring-primary/[0.08]">
                  <Image
                    src="/assets/anhcaphebot.png"
                    alt={t.about.img4Caption}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <p className="absolute bottom-3 left-3 right-3 text-center text-xs font-medium text-white/95">
                    {t.about.img4Caption}
                  </p>
                </div>
              </Tilt3D>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
