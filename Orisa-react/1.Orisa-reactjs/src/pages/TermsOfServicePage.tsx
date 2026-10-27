import PageMeta from "@/seo/PageMeta";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function TermsOfServicePage() {
    return (
        <>
            <PageMeta title="Terms of Service — NeoFairs" />

            {/* Header Hero */}
            <section className="pt-140 pb-60 bg-neutral-50 border-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <span className="at-btn common-black bg-transparent mb-15 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Legal</span>
                                    <span className="text-2">Legal</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h1 className="section-title reveal-text mb-20 fw-600" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15 }}>
                                <RevealText>Terms of Service</RevealText>
                            </h1>
                            <p className="neutral-500 fz-font-md mb-0">
                                Last updated: October 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Body */}
            <section className="pt-80 pb-120 bg-neutral-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <div className="legal-content">

                                {/* Section: About These Terms */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">About These Terms</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        These terms govern your use of <a href="https://www.neofairs.com" className="neutral-900 fw-500 text-decoration-underline">www.neofairs.com</a> and the NeoFairs platform — Virtual Trade Fairs, Living Showroom and Marketplace — operated by CBP Technologies Private Limited (“NeoFairs”, “we”, “us”), a company of Agastron Vantage Group LLC. By using the website or platform you agree to these terms. Exhibitors and members are also bound by their order form or service agreement; where that document differs from these terms, it prevails.
                                    </p>
                                </div>

                                {/* Section: Who May Use NeoFairs */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Who May Use NeoFairs</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        Businesses and their authorised representatives aged 18 or above. Exhibitors and members must provide accurate company, GST and contact details and keep their login secure. You are responsible for activity on your account.
                                    </p>
                                </div>

                                {/* Section: What We Provide */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">What We Provide</h3>
                                    <ul className="list-unstyled d-flex flex-column gap-3 mb-20">
                                        <li className="d-flex align-items-start gap-3 fz-font-lg neutral-700" style={{ lineHeight: 1.7 }}>
                                            <span className="rounded-circle bg-neutral-900 mt-2 flex-shrink-0" style={{ width: "6px", height: "6px" }} />
                                            <span>
                                                <strong className="neutral-900">Virtual Trade Fairs</strong> — a stall at an industry-wise online fair, buyer matching, video meetings and visitor data, for the fair dates stated at booking.
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-start gap-3 fz-font-lg neutral-700" style={{ lineHeight: 1.7 }}>
                                            <span className="rounded-circle bg-neutral-900 mt-2 flex-shrink-0" style={{ width: "6px", height: "6px" }} />
                                            <span>
                                                <strong className="neutral-900">Living Showroom</strong> — a hosted digital showroom built from the content you provide, with analytics, RFQ, NORA and a dashboard, in the tier you buy.
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-start gap-3 fz-font-lg neutral-700" style={{ lineHeight: 1.7 }}>
                                            <span className="rounded-circle bg-neutral-900 mt-2 flex-shrink-0" style={{ width: "6px", height: "6px" }} />
                                            <span>
                                                <strong className="neutral-900">Marketplace</strong> — a listing in the industry category you choose, with RFQs routed to your dashboard and a member rate on fairs.
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="fz-font-lg neutral-700 mb-0" style={{ lineHeight: 1.75 }}>
                                        Scope, tier and dates are set out in your order form. Features described on the website are general and may change.
                                    </p>
                                </div>

                                {/* Section: Fees and Payment */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Fees and Payment</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        Living Showroom tiers are a one-time fee plus a small annual fee covering hosting, platform updates, NORA and support. Fairs are priced per fair. Marketplace membership is priced as stated at joining. All prices are exclusive of GST. Payment terms: [e.g. 50% to start, 50% at go-live — confirm]. We take no commission on your sales.
                                    </p>
                                </div>

                                {/* Section: Your Content */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Your Content</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        You keep ownership of the product information, photos, videos, logos and other content you give us. You give us a licence to host, reproduce, adapt and display it to build and run your showroom, stall and listing, including through NORA. You confirm you have the rights to everything you supply and that it is accurate and lawful.
                                    </p>
                                </div>

                                {/* Section: Buyer Data */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Buyer Data</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        Visitor and buyer data generated in your showroom or stall belongs to you. You agree to use it lawfully and to honour any opt-out a buyer makes. NeoFairs does not share your buyer data with other exhibitors.
                                    </p>
                                </div>

                                {/* Section: Fair Participation */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Fair Participation</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        Your stall is live for the fair dates stated. Buyer attendance, meeting counts and orders are not guaranteed. Fair dates may change for reasons outside our control; where a fair is cancelled by us, fees paid for that fair are refunded or credited.
                                    </p>
                                </div>

                                {/* Section: Acceptable Use */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Acceptable Use</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        You may not list or sell anything unlawful or infringing; misrepresent your company or products; harvest other users’ data; send unsolicited bulk messages through the platform; upload malicious code; or attempt to access other accounts. We may suspend or remove accounts and content that break these rules.
                                    </p>
                                </div>

                                {/* Section: Intellectual Property */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Intellectual Property</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        The NeoFairs platform, software, design, the NORA assistant, the Living Showroom name and the NeoFairs name are owned by NeoFairs or its licensors. You receive a limited, non-transferable licence to use them for your business. You may not copy, reverse-engineer or resell the platform.
                                    </p>
                                </div>

                                {/* Section: AI Assistant */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">AI Assistant</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        NORA answers buyer questions from the content you provide. Its answers are generated automatically and may be incomplete or wrong. You are responsible for the content you train it on and for honouring any commitment made to a buyer.
                                    </p>
                                </div>

                                {/* Section: Availability */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Availability</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        We work to keep the platform available but do not guarantee uninterrupted service. Planned maintenance is notified in advance where possible.
                                    </p>
                                </div>

                                {/* Section: Term and Cancellation */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Term and Cancellation</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        A Living Showroom stays live while the annual fee is paid. Marketplace membership runs for the period bought. You may cancel at any time; one-time fees are non-refundable once build has started, and unused annual or membership fees are refunded [pro rata / not refunded — confirm]. We may end an engagement for breach on notice. On exit you may export your buyer data within [30] days.
                                    </p>
                                </div>

                                {/* Section: Limitation of Liability */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Limitation of Liability</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        To the extent permitted by law, NeoFairs is not liable for lost sales, lost buyers or indirect loss, for the conduct of buyers or other users, or for outages outside our control. Our total liability in any 12-month period is capped at the fees you paid us in that period.
                                    </p>
                                </div>

                                {/* Section: Governing Law */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Governing Law</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at [City].
                                    </p>
                                </div>

                                {/* Section: Contact */}
                                <div className="mb-20">
                                    <h3 className="fw-600 mb-20 neutral-900">Contact</h3>
                                    <div className="p-4 p-md-5 rounded-4 bg-neutral-50 border-100">
                                        <p className="fz-font-lg neutral-800 mb-0" style={{ lineHeight: 1.7 }}>
                                            Email:{" "}
                                            <a href="mailto:enquiry@neofairs.com" className="neutral-900 fw-600 text-decoration-underline">
                                                enquiry@neofairs.com
                                            </a>
                                            {" · "}
                                            Phone / WhatsApp:{" "}
                                            <a href="https://wa.me/917010130684" target="_blank" rel="noopener noreferrer" className="neutral-900 fw-600 text-decoration-underline">
                                                +91 70101 30684
                                            </a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
