import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

export default function Section9() {
    return (
        <section className="sec-9-home-8">
            <div className="sec-9-home-8__bg" aria-hidden="true">
                <img
                    src="/assets/imgs/pages/home-8/sec9-bg-blur.webp"
                    alt="NeoFairs"
                    width={1920}
                    height={1080}
                    style={{ width: "auto", height: "auto" }} loading="lazy" />
            </div>

            <div className="container-fluid sec-9-home-8__container">
                <div className="row align-items-center justify-content-between g-5">
                    {/* Left copy */}
                    <div className="col-xl-6">
                        <div className="sec-9-home-8__content">
                            <h2 className="alt-section-title lh-1 mb-30 at_fade_anim reveal-text text-white">
                                <RevealText>Priced per fair</RevealText>
                            </h2>
                            <p className="sec-9-home-8__lead at_fade_anim reveal-text mb-3">
                                <RevealText>Each fair is priced by industry, region and scale. Domestic fairs cost less; international fairs more.</RevealText>
                            </p>
                            <div className="at-service-btn pt-30 at_fade_anim d-flex flex-wrap align-items-center gap-4">
                                <Link className="at-btn text-dark bg-white rounded-0 px-4 py-3" to="/contact-1">
                                    <span>
                                        <span className="text-1" style={{ color: "#111", fontWeight: 600 }}>See the current fair</span>
                                        <span className="text-2" style={{ color: "#111", fontWeight: 600 }}>See the current fair</span>
                                    </span>
                                    <i style={{ color: "#111" }}>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </Link>
                                <Link className="at-btn text-white rounded-0 px-4 py-3 bg-transparent border border-white" to="/contact-1">
                                    <span>
                                        <span className="text-1" style={{ color: "#fff", fontWeight: 600 }}>Join the Marketplace</span>
                                        <span className="text-2" style={{ color: "#fff", fontWeight: 600 }}>Join the Marketplace</span>
                                    </span>
                                    <i style={{ color: "#fff" }}>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right card */}
                    <div className="col-xl-5">
                        <Link className="sec-9-home-8__card" to="/contact-1" aria-label="NeoFairs Marketplace">
                            <div className="sec-9-home-8__card-media">
                                <img className="sec-9-home-8__card-visors w-100 scale-img-from-to" data-value-1="1.5" data-value-2="1" src="/assets/imgs/pages/home-8/sec9-card-visors.webp" alt="NeoFairs Marketplace" width={500} height={350} loading="lazy" />
                            </div>
                            <div className="sec-9-home-8__card-overlay">
                                <span className="sec-9-home-8__card-kicker">
                                    <span>Marketplace Advantage</span>
                                    <img src="/assets/imgs/pages/home-8/sec9-arrow.svg" alt="arrow" width={16} height={16} loading="lazy" />
                                </span>
                                <p className="sec-9-home-8__card-text mb-0">
                                    Members of the NeoFairs Marketplace get discount on every fair.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
