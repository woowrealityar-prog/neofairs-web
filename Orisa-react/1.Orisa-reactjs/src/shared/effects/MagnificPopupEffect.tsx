import { useEffect } from "react";
import { useLocation } from "react-router-dom";
type WindowWithGlobals = Window & {
    jQuery?: ((selector: string) => {
        magnificPopup: (opts: object) => unknown;
        length: number;
    }) & {
        fn?: { magnificPopup?: unknown };
    };
};

const SCRIPTS = [
    "/assets/scripts/jquery-3.7.1.min.js",
    "/assets/scripts/jquery.magnific-popup.min.js",
];

const loadScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(
            `script[data-mfp-src="${src}"]`
        );
        if (existing) {
            if (existing.dataset.loaded === "true") {
                resolve();
                return;
            }
            existing.addEventListener("load", () => resolve(), { once: true });
            existing.addEventListener("error", () => reject(new Error(`Failed: ${src}`)), { once: true });
            return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.dataset.mfpSrc = src;
        s.addEventListener("load", () => {
            s.dataset.loaded = "true";
            resolve();
        });
        s.addEventListener("error", () => reject(new Error(`Failed: ${src}`)));
        document.body.appendChild(s);
    });

const initPopups = () => {
    const $ = (window as WindowWithGlobals).jQuery;
    if (!$ || !$.fn || typeof $.fn.magnificPopup !== "function") return;
    if ($(".popup-video").length) {
        $(".popup-video").magnificPopup({
            type: "iframe",
            callbacks: {
                markupParse: function (template: any, values: any, item: any) {
                    const url = (item && item.src) ? String(item.src) : "";
                    const isReel = url.includes("instagram.com") || url.includes("/reel/") || url.includes("/p/");
                    const wrap = (window as WindowWithGlobals).jQuery?.magnificPopup?.instance?.wrap;
                    if (wrap) {
                        if (isReel) {
                            wrap.addClass("mfp-reel-popup");
                        } else {
                            wrap.removeClass("mfp-reel-popup");
                        }
                    }
                },
            },
            iframe: {
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "https://www.youtube.com/embed/%id%?autoplay=1",
                    },
                    youtu_be: {
                        index: "youtu.be/",
                        id: "/",
                        src: "https://www.youtube.com/embed/%id%?autoplay=1",
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "https://player.vimeo.com/video/%id%?autoplay=1",
                    },
                    instagram: {
                        index: "instagram.com/",
                        id: function (url: string) {
                            const m = url.match(/\/(?:reel|p)\/([^/?#&]+)/);
                            return m ? m[1] : "";
                        },
                        src: "https://www.instagram.com/reel/%id%/embed",
                    },
                },
            },
        });
    }
    if ($(".popup-image").length) {
        $(".popup-image").magnificPopup({
            type: "image",
            gallery: { enabled: true },
        });
    }
};

export default function MagnificPopupEffect() {
    const pathname = useLocation().pathname;

    useEffect(() => {
        let cancelled = false;

        (async () => {
            try {
                for (const src of SCRIPTS) {
                    await loadScript(src);
                    if (cancelled) return;
                }
            } catch {
                return;
            }
            if (cancelled) return;
            initPopups();
        })();

        return () => {
            cancelled = true;
        };
    }, [pathname]);

    return null;
}
