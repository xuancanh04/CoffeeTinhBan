import Link from "next/link";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { site } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

const levels = [
  {
    name: "Rang nhạt (Light)",
    desc: "Giữ nhiều acid sáng, hương hoa quả — phù hợp pour over, thử hương vùng.",
  },
  {
    name: "Rang vừa (Medium)",
    desc: "Cân bằng ngọt – đắng — hợp phin, espresso gia đình, đa số khách chọn.",
  },
  {
    name: "Rang đậm (Dark)",
    desc: "Thể đậm, ít acid — phù hợp sữa đá, pha phin đặc, gu mạnh.",
  },
];

export const metadata = {
  title: "Dịch vụ rang xay",
  description:
    "Rang xay cà phê theo yêu cầu tại quán Coffee Tình Bạn — nhạt, vừa, đậm. Liên hệ để được tư vấn.",
};

export default function RangXayPage() {
  return (
    <div className="pb-20 pt-10 md:pt-14">
      <div className="container max-w-3xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Dịch vụ"
            title="Rang xay cà phê tại Coffee Tình Bạn"
            subtitle="Bạn mang hạt hoặc chọn hạt tại quán — chúng tôi rang theo profile và xay đúng cỡ cho dụng cụ nhà bạn (phin, espresso, pour over…)."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-base leading-relaxed text-secondary">
            Đây là dịch vụ chúng tôi muốn làm rõ nhất với khách hàng: Không phải
            chỉ “bán hạt hoặc bột”, mà đồng hành để ly cà phê ở nhà giống gu bạn
            đã thử tại quán — hoặc đúng hơn nữa, theo sở thích riêng của bạn.
          </p>
        </FadeIn>

        <ul className="mt-10 list-none space-y-4 p-0">
          {levels.map((l, i) => (
            <FadeIn key={l.name} as="li" delay={i * 0.08}>
              <div className="rounded-[1.5rem] bg-surface-card p-6 shadow-card ring-1 ring-primary/[0.04]">
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-primary text-sm font-semibold text-accent/50"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <h2 className="font-primary text-lg font-semibold text-primary md:text-xl">
                    {l.name}
                  </h2>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary">
                  {l.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[1.75rem] bg-primary p-8 text-center text-white md:p-10">
            <p className="font-primary text-xl font-semibold md:text-2xl">
              Bạn đã có gu rang riêng chưa?
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/80">
              Nhắn Zalo hoặc gọi — chúng tôi sẽ hỏi vài câu ngắn về cách pha và
              khẩu vị, rồi đề xuất mức rang phù hợp.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="zalo" className="w-full max-w-xs">
                <a
                  href={site.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Liên hệ rang xay qua Zalo
                </a>
              </Button>
              <Button asChild size="lg" variant="soft" className="w-full max-w-xs">
                <a href={`tel:${site.phone}`}>Gọi {site.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-10 text-center text-sm text-muted">
          <Link
            href="/menu"
            className="font-semibold text-accent hover:underline"
          >
            ← Quay lại menu
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
