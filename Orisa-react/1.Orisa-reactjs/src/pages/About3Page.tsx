import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/about-3/Section1";
import SectionPdfProblem from "@/shared/sections/about-3/SectionPdfProblem";
import SectionBuiltForYou from "@/shared/sections/about-3/SectionBuiltForYou";
import SectionCatalogCantDo from "@/shared/sections/about-3/SectionCatalogCantDo";
import SectionShowroomGoesToWork from "@/shared/sections/about-3/SectionShowroomGoesToWork";
import SectionNora from "@/shared/sections/about-3/SectionNora";
import SectionPricingPlans from "@/shared/sections/about-3/SectionPricingPlans";
import SectionAnyIndustry from "@/shared/sections/about-3/SectionAnyIndustry";
import SectionFairStall from "@/shared/sections/about-3/SectionFairStall";
import SectionShowroomLiveDemo from "@/shared/sections/about-3/SectionShowroomLiveDemo";
import Section7 from "@/shared/sections/about-3/Section7";

export default function About3Page() {
  return (
    <>
      <PageMeta title="NeoFairs — Living Showroom" />
      <style>{`
        /* Living Showroom page brand green buttons with black text */
        .living-showroom-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn),
        .living-showroom-page .at-btn.btn-brand-1,
        .living-showroom-page .at-btn-group.btn-brand-1 .at-btn,
        .living-showroom-page .at-btn-group.btn-brand-1 .at-btn-circle,
        .living-showroom-page .sec-4-about-form__btn {
          background-color: #ace227 !important;
          color: #000000 !important;
          border-color: #ace227 !important;
        }
        .living-showroom-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn) span,
        .living-showroom-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn) span span,
        .living-showroom-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn) i,
        .living-showroom-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn) i svg,
        .living-showroom-page .at-btn-group.btn-brand-1 .at-btn span,
        .living-showroom-page .at-btn-group.btn-brand-1 .at-btn-circle svg,
        .living-showroom-page .sec-4-about-form__btn span,
        .living-showroom-page .sec-4-about-form__btn span span,
        .living-showroom-page .sec-4-about-form__btn i,
        .living-showroom-page .sec-4-about-form__btn i svg {
          color: #000000 !important;
          fill: #000000 !important;
        }
        .living-showroom-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn):hover,
        .living-showroom-page .sec-4-about-form__btn:hover {
          color: #000000 !important;
          background-color: #9cd318 !important;
          border-color: #9cd318 !important;
        }

        /* In Pricing Section: card buttons & see full pricing are dark by default, green on hover */
        .living-showroom-page .at-btn.pricing-plan-btn {
          background-color: #1D1D1D !important;
          color: #FEFEFE !important;
          border: 1px solid #1D1D1D !important;
          transition: background-color 0.3s ease, border-color 0.3s ease !important;
        }
        .living-showroom-page .at-btn.pricing-plan-btn span,
        .living-showroom-page .at-btn.pricing-plan-btn span span,
        .living-showroom-page .at-btn.pricing-plan-btn i,
        .living-showroom-page .at-btn.pricing-plan-btn i svg {
          color: #FEFEFE !important;
          fill: #FEFEFE !important;
        }
        .living-showroom-page .at-btn.pricing-plan-btn:hover {
          background-color: #ace227 !important;
          color: #000000 !important;
          border-color: #ace227 !important;
        }
        .living-showroom-page .at-btn.pricing-plan-btn:hover span,
        .living-showroom-page .at-btn.pricing-plan-btn:hover span span,
        .living-showroom-page .at-btn.pricing-plan-btn:hover i,
        .living-showroom-page .at-btn.pricing-plan-btn:hover i svg {
          color: #000000 !important;
          fill: #000000 !important;
        }
        .living-showroom-page .at-btn.pricing-plan-btn:hover span span.text-1 {
          transform: translateY(-150%) !important;
        }
        .living-showroom-page .at-btn.pricing-plan-btn:hover span span.text-2 {
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        .living-showroom-page .at-btn.pricing-plan-btn:hover i svg:first-child {
          transform: translate(16px, -16px) !important;
        }
        .living-showroom-page .at-btn.pricing-plan-btn:hover i svg:last-child {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translate(13px, -13px) !important;
        }
      `}</style>
      <div className="living-showroom-page">
        <Section1 />
        <SectionPdfProblem />
        <SectionBuiltForYou />
        <SectionCatalogCantDo />
        <SectionShowroomGoesToWork />
        <SectionNora />
        <SectionPricingPlans />
        <SectionAnyIndustry />
        <SectionFairStall />
        <Section7 />
        <SectionShowroomLiveDemo />
      </div>
    </>
  );
}
