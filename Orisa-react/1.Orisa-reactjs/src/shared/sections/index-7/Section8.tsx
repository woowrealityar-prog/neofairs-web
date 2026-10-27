import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

{/* Home 7 Section 8 (Team — Dedicated Team + Staggered Portrait Grid) */ }

const EYEBROW_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
    </svg>
);

const CTA_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BADGE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z" fill="currentColor" />
    </svg>
);

const COL1_MEMBERS = [
    {
        name: "Darrell",
        surname: "Steward",
        role: "UI/UX Designer",
        img: "/assets/imgs/pages/home-7/team-1-darrell.webp",
        alt: "Darrell Steward",
        badgeClass: "",
    },
    {
        name: "Amelia",
        surname: "Courtney",
        role: "Project Manager",
        img: "/assets/imgs/pages/home-7/team-2-amelia.webp",
        alt: "Amelia Courtney",
        badgeClass: "sec-8-home-7__badge--dark",
    },
];

const COL2_MEMBERS = [
    {
        name: "Esther",
        surname: "Howard",
        role: "Software Developer",
        img: "/assets/imgs/pages/home-7/team-3-esther.webp",
        alt: "Esther Howard",
        badgeClass: "",
    },
    {
        name: "Jacob",
        surname: "Jones",
        role: "Marketing CEO",
        img: "/assets/imgs/pages/home-7/team-4-jacob.webp",
        alt: "Jacob Jones",
        badgeClass: "",
    },
];

const TESTIMONIAL_ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export type TeamMember = {
    name: string;
    surname: string;
    role: string;
    img: string;
    alt: string;
    badgeClass?: string;
    link?: string;
};

interface Section8Props {
    className?: string;
    containerClass?: string;
    eyebrowText?: string;
    eyebrowLink?: string;
    eyebrowStyle?: "default" | "testimonial";
    titleStyle?: "default" | "testimonial";
    heading?: React.ReactNode;
    desc?: React.ReactNode;
    ctaText?: string;
    ctaLink?: string;
    showCta?: boolean;
    col1Members?: TeamMember[];
    col2Members?: TeamMember[];
}

export default function Section8({
    className,
    containerClass = "container-2200 px-lg-5 px-3",
    eyebrowText = "Meet Our Team",
    eyebrowLink = "/team",
    eyebrowStyle = "default",
    titleStyle = "default",
    heading = "Dedicated Team",
    desc = "Creative experts designing meaningful digital experiences that help ambitious brands grow faster and lead their markets.",
    ctaText = "Join our Team",
    ctaLink = "/team",
    showCta = true,
    col1Members = COL1_MEMBERS,
    col2Members = COL2_MEMBERS,
}: Section8Props) {
    const isTestimonialEyebrow = eyebrowStyle === "testimonial";
    const isTestimonialTitle = titleStyle === "testimonial";

    return (
        <div className={`sec-8-home-7 p-relative bg-neutral-0 ${className ?? ""}`.trim()}>
            <div className={containerClass}>
                <div className="row g-0 align-items-start">
                    {/* LEFT: Eyebrow + heading + description + CTA */}
                    <div className="col-xl-5 col-lg-5 col-12 sec-8-home-7__lead">
                        {eyebrowText && (
                            isTestimonialEyebrow ? (
                                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0 d-inline-flex align-items-center">
                                    <span className="text-uppercase">
                                        <span className="text-1">{eyebrowText}</span>
                                        <span className="text-2">{eyebrowText}</span>
                                    </span>
                                    <i>
                                        {TESTIMONIAL_ARROW_SVG}
                                        {TESTIMONIAL_ARROW_SVG}
                                    </i>
                                </span>
                            ) : (
                                <Link to={eyebrowLink} className="sec-8-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                                    <span className="text-scramble" data-scramble-text={eyebrowText}>{eyebrowText}</span>
                                    {EYEBROW_ARROW_SVG}
                                </Link>
                            )
                        )}

                        {isTestimonialTitle ? (
                            <h3 className="reveal-text mb-20">
                                <RevealText>{heading}</RevealText>
                            </h3>
                        ) : (
                            <h2 className="sec-8-home-7__heading mb-40 reveal-text">
                                <RevealText>{heading}</RevealText>
                            </h2>
                        )}

                        {desc && (
                            <p className="sec-8-home-7__desc mb-40 reveal-text">
                                <RevealText>{desc}</RevealText>
                            </p>
                        )}

                        {showCta && (
                            <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60 at_fade_anim">
                                <Link to={ctaLink} className="at-btn sec-4-home-7__cta-btn text-capitalize">
                                    <span>
                                        <span className="text-1">{ctaText}</span>
                                        <span className="text-2">{ctaText}</span>
                                    </span>
                                </Link>
                                <Link to={ctaLink} className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label={ctaText}>
                                    {CTA_CIRCLE_SVG}
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Staggered 2-column team grid */}
                    <div className="col-xl-7 col-lg-7 col-12 mt-5 mt-lg-0">
                        <div className="sec-8-home-7__grid">
                            {/* Column 1 */}
                            {col1Members.length > 0 && (
                                <div className="sec-8-home-7__col">
                                    {col1Members.map((member, i) => (
                                        <Link
                                            key={i}
                                            to={member.link ?? "/team-details"}
                                            className="sec-8-home-7__card"
                                            aria-label={`${member.name} ${member.surname} — ${member.role}`}
                                        >
                                            <div className="sec-8-home-7__photo">
                                                <div className="fix anim-zoomin">
                                                    <img src={member.img} alt={member.alt} width={400} height={480} loading="lazy" />
                                                </div>
                                            </div>
                                            <span className={`sec-8-home-7__badge${member.badgeClass ? ` ${member.badgeClass}` : ""}`}>
                                                {BADGE_SVG}
                                            </span>
                                            <div className="sec-8-home-7__info">
                                                <h3 className="sec-8-home-7__name mb-0 at_fade_anim">
                                                    {member.name} <br />{member.surname}
                                                </h3>
                                                <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">{member.role}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Column 2 (offset down for staircase effect on desktop) */}
                            {col2Members.length > 0 && (
                                <div className="sec-8-home-7__col sec-8-home-7__col--offset">
                                    {col2Members.map((member, i) => (
                                        <Link
                                            key={i}
                                            to={member.link ?? "/team-details"}
                                            className="sec-8-home-7__card"
                                            aria-label={`${member.name} ${member.surname} — ${member.role}`}
                                        >
                                            <div className="sec-8-home-7__photo">
                                                <div className="fix anim-zoomin">
                                                    <img src={member.img} alt={member.alt} width={400} height={480} loading="lazy" />
                                                </div>
                                            </div>
                                            <span className={`sec-8-home-7__badge${member.badgeClass ? ` ${member.badgeClass}` : ""}`}>
                                                {BADGE_SVG}
                                            </span>
                                            <div className="sec-8-home-7__info">
                                                <h3 className="sec-8-home-7__name mb-0 at_fade_anim">
                                                    {member.name} <br />{member.surname}
                                                </h3>
                                                <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">{member.role}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
