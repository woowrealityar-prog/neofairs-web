import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
            d="M20 0C20.3015 10.9184 29.0816 19.6985 40 20C29.0816 20.3015 20.3015 29.0816 20 40C19.6985 29.0816 10.9184 20.3015 0 20C10.9184 19.6985 19.6985 10.9184 20 0Z"
            fill="#B7B7B7"
        />
    </svg>
);

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

const QUOTE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40 20V0H20H0V20V40H20L40 20ZM40 20H20V40L0 20L20 0L40 20Z"
            fill="#FEFEFE"
        />
    </svg>
);

const SERVICE_LABEL = [
    "Web Development",
    "Motion Graphics",
    "Brand Strategy",
    "Product Design",
]


const SERVICE_BTN_CLASS =
    "at-btn at-btn-border-white ps-2 pt-20 pb-20 pe-2 text-white bg-transparent rounded-0 border-top-0 border-start-0 border-end-0 w-100";

export default function Section2() {
    return (
        <section className="sec-2-home-2 pt-120 container-2200">
            {/* <div className="mx-4 pt-20 pb-20">
                <div className="d-flex align-items-center justify-content-between">
                    {CIRCLE_SVG}
                    {CIRCLE_SVG}
                    {CIRCLE_SVG}
                </div>
            </div> */}
            <div
                className="bg-coating rounded-5 overflow-hidden mx-lg-3 mx-2 bg-cover"
                data-background="/assets/imgs/pages/neoweb/hero-showcase.webp"
            >
                <img
                    src="/assets/imgs/pages/neoweb/hero-showcase.webp"
                    alt="NeoFairs Living Showroom Showcase"
                    className="img-cover p-absolute top-0 start-0 end-0 bottom-0 z-0 w-100 h-100"
                    style={{ objectFit: "cover" }}
                />
                {/* Service tabs row - hidden while preserving hero visual height */}
                {/* <div className="container pb-100 p-relative z-index-2">
                    <div className="row">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-12 text-center">
                                <div className={`${SERVICE_BTN_CLASS}`}>
                                    <span>
                                        <span className="text-1">{SERVICE_LABEL[i - 1]}</span>
                                        <span className="text-2">{SERVICE_LABEL[i - 1]}</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="container pt-100 pb-100 p-relative z-index-2">
                    <div className="row g-4 justify-content-lg-between justify-content-center align-items-end">
                        <div className="col-lg-8 col-12">
                            <div className="at-about-title-wrap pe-xxl-4">

                                <h2 className="at-section-title reveal-text text-white lh-1 mb-30 mt-20">
                                    <RevealText>Buyers for your business. Without the cost of a trade fair.</RevealText>
                                </h2>
                                <p className="text-white mb-40">
                                    NeoFairs runs virtual trade fairs by industry, builds showrooms that work all year, and keeps you in front of buyers — for a fraction of what one physical stall costs.
                                </p>
                                <div className="pt-30 d-flex flex-wrap align-items-center gap-4">
                                    <div
                                        className="at-btn-group btn-brand-1 at_fade_anim"
                                        data-delay=".4"
                                        data-fade-from="bottom"
                                        data-ease="bounce"
                                    >
                                        <Link className="at-btn-circle" to="#book-demo" style={{ color: "#000" }}>
                                            {ARROW_CIRCLE_SVG}
                                        </Link>
                                        <Link className="at-btn z-index-1" to="#book-demo" style={{ color: "#000" }}>
                                            Book a Free Demo
                                        </Link>
                                        <Link className="at-btn-circle" to="#book-demo" style={{ color: "#000" }}>
                                            {ARROW_CIRCLE_SVG}
                                        </Link>
                                    </div>
                                    <Link
                                        to="#upcoming-fairs"
                                        className="at-btn common-white border-bottom-white text-uppercase bg-transparent rounded-0 p-0 pb-2 text-decoration-none at_fade_anim"
                                        style={{ borderBottom: "1px solid #ffffff" }}
                                    >
                                        <span className="text-uppercase">
                                            <span className="text-1">See Upcoming Fairs</span>
                                            <span className="text-2">See Upcoming Fairs</span>
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
                </div>
            </div>
        </section>
    );
}
