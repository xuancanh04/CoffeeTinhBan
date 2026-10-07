"use client";

import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";

export default function LienHePage() {
  const { t } = useI18n();

  return (
    <div className="pb-20 pt-10 md:pt-14">
      <div className="container">
        <FadeIn>
          <SectionTitle
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <FadeIn
            delay={0.05}
            className="py-2"
          >
            <h2 className="font-primary text-3xl font-bold text-primary">
              {t.contact.infoTitle}
            </h2>
            <dl className="mt-8 space-y-6 text-base">
              <div>
                <dt className="text-base font-bold text-primary">{t.contact.address}</dt>
                <dd className="mt-2 text-base leading-relaxed text-secondary">
                  {site.addressLine}
                </dd>
              </div>
              <div>
                <dt className="text-base font-bold text-primary">{t.contact.phone}</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${site.phone}`}
                    className="text-xl font-bold text-accent hover:underline hover:text-accent-light"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-base font-bold text-primary">{t.contact.zaloLabel}</dt>
                <dd className="mt-2">
                  <a
                    href={site.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-[#0068FF] hover:underline"
                  >
                    {t.contact.zaloLink}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-base font-bold text-primary">{t.contact.hours}</dt>
                <dd className="mt-2 space-y-1 text-base text-secondary">
                  <p>{t.contact.weekdays}: {site.hours.weekdays}</p>
                  <p>{t.contact.weekend}: {site.hours.weekend}</p>
                </dd>
              </div>
            </dl>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="overflow-hidden rounded-xl bg-cream shadow-card ring-1 ring-primary/[0.04]"
          >
            <div className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[420px]">
              <iframe
                title={t.contact.mapTitle}
                src={site.mapEmbedUrl}
                className="h-full min-h-[280px] w-full border-0 lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="px-4 py-3.5 text-center text-xs leading-relaxed text-muted">
              {t.contact.mapNote}
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
