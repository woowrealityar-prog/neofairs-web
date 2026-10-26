import PageMeta from "@/seo/PageMeta";
import RevealText from "@/shared/effects/RevealText";
import Section1 from "@/shared/sections/index-2/Section12";
import SectionPricingFairs from "@/shared/sections/pricing-2/SectionPricingFairs";
import Section2 from "@/shared/sections/services-details/Section4";
import Section3 from "@/shared/sections/about-3/Section7";

export default function PricingPage() {
  return (
    <>
      <PageMeta title="NeoFairs — Pricing" />
      <style>{`
        /* Pricing page button styling */
        .pricing-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn),
        .pricing-page .at-btn.btn-brand-1,
        .pricing-page .at-btn-group.btn-brand-1 .at-btn,
        .pricing-page .at-btn-group.btn-brand-1 .at-btn-circle {
          background-color: #ace227 !important;
          color: #000000 !important;
          border-color: #ace227 !important;
        }
        .pricing-page .at-btn.pricing-plan-btn {
          background-color: #1D1D1D !important;
          color: #FEFEFE !important;
          border: 1px solid #1D1D1D !important;
          transition: background-color 0.3s ease, border-color 0.3s ease !important;
        }
        .pricing-page .at-btn.pricing-plan-btn span,
        .pricing-page .at-btn.pricing-plan-btn span span,
        .pricing-page .at-btn.pricing-plan-btn i,
        .pricing-page .at-btn.pricing-plan-btn i svg {
          color: #FEFEFE !important;
          fill: #FEFEFE !important;
        }
        .pricing-page .at-btn.pricing-plan-btn:hover {
          background-color: #ace227 !important;
          color: #000000 !important;
          border-color: #ace227 !important;
        }
        .pricing-page .at-btn.pricing-plan-btn:hover span,
        .pricing-page .at-btn.pricing-plan-btn:hover span span,
        .pricing-page .at-btn.pricing-plan-btn:hover i,
        .pricing-page .at-btn.pricing-plan-btn:hover i svg {
          color: #000000 !important;
          fill: #000000 !important;
        }
        .pricing-page .at-btn.pricing-plan-btn:hover span span.text-1 {
          transform: translateY(-150%) !important;
        }
        .pricing-page .at-btn.pricing-plan-btn:hover span span.text-2 {
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        .pricing-page .at-btn.pricing-plan-btn:hover i svg:first-child {
          transform: translate(16px, -16px) !important;
        }
        .pricing-page .at-btn.pricing-plan-btn:hover i svg:last-child {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translate(13px, -13px) !important;
        }
      `}</style>
      <div className="pricing-page">
        <Section1
          className="pt-100"
          showNoise={false}
          showFooter={false}
          titleSlot={
            <h1 className="alt-section-title lh-1 mb-20 reveal-text">
              <RevealText>Every feature. One fee. No commission.</RevealText>
            </h1>
          }
          subtitleSlot="Three products. Buy one, or let each one build on the last."
          imageSlot={
            <div
              className="svc5-hero__media at_fade_anim rounded-4 overflow-hidden"
              data-fade-from="bottom"
              data-delay=".25"
              data-svc5-hero-media=""
            >
              <img
                className="anim-zoomin w-100"
                src="/assets/imgs/pages/img-153.webp"
                alt="NeoFairs Pricing"
                width={1920}
                height={570}
                style={{ maxHeight: "420px", objectFit: "cover" }}
                loading="lazy"
              />
              <div className="svc5-hero__media-tag">
                <span>NeoFairs · Transparent Pricing</span>
              </div>
            </div>
          }
          contentSlot={<SectionPricingFairs />}
        />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}
