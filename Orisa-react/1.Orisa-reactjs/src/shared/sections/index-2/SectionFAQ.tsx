import { useState } from "react";
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const BTN_CIRCLE_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const FAQ_ITEMS = [
    {
        id: "faqOne",
        num: "1",
        question: "Do I need a tech team?",
        answer: "No. We build it. You manage it from a simple dashboard.",
    },
    {
        id: "faqTwo",
        num: "2",
        question: "How long until my showroom is live?",
        answer: "Essentials and Showcase in days. Signature and Immersive in 2–4 weeks.",
    },
    {
        id: "faqThree",
        num: "3",
        question: "Can I use my showroom at a physical fair?",
        answer: "Yes. Walk-ins scan your QR; buyers who couldn't travel step in from anywhere.",
    },
    {
        id: "faqFour",
        num: "4",
        question: "Do you take commission on sales?",
        answer: "No. You keep 100%.",
    },
    {
        id: "faqFive",
        num: "5",
        question: "Who owns my buyer data?",
        answer: "You do.",
    },
];

export default function SectionFAQ({ classList = "" }: { classList?: string }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (idx: number) => {
        setOpenIndex((prev) => (prev === idx ? null : idx));
    };

    return (
        <div className={`alt-faq-area pt-145 pb-100 ${classList || ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="alt-faq-title-wrap mb-40">
                            <div className="rounded-4 overflow-hidden anim-zoomin">
                                <img
                                    src="/assets/imgs/pages/neoweb/home/faq.webp"
                                    width={600}
                                    height={700}
                                    className="w-100"
                                    alt="NeoFairs FAQ"
                                    loading="lazy"
                                />
                            </div>
                            <h6 className="mb-15 pt-50">Still have questions? We can help!</h6>
                            <p className="at-faq-dec mb-35">Speak with our team to find the right solution for your business.</p>
                            <div
                                className="at-btn-group btn-brand-1 at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/contact-1">
                                    {BTN_CIRCLE_ARROW_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/contact-1">
                                    Book a Free Demo
                                </Link>
                                <Link className="at-btn-circle" to="/contact-1">
                                    {BTN_CIRCLE_ARROW_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="at-faq ml-115">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">FAQ</span>
                                    <span className="text-2">FAQ</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                                <RevealText>
                                    Questions we hear most.
                                </RevealText>
                            </h2>
                            <div className="accordion pt-30" id="accordionNeoFairsFAQ">
                                {FAQ_ITEMS.map((item, idx) => {
                                    const isOpen = openIndex === idx;
                                    return (
                                        <div key={item.id} className="at-faq-item rounded-4 mb-3">
                                            <div className="at-faq-header d-flex gap-2">
                                                <div className="box-number">
                                                    <span className="at-faq-number">{item.num}</span>
                                                </div>
                                                <button
                                                    className={`at-faq-button${isOpen ? "" : " collapsed"}`}
                                                    type="button"
                                                    onClick={() => toggleItem(idx)}
                                                    aria-expanded={isOpen}
                                                    aria-controls={item.id}
                                                >
                                                    {item.question}
                                                </button>
                                            </div>
                                            <div
                                                id={item.id}
                                                className={`at-faq-collapse collapse${isOpen ? " show" : ""}`}
                                                style={{
                                                    display: "grid",
                                                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                                                    transition: "grid-template-rows 300ms ease, opacity 300ms ease",
                                                    opacity: isOpen ? 1 : 0,
                                                    visibility: isOpen ? "visible" : "hidden",
                                                }}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="at-faq-body">
                                                        <p className="mb-0">{item.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
