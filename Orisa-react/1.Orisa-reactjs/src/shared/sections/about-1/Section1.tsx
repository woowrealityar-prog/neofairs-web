import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import SwiperDynamic from "@/shared/components/SwiperDynamic";

// About 1 Section 1 - Hero / About Us

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const SLIDES = [
    { src: "/assets/imgs/pages/neoweb/virtual-trade-fairs/hero 1.webp", alt: "NeoFairs Virtual Trade Fair" },
    { src: "/assets/imgs/pages/neoweb/virtual-trade-fairs/hero 2.webp", alt: "NeoFairs Virtual Trade Fair" },
    { src: "/assets/imgs/pages/neoweb/virtual-trade-fairs/hero 3.webp", alt: "NeoFairs Virtual Trade Fair" },
];

export default function Section1() {
    return (
        <section className="sec-1-about pt-150 overflow-hidden">
            <div className="container pb-60">
                <div className="row align-items-center g-4">
                    <div className="col-12">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Virtual Trade Fairs</span>
                                <span className="text-2">Virtual Trade Fairs</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                    <div className="col-lg-7 h-100">
                        <h2 className="section-title fw-600 lh-1 reveal-text">
                            <RevealText>
                                Meet the buyers in your industry. From your factory.
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-lg-5 ms-auto">
                        <h6 className="mb-4 fw-500 lh-base text-secondary">
                            Industry-wise virtual fairs. Face-to-face video meetings. No stall, no travel, no week lost.
                        </h6>
                        <div className="pt-30 d-flex flex-wrap align-items-center gap-4">
                            <div
                                className="at-btn-group btn-brand-1 at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/#upcoming-fairs" style={{ color: "#000" }}>
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/#upcoming-fairs" style={{ color: "#000" }}>
                                    Exhibit at the Next Fair
                                </Link>
                                <Link className="at-btn-circle" to="/#upcoming-fairs" style={{ color: "#000" }}>
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                            </div>

                            <Link
                                to="/contact-1"
                                className="at-btn common-black border-bottom-900 text-uppercase bg-transparent rounded-0 p-0 pb-2 text-decoration-none"
                            >
                                <span className="text-uppercase">
                                    <span className="text-1">Book a Free Demo</span>
                                    <span className="text-2">Book a Free Demo</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Images Area */}
            <div className="at-item-anime-area">
                <SwiperDynamic
                    className="swiper about-me-slider-active"
                    slidesPerView={2}
                    spaceBetween={24}
                    loop={true}
                    breakpoints={{
                        576: { slidesPerView: 1, spaceBetween: 24 },
                        768: { slidesPerView: 1, spaceBetween: 24 },
                        992: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                >
                    {SLIDES.map((slide, index) => (
                        <div key={index} className="about-me-slider-thumb at-item-anime marque">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                width={770}
                                height={700}
                                className="w-100 rounded-4" loading="lazy" />
                        </div>
                    ))}
                </SwiperDynamic>
            </div>

            {/* Stats Strip under at-item-anime-area */}
            <div className="container pt-60 pb-60">
                <div className="row mt-5 pt-4">
                    <div className="col-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 text-center text-md-start">
                            <div className="py-2">
                                <h3 className="fw-700 mb-1" style={{ letterSpacing: "0px" }}>21</h3>
                                <p className="mb-0 text-muted fs-6">Countries</p>
                            </div>
                            <div className="d-none d-md-block text-muted opacity-25 fs-4">·</div>
                            <div className="py-2">
                                <h3 className="fw-700 mb-1" style={{ letterSpacing: "0px" }}>250+</h3>
                                <p className="mb-0 text-muted fs-6">Exhibitors</p>
                            </div>
                            <div className="d-none d-md-block text-muted opacity-25 fs-4">·</div>
                            <div className="py-2">
                                <h3 className="fw-700 mb-1" style={{ letterSpacing: "0px" }}>1,500+</h3>
                                <p className="mb-0 text-muted fs-6">Buyer Meetings</p>
                            </div>
                            <div className="d-none d-md-block text-muted opacity-25 fs-4">·</div>
                            <div className="py-2">
                                <h3 className="fw-700 mb-1" style={{ letterSpacing: "0px" }}>30,000+</h3>
                                <p className="mb-0 text-muted fs-6">Minutes of Meetings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
