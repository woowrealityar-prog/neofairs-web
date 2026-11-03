const PLAY_SVG = (
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="currentColor" />
    </svg>
);

interface MarqueeRow {
    dir: "left" | "right";
    items: string[];
}

const DEFAULT_MARQUEE_ROWS: MarqueeRow[] = [
    { dir: "left", items: ["NEOFAIRS TEASER", "•", "WATCH NOW", "•", "PLAY", "•", "VIRTUAL TRADE FAIRS", "•"] },
    { dir: "right", items: ["SCROLL TO REVEAL", "•", "NEOFAIRS", "•", "GLOBAL EXPORT", "•", "2026", "•"] },
    { dir: "left", items: ["PLAY", "•", "TEASER", "•", "TRADE FAIR TEASER", "•", "WATCH", "•"] },
    { dir: "right", items: ["VIRTUAL TRADE FAIRS", "•", "NEOFAIRS 2026", "•", "PLAY", "•", "WATCH TEASER", "•"] },
];

function MarqueeRowEl({ row }: { row: MarqueeRow }) {
    return (
        <div className={`postbox-scroll-zoom-marquee-row dir-${row.dir}`}>
            <div className="postbox-scroll-zoom-marquee-track">
                {row.items.map((item, i) => (
                    <span key={`a-${i}`}>{item}</span>
                ))}
                {row.items.map((item, i) => (
                    <span key={`b-${i}`}>{item}</span>
                ))}
            </div>
        </div>
    );
}

interface Section11Props {
    videoUrl?: string;
    imgSrc?: string;
    marqueeRows?: MarqueeRow[];
    className?: string;
}

export default function Section11({
    videoUrl = "https://www.youtube.com/watch?v=oSA0lyzJDds",
    imgSrc = "/assets/imgs/pages/neoweb/virtual-trade-fairs/welcome-to-neofairs.webp",
    marqueeRows = DEFAULT_MARQUEE_ROWS,
    className = "",
}: Section11Props) {
    return (
        <div className={`container-2200 ${className}`.trim()}>
            <section className="home-2-section-11 postbox-scroll-zoom mx-lg-3 mx-2 mt-50 align-items-center justify-content-center">
                <div className="postbox-item-wrap">
                    <div className="postbox-item">
                        <div className="postbox-thumb p-relative rounded-5">
                            <div className="postbox-scroll-zoom-marquee" aria-hidden="true">
                                {marqueeRows.map((row, i) => (
                                    <MarqueeRowEl key={i} row={row} />
                                ))}
                            </div>
                            <a href={videoUrl} className="popup-video" target="_blank" rel="noopener noreferrer">
                                <img className="postbox-scroll-zoom-img img-cover" src={imgSrc} alt="NeoFairs" loading="lazy" />
                            </a>
                            <div className="postbox-play-btn postbox-scroll-zoom-play z-index-1 d-flex align-items-center justify-content-center gap-3">
                                <h1 className="text-white d-none d-md-flex">Play</h1>
                                <a
                                    className="popup-video"
                                    href={videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-white">{PLAY_SVG}</span>
                                </a>
                                <h1 className="text-white d-none d-md-flex">Teaser</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
