import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
        <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
    </svg>
);

const INDUSTRIES = [
    {
        category: "Clothing & Fashion",
        brand: "Tanzeb",
        subdomain: "tanzeb.neofairs.com",
        url: "https://tanzeb.neofairs.com",
        img: "/assets/imgs/pages/img-63.webp",
    },
    {
        category: "Branding & Display",
        brand: "Cuboc",
        subdomain: "cuboc.neofairs.com",
        url: "https://cuboc.neofairs.com",
        img: "/assets/imgs/pages/img-64.webp",
    },
    {
        category: "Food Products",
        brand: "Pansari",
        subdomain: "pansari.neofairs.com",
        url: "https://pansari.neofairs.com",
        img: "/assets/imgs/pages/img-65.webp",
    },
    {
        category: "Industrial Machines",
        brand: "Bonhoeffer",
        subdomain: "bonhoeffermachines.neofairs.com",
        url: "https://bonhoeffermachines.neofairs.com",
        img: "/assets/imgs/pages/img-66.webp",
    },
    {
        category: "Jewellery",
        brand: "Delco",
        subdomain: "delco.neofairs.com",
        url: "https://delco.neofairs.com",
        img: "/assets/imgs/pages/img-67.webp",
    },
    {
        category: "Transformers & Generators",
        brand: "ETT",
        subdomain: "ett.neofairs.com",
        url: "https://ett.neofairs.com",
        img: "/assets/imgs/pages/img-68.webp",
    },
    {
        category: "Silicone Products",
        brand: "Sevitsil",
        subdomain: "sevitsil.neofairs.com",
        url: "https://sevitsil.neofairs.com",
        img: "/assets/imgs/pages/img-63.webp",
    },
    {
        category: "Iron & Steel",
        brand: "Star Steels",
        subdomain: "starsteelsco.neofairs.com",
        url: "https://starsteelsco.neofairs.com",
        img: "/assets/imgs/pages/img-64.webp",
    },
];

export default function SectionAnyIndustry() {
    return (
        <section className="sec-6-home-3 portfolio-area bg-neutral-50 pt-120 pb-100">
            <div className="container">
                {/* Header row: Eyebrow + Title */}
                <div className="row g-4 align-items-end mb-60">
                    <div className="col-lg-8">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Industries</span>
                                <span className="text-2">Industries</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="alt-section-title lh-1 mb-0 reveal-text">
                            <RevealText>One showroom. Any industry.</RevealText>
                        </h2>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-lg-end">
                        <p className="neutral-600 fz-font-lg mb-0" style={{ lineHeight: "1.6" }}>
                            Whatever your industry, your showroom is built for it.
                        </p>
                    </div>
                </div>

                {/* Industry Cards Grid */}
                <div className="row">
                    {INDUSTRIES.map((item, index) => (
                        <div key={index} className="col-lg-6 col-md-6 col-12 mb-50">
                            <div className="alt-portfolio-item card-portfolio at-hover-item">
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="alt-portfolio-thumb mb-20 p-relative fix d-block rounded-4 overflow-hidden"
                                >
                                    <img
                                        src={item.img}
                                        alt={`${item.brand} - ${item.category}`}
                                        width={600}
                                        height={400}
                                        className="w-100 img-cover"
                                        loading="lazy"
                                    />
                                    {/* White stroke pill box with category name placed at the bottom */}
                                    <div className="p-absolute bottom-0 start-0 m-4 z-index-2">
                                        <span className="bg-transparent text-uppercase border border-white px-3 py-2 rounded-pill common-white fz-font-label">
                                            {item.category}
                                        </span>
                                    </div>
                                </a>
                                <div className="alt-portfolio-content d-flex justify-content-between align-items-center pt-2">
                                    <h5 className="alt-portfolio-title mb-0 fw-600">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="common-underline text-decoration-none"
                                        >
                                            {item.brand}
                                        </a>
                                    </h5>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="at-btn common-black border-bottom-900 text-uppercase bg-transparent rounded-0 p-0 pb-2 text-decoration-none"
                                    >
                                        <span className="text-uppercase">
                                            <span className="text-1">View live</span>
                                            <span className="text-2">View live</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
