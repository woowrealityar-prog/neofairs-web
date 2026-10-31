import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

export default function SectionFairStall() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scaleUpRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let tl: ReturnType<typeof import("gsap").default.timeline> | null = null;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const scaleUpElement = scaleUpRef.current;
            if (!section || !scaleUpElement) return;

            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom center",
                    scrub: 1,
                    markers: false,
                },
            });

            tl.to(scaleUpElement, {
                scale: 1.15,
                duration: 1,
            });
        };

        init();

        return () => {
            if (tl) {
                (tl as { scrollTrigger?: { kill?: () => void } }).scrollTrigger?.kill?.();
                tl.kill();
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="at-banner-thumb fix w-100 scale-up-img p-relative changeless d-block"
        >
            <div ref={scaleUpRef} className="scale-up position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden">
                <img
                    data-speed=".4"
                    className="img-cover"
                    src="/assets/imgs/pages/neoweb/living-showroom/Fair stall.webp"
                    alt="Your showroom is your fair stall"
                    loading="lazy"
                />
            </div>
            <div className="position-absolute top-0 bottom-0 start-0 end-0" style={{ background: "rgba(0, 0, 0, 0.45)" }}>
                <div className="container h-100 d-flex flex-column justify-content-between py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center pt-30">
                                <span className="bg-transparent border px-3 py-1 rounded-pill common-white fz-font-sm text-uppercase">
                                    Fair Integration
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end pb-50">
                        <div className="col-lg-7 col-md-8">
                            <h2 className="common-white fw-500 mb-0" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.15 }}>
                                Your showroom is your fair stall.
                            </h2>
                            <div className="pt-30">
                                <div
                                    className="at-btn-group btn-brand-1 at_fade_anim"
                                    data-delay=".4"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <Link className="at-btn-circle" to="/fairs" style={{ color: "#000" }}>
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                    <Link className="at-btn z-index-1" to="/fairs" style={{ color: "#000" }}>
                                        See Upcoming Fairs
                                    </Link>
                                    <Link className="at-btn-circle" to="/fairs" style={{ color: "#000" }}>
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 ms-auto text-md-end text-start pt-3 pt-md-0">
                            <p className="common-white fz-font-lg mb-0" style={{ maxWidth: "440px", marginLeft: "auto", lineHeight: "1.6" }}>
                                Own a Living Showroom and you join any NeoFairs fair in one click. No new stall to build.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
