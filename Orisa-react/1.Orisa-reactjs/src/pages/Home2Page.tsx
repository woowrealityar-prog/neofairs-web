import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/index-2/Section1";
import Section2 from "@/shared/sections/index-2/Section2";
import SectionStats from "@/shared/sections/index-2/SectionStats";
import SectionComparison from "@/shared/sections/index-2/SectionComparison";
import SectionEcosystem from "@/shared/sections/index-2/SectionEcosystem";
import Section3 from "@/shared/sections/index-2/Section3";
import Section4 from "@/shared/sections/index-2/Section4";
import SectionBrandScroll from "@/shared/sections/index-2/SectionBrandScroll";
import SectionShowroomIndustries from "@/shared/sections/index-2/SectionShowroomIndustries";
import Section5 from "@/shared/sections/index-2/Section5";
import Section6 from "@/shared/sections/index-2/Section6";
import Section7 from "@/shared/sections/index-2/Section7";
import Section8 from "@/shared/sections/index-2/Section8";
import Section9 from "@/shared/sections/index-2/Section9";
import Section10 from "@/shared/sections/index-2/Section10";
import Section11 from "@/shared/sections/index-2/Section11";
import Section12 from "@/shared/sections/index-2/Section12";
import SectionVideoTestimonials from "@/shared/sections/index-2/SectionVideoTestimonials";
import SectionTestimonials from "@/shared/sections/index-2/SectionTestimonials";
import SectionImageStrips from "@/shared/sections/index-2/SectionImageStrips";
import SectionFAQ from "@/shared/sections/index-2/SectionFAQ";
import SectionDemoForm from "@/shared/sections/index-2/SectionDemoForm";
import Section13 from "@/shared/sections/index-2/Section13";

export default function Home2Page() {
  return (
    <>
      <PageMeta title="NeoFairs — Virtual Trade Fairs & MSME Global Export" />
      <style>{`
        /* Homepage brand green buttons with black text */
        .home-2-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn),
        .home-2-page .at-btn.btn-brand-1,
        .home-2-page .at-btn-group.btn-brand-1 .at-btn,
        .home-2-page .at-btn-group.btn-brand-1 .at-btn-circle,
        .home-2-page .sec-4-about-form__btn {
          background-color: #ace227 !important;
          color: #000000 !important;
          border-color: #ace227 !important;
        }
        .home-2-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn) span,
        .home-2-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn) span span,
        .home-2-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn) i,
        .home-2-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn) i svg,
        .home-2-page .at-btn-group.btn-brand-1 .at-btn span,
        .home-2-page .at-btn-group.btn-brand-1 .at-btn-circle svg,
        .home-2-page .sec-4-about-form__btn span,
        .home-2-page .sec-4-about-form__btn span span,
        .home-2-page .sec-4-about-form__btn i,
        .home-2-page .sec-4-about-form__btn i svg {
          color: #000000 !important;
          fill: #000000 !important;
        }
        .home-2-page .at-btn:not(.bg-transparent):not(.common-white):not(.common-black):not(.at-btn-border-white):not(.pricing-plan-btn):hover,
        .home-2-page .sec-4-about-form__btn:hover {
          color: #000000 !important;
          background-color: #9cd318 !important;
          border-color: #9cd318 !important;
        }

        /* In Pricing Section: card buttons are black by default, green on hover */
        .home-2-page .at-btn.pricing-plan-btn {
          background-color: #1D1D1D !important;
          color: #FEFEFE !important;
          border: 1px solid #1D1D1D !important;
          transition: background-color 0.3s ease, border-color 0.3s ease !important;
        }
        .home-2-page .at-btn.pricing-plan-btn span,
        .home-2-page .at-btn.pricing-plan-btn span span,
        .home-2-page .at-btn.pricing-plan-btn i,
        .home-2-page .at-btn.pricing-plan-btn i svg {
          color: #FEFEFE !important;
          fill: #FEFEFE !important;
        }
        .home-2-page .at-btn.pricing-plan-btn:hover {
          background-color: #ace227 !important;
          color: #000000 !important;
          border-color: #ace227 !important;
        }
        .home-2-page .at-btn.pricing-plan-btn:hover span,
        .home-2-page .at-btn.pricing-plan-btn:hover span span,
        .home-2-page .at-btn.pricing-plan-btn:hover i,
        .home-2-page .at-btn.pricing-plan-btn:hover i svg {
          color: #000000 !important;
          fill: #000000 !important;
        }
        .home-2-page .at-btn.pricing-plan-btn:hover span span.text-1 {
          transform: translateY(-150%) !important;
        }
        .home-2-page .at-btn.pricing-plan-btn:hover span span.text-2 {
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        .home-2-page .at-btn.pricing-plan-btn:hover i svg:first-child {
          transform: translate(16px, -16px) !important;
        }
        .home-2-page .at-btn.pricing-plan-btn:hover i svg:last-child {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translate(13px, -13px) !important;
        }
      `}</style>
      <div className="home-2-page">
                {/* <Section1 /> */}
                <Section2 />
                <SectionStats />
                <SectionComparison />
                <SectionEcosystem />
                {/* <Section3 /> */}
                <Section4 />
                <SectionBrandScroll />
                <SectionShowroomIndustries />
                <Section12 maxFeatures={2} />
                <SectionVideoTestimonials />
                <SectionTestimonials />
                <SectionImageStrips />
                <SectionFAQ />
                <SectionDemoForm />
                {/* <Section5 /> */}
                {/* <Section6 /> - Our Selected Work */}
                {/* <Section7 /> - Awards */}
                {/* <Section8 /> - home-2-section-8 */}
                {/* <Section9 /> - home-2-section-9 at-item-anime-area */}
                {/* <Section10 /> - Why choose us (What our clients are saying) */}
                {/* <Section11 /> - home-2-section-11 postbox-scroll-zoom */}
                {/* <Section13 /> - Article & blogs */}
            </div>
    </>
  );
}
