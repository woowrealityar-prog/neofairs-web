import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const BULLET_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path
            d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z"
            fill="currentColor"
        />
    </svg>
);

const COMPARISON_FEATURES = [
    {
        title: "Physical fair",
        bulletColor: "#111111",
        points: [
            "Stall rent · Fabrication · Travel · Hotels · 3–4 people out for a week · Samples & freight",
            "3 Lakh+ domestic · 20 Lakh+ international",
            "3 days. Footfall not guaranteed.",
        ],
        delay: ".32",
    },
    {
        title: "NeoFairs",
        bulletColor: "#ace227",
        points: [
            "One fee · Your team at their desks · Buyers matched to you",
            "One fee. A fraction of a physical stall.",
            "Your stall lives on after the fair.",
        ],
        delay: ".4",
    },
];

export default function Section3() {
    return (
        <section className="sec-3-home-9 bg-neutral-50">
            <div className="sec-3-home-9__container">
                <div className="row align-items-start g-0 gy-5 gx-xl-5">
                    {/* Visual left column */}
                    <div className="col-12 col-lg-5">
                        <div className="sec-3-home-9__visual at_fade_anim" data-delay=".15" data-fade-from="bottom" data-fade-offset="20">
                            <div className="fix anim-zoomin rounded-4 overflow-hidden">
                                <img
                                    data-speed=".8"
                                    src="/assets/imgs/pages/home-9/sec-3-img-0.webp"
                                    alt="What a stall really costs"
                                    width={699}
                                    height={415}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content right column */}
                    <div className="col-12 col-lg-7">
                        <div className="sec-3-home-9__intro ms-0" style={{ maxWidth: "100%" }}>
                            {/* Eyebrow Pill */}
                            <div>
                                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">What a stall really costs</span>
                                        <span className="text-2">What a stall really costs</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                            </div>

                            {/* Section Title */}
                            <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                                <RevealText>
                                    Every way to find buyers is either unreliable or expensive.
                                </RevealText>
                            </h2>
                        </div>

                        {/* Template features list aligned with section title */}
                        <div className="sec-3-home-9__features ms-0 mt-4" style={{ maxWidth: "100%" }}>
                            {COMPARISON_FEATURES.map((item, i) => (
                                <div
                                    key={i}
                                    className="sec-3-home-9__feature at_fade_anim"
                                    data-delay={item.delay}
                                    data-fade-from="left"
                                    data-fade-offset="20"
                                >
                                    <div className="sec-3-home-9__feature-text w-100" style={{ maxWidth: "100%" }}>
                                        <h3 className="sec-3-home-9__feature-title">
                                            {item.title}
                                        </h3>
                                        <div className="sec-3-home-9__feature-desc">
                                            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                                                {item.points.map((point, pointIdx) => (
                                                    <li key={pointIdx} className="d-flex align-items-start gap-2">
                                                        <span
                                                            style={{
                                                                color: item.bulletColor,
                                                                flexShrink: 0,
                                                                marginTop: "3px",
                                                                lineHeight: 0,
                                                                display: "inline-flex",
                                                            }}
                                                        >
                                                            {BULLET_ICON_SVG}
                                                        </span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

