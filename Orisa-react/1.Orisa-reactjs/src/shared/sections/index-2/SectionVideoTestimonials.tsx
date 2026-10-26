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

const PLAY_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 35 44" fill="none">
        <path
            d="M6.40193e-06 5.72002V38.28C6.40193e-06 40.7629 2.76819 42.2714 4.90001 40.92L30.8 24.64C31.2534 24.3566 31.6269 23.9644 31.8858 23.5001C32.1446 23.0358 32.2803 22.5144 32.2803 21.9843C32.2803 21.4543 32.1446 20.9328 31.8858 20.4685C31.6269 20.0042 31.2534 19.612 30.8 19.3286L4.90001 3.08002C4.42009 2.77341 3.86529 2.60044 3.29413 2.57934C2.72298 2.55824 2.15665 2.6898 1.65488 2.96014C1.15312 3.23048 0.734523 3.62957 0.443259 4.11532C0.151995 4.60107 -0.00114111 5.15546 6.40193e-06 5.72002Z"
            fill="#FEFEFE"
        />
    </svg>
);

const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const VIDEO_CARDS = [
    {
        img: "/assets/imgs/pages/img-107.webp",
        alt: "Consul General of India, New York",
        quote: "“It comes as close to physical format as you can get.”",
        author: "Mr. Randhir Jaiswal",
        designation: "Consul General of India, New York",
        badge: "Dignitary Review",
        videoUrl: "https://www.youtube.com/watch?v=VCPGMjCW0is",
        tags: ["Global Diplomat", "Virtual Expo", "Trade Review"],
    },
    {
        img: "/assets/imgs/pages/img-108.webp",
        alt: "News7 Feature - ₹10 Crore Orders Booked",
        quote: "“One exhibitor booked orders worth ₹10 Crore at our fair.”",
        author: "Exhibitor Success Story",
        designation: "Featured on News7",
        badge: "News7 Coverage",
        videoUrl: "https://www.youtube.com/watch?v=VCPGMjCW0is",
        tags: ["₹10 Cr Orders", "News7 Broadcast", "Exhibitor ROI"],
    },
];

const FOOTER_TAGS = [
    "[ High-Conversion Fairs ]",
    "[ Verified Buyer Traffic ]",
    "[ Real Commercial Orders ]",
    "[ Government & Industry Backed ]",
];

export default function SectionVideoTestimonials() {
    return (
        <div className="bg-neutral-0">
            <div className="container-2200">
                <section className="sec-4-home-5 pt-100 pb-100 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0">
                    <div className="container">
                        <div className="row g-4 align-items-end">
                            <div className="col-lg-8">
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">TESTIMONIAL VIDEOS</span>
                                        <span className="text-2">TESTIMONIAL VIDEOS</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <h2 className="reveal-text mb-0">
                                    <RevealText>Real voices. Proven results.</RevealText>
                                </h2>
                            </div>
                            <div className="col-lg-4 d-flex justify-content-lg-end">
                                <p className="mb-0 text-muted" style={{ maxWidth: 360 }}>
                                    Hear directly from trade commissioners and exhibitors who generated historic business through Neofairs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container pt-60">
                        <div className="row g-4">
                            {VIDEO_CARDS.map((item, i) => (
                                <div key={i} className="col-lg-6">
                                    <div className="card_case__studies-list card_case__studies-list--row h-100">
                                        <div className="card_case__studies-card card_case__studies-card--overlay bg-neutral-100 d-flex flex-column h-100">
                                            {/* Visual / Image area */}
                                            <div className="card_case__studies-visual anim-zoomin alt-portfolio-thumb p-relative overflow-hidden" style={{ borderRadius: "24px", minHeight: "340px" }}>
                                                <img
                                                    src={item.img}
                                                    alt={item.alt}
                                                    width={600}
                                                    height={400}
                                                    loading="lazy"
                                                    className="w-100 h-100 object-fit-cover"
                                                    style={{ minHeight: "340px" }}
                                                />

                                                {/* Play Button in the middle of the card image */}
                                                <div className="postbox-play-btn" style={{ zIndex: 5 }}>
                                                    <a
                                                        className="popup-video size-100"
                                                        href={item.videoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="Play testimonial video"
                                                    >
                                                        <span className="text-white d-flex align-items-center justify-content-center">
                                                            {PLAY_ICON}
                                                        </span>
                                                    </a>
                                                </div>

                                                {/* Category Badge overlay */}
                                                <div className="p-absolute" style={{ bottom: "24px", left: "24px", zIndex: 4 }}>
                                                    <span className="bg-transparent text-uppercase border px-3 py-2 rounded-pill common-white fz-font-label">
                                                        {item.badge}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Card Footer Content */}
                                            <div className="card_case__studies-footer mt-10 p-4 bg-neutral-0 rounded-4 flex-grow-1 d-flex flex-column justify-content-between">
                                                <div>
                                                    <h4 className="card-home-12-service__title mb-15">
                                                        {item.quote}
                                                    </h4>
                                                    <div className="testimonial-content-author mt-20">
                                                        <h6 className="testimonial-content-author-name fw-600 mb-1 text-dark">
                                                            {item.author}
                                                        </h6>
                                                        <p className="testimonial-content-author-position m-0 text-muted">
                                                            {item.designation}
                                                        </p>
                                                    </div>
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
        </div>
    );
}
