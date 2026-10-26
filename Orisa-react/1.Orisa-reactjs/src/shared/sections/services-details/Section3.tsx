import RevealText from "@/shared/effects/RevealText";

// Services details Section 3 - What we do (vertical scroll cards)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ITEMS = [
    {
        title: "Industry databases",
        description: "Targeted buyer outreach by sector.",
    },
    {
        title: "Direct invitations",
        description: "Email, WhatsApp and telecalling.",
    },
    {
        title: "Partner networks",
        description: "Trade bodies and advisors in each industry.",
    },
    {
        title: "Fair-specific marketing",
        description: "Campaigns run weeks before opening.",
    },
];

export default function Section3() {
    return (
        <section className="sec-3-services-details pb-120">
            <style>{`
                .sec-3-services-details .scroll-active-item .item.active .block-number {
                    background: var(--at-neutral-900) !important;
                }
                .sec-3-services-details .scroll-active-item .item.active .block-number .number {
                    color: var(--at-neutral-0) !important;
                }
                .sec-3-services-details .scroll-active-item .item.active .rectangular::after {
                    display: none !important;
                }
            `}</style>
            <div className="container section-fix pt-100">
                <div className="row">
                    <div className="col-lg-5 h-100">
                        <div>
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Buyer Acquisition</span>
                                    <span className="text-2">Buyer Acquisition</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </div>
                        <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                            <RevealText>
                                A fair without buyers is a website. We fill ours.
                            </RevealText>
                        </h2>
                        <h6 className="fw-600 mb-0 neutral-800">
                            Each fair is planned with international trade advisors: the industry, the buyer regions and the outreach.
                        </h6>
                        <div className="section-title-pin" />
                    </div>
                    <div className="col-xxl-6 col-lg-7 offset-xxl-1 p-relative">
                        <div className="scroll-section vertical-section section scroll-active-item">
                            <div className="wrapper">
                                <div role="list" className="list">
                                    {ITEMS.map((item, i) => (
                                        <div key={i} className="item">
                                            <div className="container bg-neutral-0 rounded-4 border-100 p-relative">
                                                <div className="rectangular bg-neutral-0 border-100" />
                                                <div className="row align-items-center py-3">
                                                    <div className="col-12 h-100">
                                                        <div className="d-flex flex-column p-md-5 p-3 justify-content-between h-100">
                                                            <div className="block-number icon-shape mb-20 size-50 bg-neutral-100 rounded-3">
                                                                <h6 className="number mb-0 fw-600">{`0${i + 1}`}</h6>
                                                            </div>
                                                            <h5 className="mb-4">{item.title}</h5>
                                                            <p className="mb-0 fz-font-lg">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
