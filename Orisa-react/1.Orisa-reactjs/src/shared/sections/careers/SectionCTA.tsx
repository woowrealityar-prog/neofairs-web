import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function SectionCTA() {
    return (
        <section className="pt-100 pb-120 bg-neutral-0">
            <div className="container">
                <div
                    className="pricing-2-cta__panel bg-neutral-900 rounded-5 overflow-hidden p-relative at_fade_anim"
                    style={{ padding: "60px 48px" }}
                >
                    <div className="row g-4 align-items-center justify-content-between">
                        <div className="col-lg-7">
                            <h2 className="reveal-text text-white mb-20 fw-600" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                                <RevealText>Don’t see your role?</RevealText>
                            </h2>
                            <p className="text-white-50 fz-font-lg mb-0" style={{ maxWidth: "560px", lineHeight: 1.6 }}>
                                Send your CV and two lines on what you’d do here to{" "}
                                <a
                                    href="mailto:enquiry@neofairs.com"
                                    className="text-white fw-500 text-decoration-underline"
                                >
                                    enquiry@neofairs.com
                                </a>
                                .
                            </p>
                        </div>
                        <div className="col-lg-auto">
                            <div className="pricing-2-cta__actions d-flex flex-wrap gap-3 align-items-center">
                                <a
                                    href="mailto:enquiry@neofairs.com?subject=Careers%20Application%20-%20NeoFairs"
                                    className="at-btn pricing-2-cta__btn px-4 text-capitalize"
                                    style={{
                                        backgroundColor: "#ace227",
                                        borderColor: "#ace227",
                                        color: "#000000",
                                        fontWeight: 600,
                                    }}
                                >
                                    <span>
                                        <span className="text-1">Apply</span>
                                        <span className="text-2">Apply</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
