import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const FEATURES = [
    {
        title: "Industry-wise",
        desc: "Buyers browse by sector. You’re not fighting ten thousand listings for one search.",
    },
    {
        title: "Showrooms, not just listings",
        desc: "Add a Living Showroom and buyers click your name and walk in. Not a photo and a phone number.",
    },
    {
        title: "Fairs attached",
        desc: "The next industry fair is one click away. Your listing is already your stall.",
    },
];

export default function SectionNotAnotherListing() {
    return (
        <section className="home-3-section-7 pt-120 pb-120 p-relative bg-neutral-0">
            {/* Background grid */}
            <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-n1 opacity-10">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className={
                            i === 3
                                ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                        }
                    >
                        <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                        {i === 3 && (
                            <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                        )}
                    </div>
                ))}
            </div>

            <div className="container">
                <div className="row g-4 align-items-center">
                    {/* Left Column Image */}
                    <div className="col-lg-6">
                        <div className="rounded-5 overflow-hidden">
                            <img
                                src="/assets/imgs/pages/neoweb/marketplace/listing.webp"
                                alt="Not another listing site"
                                width={800}
                                height={600}
                                className="w-100 img-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right Column Content */}
                    <div className="col-lg-5 mx-auto">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">OUR SOLUTIONS</span>
                                <span className="text-2">OUR SOLUTIONS</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>

                        <h2 className="alt-section-title lh-1 mb-40 reveal-text">
                            <RevealText>
                                Not another listing site
                            </RevealText>
                        </h2>

                        <div className="d-flex flex-column gap-4 pt-10">
                            {FEATURES.map((item, index) => (
                                <div key={index} className="border-bottom pb-4">
                                    <h5 className="fw-600 mb-2 neutral-950">
                                        {item.title}
                                    </h5>
                                    <p className="mb-0 fz-font-lg neutral-600" style={{ lineHeight: "1.7" }}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
