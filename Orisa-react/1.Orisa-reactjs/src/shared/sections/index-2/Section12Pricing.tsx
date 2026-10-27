import type { ReactNode } from "react";
import { Link } from "react-router-dom";
const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const FEATURE_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z"
            fill="currentColor"
        />
    </svg>
);

const PLANS = [
    {
        key: "fairs",
        title: "Virtual Trade Fairs",
        price: "Priced per fair",
        pricePeriod: "",
        priceClass: "text-price-starter",
        desc: "Meet verified buyers in your industry face-to-face on video without travel or setup costs.",
        btnText: "See the Current Fair",
        btnLink: "#upcoming-fairs",
        features: [
            "Priced per fair",
            "Targeted industry buyers",
            "Video 1-on-1 meetings",
            "No travel or stall setup cost",
            "Post-fair enquiry dashboard",
        ],
        popular: false,
    },
    {
        key: "showroom",
        title: "Living Showroom",
        price: "From ₹35,000",
        pricePeriod: "one-time",
        priceClass: "text-price-growth",
        desc: "Your catalog reborn as an interactive 3D digital showroom open to buyers all year.",
        btnText: "Get Your Showroom",
        btnLink: "#demo",
        features: [
            "From ₹35,000 one-time",
            "360° walkthrough & 3D models",
            "RFQ, cart & instant video call",
            "NORA 24/7 AI assistant",
            "Visitor intent analytics",
        ],
        popular: false,
    },
    {
        key: "marketplace",
        title: "Marketplace",
        price: "Introductory",
        pricePeriod: "pricing",
        priceClass: "text-price-scale",
        desc: "Stay listed all year where domestic & international buyers search for verified suppliers.",
        btnText: "Contact Us",
        btnLink: "/contact-1",
        features: [
            "Introductory pricing for early members",
            "B2B product listings",
            "Direct buyer RFQs to dashboard",
            "One-click entry to every fair",
            "Permanent buyer exposure",
        ],
        popular: false,
    },
];

type PlanItem = {
    key: string;
    title: string;
    price: string;
    pricePeriod: string;
    priceClass: string;
    desc: string;
    btnText: string;
    btnLink: string;
    features: string[];
    popular: boolean;
};

type Section12PricingProps = {
    titleSlot?: ReactNode;
    footerSlot?: ReactNode;
    maxFeatures?: number;
    contentSlot?: ReactNode;
    showCards?: boolean;
    plans?: PlanItem[];
    colClass?: string;
};

export default function Section12Pricing({
    titleSlot,
    footerSlot,
    maxFeatures,
    contentSlot,
    showCards = true,
    plans = PLANS,
    colClass,
}: Section12PricingProps) {
    return (
        <>
            {titleSlot && (
                <div className="row align-items-end mb-60 g-4">
                    <div className="col-12">{titleSlot}</div>
                </div>
            )}

            {contentSlot ? (
                contentSlot
            ) : showCards ? (
                <div className="row justify-content-center g-4">
                    {plans.map((plan) => {
                        const displayedFeatures = typeof maxFeatures === "number" ? plan.features.slice(0, maxFeatures) : plan.features;
                        const columnClass = colClass ? colClass : (plans.length === 2 ? "col-lg-6" : "col-lg-4");
                        return (
                            <div key={plan.key} className={columnClass}>
                            <div
                                className={`home-2-pricing-card ${plan.popular ? "home-2-pricing-card--popular" : ""}`.trim()}
                            >
                                {plan.popular && (
                                    <span className="home-2-pricing-card__badge">Most popular</span>
                                )}
                                <div className="home-2-pricing-card__body">
                                    <h4 className="home-2-pricing-card__title">{plan.title}</h4>
                                    <div className="home-2-pricing-card__price">
                                        <span
                                            className={`home-2-pricing-card__price-value ${plan.priceClass}`}
                                        >
                                            {plan.price}
                                        </span>
                                        {plan.pricePeriod && (
                                            <span className="home-2-pricing-card__price-period">
                                                {" "}{plan.pricePeriod}
                                            </span>
                                        )}
                                    </div>
                                    <p className="home-2-pricing-card__desc">{plan.desc}</p>
                                    <Link className="at-btn pricing-plan-btn px-4" to={plan.btnLink}>
                                        <span>
                                            <span className="text-1 text-capitalize">{plan.btnText}</span>
                                            <span className="text-2 text-capitalize">{plan.btnText}</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </Link>
                                </div>
                                <ul className="home-2-pricing-card__features">
                                    {displayedFeatures.map((feature, i) => (
                                        <li key={i}>
                                            <span
                                                className="home-2-pricing-card__feature-icon"
                                                style={{ color: "#ace227" }}
                                            >
                                                {FEATURE_ICON_SVG}
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
                {footerSlot}
            </div>
            ) : null}
        </>
    );
}
