import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

// Template at-service-card-icon SVGs
const ICON_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 11.6412 18.3563 14.9984 22.4971 15C18.3563 15.0016 15 18.3588 15 22.5C15 18.3579 11.6421 15 7.5 15C3.35786 15 5.08894e-07 18.3579 3.27835e-07 22.5L0 30L7.5 30C11.6421 30 15 26.6421 15 22.5C15 26.6421 18.3579 30 22.5 30L30 30L30 22.5C30 18.3588 26.6437 15.0016 22.5029 15C26.6437 14.9984 30 11.6412 30 7.5L30 6.31805e-06L22.5 6.64589e-06C18.3579 6.82695e-06 15 3.35787 15 7.5C15 3.35787 11.6421 5.21315e-06 7.5 5.39421e-06L2.62268e-06 3.8147e-06L1.63918e-06 7.5C1.096e-06 11.6421 3.35786 15 7.5 15Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_2 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M15 0H30V15L15 0Z" fill="currentColor" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 15V0H7.5L0 7.5V15V30H15H22.5L30 22.5V15H15ZM15 15V30L0 15H15Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_3 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 0L20 10L10 0L0 10V30L10 20L20 30L30 20V0ZM10 20V10H20V20H10Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_4 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M10 10L20 0H30V10L20 20V10H10Z" fill="currentColor" />
        <path d="M20 20H30V30H20V20Z" fill="currentColor" />
        <path d="M10 10L0 20V30H10L20 20H10V10Z" fill="currentColor" />
        <path d="M10 10H0V0H10V10Z" fill="currentColor" />
    </svg>
);

const MEMBER_BENEFITS = [
    {
        title: "B2B listing",
        desc: "Your products, where buyers search",
        icon: ICON_1,
    },
    {
        title: "RFQs to you",
        desc: "Enquiries land in your dashboard",
        icon: ICON_2,
    },
    {
        title: "Every fair, one click",
        desc: "Join any NeoFairs fair instantly",
        icon: ICON_3,
    },
    {
        title: "Member rate on fairs",
        desc: "Discount on every fair",
        icon: ICON_4,
    },
];

export default function SectionWhatMembersGet() {
    return (
        <section className="about-5-nodes pt-100 pb-100 bg-neutral-50" aria-label="What members get">
            <div className="container">
                <div className="about-5-nodes__head mb-50">
                    <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                        <span className="text-uppercase">
                            <span className="text-1">Membership Benefits</span>
                            <span className="text-2">Membership Benefits</span>
                        </span>
                        <i>
                            {ARROW_SVG}
                            {ARROW_SVG}
                        </i>
                    </span>
                    <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                        <RevealText>What members get</RevealText>
                    </h2>
                </div>

                <div className="row g-4">
                    {MEMBER_BENEFITS.map((item) => (
                        <div key={item.title} className="col-lg-3 col-md-6 col-12">
                            <article className="about-5-node h-100 d-flex flex-column justify-content-between p-4 rounded-4 bg-neutral-0">
                                <div>
                                    <div className="at-service-card-icon mb-4 neutral-900" style={{ color: "var(--at-neutral-900)" }}>
                                        {item.icon}
                                    </div>
                                    <h5 className="fw-600 mb-2 neutral-950">
                                        {item.title}
                                    </h5>
                                    <p className="mb-0 fz-font-lg neutral-600">
                                        {item.desc}
                                    </p>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
