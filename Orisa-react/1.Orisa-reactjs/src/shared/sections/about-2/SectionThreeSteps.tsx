import RevealText from "@/shared/effects/RevealText";

// About 2 - Three steps to listed (based on Home 4 Section 3 HOW WE WORK)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const STEPS = [
    {
        cardClass: "card-1",
        pillClass: "card__process-pill--1",
        num: "01",
        title: "Join",
        description: "Pick an industry category. Tell us what you make.",
        iconImg: "/assets/imgs/pages/neoweb/marketplace/steps to listed 1.webp",
    },
    {
        cardClass: "card-2",
        pillClass: "card__process-pill--2",
        num: "02",
        title: "Your listing goes live",
        description: "Products, company profile, RFQ button. Have a Living Showroom? It’s your listing.",
        iconImg: "/assets/imgs/pages/neoweb/marketplace/steps to listed 2.webp",
    },
    {
        cardClass: "card-3",
        pillClass: "card__process-pill--3",
        num: "03",
        title: "Buyers find you",
        description: "RFQs land in your dashboard. The next fair is one click away.",
        iconImg: "/assets/imgs/pages/neoweb/marketplace/steps to listed 3.webp",
    },
];

export default function SectionThreeSteps() {
    return (
        <div className="container-2200 bg-neutral-50">
            <section className="sec-3-home-4 pt-130 pb-130 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0" aria-label="Three steps to listed">
                {/* Background grid */}
                <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-0 opacity-10">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={
                                i === 3
                                    ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                    : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                            }
                        >
                            <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                            {i === 3 && (
                                <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="container p-relative z-1">
                    <div className="row align-items-end g-4">
                        <div className="col-lg-8 col-md-10">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">HOW WE WORK</span>
                                    <span className="text-2">HOW WE WORK</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2 className="alt-section-title lh-1 mb-0 reveal-text">
                                <RevealText>
                                    Three steps to listed.
                                </RevealText>
                            </h2>
                        </div>
                    </div>

                    <div className="row g-4 pt-60">
                        {STEPS.map((card) => (
                            <div key={card.num} className="col-lg-4 col-md-6">
                                <div
                                    className={`card__process-card at_fade_anim ${card.cardClass}`}
                                    data-delay=".4"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <div className="card__process-visual d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <img
                                                src={card.iconImg}
                                                alt={card.title}
                                                width={48}
                                                height={48}
                                                style={{ width: "48px", height: "48px", objectFit: "contain" }}
                                                loading="lazy"
                                            />
                                            <div className={`card__process-pill ${card.pillClass}`} />
                                        </div>
                                        <span className="card__process-num">{card.num}</span>
                                    </div>
                                    <div className="card__process-content">
                                        <h5 className="card__process-title fw-600 mb-2 neutral-950">
                                            {card.title}
                                        </h5>
                                        <p className="card__process-desc mb-0 fz-font-lg neutral-600">
                                            {card.description}
                                        </p>
                                        <div className="card__process-divider" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
