import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "Liên hệ",
  description: `Địa chỉ, giờ mở cửa, điện thoại và Zalo quán ${site.name}.`,
};

export default function LienHePage() {
  return (
    <div className="bg-surface pb-20 pt-10 md:pt-14">
      <div className="container">
        <FadeIn>
          <SectionTitle
            eyebrow="Liên hệ"
            title="Ghé quán hoặc nhắn một tin"
            subtitle="Gọi trước khi đến xa hoặc khi cần rang xay gấp — chúng tôi sẽ báo giờ phù hợp."
          />
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeIn delay={0.05} className="rounded-2xl border border-cream-deep/70 bg-surface-card p-6 shadow-card md:p-8">
            <h2 className="font-primary text-xl font-semibold text-primary">
              Thông tin
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-primary">Địa chỉ</dt>
                <dd className="mt-1 leading-relaxed text-secondary">
                  {site.addressLine}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Điện thoại</dt>
                <dd className="mt-1">
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
                <dd className="mt-1">
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
                <dd className="mt-1 text-secondary">
                  Trong tuần: {site.hours.weekdays}
                  <br />
                  Cuối tuần: {site.hours.weekend}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Gọi ngay
              </a>
              <a
                href={site.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-[#0068FF] px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068FF]"
              >
                Mở Zalo
              </a>
              <a
                href={site.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl border-2 border-primary/15 bg-surface px-4 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Chỉ đường Google Maps
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="overflow-hidden rounded-2xl border border-cream-deep/70 bg-cream shadow-card">
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
            <p className="px-4 py-3 text-center text-xs leading-relaxed text-muted">
              Bản đồ Google Maps theo địa điểm quán.
              Vui lòng gọi trước khi đến xa. 
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
