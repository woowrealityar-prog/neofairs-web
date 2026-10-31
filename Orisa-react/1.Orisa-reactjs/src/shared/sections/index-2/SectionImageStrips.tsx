import Marquee from "react-fast-marquee";

const STRIP_1_TILES = [
    { src: "/assets/imgs/pages/neoweb/home/Dignitaries 1.webp", alt: "NeoFairs Dignitary 1" },
    { src: "/assets/imgs/pages/neoweb/home/Dignitaries 2.webp", alt: "NeoFairs Dignitary 2" },
    { src: "/assets/imgs/pages/neoweb/home/Dignitaries 3.webp", alt: "NeoFairs Dignitary 3" },
    { src: "/assets/imgs/pages/neoweb/home/Dignitaries 4.webp", alt: "NeoFairs Dignitary 4" },
    { src: "/assets/imgs/pages/neoweb/home/Dignitaries 5.webp", alt: "NeoFairs Dignitary 5" },
    { src: "/assets/imgs/pages/neoweb/home/Dignitaries 6.webp", alt: "NeoFairs Dignitary 6" },
];

const STRIP_2_TILES = [
    { src: "/assets/imgs/pages/neoweb/home/face 1.webp", alt: "NeoFairs Face 1" },
    { src: "/assets/imgs/pages/neoweb/home/face 2.webp", alt: "NeoFairs Face 2" },
    { src: "/assets/imgs/pages/neoweb/home/face 3.webp", alt: "NeoFairs Face 3" },
    { src: "/assets/imgs/pages/neoweb/home/face 4.webp", alt: "NeoFairs Face 4" },
    { src: "/assets/imgs/pages/neoweb/home/face 5.webp", alt: "NeoFairs Face 5" },
    { src: "/assets/imgs/pages/neoweb/home/face 6.webp", alt: "NeoFairs Face 6" },
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
                                    src={item.src}
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
                                    src={item.src}
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
