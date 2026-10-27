import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const FEATURES = [
    {
        num: "01",
        title: "Products that come alive",
        desc: "Videos, 360° walkthroughs, life-like models",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-1.webp",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-1.webp",
        accent: false,
    },
    {
        num: "02",
        title: "Know who viewed what",
        desc: "Every visit, every product, every time",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-2.webp",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-2.webp",
        accent: true,
    },
    {
        num: "03",
        title: "RFQ, cart & pay",
        desc: "Buyers act without calling you",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-3.webp",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-3.webp",
        accent: false,
    },
    {
        num: "04",
        title: "Video in one click",
        desc: "Talk the moment interest is high",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-4.webp",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-4.webp",
        accent: false,
    },
    {
        num: "05",
        title: "NORA, your AI assistant",
        desc: "Answers buyer questions 24/7, even at midnight. Trained by you.",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-5.webp",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-5.webp",
        accent: true,
    },
    {
        num: "06",
        title: "A permanent buyer list",
        desc: "Reach everyone who ever visited",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-6.webp",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-6.webp",
        accent: false,
    },
    {
        num: "07",
        title: "Update once",
        desc: "Change a price. Every QR, every buyer sees it.",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-1.webp",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-1.webp",
        accent: false,
    },
    {
        num: "08",
        title: "Embedded on your website",
        desc: "The room behind your website",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-2.webp",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-2.webp",
        accent: false,
    },
];

export default function SectionCatalogCantDo() {
    return (
        <section className="sec-6-home-9 changeless bg-neutral-50 overflow-x-hidden pt-50 pb-120">
            <div className="sec-6-home-9__container">
                <div className="row g-4 align-items-end mb-60">
                    <div className="col-12">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Features</span>
                                <span className="text-2">Features</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="alt-section-title lh-1 mb-0 reveal-text">
                            <RevealText>
                                Everything a catalog can't do.
                            </RevealText>
                        </h2>
                    </div>
                </div>

                <div className="sec-6-home-9__body">
                    <div className="sec-6-home-9__list">
                        {FEATURES.map((item, i) => (
                            <article
                                key={i}
                                className={`sec-6-home-9__card${item.accent ? " sec-6-home-9__card--accent" : ""}`}
                                data-img-award={item.imgAward}
                                data-rotate="9deg"
                            >
                                <p className="sec-6-home-9__quote">[{item.num}]</p>
                                <div className="sec-6-home-9__person">
                                    <div className="sec-6-home-9__meta">
                                        <h3 className="sec-6-home-9__name">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="sec-6-home-9__skills">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
