import Image from "next/image";
import Link from "next/link";
import {
  FadeIn,
  HeroStagger,
  HeroStaggerItem,
} from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { site } from "@/lib/site-config";
import { menuItems } from "@/data/menu";
import { ProductCard } from "@/components/site/ProductCard";

const heroImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=85";

const services = [
  {
    title: "Cà phê tại quán",
    text: "Không gian nhỏ ấm cúng — pha phin, đen đá, sữa đá đúng gu khách quen.",
  },
  {
    title: "Cà phê bột & hạt",
    text: "Mua cà phê bột hoặc hạt, đóng gói kín — tiện dùng tại nhà hoặc làm quà.",
  },
  {
    title: "Rang xay theo yêu cầu",
    text: "Từ nhạt đến đậm, ghi nhận gu của bạn — điểm nhấn của Coffee Tình Bạn.",
  },
];

export default function HomePage() {
  const preview = menuItems.slice(0, 2);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Không gian và ly cà phê ấm áp"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/65 to-primary/90"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 flex min-h-[min(88vh,820px)] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
          <HeroStagger>
            <HeroStaggerItem>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cream/90">
                {site.heroEyebrow}
              </p>
            </HeroStaggerItem>
            <HeroStaggerItem className="mt-3">
              <div className="w-full min-w-0 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-visible [&::-webkit-scrollbar]:hidden">
                <h1 className="whitespace-nowrap font-primary text-2xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {site.tagline}
                </h1>
              </div>
            </HeroStaggerItem>
            <HeroStaggerItem className="mt-5">
              <p className="max-w-2xl text-balance text-lg leading-relaxed text-cream/90 md:text-xl">
                {site.heroIntro}
              </p>
            </HeroStaggerItem>
            <HeroStaggerItem className="mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/menu"
                  className="inline-flex min-h-[52px] min-w-[160px] items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-center text-sm font-semibold text-white shadow-soft transition-colors duration-200 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:hover:scale-[1.01] motion-safe:active:scale-[0.99]"
                >
                  Xem menu
                </Link>
                <Link
                  href="/lien-he"
                  className="inline-flex min-h-[52px] min-w-[160px] items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:hover:scale-[1.01] motion-safe:active:scale-[0.99]"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </HeroStaggerItem>
          </HeroStagger>
        </div>
      </section>

      <section className="border-b border-cream-deep/60 bg-surface py-16 md:py-20">
        <div className="container">
          <FadeIn>
            <SectionTitle
              eyebrow="Dịch vụ"
              title="Một không gian nhỏ — trọn vẹn giá trị cà phê"
              subtitle="Nhanh chóng, thân thiện, và luôn giữ trọn sự nguyên bản trong từng hạt."
            />
          </FadeIn>
          <ul className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn
                key={s.title}
                as="li"
                delay={i * 0.07}
                className="rounded-2xl border border-cream-deep/70 bg-surface-card p-6 shadow-card motion-safe:transition-shadow motion-safe:duration-300 motion-safe:hover:shadow-soft"
              >
                <h3 className="font-primary text-xl font-semibold text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {s.text}
                </p>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.12} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/rang-xay"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-primary/15 bg-surface-card px-6 py-3 text-sm font-semibold text-primary shadow-card transition-colors duration-200 hover:border-accent/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-safe:transition-transform motion-safe:hover:scale-[1.01]"
            >
              Tìm hiểu rang xay
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="text-sm font-semibold text-accent underline-offset-4 transition-colors duration-200 hover:underline"
            >
              Gọi {site.phoneDisplay}
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <FadeIn>
            <SectionTitle
              eyebrow="Gợi ý hôm nay"
              title="Một vài món đang được khách đặt nhiều"
              subtitle="Giá tham khảo — vui lòng xem đầy đủ menu hoặc nhắn Zalo để đặt trước."
            />
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {preview.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.1}>
                <ProductCard item={item} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15} className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:transition-transform motion-safe:hover:scale-[1.01] motion-safe:active:scale-[0.99]"
            >
              Xem toàn bộ menu
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
