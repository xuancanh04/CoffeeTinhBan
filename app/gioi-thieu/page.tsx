import Link from "next/link";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { site } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Giới thiệu",
  description: `Câu chuyện quán cà phê nhỏ ${site.name} — chất lượng hạt và quy trình rang xay.`,
};

export default function GioiThieuPage() {
  return (
    <div className="pb-20 pt-10 md:pt-14">
      <div className="container max-w-3xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Giới thiệu"
            title={`${site.name} — giữ trọn vị cà phê`}
            subtitle="Chúng tôi phục vụ khách: người quen tới uống phin mua mang đi, mua hạt hoặc bột mang về, và dịch vụ rang xay theo yêu cầu."
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="space-y-6 text-base leading-relaxed text-secondary">
            <p>
              <strong className="font-semibold text-primary">{site.name}</strong>{" "}
              bắt đầu từ mong muốn giữ một ly cà phê đơn giản nhưng thật: hạt rõ
              nguồn, rang có kiểm soát, và xay đúng độ mịn cho từng cách pha —
              từ phin truyền thống.
            </p>
            <p>
              Chúng tôi không chạy theo xu hướng ồn ào. Thay vào đó là lắng nghe
              khách quen: họ thích đắng hay ngọt, uống sữa nhiều hay ít, rang
              hôm nay có hợp ly pha sáng mai không. Dịch vụ rang xay vì thế trở
              thành phần quan trọng — nơi chúng tôi ghi nhận “gu” của từng
              người.
            </p>
            <p>
              Ghé quán để thử một tách, mang hạt hoặc bột về nếu bạn đã tin —
              hoặc chỉ nhắn một tin Zalo để hỏi về mức rang trước khi đặt. Chúng
              tôi giữ cách làm vừa đủ, nên mỗi mẻ rang đều được để ý. Nếu không
              thể đến quán, chúng tôi có thể giao hạt hoặc bột cho bạn.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 rounded-[1.75rem] bg-surface-card p-6 shadow-card ring-1 ring-primary/[0.04] md:p-8">
            <h2 className="font-primary text-xl font-semibold text-primary">
              Cam kết với khách hàng
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-secondary">
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                Hạt và bột bán ra đều gắn với ngày rang / tư vấn rõ ràng.
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                Rang xay theo yêu cầu — trao đổi trước khi thực hiện.
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                Hỗ trợ đóng gói và giao toàn quốc.
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="mt-10 flex flex-wrap gap-3 text-sm font-semibold"
        >
          <Button asChild variant="outline" size="sm">
            <Link href="/menu">Xem menu</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/rang-xay">Dịch vụ rang xay →</Link>
          </Button>
        </FadeIn>
      </div>
    </div>
  );
}
