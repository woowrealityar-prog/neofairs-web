import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const CARDS = [
    {
        num: "01",
        delay: "0.05",
        title: "Word of mouth",
        pills: [
            "Free.",
            "Unpredictable.",
            "You can't plan a business on it.",
        ],
    },
    {
        num: "02",
        delay: "0.15",
        title: "Physical trade fairs",
        pills: [
            "3 Lakh+ domestic",
            "20 Lakh+ international",
            "Footfall not guaranteed.",
        ],
    },
    {
        num: "03",
        delay: "0.25",
        title: "E-commerce + ads",
        pills: [
            "1 Lakh to set up",
            "50k+ every month",
            "You compete alone for the same clicks.",
        ],
    },
];

export default function SectionComparison() {
    return (
        <section className="sec-3-home-12" aria-label="Every way to find buyers is either unreliable or expensive">
            <style>{`
                .card-home-12-service.no-card-hover {
                    cursor: default !important;
                    transition: none !important;
                }
                .card-home-12-service.no-card-hover:hover,
                .card-home-12-service.no-card-hover:focus-visible {
                    border-color: var(--at-neutral-100) !important;
                    box-shadow: none !important;
                    transform: none !important;
                }
                .card-home-12-service.no-card-hover:hover .card-home-12-service__title {
                    color: inherit !important;
                }
            `}</style>

            <div className="container">
                <div className="row mb-60">
                    <div className="col-lg-7 col-12">
                        <div className="at-about-title-wrap d-flex flex-wrap flex-lg-nowrap align-items-start gap-4">
                            <span className="at-btn common-black bg-transparent rounded-0 p-0 mt-xxl-2">
                                <span className="text-uppercase text-nowrap">
                                    <span className="text-1">Finding Buyers</span>
                                    <span className="text-2">Finding Buyers</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                                <RevealText>
                                    Every way to find buyers is either unreliable or expensive.
                                </RevealText>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="sec-3-home-12__grid">
                    {CARDS.map((card) => (
                        <div
                            key={card.num}
                            className="card-home-12-service no-card-hover at_fade_anim"
                            data-fade-from="bottom"
                            data-delay={card.delay}
                        >
                            <div className="card-home-12-service__top">
                                <div className="card-home-12-service__num-wrap">
                                    <span className="card-home-12-service__num-line" aria-hidden="true" />
                                    <span className="card-home-12-service__num">{card.num}</span>
                                </div>
                            </div>

                            <h3 className="card-home-12-service__title">{card.title}</h3>

                            <ul className="card-home-12-service__tags d-flex flex-column align-items-start gap-2 mb-0 ps-0" aria-label="Details">
                                {card.pills.map((pill) => (
                                    <li key={pill} className="d-inline-flex">
                                        <span
                                            className="card-home-12-service__tag"
                                            style={{
                                                borderColor: "rgba(0, 0, 0, 0.15)",
                                                fontWeight: 500,
                                                fontSize: "15px",
                                                padding: "8px 16px",
                                                borderRadius: "999px",
                                                color: "var(--at-neutral-800)",
                                                whiteSpace: "normal",
                                                display: "inline-block",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {pill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
