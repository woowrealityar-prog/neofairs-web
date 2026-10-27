import { useState } from "react";
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

const SCROLL_ROTATE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z"
            fill="currentColor"
        />
    </svg>
);

const AVATARS = [
    { src: "/assets/imgs/template/avatar/avatar-10.webp", alt: "NeoFairs", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-11.webp", alt: "NeoFairs", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-12.webp", alt: "NeoFairs", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-13.webp", alt: "NeoFairs", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-14.webp", alt: "NeoFairs", hiddenOnMobile: true },
];

export default function Section1() {
    const [captchaChecked, setCaptchaChecked] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!captchaChecked) {
            alert("Please verify the captcha checkbox before submitting.");
            return;
        }
        alert("Thank you! Your message has been sent. We reply within one business day.");
    };

    return (
        <section className="sec-1-contact overflow-hidden pt-120 pb-80">
            <div className="container">
                {/* Header Row */}
                <div className="row align-items-end">
                    <div className="col-xxl-7 col-lg-7">
                        <div className="at-about-title-wrap mb-30">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Contact Us</span>
                                    <span className="text-2">Contact Us</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h1 className="at-section-title reveal-text mb-lg-0 mb-4 fw-600" style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", lineHeight: 1.15 }}>
                                <RevealText>
                                    A demo, a fair, a question.
                                </RevealText>
                            </h1>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-lg-5 col-md-8 ms-xxl-auto position-relative">
                        <div className="scroll-rotate d-md-inline-block d-none">
                            <div className="icon">
                                {SCROLL_ROTATE_SVG}
                            </div>
                        </div>
                        <div className="sec-2-home-5__avatars-row d-flex gap-2 py-3">
                            {AVATARS.map((avatar, i) => (
                                <div
                                    key={i}
                                    className={`sec-2-home-5__avatar-sm at-offcanvas-gallery-img ${avatar.hiddenOnMobile ? "d-none d-md-block" : ""}`}
                                >
                                    <img
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        width={65}
                                        height={65}
                                        className="img-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        <h6 className="mb-0 fz-font-xl fw-500 neutral-800" style={{ lineHeight: 1.5 }}>
                            We reply within one business day.
                        </h6>
                    </div>
                </div>

                {/* Form + Direct Contact Row */}
                <div className="row g-5 pt-80 align-items-start">
                    {/* Left: Contact Form */}
                    <div className="col-xxl-6 col-lg-7">
                        <h3 className="fw-600 mb-20 neutral-900">Send us a message</h3>
                        <form className="sec-4-about-form" onSubmit={handleSubmit}>
                            <div className="sec-4-about-form__field">
                                <input
                                    type="text"
                                    className="sec-4-about-form__input"
                                    name="name"
                                    placeholder="Name *"
                                    required
                                    aria-label="Name"
                                />
                            </div>

                            <div className="sec-4-about-form__field">
                                <input
                                    type="text"
                                    className="sec-4-about-form__input"
                                    name="company"
                                    placeholder="Company *"
                                    required
                                    aria-label="Company"
                                />
                            </div>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="sec-4-about-form__field">
                                        <input
                                            type="tel"
                                            className="sec-4-about-form__input"
                                            name="phone"
                                            placeholder="Phone *"
                                            required
                                            aria-label="Phone"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sec-4-about-form__field">
                                        <input
                                            type="email"
                                            className="sec-4-about-form__input"
                                            name="email"
                                            placeholder="Email *"
                                            required
                                            aria-label="Email"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sec-4-about-form__field pt-2">
                                <label className="fz-font-sm neutral-500 d-block mb-1">
                                    I’m interested in *
                                </label>
                                <select
                                    className="sec-4-about-form__input"
                                    name="interest"
                                    defaultValue="Living Showroom"
                                    required
                                    aria-label="I’m interested in"
                                    style={{
                                        cursor: "pointer",
                                        paddingRight: "20px",
                                    }}
                                >
                                    <option value="Living Showroom">Living Showroom</option>
                                    <option value="Virtual Trade Fairs">Virtual Trade Fairs</option>
                                    <option value="Marketplace">Marketplace</option>
                                    <option value="Something else">Something else</option>
                                </select>
                            </div>

                            <div className="sec-4-about-form__field">
                                <textarea
                                    className="sec-4-about-form__input sec-4-about-form__textarea"
                                    name="message"
                                    placeholder="Message *"
                                    rows={4}
                                    required
                                    aria-label="Message"
                                />
                            </div>

                            {/* Captcha Checkbox */}
                            <div className="pt-3 pb-2">
                                <label
                                    className="d-flex align-items-center gap-2 p-3 rounded-2 border-100 bg-neutral-50"
                                    style={{ cursor: "pointer", width: "fit-content", minWidth: "260px" }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={captchaChecked}
                                        onChange={(e) => setCaptchaChecked(e.target.checked)}
                                        style={{ width: "20px", height: "20px", accentColor: "#ace227", cursor: "pointer" }}
                                        required
                                    />
                                    <span className="fz-font-md fw-500 neutral-800">
                                        I am not a robot (Captcha)
                                    </span>
                                </label>
                            </div>

                            <div className="sec-4-about-form__actions">
                                <button
                                    type="submit"
                                    className="at-btn text-capitalize"
                                    style={{
                                        backgroundColor: "#ace227",
                                        borderColor: "#ace227",
                                        color: "#000000",
                                        fontWeight: 600,
                                        padding: "14px 36px",
                                    }}
                                >
                                    <span>
                                        <span className="text-1">Send</span>
                                        <span className="text-2">Send</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </button>
                            </div>

                            <p className="sec-4-about-form__disclaimer">
                                We respect your privacy. No spam, ever.
                            </p>
                        </form>
                    </div>

                    {/* Right: Direct Details & Quick Action Cards */}
                    <div className="col-xxl-5 col-lg-5 ms-auto">
                        {/* Direct Contact Info */}
                        <div className="p-4 p-md-5 rounded-4 bg-neutral-50 border-100 mb-4 at_fade_anim">
                            <h4 className="fw-600 mb-25 neutral-900">Direct Contact</h4>
                            
                            <div className="mb-20">
                                <span className="fz-font-sm text-uppercase fw-600 neutral-500 d-block mb-1">
                                    Phone / WhatsApp
                                </span>
                                <a
                                    href="https://wa.me/917010130684"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fz-font-xl fw-600 neutral-900 text-decoration-none d-inline-block hover-opacity"
                                >
                                    +91 70101 30684
                                </a>
                            </div>

                            <div className="mb-20">
                                <span className="fz-font-sm text-uppercase fw-600 neutral-500 d-block mb-1">
                                    Email
                                </span>
                                <a
                                    href="mailto:enquiry@neofairs.com"
                                    className="fz-font-xl fw-600 neutral-900 text-decoration-none d-inline-block hover-opacity"
                                >
                                    enquiry@neofairs.com
                                </a>
                            </div>

                            <div>
                                <span className="fz-font-sm text-uppercase fw-600 neutral-500 d-block mb-1">
                                    Hours
                                </span>
                                <span className="fz-font-lg fw-500 neutral-800">
                                    Mon–Sat, 9:00 AM – 6:00 PM IST
                                </span>
                            </div>
                        </div>

                        {/* Quick Assistance Cards */}
                        <div className="d-flex flex-column gap-3 at_fade_anim">
                            {/* Card 1: Want a demo? */}
                            <div className="p-4 rounded-4 bg-neutral-0 border-100">
                                <h6 className="fw-600 neutral-900 mb-1">Want a demo?</h6>
                                <p className="neutral-600 fz-font-md mb-15">
                                    Book 30 minutes. We’ll show a real showroom.
                                </p>
                                <a
                                    href="mailto:enquiry@neofairs.com?subject=Book%20a%20Free%20Demo%20-%20NeoFairs"
                                    className="at-btn btn-sm"
                                    style={{
                                        backgroundColor: "#ace227",
                                        borderColor: "#ace227",
                                        color: "#000000",
                                        fontWeight: 600,
                                    }}
                                >
                                    <span>
                                        <span className="text-1">Book a Free Demo</span>
                                        <span className="text-2">Book a Free Demo</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </a>
                            </div>

                            {/* Card 2: Exhibiting? */}
                            <div className="p-4 rounded-4 bg-neutral-0 border-100">
                                <h6 className="fw-600 neutral-900 mb-1">Exhibiting?</h6>
                                <p className="neutral-600 fz-font-md mb-15">
                                    Tell us your industry. We’ll tell you which fair fits.
                                </p>
                                <a
                                    href="mailto:enquiry@neofairs.com?subject=Register%20My%20Interest%20-%20NeoFairs"
                                    className="at-btn btn-sm common-black border-100"
                                >
                                    <span>
                                        <span className="text-1">Register My Interest</span>
                                        <span className="text-2">Register My Interest</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </a>
                            </div>

                            {/* Card 3: Trade body or advisor? */}
                            <div className="p-4 rounded-4 bg-neutral-0 border-100">
                                <h6 className="fw-600 neutral-900 mb-1">Trade body or advisor?</h6>
                                <p className="neutral-600 fz-font-md mb-0">
                                    We plan each fair with industry partners. Write to us at{" "}
                                    <a
                                        href="mailto:enquiry@neofairs.com"
                                        className="neutral-900 fw-600 text-decoration-underline"
                                    >
                                        enquiry@neofairs.com
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
