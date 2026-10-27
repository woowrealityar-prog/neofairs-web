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

export default function PrivacyPolicyPage() {
    return (
        <>
            <PageMeta title="Privacy Policy — NeoFairs" />

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
                                <RevealText>Privacy Policy</RevealText>
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

                                {/* Section: Who We Are */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Who We Are</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        NeoFairs is operated by CBP Technologies Private Limited (“NeoFairs”, “we”, “us”), a company of Agastron Vantage Group LLC. Registered office: [Registered address]. CIN: [CIN].
                                    </p>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        This policy explains what personal data we collect through <a href="https://www.neofairs.com" className="neutral-900 fw-500 text-decoration-underline">www.neofairs.com</a> and the NeoFairs platform — Virtual Trade Fairs, Living Showroom and Marketplace — how we use it, and the rights you have under the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.
                                    </p>
                                </div>

                                {/* Section: Who This Policy Covers */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Who This Policy Covers</h3>
                                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                        <li className="d-flex align-items-start gap-3 fz-font-lg neutral-700" style={{ lineHeight: 1.7 }}>
                                            <span className="rounded-circle bg-neutral-900 mt-2 flex-shrink-0" style={{ width: "6px", height: "6px" }} />
                                            <span>
                                                <strong className="neutral-900">Website visitors</strong> — anyone browsing neofairs.com, booking a demo or contacting us.
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-start gap-3 fz-font-lg neutral-700" style={{ lineHeight: 1.7 }}>
                                            <span className="rounded-circle bg-neutral-900 mt-2 flex-shrink-0" style={{ width: "6px", height: "6px" }} />
                                            <span>
                                                <strong className="neutral-900">Exhibitors and members</strong> — businesses that buy a Living Showroom, exhibit at a fair or list on the Marketplace, and their staff who use the dashboard.
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-start gap-3 fz-font-lg neutral-700" style={{ lineHeight: 1.7 }}>
                                            <span className="rounded-circle bg-neutral-900 mt-2 flex-shrink-0" style={{ width: "6px", height: "6px" }} />
                                            <span>
                                                <strong className="neutral-900">Buyers and visitors</strong> — anyone who enters a showroom, registers for a fair, sends an RFQ or places an order.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Section: What We Collect */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">What We Collect</h3>
                                    <div className="d-flex flex-column gap-3">
                                        <p className="fz-font-lg neutral-700 mb-0" style={{ lineHeight: 1.75 }}>
                                            <strong className="neutral-900">From website visitors:</strong> Name, company, phone, email, industry and message when you fill a form; basic technical data such as IP address, browser, device and pages visited.
                                        </p>
                                        <p className="fz-font-lg neutral-700 mb-0" style={{ lineHeight: 1.75 }}>
                                            <strong className="neutral-900">From exhibitors and members:</strong> Company details, GST and billing information, product catalogues, photos, videos and specifications you send us to build your showroom or stall; login and dashboard activity.
                                        </p>
                                        <p className="fz-font-lg neutral-700 mb-0" style={{ lineHeight: 1.75 }}>
                                            <strong className="neutral-900">From buyers and visitors:</strong> Name, company, email, phone and country when you register for a fair or send an RFQ; which showrooms and products you viewed and when; messages and video calls with exhibitors, which may be recorded with notice; order and payment details where you buy through the platform.
                                        </p>
                                        <div className="p-3 rounded-3 bg-neutral-50 border-100 mt-2">
                                            <p className="fz-font-md neutral-600 mb-0">
                                                We do not knowingly collect personal data from anyone under 18.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: How We Use It */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">How We Use It</h3>
                                    <ul className="list-unstyled d-flex flex-column gap-3 mb-25">
                                        {[
                                            "To respond to enquiries and book demos",
                                            "To build, host and run showrooms, fair stalls and Marketplace listings",
                                            "To match buyers to exhibitors at fairs and route RFQs to the right business",
                                            "To show exhibitors who visited their showroom and what they viewed — this is a core feature of the Living Showroom",
                                            "To invoice, process payments and keep accounts",
                                            "To run NORA, the AI assistant inside showrooms, on the content each exhibitor provides",
                                            "To send fair invitations and platform updates (you can opt out at any time)",
                                            "To keep the platform secure and meet legal obligations",
                                        ].map((item, idx) => (
                                            <li key={idx} className="d-flex align-items-start gap-3 fz-font-lg neutral-700" style={{ lineHeight: 1.7 }}>
                                                <span className="rounded-circle bg-neutral-900 mt-2 flex-shrink-0" style={{ width: "6px", height: "6px" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="fz-font-lg fw-600 neutral-900 mb-0">
                                        We do not sell personal data.
                                    </p>
                                </div>

                                {/* Section: Buyer Data and Exhibitors */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Buyer Data and Exhibitors</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        When you visit a showroom, register for a fair or send an RFQ, the exhibitor you interact with receives your details and your activity in their showroom. The exhibitor owns that buyer data and may contact you about their products. NeoFairs does not share one exhibitor’s buyer data with another exhibitor.
                                    </p>
                                </div>

                                {/* Section: Sharing */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Sharing</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        We share personal data only with: the exhibitor or member you interact with, as above; service providers who help us run the platform (hosting, video calling, payments, email, WhatsApp messaging, analytics), under contract and only for that purpose; trade bodies and fair partners, where you register for a fair they co-organise and we tell you so at registration; other Agastron Group companies, where needed to provide a service you asked for; and authorities where the law requires it.
                                    </p>
                                </div>

                                {/* Section: International Transfers */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">International Transfers</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        Fairs and the Marketplace are open to buyers worldwide. Buyer data may be received from, and exhibitor data shown to, people outside India. Some service providers may process data outside India. Where this happens we take reasonable steps to protect it as the law requires.
                                    </p>
                                </div>

                                {/* Section: Retention */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Retention</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        Enquiry data is kept for [24] months. Exhibitor and member data is kept for the life of the account and [8] years after, to meet tax and accounting rules. Buyer activity data is kept while the exhibitor’s showroom is live and as the exhibitor instructs. After these periods data is deleted or anonymised.
                                    </p>
                                </div>

                                {/* Section: Cookies */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Cookies</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        We use essential cookies (session, security), and with your consent analytics cookies [Google Analytics / other] and advertising cookies [Meta Pixel — confirm] to measure our campaigns. You can withdraw consent through the cookie banner or your browser.
                                    </p>
                                </div>

                                {/* Section: Security */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Security</h3>
                                    <p className="fz-font-lg neutral-700" style={{ lineHeight: 1.75 }}>
                                        Data is encrypted in transit and at rest, access is role-based and logged, and the platform is hosted on [provider / region]. No system is fully secure; if a breach affects your data we will notify you and the Data Protection Board of India as the law requires.
                                    </p>
                                </div>

                                {/* Section: Your Rights */}
                                <div className="mb-50">
                                    <h3 className="fw-600 mb-20 neutral-900">Your Rights</h3>
                                    <p className="fz-font-lg neutral-700 mb-25" style={{ lineHeight: 1.75 }}>
                                        You may ask us to access, correct, update or erase your personal data, withdraw consent, nominate someone to exercise your rights, and raise a grievance. Write to the Grievance Officer below. We respond within [30] days. If unresolved, you may approach the Data Protection Board of India.
                                    </p>
                                    <div className="p-4 p-md-5 rounded-4 bg-neutral-50 border-100">
                                        <h5 className="fw-600 mb-15 neutral-900">Grievance Officer</h5>
                                        <p className="fz-font-md neutral-700 mb-0" style={{ lineHeight: 1.7 }}>
                                            [Name], [Designation]<br />
                                            CBP Technologies Private Limited<br />
                                            [Registered address]<br />
                                            Email:{" "}
                                            <a href="mailto:privacy@neofairs.com" className="neutral-900 fw-600 text-decoration-underline">
                                                privacy@neofairs.com
                                            </a>{" "}
                                            [confirm mailbox]<br />
                                            Phone: [phone]
                                        </p>
                                    </div>
                                </div>

                                {/* Section: Changes */}
                                <div className="mb-20">
                                    <h3 className="fw-600 mb-20 neutral-900">Changes</h3>
                                    <p className="fz-font-lg neutral-700 mb-0" style={{ lineHeight: 1.75 }}>
                                        We may update this policy. The date at the top shows the latest version. Material changes are notified by email to exhibitors and members.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
