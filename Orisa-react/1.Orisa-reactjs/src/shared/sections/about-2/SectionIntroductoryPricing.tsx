import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// About 2 - Introductory pricing (Exact layout of pricing-4-main / pricing-4-board)

const BOLT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="96" viewBox="0 0 72 96" fill="none">
        <path d="M42 4L16 52H34L28 92L58 40H38L42 4Z" fill="url(#pricing4BoltMarketplace)" />
        <defs>
            <linearGradient id="pricing4BoltMarketplace" x1="16" y1="4" x2="58" y2="92" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6E6E6E" />
                <stop offset="0.45" stopColor="#B8B8B8" />
                <stop offset="1" stopColor="#6E6E6E" />
            </linearGradient>
        </defs>
    </svg>
);

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const FEATURES = [
    "Lowest rate we’ll ever offer",
    "Member rate on every fair",
    "Live showroom integration",
    "Direct RFQ delivery to dashboard",
    "Priority placement in category",
    "Annual lock-in protection",
];

export default function SectionIntroductoryPricing() {
    return (
        <section className="pricing-4-main pt-100 pb-100 bg-neutral-0" aria-label="Introductory pricing">
            <div className="container">
                {/* Eyebrow pill & Section title */}
                <div className="mb-50">
                    <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                        <span className="text-uppercase">
                            <span className="text-1">Membership Pricing</span>
                            <span className="text-2">Membership Pricing</span>
                        </span>
                        <i>
                            {ARROW_SVG}
                            {ARROW_SVG}
                        </i>
                    </span>
                    <h2 className="alt-section-title lh-1 pb-30 reveal-text">
                        <RevealText>
                            Introductory pricing
                        </RevealText>
                    </h2>
                </div>

                {/* Main plan board from pricing-4 */}
                <div className="pricing-4-board">
                    <div
                        className="pricing-4-float"
                        aria-hidden="false"
                        style={{
                            backgroundColor: "var(--at-theme-primary, #ace227)",
                            color: "#000",
                        }}
                    >
                        <span
                            className="pricing-4-float__badge"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.08)",
                                borderColor: "rgba(0, 0, 0, 0.2)",
                                color: "#000",
                            }}
                        >
                            Lowest rate we’ll ever offer
                        </span>
                        <p
                            className="pricing-4-float__text"
                            style={{ color: "#000" }}
                        >
                            Early members get the lowest rate we’ll ever offer, plus the member rate on every fair.
                        </p>
                        <span
                            className="pricing-4-float__bolt"
                            aria-hidden="true"
                            style={{ opacity: 0.18, color: "#000" }}
                        >
                            {BOLT_SVG}
                        </span>
                    </div>

                    <div className="pricing-4-board__left">
                        <span className="pricing-4-available">
                            <span className="pricing-4-available__dot" aria-hidden="true" />
                            Seats open this month
                        </span>
                        <h2 className="pricing-4-board__title">
                            Partner with us
                        </h2>
                        <p className="pricing-4-board__desc">
                            Early members get the lowest rate we’ll ever offer, plus the member rate on every fair. Contact us for current pricing.
                        </p>
                    </div>

                    <div className="pricing-4-board__right">
                        <h2 className="pricing-4-plan__amount">Marketplace Membership</h2>
                        <p className="pricing-4-plan__desc">
                            All-year B2B listing where buyers search, with RFQs directly to your dashboard and one-click entry to every industry fair.
                        </p>
                        <div className="pricing-4-plan__price">
                            <span className="pricing-4-plan__name">Contact Us</span>
                            <span className="pricing-4-plan__period">/ for current pricing</span>
                        </div>
                        <hr className="pricing-4-plan__rule" />
                        <ul className="pricing-4-plan__features">
                            {FEATURES.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                        <div className="pricing-4-plan__cta-row">
                            <div
                                className="at-btn-group btn-brand-1 at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/contact-1" style={{ color: "#000" }}>
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/contact-1" style={{ color: "#000" }}>
                                    Contact Us
                                </Link>
                                <Link className="at-btn-circle" to="/contact-1" style={{ color: "#000" }}>
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
