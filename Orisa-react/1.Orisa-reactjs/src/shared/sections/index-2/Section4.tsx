import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

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
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const SERVICES = [
    {
        title: "Virtual Trade Fairs",
        subtitle: "A trade fair. Without the hall.",
        description: "Delivered for the Ministry of Textiles, Govt. of India. Each fair planned with international trade advisors.",
        features: [
            "Industry-wise — One fair, one industry, the right buyers",
            "Face to face — Video meetings with buyers in your industry",
            "AI matchmaking — Buyers matched to your products",
            "Exhibit from your factory — No travel, no stall setup, no week lost",
        ],
        image: "/assets/imgs/pages/img-30.webp",
        itemClass: "pb-40",
    },
    {
        title: "Living Showroom",
        subtitle: "Your catalog, reborn as a living showroom.",
        description: "Whatever your industry, your showroom is built for it.",
        features: [
            "Products that come alive — Videos, 360° walkthroughs, life-like models",
            "RFQ, cart & pay — Buyers act without calling you",
            "Video in one click — Talk the moment interest is high",
            "NORA, your AI assistant — Answers buyer queries 24/7, trained by you",
        ],
        image: "/assets/imgs/pages/img-31.webp",
        itemClass: "pb-40",
    },
    {
        title: "NeoFairs Marketplace",
        subtitle: "In front of buyers. All year.",
        description: "Introductory pricing for early members",
        features: [
            "B2B listing — Your products, where buyers search",
            "RFQs to you — Enquiries land in your dashboard",
            "Every fair, one click — Members join any fair instantly",
        ],
        image: "/assets/imgs/pages/img-32.webp",
        itemClass: "pb-50",
    },
];

export type ServiceOfferItem = {
    title: string;
    subtitle?: string;
    description: string;
    features?: string[];
    image: string;
    itemClass?: string;
    btnText?: string;
    btnLink?: string;
};

type Section4Props = {
    className?: string;
    eyebrow?: string;
    rightLabel?: string;
    items?: ServiceOfferItem[];
};

export default function Section4({
    className,
    eyebrow = "Things we offer",
    rightLabel = "© Since 2012",
    items = SERVICES,
}: Section4Props) {
    return (
        <div className={`container-2200 ${className ?? ""}`.trim()}>
            <section className="at-service-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="at-service-subtitle-wrap at-about-border d-flex justify-content-between gap-3 mb-50">
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">{eyebrow}</span>
                                        <span className="text-2">{eyebrow}</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-section vertical-section position-relative">
                    <div className="wrapper">
                        {items.map((service, index) => (
                            <div
                                key={index}
                                className="item w-100"
                                style={{
                                    backgroundColor: "var(--at-neutral-50, #f6f6f6)",
                                    minHeight: "100vh",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    className={`container bg-neutral-50 pt-20 ${service.itemClass ?? ""}`}
                                    style={{
                                        minHeight: "560px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="d-flex flex-column justify-content-between h-100 py-4 px-2">
                                                <h1 className="alt-section-title lh-1 mb-30 text-scale-anim-2 neutral-950 pb-xxl-4 pb-3">
                                                    {service.title}
                                                </h1>
                                                <div className="mb-4">
                                                    {service.subtitle && (
                                                        <h5 className="fw-600 mb-2 neutral-950">
                                                            {service.subtitle}
                                                        </h5>
                                                    )}
                                                    <p className="fz-font-lg neutral-700 reveal-text pe-xxl-4 mb-4">
                                                        {service.description}
                                                    </p>
                                                    {service.features && service.features.length > 0 && (
                                                        <ul
                                                            className="list-unstyled p-0 m-0 mb-4 d-flex flex-wrap gap-2 neutral-700 fz-font-lg"
                                                        >
                                                            {service.features.map((feature, i) => {
                                                                const separator = feature.includes("—")
                                                                    ? "—"
                                                                    : feature.includes(" - ")
                                                                    ? " - "
                                                                    : null;

                                                                if (separator) {
                                                                    const [heading, ...rest] = feature.split(separator);
                                                                    return (
                                                                        <li
                                                                            key={i}
                                                                            className="w-100 d-flex align-items-baseline gap-2"
                                                                            style={{ lineHeight: 1.6 }}
                                                                        >
                                                                            <span
                                                                                className="rounded-circle bg-neutral-900 flex-shrink-0"
                                                                                style={{ width: "6px", height: "6px", transform: "translateY(-3px)" }}
                                                                            />
                                                                            <span>
                                                                                <strong className="fw-600 neutral-950">
                                                                                    {heading.trim()}
                                                                                </strong>{" "}
                                                                                — {rest.join(separator).trim()}
                                                                            </span>
                                                                        </li>
                                                                    );
                                                                }

                                                                return (
                                                                    <li
                                                                        key={i}
                                                                        className="w-100 d-flex align-items-baseline gap-2"
                                                                        style={{ lineHeight: 1.6 }}
                                                                    >
                                                                        <span
                                                                            className="rounded-circle bg-neutral-900 flex-shrink-0"
                                                                            style={{ width: "6px", height: "6px", transform: "translateY(-3px)" }}
                                                                        />
                                                                        <span>{feature}</span>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    )}
                                                    {service.btnText && (
                                                        <div className="at-btn-group btn-brand-1 at_fade_anim mt-4" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                                            <Link className="at-btn-circle" to={service.btnLink ?? "#"}>
                                                                {ARROW_CIRCLE_SVG}
                                                            </Link>
                                                            <Link className="at-btn z-index-1" to={service.btnLink ?? "#"}>
                                                                {service.btnText}
                                                            </Link>
                                                            <Link className="at-btn-circle" to={service.btnLink ?? "#"}>
                                                                {ARROW_CIRCLE_SVG}
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="rounded-4 overflow-hidden">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    width={600}
                                                    height={400}
                                                    className="img-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
