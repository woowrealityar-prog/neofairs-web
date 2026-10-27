import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const CULTURE_VALUES = [
    {
        num: "01",
        title: "Real customers, every week",
        desc: "You’ll talk to the people who use what you build.",
        delay: ".1",
    },
    {
        num: "02",
        title: "Your work goes live",
        desc: "A showroom you built. A fair you ran. A buyer who walked in. You’ll see it.",
        delay: ".15",
    },
    {
        num: "03",
        title: "Move fast, own it",
        desc: "Real decisions. No layers.",
        delay: ".2",
    },
];

export default function SectionCultureValues() {
    return (
        <section className="sec-5-home-15 pt-120 pb-120 border-bottom-100 bg-neutral-0">
            <div className="container">
                <div className="row align-items-end mb-60 g-4">
                    <div className="col-lg-8">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">CULTURE</span>
                                <span className="text-2">CULTURE</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="section-title reveal-text mb-0">
                            <RevealText>What it’s like here</RevealText>
                        </h2>
                    </div>
                </div>

                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1 gx-0 gy-0 sec-5-home-15__phases">
                    {CULTURE_VALUES.map((item, i) => (
                        <div key={i} className="col">
                            <div
                                className="sec-5-home-15__phase at_fade_anim h-100 p-4 p-lg-5 border-100"
                                data-delay={item.delay}
                                data-fade-from="bottom"
                                style={{
                                    borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
                                    borderBottom: "none",
                                }}
                            >
                                <span className="fz-font-lg fw-600 neutral-400 d-block mb-4">
                                    [{item.num}]
                                </span>
                                <h4 className="fw-600 mb-3 neutral-900 lh-sm">
                                    {item.title}
                                </h4>
                                <p className="mb-0 fz-font-lg neutral-600" style={{ lineHeight: "1.7" }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
