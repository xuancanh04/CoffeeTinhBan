import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { site } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Liên hệ",
  description: `Địa chỉ, giờ mở cửa, điện thoại và Zalo quán ${site.name}.`,
};

export default function LienHePage() {
  return (
    <div className="pb-20 pt-10 md:pt-14">
      <div className="container">
        <FadeIn>
          <SectionTitle
            eyebrow="Liên hệ"
            title="Ghé quán hoặc nhắn một tin"
            subtitle="Gọi trước khi đến xa hoặc khi cần rang xay gấp — chúng tôi sẽ báo giờ phù hợp."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
          <FadeIn
            delay={0.05}
            className="rounded-[1.75rem] bg-surface-card p-6 shadow-card ring-1 ring-primary/[0.04] md:p-8"
          >
            <h2 className="font-primary text-xl font-semibold text-primary">
              Thông tin
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-primary">Địa chỉ</dt>
                <dd className="mt-1.5 leading-relaxed text-secondary">
                  {site.addressLine}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Điện thoại</dt>
                <dd className="mt-1.5">
                  <a
                    href={`tel:${site.phone}`}
                    className="text-lg font-semibold text-accent hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Zalo</dt>
                <dd className="mt-1.5">
                  <a
                    href={site.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0068FF] hover:underline"
                  >
                    Chat Zalo với quán
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Giờ mở cửa</dt>
                <dd className="mt-1.5 text-secondary">
                  Trong tuần: {site.hours.weekdays}
                  <br />
                  Cuối tuần: {site.hours.weekend}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" className="flex-1">
                <a href={`tel:${site.phone}`}>Gọi ngay</a>
              </Button>
              <Button asChild variant="zalo" className="flex-1">
                <a
                  href={site.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mở Zalo
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a
                  href={site.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chỉ đường
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="overflow-hidden rounded-[1.75rem] bg-cream shadow-card ring-1 ring-primary/[0.04]"
          >
            <div className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[420px]">
              <iframe
                title="Bản đồ quán Coffee Tình Bạn"
                src={site.mapEmbedUrl}
                className="h-full min-h-[280px] w-full border-0 lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="px-4 py-3.5 text-center text-xs leading-relaxed text-muted">
              Bản đồ Google Maps theo địa điểm quán. Vui lòng gọi trước khi đến
              xa.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
