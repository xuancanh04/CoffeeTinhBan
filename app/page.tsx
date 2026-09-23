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
import { Button } from "@/components/ui/button";

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
            className="object-cover scale-[1.02]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/45 to-primary/85"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_20%,_rgba(35,25,20,0.35)_100%)]"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 flex min-h-[min(90vh,860px)] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
          <HeroStagger>
            <HeroStaggerItem>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-cream/80">
                {site.heroEyebrow}
              </p>
            </HeroStaggerItem>
            <HeroStaggerItem className="mt-4">
              <h1 className="max-w-4xl font-primary text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                {site.name}
              </h1>
            </HeroStaggerItem>
            <HeroStaggerItem className="mt-4">
              <p className="max-w-xl text-lg font-medium leading-snug text-cream/95 md:text-xl">
                Cà phê rang xay nguyên chất
              </p>
            </HeroStaggerItem>
            <HeroStaggerItem className="mt-5">
              <p className="max-w-xl text-balance text-base leading-relaxed text-cream/80 md:text-lg">
                {site.heroIntro}
              </p>
            </HeroStaggerItem>
            <HeroStaggerItem className="mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" variant="default">
                  <Link href="/menu">Xem menu</Link>
                </Button>
                <Button asChild size="lg" variant="soft">
                  <Link href="/lien-he">Liên hệ ngay</Link>
                </Button>
              </div>
            </HeroStaggerItem>
          </HeroStagger>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <SectionTitle
              eyebrow="Dịch vụ"
              title="Một không gian nhỏ — trọn vẹn giá trị cà phê"
              subtitle="Nhanh chóng, thân thiện, và luôn giữ trọn sự nguyên bản trong từng hạt."
            />
          </FadeIn>
          <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
            {services.map((s, i) => (
              <FadeIn
                key={s.title}
                as="li"
                delay={i * 0.07}
                className="relative pt-2"
              >
                <span
                  className="mb-4 block font-primary text-4xl font-semibold text-accent/25"
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <h3 className="font-primary text-xl font-semibold text-primary md:text-[1.35rem]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary md:text-[0.95rem]">
                  {s.text}
                </p>
              </FadeIn>
            ))}
          </ul>
          <FadeIn
            delay={0.12}
            className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild variant="outline">
              <Link href="/rang-xay">Tìm hiểu rang xay</Link>
            </Button>
            <a
              href={`tel:${site.phone}`}
              className="text-sm font-semibold text-accent underline-offset-4 transition-colors duration-200 hover:underline"
            >
              Gọi {site.phoneDisplay}
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-cream-deep/40 bg-surface-card/40 py-16 md:py-24">
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
            <Button asChild size="lg" variant="primary">
              <Link href="/menu">Xem toàn bộ menu</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
