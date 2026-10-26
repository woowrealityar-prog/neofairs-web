import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const FEATURE_ICONS = [
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M40 20V0H20H0V20V40H20L40 20ZM40 20H20V40L0 20L20 0L40 20Z" fill="currentColor" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M40 12L32 20V8H20L28 0H40V12Z" fill="currentColor" />
            <path d="M8 20L20 8L32 20L20 32L8 20Z" fill="currentColor" />
            <path d="M8 20L0 28V40H12L20 32L28 40H40V28L32 20V32H20H8V20Z" fill="currentColor" />
            <path d="M8 20L0 12V0H12L20 8H8V20Z" fill="currentColor" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M39.5 0.5L26.5 13.5L13.5 0.5L0.5 13.5V39.5L13.5 26.5L26.5 39.5L39.5 26.5V0.5ZM13.5 26.5V13.5H26.5V26.5H13.5Z" fill="currentColor" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M0 0H20V20H0V0Z" fill="currentColor" />
            <path d="M20 20H40V40H20V20Z" fill="currentColor" />
            <path d="M20 0L40 0L20 20L20 0Z" fill="currentColor" opacity="0.55" />
            <path d="M0 20L20 20L0 40L0 20Z" fill="currentColor" opacity="0.55" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 20H20V30L20 40H10L0 30L10 20H0V0H10L20 10V1.90735e-06L30 0L40 10L30 20ZM20 10V20H10L20 10Z" fill="currentColor" />
            <path d="M30 20H40V40H30L20 30L30 20Z" fill="currentColor" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 40V20H0L20 0L40 20V40H20Z" fill="currentColor" />
            <path d="M0 20L20 40H0V20Z" fill="currentColor" />
        </svg>
    ),
];

const EXHIBITOR_OFFERINGS = [
    {
        delay: "0.05",
        icon: FEATURE_ICONS[0],
        title: "AI buyer matchmaking",
        desc: "The right buyers find your stall",
    },
    {
        delay: "0.1",
        icon: FEATURE_ICONS[1],
        title: "Face-to-face video",
        desc: "Screen share, show samples live",
    },
    {
        delay: "0.15",
        icon: FEATURE_ICONS[2],
        title: "Every visitor captured",
        desc: "Know who came, what they saw",
    },
    {
        delay: "0.2",
        icon: FEATURE_ICONS[3],
        title: "Training before the fair",
        desc: "Mock calls so your team is ready",
    },
    {
        delay: "0.25",
        icon: FEATURE_ICONS[4],
        title: "24×7 support",
        desc: "Our team, not a chatbot",
    },
    {
        delay: "0.3",
        icon: FEATURE_ICONS[5],
        title: "Interpreters on request",
        desc: "For international fairs",
    },
];

export default function Section3() {
    return (
        <div className="container-2200">
            <section className="sec-3-home-12 pt-120 pb-120 bg-neutral-50 rounded-5 mx-lg-3 mx-2 mt-10" aria-label="What Exhibitors Get">
                <div className="container">
                    <header className="sec-3-home-12__header mb-50">
                        <div className="sec-3-home-12__header-left">
                            <div>
                                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">Exhibitor Benefits</span>
                                        <span className="text-2">Exhibitor Benefits</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                            </div>
                            <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                                <RevealText>What exhibitors get</RevealText>
                            </h2>
                        </div>
                    </header>

                    <div className="sec-3-home-12__grid">
                        {EXHIBITOR_OFFERINGS.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-home-12-service at_fade_anim"
                                data-fade-from="bottom"
                                data-delay={item.delay}
                            >
                                <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                                    {item.icon}
                                </div>
                                <h3 className="card-home-12-service__title mb-2">
                                    {item.title}
                                </h3>
                                <p className="card-home-12-service__desc mb-0 at_fade_anim">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

