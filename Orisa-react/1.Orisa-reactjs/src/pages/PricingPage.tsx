import PageMeta from "@/seo/PageMeta";
import RevealText from "@/shared/effects/RevealText";
import Section1 from "@/shared/sections/index-2/Section12";
import SectionPricingPlans from "@/shared/sections/about-3/SectionPricingPlans";
import SectionIntroductoryPricing from "@/shared/sections/about-2/SectionIntroductoryPricing";
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
          showCards={false}
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
        />

        {/* Section: Virtual Trade Fairs (Using the homepage Pricing layout) */}
        <Section1
          className="pt-80 pb-80"
          showNoise={false}
          showFooter={false}
          eyebrowText="Virtual Trade Fairs"
          titleSlot={
            <h2 className="alt-section-title lh-1 mb-20 reveal-text">
              <RevealText>Virtual Trade Fairs</RevealText>
            </h2>
          }
          subtitleSlot="Priced per fair. Each fair is priced by industry, region and scale. Domestic fairs cost less; international fairs more."
          plans={[
            {
              key: "standard-stall",
              title: "Standard stall",
              price: "Priced per fair",
              pricePeriod: "",
              priceClass: "text-price-starter",
              desc: "For this fair · Priced per fair",
              btnText: "See the current fair",
              btnLink: "#upcoming-fairs",
              features: [
                "For this fair",
                "Priced per fair",
                "Domestic fairs cost less; international fairs more",
                "Face-to-face video 1-on-1 meetings",
                "Post-fair enquiry dashboard",
              ],
              popular: false,
            },
            {
              key: "showroom-stall",
              title: "Living Showroom stall",
              price: "From ₹35,000",
              pricePeriod: "one-time",
              priceClass: "text-price-growth",
              desc: "This fair + forever · From ₹35,000",
              btnText: "See the current fair",
              btnLink: "#upcoming-fairs",
              features: [
                "This fair + forever",
                "From ₹35,000 one-time",
                "360° walkthrough & 3D models",
                "NORA 24/7 AI assistant",
                "Visitor intent analytics",
              ],
              popular: false,
            },
          ]}
          contentSlot={
            <>
              <div className="row justify-content-center g-4">
                <div className="col-lg-6">
                  <div className="home-2-pricing-card">
                    <div className="home-2-pricing-card__body">
                      <h4 className="home-2-pricing-card__title">Standard stall</h4>
                      <div className="home-2-pricing-card__price">
                        <span className="home-2-pricing-card__price-value text-price-starter">
                          Priced per fair
                        </span>
                      </div>
                      <p className="home-2-pricing-card__desc">
                        For this fair · Priced per fair
                      </p>
                      <a className="at-btn pricing-plan-btn px-4" href="#upcoming-fairs">
                        <span>
                          <span className="text-1 text-capitalize">See the current fair</span>
                          <span className="text-2 text-capitalize">See the current fair</span>
                        </span>
                        <i>
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                          </svg>
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                          </svg>
                        </i>
                      </a>
                    </div>
                    <ul className="home-2-pricing-card__features">
                      <li>
                        <span className="home-2-pricing-card__feature-icon" style={{ color: "#ace227" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                          </svg>
                        </span>
                        For this fair
                      </li>
                      <li>
                        <span className="home-2-pricing-card__feature-icon" style={{ color: "#ace227" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                          </svg>
                        </span>
                        Priced per fair
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="home-2-pricing-card">
                    <div className="home-2-pricing-card__body">
                      <h4 className="home-2-pricing-card__title">Living Showroom stall</h4>
                      <div className="home-2-pricing-card__price">
                        <span className="home-2-pricing-card__price-value text-price-growth">
                          From ₹35,000
                        </span>
                      </div>
                      <p className="home-2-pricing-card__desc">
                        This fair + forever · From ₹35,000
                      </p>
                      <a className="at-btn pricing-plan-btn px-4" href="#upcoming-fairs">
                        <span>
                          <span className="text-1 text-capitalize">See the current fair</span>
                          <span className="text-2 text-capitalize">See the current fair</span>
                        </span>
                        <i>
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                          </svg>
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                          </svg>
                        </i>
                      </a>
                    </div>
                    <ul className="home-2-pricing-card__features">
                      <li>
                        <span className="home-2-pricing-card__feature-icon" style={{ color: "#ace227" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                          </svg>
                        </span>
                        This fair + forever
                      </li>
                      <li>
                        <span className="home-2-pricing-card__feature-icon" style={{ color: "#ace227" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                          </svg>
                        </span>
                        From ₹35,000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Marketplace Benefit note */}
              <div
                className="pricing-2-custom mt-40 at_fade_anim"
                data-fade-from="bottom"
                data-delay=".1"
              >
                <div className="pricing-2-custom__icon" aria-hidden="true" style={{ color: "#ace227" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 20C5.286 20 2.929 20 1.464 18.535C0 17.072 0 14.714 0 10C0 5.286 0 2.929 1.464 1.464C2.93 0 5.286 0 10 0C14.714 0 17.071 0 18.535 1.464C20 2.93 20 5.286 20 10C20 14.714 20 17.071 18.535 18.535C17.072 20 14.714 20 10 20ZM10 5.75C9.379 5.75 8.875 6.254 8.875 6.875C8.875 7.07391 8.79598 7.26468 8.65533 7.40533C8.51468 7.54598 8.32391 7.625 8.125 7.625C7.92609 7.625 7.73532 7.54598 7.59467 7.40533C7.45402 7.26468 7.375 7.07391 7.375 6.875C7.37501 6.44494 7.48069 6.02146 7.68274 5.64182C7.88479 5.26218 8.17702 4.93799 8.53374 4.69777C8.89046 4.45754 9.30073 4.30865 9.72849 4.26416C10.1562 4.21968 10.5884 4.28098 10.9869 4.44266C11.3854 4.60435 11.7381 4.86147 12.0139 5.19142C12.2898 5.52137 12.4803 5.91403 12.5688 6.33489C12.6573 6.75575 12.6411 7.19191 12.5215 7.60501C12.4019 8.01811 12.1826 8.3955 11.883 8.704C11.791 8.79867 11.703 8.88767 11.619 8.971C11.4165 9.16504 11.2258 9.37108 11.048 9.588C10.828 9.87 10.75 10.077 10.75 10.25V11C10.75 11.1989 10.671 11.3897 10.5303 11.5303C10.3897 11.671 10.1989 11.75 10 11.75C9.80109 11.75 9.61032 11.671 9.46967 11.5303C9.32902 11.3897 9.25 11.1989 9.25 11V10.25C9.25 9.595 9.555 9.064 9.864 8.667C10.093 8.373 10.38 8.087 10.614 7.853C10.6847 7.783 10.749 7.71833 10.807 7.659C10.9611 7.5004 11.0651 7.2999 11.1059 7.08255C11.1467 6.8652 11.1225 6.64065 11.0364 6.43696C10.9503 6.23326 10.8061 6.05947 10.6217 5.93729C10.4374 5.81511 10.2211 5.74997 10 5.75ZM10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13C9.73478 13 9.48043 13.1054 9.29289 13.2929C9.10536 13.4804 9 13.7348 9 14C9 14.2652 9.10536 14.5196 9.29289 14.7071C9.48043 14.8946 9.73478 15 10 15Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="pricing-2-custom__text">
                  <h3 className="h6 fw-600 mb-10">Marketplace Member Benefit</h3>
                  <p className="neutral-500 mb-0 fz-font-md">
                    Marketplace members get discount on every fair.
                  </p>
                </div>
                <a className="pricing-2-custom__link text-decoration-underline ms-auto" href="/marketplace">
                  Explore Marketplace
                </a>
              </div>
            </>
          }
        />
        <SectionPricingPlans />
        <SectionIntroductoryPricing />
        <Section2
          eyebrow="INCLUDED FEATURES"
          title="Included at every level."
          subtitle="Everything you need to showcase, sell, and manage your buyers online."
          steps={[
            {
              num: "01",
              title: "Built for you",
              description: "We do the build. You review.",
              img: "/assets/imgs/pages/img-161.webp",
              cardClass: "at-service-card hover-up card-1 no-before rounded-2 overflow-hidden p-relative bg-neutral-0 z-index-3",
            },
            {
              num: "02",
              title: "Your dashboard",
              description: "Products, prices, visitors, RFQs",
              img: "/assets/imgs/pages/img-162.webp",
              cardClass: "at-service-card hover-up card-2 rounded-2 overflow-hidden p-relative bg-neutral-0",
            },
            {
              num: "03",
              title: "Support",
              description: "Real people, [response time placeholder]",
              img: "/assets/imgs/pages/img-163.webp",
              cardClass: "at-service-card hover-up card-3 rounded-2 overflow-hidden p-relative bg-neutral-0",
            },
            {
              num: "04",
              title: "Your data",
              description: "Buyer data stays yours",
              img: "/assets/imgs/pages/img-164.webp",
              cardClass: "at-service-card hover-up card-2 rounded-2 overflow-hidden p-relative bg-neutral-0",
            },
          ]}
        />
        <Section3 />
      </div>
    </>
  );
}
