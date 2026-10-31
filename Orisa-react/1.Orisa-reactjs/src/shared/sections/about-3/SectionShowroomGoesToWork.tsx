import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const CARDS = [
    {
        title: "At the trade fair booth",
        desc: "Walk-ins scan the QR and keep browsing after they leave. Buyers who couldn't travel step in from anywhere.",
        img: "/assets/imgs/pages/neoweb/living-showroom/Growth Engine 1.webp",
        alt: "At the trade fair booth",
        delay: "0.1",
    },
    {
        title: "In the inbox",
        desc: "Replace the PDF with a link that tells you who opened it and what they looked at.",
        img: "/assets/imgs/pages/neoweb/living-showroom/Growth Engine 2.webp",
        alt: "In the inbox",
        delay: "0.3",
    },
    {
        title: "On the business card",
        desc: "The card gets filed. The QR gets scanned.",
        img: "/assets/imgs/pages/neoweb/living-showroom/Growth Engine 3.webp",
        alt: "On the business card",
        delay: "0.5",
    },
    {
        title: "Embedded on your website",
        desc: "A website shows buyers what you sell. A showroom lets them in. Inside: new designs, work in progress, member pricing, a direct line to you. Your website earns the click. Your showroom earns the relationship.",
        img: "/assets/imgs/pages/neoweb/living-showroom/Growth Engine 4.webp",
        alt: "Embedded on your website",
        delay: "0.7",
    },
];

export default function SectionShowroomGoesToWork() {
    return (
        <section className="sec-6-home-7 p-relative bg-neutral-0 pt-120 pb-100">
            <div className="sec-6-home-9__container">
                {/* Header row: eyebrow + big title matching Features section */}
                <div className="row g-4 align-items-end mb-60">
                    <div className="col-12">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">The Growth Engine</span>
                                <span className="text-2">The Growth Engine</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="alt-section-title lh-1 mb-0 reveal-text">
                            <RevealText>Where your showroom goes to work.</RevealText>
                        </h2>
                    </div>
                </div>

                {/* 4 process cards */}
                <div className="sec-6-home-7__cards pb-40">
                    {CARDS.map((card, i) => (
                        <div key={i} className="sec-6-home-7__card-wrap at_fade_anim" data-delay={card.delay}>
                            <div className="sec-6-home-7__card h-100">
                                <div className="sec-6-home-7__card-body">
                                    <h3 className="sec-6-home-7__card-title mb-0">{card.title}</h3>
                                    <p className="sec-6-home-7__card-desc mb-0">{card.desc}</p>
                                </div>
                                <div className="sec-6-home-7__card-media">
                                    <img src={card.img} alt={card.alt} width={400} height={280} loading="lazy" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
