import RevealText from "@/shared/effects/RevealText";
import SwiperDynamic from "@/shared/components/SwiperDynamic";
import TestimonialCard1 from "@/shared/cards/TestimonialCard1";
import { Link } from "react-router-dom";

const TESTIMONIAL_SOURCES = [
    {
        starColor: "#FFB618",
        img: "/assets/imgs/template/avatar/avatar-6.webp",
        logo: "/assets/imgs/icons/brand-7.webp",
        logoWidth: 86,
        logoHeight: 25,
        name: "Mr. Randhir Jaiswal",
        position: "Consul General of India",
        company: "New York",
        comment:
            "It comes as close to physical format as you can get.",
    },
    {
        starColor: "#FFB618",
        img: "/assets/imgs/template/avatar/avatar-7.webp",
        logo: "/assets/imgs/icons/brand-8.webp",
        logoWidth: 101,
        logoHeight: 25,
        name: "Maheshwari Creations",
        position: "Exhibitor",
        company: "Madhya Pradesh",
        comment:
            "Never had such a prompt and smooth functioning. Even the stall looks great.",
    },
    {
        starColor: "#FFB618",
        img: "/assets/imgs/template/avatar/avatar-8.webp",
        logo: "/assets/imgs/icons/brand-9.webp",
        logoWidth: 119,
        logoHeight: 25,
        name: "Hafizah Ghazali",
        position: "Buyer / Trade Partner",
        company: "Singapore",
        comment:
            "We got in touch with some really promising potential partners.",
    },
    {
        starColor: "#FFB618",
        img: "/assets/imgs/template/avatar/avatar-9.webp",
        logo: "/assets/imgs/icons/brand-7.webp",
        logoWidth: 86,
        logoHeight: 25,
        name: "DWARKA CREATIONS",
        position: "Exhibitor",
        company: "UTTAR PRADESH",
        comment:
            "I had a great time during these 5 days of fair. I'm really thankful to you for helping me out at every step.",
    },
];

const TESTIMONIALS = [...TESTIMONIAL_SOURCES, ...TESTIMONIAL_SOURCES];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_PREV_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M11.3481 7.47314L5.25879 13.2856L11.3481 19.0981" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3124 13.2856H5.53564" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ARROW_NEXT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M15.2234 7.47314L21.3126 13.2856L15.2234 19.0981" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.259 13.2856H21.0358" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function SectionTestimonials() {
    return (
        <div className="container-2200">
            <section id="sec-6-home-1" className="sec-6-home-1 mx-lg-3 mx-2 bg-black pt-100 pb-100 rounded-5 changeless overflow-hidden">
                <div className="container">
                    <div className="row align-items-end mb-50 g-3 z-index-2">
                        <div className="col-md-8">
                            <span className="at-btn common-white bg-transparent rounded-0 p-0 mb-20 d-inline-block">
                                <span className="text-uppercase text-nowrap">
                                    <span className="text-1">Testimonials</span>
                                    <span className="text-2">Testimonials</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2 className="alt-section-title lh-1 mb-10 reveal-text text-white">
                                <RevealText>Testimonial</RevealText>
                            </h2>
                            <p className="mg-portfolio-dec mb-50 text-white mb-0">
                                Real experiences from industry leaders, exhibitors, and global trade partners.
                            </p>
                        </div>
                        <div className="col-lg-2 ms-auto">
                            <div className="swiper-button-wrapper justify-content-end">
                                <button type="button" className="swiper-btn-prev" aria-label="Previous">
                                    {ARROW_PREV_SVG}
                                </button>
                                <button type="button" className="swiper-btn-next" aria-label="Next">
                                    {ARROW_NEXT_SVG}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 scroll-move-up2 z-index-2">
                            <SwiperDynamic
                                className="swiper slider-testimonial rounded-4"
                                slidesPerView={1}
                                spaceBetween={24}
                                loop
                                navigation={{
                                    prevEl: "#sec-6-home-1 .swiper-btn-prev",
                                    nextEl: "#sec-6-home-1 .swiper-btn-next",
                                }}
                                breakpoints={{
                                    768: { slidesPerView: 1 },
                                    992: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                }}
                            >
                                {TESTIMONIALS.map((item, idx) => (
                                    <TestimonialCard1
                                        key={`testimonial-${idx}`}
                                        img={item.img}
                                        name={item.name}
                                        position={item.position}
                                        company={item.company}
                                        comment={item.comment}
                                        starColor={item.starColor}
                                    />
                                ))}
                            </SwiperDynamic>
                        </div>
                        <div className="col-12 text-center pt-50 z-index-1">
                            <Link to="/contact-1" className="at-btn bg-transparent p-relative">
                                <img
                                    className="badge-zoon-in"
                                    src="/assets/imgs/icons/badge-2.svg"
                                    alt="orisa"
                                    width={120}
                                    height={120} loading="lazy" />
                                <span className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center overflow-unset">
                                    <span className="mt-2 badge-text-zoom-in overflow-unset text-wrap">
                                        <span className="fw-700 common-white text-uppercase overflow-unset">
                                            Client <br />
                                            Stories
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
