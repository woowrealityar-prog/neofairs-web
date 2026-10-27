import RevealText from "@/shared/effects/RevealText";

// Home 5 Section 7 - Testimonial card style adapted for PDF Problem section

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const STAR_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path
            d="M8.55696 13.6975L12.707 16.2075C13.467 16.6675 14.397 15.9875 14.197 15.1275L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.077 5.5475 16.197 5.4775L11.367 5.0675L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0575L0.916957 5.4675C0.0369575 5.5375 -0.323043 6.6375 0.346957 7.2175L4.01696 10.3975L2.91696 15.1175C2.71696 15.9775 3.64696 16.6575 4.40696 16.1975L8.55696 13.6975Z"
            fill="currentColor"
        />
    </svg>
);

type ProblemItem = {
    title: string;
    subline: string;
    avatar: string;
    quote: string;
    headerFirst: boolean;
    orderClass: string;
};

const PROBLEMS: ProblemItem[] = [
    {
        title: "Sent and forgotten",
        subline: "01\nWhatsApp Chat",
        avatar: "/assets/imgs/template/avatar/avatar-10.webp",
        quote: "It sits in a WhatsApp chat. You never know if it was opened.",
        headerFirst: true,
        orderClass: "",
    },
    {
        title: "Out of date on day one",
        subline: "02\nFile Management",
        avatar: "/assets/imgs/template/avatar/avatar-12.webp",
        quote: "New product, new price, new file. Resend to everyone.",
        headerFirst: true,
        orderClass: "",
    },
    {
        title: "No way back in",
        subline: "03\nLost Buyers",
        avatar: "/assets/imgs/template/avatar/avatar-16.webp",
        quote: "The buyer liked something. You'll never know which.",
        headerFirst: true,
        orderClass: "",
    },
];

function ProblemCard({ item }: { item: ProblemItem }) {
    const headerBlock = (
        <div className="bg-neutral-0 rounded-4 px-5 py-3">
            <h6 className="d-flex justify-content-between align-items-center mb-0">
                <span>{item.title}</span>
            </h6>
        </div>
    );

    return (
        <div className="hover-unborder">
            {item.headerFirst ? (
                <>
                    {headerBlock}
                    <div className="bg-neutral-0 rounded-4 p-5 mt-2">
                        <h6 className="fz-font-md fw-500 text-end mb-0">
                            {item.subline.split("\n").map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < item.subline.split("\n").length - 1 && <br />}
                                </span>
                            ))}
                        </h6>
                        <div className="pt-100">
                            <blockquote className="neutral-500 fz-font-lg fw-500 mb-0 text-truncate-5">
                                {item.quote}
                            </blockquote>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-neutral-0 rounded-4 p-5 mb-2">
                        <h6 className="fz-font-md fw-500 text-end mb-0">
                            {item.subline.split("\n").map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < item.subline.split("\n").length - 1 && <br />}
                                </span>
                            ))}
                        </h6>
                        <div className="pt-100">
                            <blockquote className="neutral-500 fz-font-lg fw-500 mb-0 text-truncate-5">
                                {item.quote}
                            </blockquote>
                        </div>
                    </div>
                    {headerBlock}
                </>
            )}
        </div>
    );
}

export default function SectionPdfProblem() {
    return (
        <section className="home-5-section-7 p-relative pt-120 pb-100 bg-neutral-50">
            <div className="container">
                <div className="row align-items-end g-4">
                    <div className="col-xxl-6 col-lg-8">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">The Problem</span>
                                <span className="text-2">The Problem</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="reveal-text mb-0">
                            <RevealText>Your catalog is a PDF. That&apos;s the problem.</RevealText>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container pt-80">
                <div className="row g-2">
                    {PROBLEMS.map((item, i) => (
                        <div
                            key={i}
                            className={`col-xxl-4 col-lg-4 col-md-6 col-12 ${item.orderClass}`}
                        >
                            <ProblemCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
