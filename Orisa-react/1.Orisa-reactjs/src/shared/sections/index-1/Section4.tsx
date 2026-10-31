import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
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

const SERVICE_IMAGES = [
    "/assets/imgs/pages/neoweb/virtual-trade-fairs/step 1.webp",
    "/assets/imgs/pages/neoweb/virtual-trade-fairs/step 2.webp",
    "/assets/imgs/pages/neoweb/virtual-trade-fairs/step 3.webp",
    "/assets/imgs/pages/neoweb/virtual-trade-fairs/step 4.webp",
];

const SERVICES = [
    {
        num: "01",
        title: "Register",
        text: "Pick your stall type.",
        thumb: "/assets/imgs/pages/neoweb/virtual-trade-fairs/step 1.webp",
    },
    {
        num: "02",
        title: "We build your stall",
        text: "Products, videos, company story. Done for you.",
        thumb: "/assets/imgs/pages/neoweb/virtual-trade-fairs/step 2.webp",
    },
    {
        num: "03",
        title: "Buyers are matched to you",
        text: "AI matches your products to registered buyers.",
        thumb: "/assets/imgs/pages/neoweb/virtual-trade-fairs/step 3.webp",
    },
    {
        num: "04",
        title: "Meet on video",
        text: "A buyer walks into your stall, you talk face to face. From your office, no travel.",
        thumb: "/assets/imgs/pages/neoweb/virtual-trade-fairs/step 4.webp",
    },
];

export default function Section4() {
    return (
        <div className="at-service-area at-panel-pin-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-50">
                        <div>
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">OUR SOLUTIONS</span>
                                    <span className="text-2">OUR SOLUTIONS</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </div>
                        <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                            <RevealText>
                                Four steps to the fair
                            </RevealText>
                        </h2>
                    </div>

                    <div className="col-xxl-4 col-lg-4 col-xl-4 mb-40">
                        <div className="at-service-content mr-60 mt-20">
                            <div className="at-service-sales-wrap at-panel-pin fix p-relative">
                                <div className="at-service-img-wrapper image-container">
                                    {SERVICE_IMAGES.map((src, i) => (
                                        <div key={i} className="hover-image">
                                            <img
                                                className="thumb"
                                                src={src}
                                                alt="Service Image"
                                                width={800}
                                                height={600}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <h5 className="fw-600 mb-0 mt-10">
                                    04 Steps
                                </h5>
                                <span className="fz-font-lg neutral-500 fw-500">Simple process to exhibit</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-7 ms-auto col-lg-8 col-xl-8 mb-40">
                        <div className="at-service-list-wrap">
                            {SERVICES.map((s) => (
                                <Link key={s.num} to="/contact-1">
                                    <div className="at-service-item service-item">
                                        <div className="count">
                                            <span className="number">[{s.num}]</span>
                                        </div>
                                        <div className="content">
                                            <h2
                                                className="title"
                                                style={{ fontSize: "clamp(32px, 3.2vw, 44px)", lineHeight: "1.15" }}
                                            >
                                                {s.title}
                                            </h2>
                                            <p className="text mt-10">
                                                {s.text}
                                            </p>
                                        </div>
                                        <div className="thumb anim-zoomin">
                                            <img src={s.thumb} alt="NeoFairs step" width={200} height={200} loading="lazy" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            <div className="pt-30">
                                <div
                                    className="at-btn-group btn-brand-1 at_fade_anim"
                                    data-delay=".4"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <Link className="at-btn-circle" to="/contact-1" style={{ color: "#000" }}>
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                    <Link className="at-btn z-index-1" to="/contact-1" style={{ color: "#000" }}>
                                        Book a Free Demo
                                    </Link>
                                    <Link className="at-btn-circle" to="/contact-1" style={{ color: "#000" }}>
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

