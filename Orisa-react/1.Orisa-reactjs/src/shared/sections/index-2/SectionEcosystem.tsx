import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const CUBE_SVG = (
    <svg className="fill-primary mb-10" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M17 18L30 5H43V18L30 31V18H17Z" fill="#ace227" />
        <path d="M30 31H43V44H30V31Z" fill="#ace227" />
        <path d="M17 18L4 31V44H17L30 31H17V18Z" fill="#ace227" />
        <path d="M17 18H4V5H17V18Z" fill="#ace227" />
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
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const STEPS = [
    {
        img: "/assets/imgs/pages/img-11.webp",
        title: "Exhibit at a virtual fair",
        description: "Meet buyers in your industry. Face to face, on video. No travel.",
    },
    {
        img: "/assets/imgs/pages/img-12.webp",
        title: "Keep your stall. It becomes your showroom.",
        description: "The fair ends. Your stall doesn't. It lives on as your Living Showroom.",
    },
    {
        img: "/assets/imgs/pages/img-13.webp",
        title: "Stay listed all year",
        description: "Buyers find you on the Marketplace. The next fair is one click away.",
    },
];

export default function SectionEcosystem({ classList = "" }: { classList?: string }) {
    return (
        <div className={`mg-portfolio-area pt-145 pb-65 ${classList}`.trim()}>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-lg-4">
                        <div className="mg-portfolio-title-wrap mg-portfolio-pin mb-30">
                            <span className="at-btn common-black bg-transparent rounded-0 p-0 mb-20 d-inline-block">
                                <span className="text-uppercase text-nowrap">
                                    <span className="text-1">Ecosystem</span>
                                    <span className="text-2">Ecosystem</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                                <RevealText>
                                    One ecosystem. Three steps to buyers.
                                </RevealText>
                            </h2>
                            <div className="at-btn-group btn-brand-1 at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <Link className="at-btn-circle" to="#book-demo">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="#book-demo">
                                    Book a Free Demo
                                </Link>
                                <Link className="at-btn-circle" to="#book-demo">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 ms-auto">
                        <div className="mg-portfolio-item-wrap ml-130 mb-40">
                            {STEPS.map((step, idx) => (
                                <div key={idx} className="mb-55 mg-portfolio-item anim-zoomin-wrap">
                                    <div className="mg-portfolio-thumb anim-zoomin not-hide-cursor">
                                        <div className="mg-portfolio-thumb d-block">
                                            <img
                                                src={step.img}
                                                alt={step.title}
                                                data-speed=".8"
                                                data-delay=".4"
                                                data-fade-from="bottom"
                                                data-ease="bounce"
                                                data-parallax
                                                data-parallax-speed="0.45"
                                                data-parallax-range="100"
                                                className="img-cover"
                                            />
                                        </div>
                                        <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between">
                                            <div>
                                                <h5 className="cs-portfolio-title at-title-anim fix mr-20 mb-2">
                                                    <span className="at-title-text">
                                                        {step.title}
                                                    </span>
                                                </h5>
                                                <p className="mg-portfolio-dec mb-0 neutral-500">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
