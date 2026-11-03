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

const SHOWROOMS = [
    {
        id: "pos1",
        href: "https://tanzeb.neofairs.com",
        img: "/assets/imgs/pages/neoweb/home/Tanzeb showroom.webp",
        width: 800,
        height: 520,
        name: "Clothing & Fashion",
        client: "Tanzeb",
        layout: "image-first",
        ariaLabel: "Clothing & Fashion — Tanzeb",
        delay: "0.12",
    },
    {
        id: "pos2",
        href: "https://cuboc.neofairs.com",
        img: "/assets/imgs/pages/neoweb/home/Cuboc showroom.webp",
        width: 900,
        height: 520,
        name: "Branding & Display",
        client: "Cuboc",
        layout: "image-first",
        extraClass: "me-md-5 me-0",
        ariaLabel: "Branding & Display — Cuboc",
        delay: "0.14",
    },
    {
        id: "pos3",
        href: "https://pansari.neofairs.com",
        img: "/assets/imgs/pages/neoweb/home/Pansari showroom.webp",
        width: 900,
        height: 520,
        name: "Food Products",
        client: "Pansari",
        layout: "image-first",
        ariaLabel: "Food Products — Pansari",
        delay: "0.16",
    },
    {
        id: "pos4",
        href: "https://sevitsil.neofairs.com",
        img: "/assets/imgs/pages/neoweb/home/Sevitsil showroom.webp",
        width: 900,
        height: 520,
        name: "Silicone Products",
        client: "Sevitsil",
        layout: "image-first",
        ariaLabel: "Silicone Products — Sevitsil",
        delay: "0.18",
    },
];

export default function SectionShowroomIndustries() {
    return (
        <section className="sec-4-home-10 changeless">
            <style>{`
                .sec-4-home-10__eyebrow a:hover .at-btn {
                    color: #ace227 !important;
                }
                .sec-4-home-10__eyebrow a:hover i svg {
                    fill: #ace227 !important;
                }
                .sec-4-home-10__title-link {
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.25s ease;
                }
                .sec-4-home-10__title-link:hover,
                .sec-4-home-10__title-link:hover h2,
                .sec-4-home-10__title-link:hover .reveal-text {
                    color: #ace227 !important;
                }
                .sec-4-home-10__title-link:hover * {
                    color: #ace227 !important;
                }
                .sec-4-home-10__title-block {
                    padding-left: clamp(12px, 2vw, 28px);
                    padding-right: clamp(12px, 2vw, 28px);
                    pointer-events: auto !important;
                }
                .sec-4-home-10__title-block * {
                    pointer-events: auto !important;
                }
                .sec-4-home-10__expand {
                    color: #1d1d1d !important;
                    background: #f7f7f7;
                    border: 1px solid #d5d5d5;
                    transition: all 0.25s ease;
                }
                .sec-4-home-10__expand svg {
                    fill: currentColor !important;
                }
                .sec-4-home-10__expand:hover {
                    background: #ace227 !important;
                    border-color: #ace227 !important;
                    color: #000000 !important;
                }
            `}</style>
            <div className="sec-4-home-10__container">
                <div className="sec-4-home-10__stage">
                    <header className="sec-4-home-10__title-block">
                        <div className="sec-4-home-10__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay="0.05">
                            <Link to="/living-showroom" className="text-decoration-none">
                                <span className="at-btn text-white bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">Showrooms</span>
                                        <span className="text-2">Showrooms</span>
                                    </span>
                                    <i>{ARROW_SVG}{ARROW_SVG}</i>
                                </span>
                            </Link>
                        </div>
                        <Link to="/living-showroom" className="sec-4-home-10__title-link d-block">
                            <h2 className="alt-section-title lh-1 mb-20 at_fade_anim reveal-text text-white mt-3" data-delay="0.1">
                                <RevealText>One showroom. Any industry.</RevealText>
                            </h2>
                        </Link>
                        <div className="pt-2 d-inline-flex justify-content-center">
                            <div
                                className="at-btn-group btn-brand-1 at_fade_anim"
                                data-delay=".15"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/living-showroom">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/living-showroom">
                                    Explore Showrooms
                                </Link>
                                <Link className="at-btn-circle" to="/living-showroom">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                            </div>
                        </div>
                    </header>

                    {SHOWROOMS.map((item) => (
                        <article
                            key={item.id}
                            className={`sec-4-home-10__card sec-4-home-10__card--${item.id} sec-4-home-10__card--${item.layout} at_fade_anim${item.extraClass ? " " + item.extraClass : ""}`}
                            data-delay={item.delay}
                        >
                            <div className="sec-4-home-10__card-inner">
                                {item.layout === "image-first" ? (
                                    <>
                                        <div className="sec-4-home-10__visual">
                                            <a
                                                className="sec-4-home-10__visual-link"
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={item.ariaLabel}
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={item.width}
                                                    height={item.height}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </a>
                                            <div className="sec-4-home-10__overlay">
                                                <p className="sec-4-home-10__excerpt mb-0">{item.client}</p>
                                            </div>
                                        </div>
                                        <div className="sec-4-home-10__bar">
                                            <h3 className="sec-4-home-10__service-name mb-0">
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-decoration-none text-reset"
                                                >
                                                    {item.name} <span className="opacity-75 fz-font-sm fw-normal">— {item.client}</span>
                                                </a>
                                            </h3>
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sec-4-home-10__expand"
                                                aria-label={`Open ${item.ariaLabel}`}
                                            >
                                                {ARROW_SVG}
                                            </a>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="sec-4-home-10__bar">
                                            <h3 className="sec-4-home-10__service-name mb-0">
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-decoration-none text-reset"
                                                >
                                                    {item.name} <span className="opacity-75 fz-font-sm fw-normal">— {item.client}</span>
                                                </a>
                                            </h3>
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sec-4-home-10__expand"
                                                aria-label={`Open ${item.ariaLabel}`}
                                            >
                                                {ARROW_SVG}
                                            </a>
                                        </div>
                                        <div className="sec-4-home-10__visual">
                                            <a
                                                className="sec-4-home-10__visual-link"
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={item.ariaLabel}
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={item.width}
                                                    height={item.height}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </a>
                                            <div className="sec-4-home-10__overlay">
                                                <p className="sec-4-home-10__excerpt mb-0">{item.client}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
