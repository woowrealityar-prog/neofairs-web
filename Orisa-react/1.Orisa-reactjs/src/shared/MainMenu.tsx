import { NavLink } from "react-router-dom";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";

type Item = { to: string; label: string };

const COMPANY_LINKS: Item[] = [
  { to: "/about-us", label: "About" },
  { to: "/careers", label: "Careers" },
];

function MenuLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : undefined)}>
      {children}
    </NavLink>
  );
}

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

export default function MainMenu() {
  return (
    <MainMenuRootList>
      <li>
        <NavLink to="/">
          <LinkSwap label="Home" />
        </NavLink>
      </li>

      <li>
        <NavLink to="/virtual-trade-fairs">
          <LinkSwap label="Virtual Trade Fairs" />
        </NavLink>
      </li>

      <li>
        <NavLink to="/living-showroom">
          <LinkSwap label="Living Showroom" />
        </NavLink>
      </li>

      <li>
        <NavLink to="/marketplace">
          <LinkSwap label="Marketplace" />
        </NavLink>
      </li>

      <li>
        <NavLink to="/pricing">
          <LinkSwap label="Pricing" />
        </NavLink>
      </li>

      <li className="has-dropdown">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <LinkSwap label="Company" />
        </a>
        <ul className="at-submenu submenu" style={{ minWidth: "160px", width: "auto" }}>
          {COMPANY_LINKS.map((l) => (
            <li key={l.label} style={{ display: "block", width: "100%" }}>
              <MenuLink to={l.to}>{l.label}</MenuLink>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <NavLink to="/contact-1">
          <LinkSwap label="Contact" />
        </NavLink>
      </li>
    </MainMenuRootList>
  );
}
