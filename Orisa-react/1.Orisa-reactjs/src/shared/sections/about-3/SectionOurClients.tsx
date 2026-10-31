import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const BRAND_ROWS: { delay: string; logos: { src: string; alt: string; dataLogo: string; width: number; height: number }[] }[] = [
    { delay: ".4", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 1.webp", alt: "NeoFairs Client", dataLogo: "01", width: 120, height: 48 }] },
    { delay: ".5", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 2.webp", alt: "NeoFairs Client", dataLogo: "02", width: 120, height: 48 }] },
    { delay: ".6", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 3.webp", alt: "NeoFairs Client", dataLogo: "03", width: 120, height: 48 }] },
    { delay: ".7", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 4.webp", alt: "NeoFairs Client", dataLogo: "04", width: 120, height: 48 }] },
    { delay: ".4", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 5.webp", alt: "NeoFairs Client", dataLogo: "05", width: 120, height: 48 }] },
    { delay: ".5", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 6.webp", alt: "NeoFairs Client", dataLogo: "06", width: 120, height: 48 }] },
    { delay: ".6", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 7.webp", alt: "NeoFairs Client", dataLogo: "07", width: 120, height: 48 }] },
    { delay: ".7", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 8.webp", alt: "NeoFairs Client", dataLogo: "08", width: 120, height: 48 }] },
    { delay: ".5", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 9.webp", alt: "NeoFairs Client", dataLogo: "09", width: 120, height: 48 }] },
    { delay: ".6", logos: [{ src: "/assets/imgs/pages/neoweb/home/Clients logo 10.webp", alt: "NeoFairs Client", dataLogo: "10", width: 120, height: 48 }] },
];

function StarIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path
                d="M8.55696 13.6975L12.707 16.2075C13.467 16.6675 14.397 15.9875 14.197 15.1275L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.077 5.5475 16.197 5.4775L11.367 5.0675L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0575L0.916957 5.4675C0.0369575 5.5375 -0.323043 6.6375 0.346957 7.2175L4.01696 10.3975L2.91696 15.1175C2.71696 15.9775 3.64696 16.6575 4.40696 16.1975L8.55696 13.6975Z"
                fill="currentColor"
            />
        </svg>
    );
}

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function SectionOurClients() {
    return (
        <section className="sec-3-home-5 pt-130 pb-110">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xxl-4 col-lg-8 col-12">
                        <div className="mb-25">
                            <span className="at-btn common-black bg-transparent rounded-0 p-0 mb-20 d-inline-block">
                                <span className="text-uppercase text-nowrap">
                                    <span className="text-1">Our Clients</span>
                                    <span className="text-2">Our Clients</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </div>
                        <h2 className="alt-section-title lh-1 mb-30 reveal-text pe-xxl-4">
                            <RevealText>
                                Trusted by 100+ businesses across 21 countries
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-xxl-8 col-12">
                        <div className="d-inline-flex">
                            <div className="at-brand-scroll">
                                <div className="at-brand-scroll-wrap d-flex flex-wrap gap-2">
                                    {BRAND_ROWS.map((row, idx) => (
                                        <div
                                            key={idx}
                                            className="at-brand-item at_fade_anim"
                                            data-delay={row.delay}
                                            data-fade-from="bottom"
                                            data-ease="bounce"
                                        >
                                            <div className="brand">
                                                {row.logos.map((logo, logoIdx) => (
                                                    <span
                                                        key={logoIdx}
                                                        className="brand-logo-slide"
                                                        data-logo={logo.dataLogo}
                                                    >
                                                        <img
                                                            decoding="async"
                                                            className="dark-mode-invert"
                                                            src={logo.src}
                                                            alt={logo.alt}
                                                            width={logo.width}
                                                            height={logo.height}
                                                            style={{ height: 30, width: "auto" }} loading="lazy" />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex-grow-1 text-center d-flex flex-column justify-content-center ml-100 py-5">
                                        <div className="d-flex mb-2" style={{ color: "#ace227" }}>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                        </div>
                                        <div className="d-flex">
                                            <Link
                                                to="/contact-1"
                                                className="at-btn common-black bg-transparent mb-10 rounded-0 p-0"
                                            >
                                                <span className="text-uppercase">
                                                    <span className="text-1">Customer reviews</span>
                                                    <span className="text-2">Customer reviews</span>
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
                </div>
            </div>
        </section>
    );
}
