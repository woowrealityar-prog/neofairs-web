import Marquee from "react-fast-marquee";

const STRIP_1_TILES = [
    { img: "sec-1-tile-1.webp", alt: "NeoFairs Expo 1" },
    { img: "sec-1-tile-2.webp", alt: "NeoFairs Expo 2" },
    { img: "sec-1-tile-3.webp", alt: "NeoFairs Expo 3" },
    { img: "sec-1-tile-4.webp", alt: "NeoFairs Expo 4" },
    { img: "sec-1-tile-5.webp", alt: "NeoFairs Expo 5" },
    { img: "sec-1-tile-6.webp", alt: "NeoFairs Expo 6" },
];

const STRIP_2_TILES = [
    { img: "sec-2-project-1.webp", alt: "NeoFairs Showroom 1" },
    { img: "sec-2-project-2.webp", alt: "NeoFairs Showroom 2" },
    { img: "sec-2-project-3.webp", alt: "NeoFairs Showroom 3" },
    { img: "sec-2-project-4.webp", alt: "NeoFairs Showroom 4" },
    { img: "sec-4-process-1.webp", alt: "NeoFairs Showroom 5" },
    { img: "sec-4-process-2.webp", alt: "NeoFairs Showroom 6" },
];

export default function SectionImageStrips() {
    return (
        <section className="sec-image-strips-area pt-120 pb-80 overflow-hidden" aria-label="NeoFairs Showcase Gallery">
            {/* Strip 1: Moves Right to Left (direction="left") */}
            <div className="sec-image-strip-row mb-40">
                <Marquee
                    speed={50}
                    direction="left"
                    pauseOnHover={true}
                    gradient={false}
                >
                    <div className="d-flex align-items-center gap-4 pe-4">
                        {STRIP_1_TILES.map((item, idx) => (
                            <div key={`s1-${idx}`} className="at-gallery-item sec-landscape-tile">
                                <img
                                    className="w-100 h-100 object-fit-cover"
                                    src={`/assets/imgs/pages/home-12/${item.img}`}
                                    alt={item.alt}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* Strip 2: Moves Left to Right (direction="right") */}
            <div className="sec-image-strip-row">
                <Marquee
                    speed={50}
                    direction="right"
                    pauseOnHover={true}
                    gradient={false}
                >
                    <div className="d-flex align-items-center gap-4 pe-4">
                        {STRIP_2_TILES.map((item, idx) => (
                            <div key={`s2-${idx}`} className="at-gallery-item sec-landscape-tile">
                                <img
                                    className="w-100 h-100 object-fit-cover"
                                    src={`/assets/imgs/pages/home-12/${item.img}`}
                                    alt={item.alt}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
