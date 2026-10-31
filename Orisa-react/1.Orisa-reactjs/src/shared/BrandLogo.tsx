import { Link } from "react-router-dom";

interface BrandLogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

/**
 * BrandLogo automatically switches between light mode and dark mode SVG icons:
 * - Light theme: /assets/imgs/pages/neoweb/neo-light.svg (dark text)
 * - Dark theme:  /assets/imgs/pages/neoweb/neo-dark.svg  (white text)
 */
export default function BrandLogo({
  className = "",
  width = 160,
  height = 42,
  showText = false,
}: BrandLogoProps) {
  return (
    <Link to="/" className={`text-decoration-none d-inline-flex align-items-center gap-2 ${className}`.trim()}>
      <span className="brand-logo-swap d-inline-flex align-items-center">
        {/* neo-light.svg shown in light mode */}
        <img
          src="/assets/imgs/pages/neoweb/neo-light.svg"
          alt="NeoFairs"
          width={width}
          height={height}
          className="brand-logo-img brand-logo-light"
          style={{ width: "auto", height: `${height}px`, maxHeight: "100%", objectFit: "contain" }}
        />
        {/* neo-dark.svg shown in dark mode */}
        <img
          src="/assets/imgs/pages/neoweb/neo-dark.svg"
          alt="NeoFairs"
          width={width}
          height={height}
          className="brand-logo-img brand-logo-dark"
          style={{ width: "auto", height: `${height}px`, maxHeight: "100%", objectFit: "contain" }}
        />
      </span>
      {showText && <h6 className="fw-700 fz-24 mb-0">NeoFairs</h6>}
    </Link>
  );
}
