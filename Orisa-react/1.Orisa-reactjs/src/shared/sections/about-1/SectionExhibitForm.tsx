import { useState } from "react";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const SUBMIT_ARROW_SVG = (
    <>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
        </svg>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
        </svg>
    </>
);

export default function SectionExhibitForm() {
    const [captchaChecked, setCaptchaChecked] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!captchaChecked) {
            alert("Please verify that you are not a robot.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <div className="container-2200">
            <section className="rounded-5 mx-lg-3 mx-2 pt-120 pb-120 bg-neutral-0">
                <div className="container">
                    <div className="row align-items-start justify-content-between g-4 g-lg-5">
                        {/* Left Column: Heading & Description */}
                        <div className="col-lg-5 col-12">
                            <div className="mb-40">
                                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">Exhibit With Us</span>
                                        <span className="text-2">Exhibit With Us</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                                    <RevealText>Exhibit at the next fair.</RevealText>
                                </h2>
                                <p className="fz-font-lg neutral-600 mb-0" style={{ lineHeight: "1.7" }}>
                                    Tell us your industry. We’ll tell you which fair fits, and what it costs.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="col-lg-6 col-12 ms-lg-auto">
                            {submitted ? (
                                <div className="p-5 rounded-4 bg-neutral-900 text-white text-center">
                                    <h3 className="text-white mb-3">Interest Registered!</h3>
                                    <p className="mb-0 text-white opacity-75">
                                        Thank you! Our trade fair team will review your details and reach out shortly with suitable fairs and pricing.
                                    </p>
                                </div>
                            ) : (
                                <form className="sec-4-about-form sec-11-home-7__form" onSubmit={handleSubmit}>
                                    <div className="sec-4-about-form__field at_fade_anim">
                                        <input
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="name"
                                            placeholder="Your Name *"
                                            required
                                            aria-label="Your Name"
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field at_fade_anim">
                                        <input
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="company"
                                            placeholder="Company Name *"
                                            required
                                            aria-label="Company Name"
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field at_fade_anim">
                                        <input
                                            type="tel"
                                            className="sec-4-about-form__input"
                                            name="phone"
                                            placeholder="Phone Number *"
                                            required
                                            aria-label="Phone Number"
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field at_fade_anim">
                                        <input
                                            type="email"
                                            className="sec-4-about-form__input"
                                            name="email"
                                            placeholder="Email Address *"
                                            required
                                            aria-label="Email Address"
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field at_fade_anim">
                                        <input
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="industry"
                                            placeholder="Industry *"
                                            required
                                            aria-label="Industry"
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field at_fade_anim">
                                        <input
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="products"
                                            placeholder="Products you make *"
                                            required
                                            aria-label="Products you make"
                                        />
                                    </div>

                                    {/* Captcha verification box */}
                                    <div className="sec-4-about-form__field at_fade_anim pt-2 pb-2">
                                        <div
                                            className="d-flex align-items-center gap-3 p-3 rounded-3"
                                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)", background: "rgba(0, 0, 0, 0.02)" }}
                                        >
                                            <input
                                                type="checkbox"
                                                id="captchaCheckbox"
                                                checked={captchaChecked}
                                                onChange={(e) => setCaptchaChecked(e.target.checked)}
                                                style={{ width: "20px", height: "20px", cursor: "pointer", accentColor: "#ace227" }}
                                                required
                                            />
                                            <label htmlFor="captchaCheckbox" className="mb-0 fw-500" style={{ cursor: "pointer" }}>
                                                I am not a robot (Captcha Verification)
                                            </label>
                                        </div>
                                    </div>

                                    <div className="sec-4-about-form__actions at_fade_anim pt-2">
                                        <button type="submit" className="sec-4-about-form__btn at-btn at_fade_anim">
                                            <span>
                                                <span className="text-1 text-capitalize">Register My Interest</span>
                                                <span className="text-2 text-capitalize">Register My Interest</span>
                                            </span>
                                            <i>
                                                {SUBMIT_ARROW_SVG}
                                            </i>
                                        </button>
                                    </div>
                                    <p className="sec-4-about-form__disclaimer at_fade_anim pt-2" data-delay="0.1">
                                        By submitting, you agree to our <a href="/terms-of-service" className="sec-4-about-form__link">Terms</a> and{" "}
                                        <a href="/privacy-policy" className="sec-4-about-form__link">Privacy Policy</a>.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
