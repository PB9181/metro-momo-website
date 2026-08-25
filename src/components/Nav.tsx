import { useEffect, useRef, useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.tsx";
import { useTranslation, type Language } from "../i18n/index.ts";

const languageOptions: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
];

type NavLinkItem = {
  label: string;
  href: string;
};

type OrderPartner = "uberEats" | "doorDash" | "deliveryHero" | "deliveroo";

function OrderPartnerLogo({ partner }: { partner: OrderPartner }) {
  if (partner === "uberEats") {
    return (
      <svg viewBox="0 0 108 24" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="18" fontSize="16" fontWeight="900" fill="currentColor">
          uber
        </text>
        <text x="42" y="18" fontSize="16" fontWeight="900" fill="#06CBA4">
          eats
        </text>
      </svg>
    );
  }
  if (partner === "doorDash") {
    return (
      <svg viewBox="0 0 116 24" xmlns="http://www.w3.org/2000/svg">
        <text
          x="0"
          y="18"
          fontSize="15"
          fontWeight="900"
          fill="#FF3008"
          letterSpacing="-0.5"
        >
          DoorDash
        </text>
      </svg>
    );
  }
  if (partner === "deliveryHero") {
    return (
      <svg viewBox="0 0 130 24" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="18" fontSize="13" fontWeight="900" fill="#F57F1E">
          delivery
        </text>
        <text x="64" y="18" fontSize="13" fontWeight="900" fill="#E01F26">
          hero
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 110 24" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="18"
        fontSize="16"
        fontWeight="900"
        fill="#00CCBC"
        letterSpacing="-1"
      >
        deliveroo
      </text>
    </svg>
  );
}

export default function Nav() {
  const { t, language, setLanguage } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef<HTMLDivElement>(null);

  const primaryLinks: NavLinkItem[] = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.menu"), href: "/menu" },
    { label: t("nav.locations"), href: "/locations" },
    { label: t("nav.about"), href: "/about" },
  ];

  const companyLinks: NavLinkItem[] = [
    { label: t("nav.company.howItWorks"), href: "/how-it-works" },
    { label: t("nav.company.tech"), href: "/tech" },
    { label: t("nav.company.models"), href: "/models" },
    { label: t("nav.company.faq"), href: "/faq" },
    { label: t("nav.company.franchise"), href: "/contact" },
  ];

  const activeLabel =
    languageOptions.find((option) => option.code === language)?.label ??
    language.toUpperCase();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target as Node)
      ) {
        setCompanyOpen(false);
      }
      if (
        orderRef.current &&
        !orderRef.current.contains(event.target as Node)
      ) {
        setOrderOpen(false);
      }
    };
    if (dropdownOpen || companyOpen || orderOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownOpen, companyOpen, orderOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" aria-label={t("nav.logoAlt")}>
            <Logo width={120} variant="color" />
          </Link>

          <nav
            className={`nav-links ${mobileOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            {primaryLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={handleNavClick}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="nav-dropdown" ref={companyRef}>
              <button
                className={`nav-dropdown-toggle ${companyOpen ? "open" : ""}`}
                onClick={() => setCompanyOpen((open) => !open)}
                aria-expanded={companyOpen}
                aria-haspopup="true"
              >
                <span>{t("nav.company.title")}</span>
                <ChevronDown
                  size={16}
                  className="nav-dropdown-chevron"
                  aria-hidden="true"
                />
              </button>
              {companyOpen && (
                <ul className="nav-dropdown-menu" role="menu">
                  {companyLinks.map((link) => (
                    <li key={link.href} role="none">
                      <Link
                        to={link.href}
                        className="nav-dropdown-link"
                        onClick={() => {
                          handleNavClick();
                          setCompanyOpen(false);
                        }}
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="nav-dropdown nav-order-dropdown" ref={orderRef}>
              <button
                className={`nav-dropdown-toggle ${orderOpen ? "open" : ""}`}
                onClick={() => setOrderOpen((open) => !open)}
                aria-expanded={orderOpen}
                aria-haspopup="true"
              >
                <span>{t("nav.order.title")}</span>
                <ChevronDown
                  size={16}
                  className="nav-dropdown-chevron"
                  aria-hidden="true"
                />
              </button>
              {orderOpen && (
                <ul className="nav-dropdown-menu nav-order-menu" role="menu">
                  <li className="nav-order-group" role="none">
                    <span className="nav-order-section-label">
                      {t("nav.order.pickup")}
                    </span>
                    <Link
                      to="/menu"
                      className="nav-dropdown-link nav-order-link"
                      onClick={() => {
                        handleNavClick();
                        setOrderOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t("nav.order.pickup")}
                    </Link>
                  </li>
                  <li className="nav-order-divider" aria-hidden="true" />
                  <li className="nav-order-group" role="none">
                    <span className="nav-order-section-label">
                      {t("nav.order.delivery")}
                    </span>
                    {(
                      [
                        "uberEats",
                        "doorDash",
                        "deliveryHero",
                        "deliveroo",
                      ] as const
                    ).map((partner) => (
                      <button
                        key={partner}
                        className="nav-order-partner"
                        type="button"
                        disabled
                        aria-label={`${t(`nav.order.${partner}`)} — ${t("nav.order.comingSoon")}`}
                      >
                        <span className="nav-order-logo" aria-hidden="true">
                          <OrderPartnerLogo partner={partner} />
                        </span>
                        <span className="nav-order-badge">
                          {t("nav.order.comingSoon")}
                        </span>
                      </button>
                    ))}
                  </li>
                </ul>
              )}
            </div>

            <div
              className="language-switcher"
              ref={dropdownRef}
              aria-label="Select language"
            >
              <button
                className="language-dropdown-toggle"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
              >
                <Globe
                  size={16}
                  className="language-switcher-icon"
                  aria-hidden="true"
                />
                <span>{activeLabel}</span>
                <ChevronDown
                  size={16}
                  className={`dropdown-chevron ${dropdownOpen ? "open" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen && (
                <ul className="language-dropdown-menu" role="listbox">
                  {languageOptions.map(({ code, label }) => (
                    <li
                      key={code}
                      role="option"
                      aria-selected={language === code}
                    >
                      <button
                        className={`language-dropdown-option ${language === code ? "active" : ""}`}
                        onClick={() => {
                          setLanguage(code);
                          setDropdownOpen(false);
                          handleNavClick();
                        }}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link
              to="/menu"
              className="btn btn-primary nav-cta"
              onClick={handleNavClick}
            >
              {t("nav.cta")}
            </Link>
          </nav>

          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t("nav.menuClose") : t("nav.menuOpen")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 251, 247, 0.92);
          backdrop-filter: blur(14px);
          border-bottom: 2px dashed var(--mm-border);
        }
        .nav-spacer {
          height: 96px;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 96px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .nav-logo:hover {
          transform: rotate(-2deg) scale(1.05);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-weight: 900;
          font-size: 0.95rem;
          color: var(--color-text);
          transition: color 0.2s ease, transform 0.2s ease;
          position: relative;
          padding: 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .nav-link:hover,
        .nav-link.active {
          color: var(--color-primary);
          transform: translateY(-2px);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent));
          border-radius: 4px;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-dropdown {
          position: relative;
        }
        .nav-dropdown-toggle {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 900;
          font-size: 0.95rem;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          padding: 8px 0;
          transition: color 0.2s ease;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .nav-dropdown-toggle:hover,
        .nav-dropdown-toggle.open {
          color: var(--color-primary);
        }
        .nav-dropdown-chevron {
          transition: transform 0.2s ease;
          color: var(--color-primary);
        }
        .nav-dropdown-toggle.open .nav-dropdown-chevron {
          transform: rotate(180deg);
        }
        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          min-width: 220px;
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 2px solid var(--mm-border);
          list-style: none;
          padding: 8px;
          margin: 0;
          z-index: 101;
          overflow: hidden;
          animation: pop-in 0.2s ease;
        }
        .nav-dropdown-link {
          display: block;
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--color-text);
          transition: background-color 0.2s ease, color 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .nav-dropdown-link:hover {
          background: rgba(232, 23, 43, 0.08);
          color: var(--color-primary);
        }
        .nav-order-menu {
          min-width: 240px;
          padding: 12px;
        }
        .nav-order-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .nav-order-section-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-muted);
          padding: 4px 8px;
        }
        .nav-order-link {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-order-divider {
          height: 1px;
          background: var(--mm-border);
          margin: 8px 0;
        }
        .nav-order-partner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          background: transparent;
          border: none;
          cursor: not-allowed;
          opacity: 0.75;
          transition: background-color 0.2s ease;
        }
        .nav-order-partner:hover {
          background: rgba(6, 203, 164, 0.06);
        }
        .nav-order-logo {
          display: inline-flex;
          width: 100px;
          height: 20px;
          color: var(--color-text);
        }
        .nav-order-logo svg {
          width: 100%;
          height: 100%;
        }
        .nav-order-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: var(--radius-round);
          background: rgba(255, 210, 63, 0.2);
          color: #B07D00;
          font-size: 0.65rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .language-switcher {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .language-dropdown-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: var(--radius-round);
          background: rgba(6, 203, 164, 0.1);
          border: 1px solid rgba(6, 203, 164, 0.2);
          color: var(--color-text);
          font-weight: 800;
          font-size: 0.85rem;
          transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }
        .language-dropdown-toggle:hover {
          background: rgba(6, 203, 164, 0.18);
          border-color: rgba(6, 203, 164, 0.35);
          box-shadow: 0 2px 8px rgba(6, 203, 164, 0.12);
        }
        .language-switcher-icon {
          color: var(--color-fresh);
          flex-shrink: 0;
        }
        .dropdown-chevron {
          color: var(--color-fresh);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
        .dropdown-chevron.open {
          transform: rotate(180deg);
        }
        .language-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 140px;
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--mm-border);
          list-style: none;
          padding: 6px;
          margin: 0;
          z-index: 101;
          overflow: hidden;
          animation: pop-in 0.2s ease;
        }
        .language-dropdown-option {
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-weight: 800;
          font-size: 0.85rem;
          color: var(--color-text);
          background: transparent;
          transition: background-color 0.2s ease, color 0.2s ease;
          cursor: pointer;
          border: none;
        }
        .language-dropdown-option:hover,
        .language-dropdown-option.active {
          background: rgba(6, 203, 164, 0.1);
          color: var(--color-fresh-dark);
        }
        .language-dropdown-option.active {
          font-weight: 900;
        }
        .nav-cta {
          padding: 12px 24px;
          font-size: 0.85rem;
        }
        .nav-toggle {
          display: none;
          background: transparent;
          color: var(--color-text);
        }
        @media (max-width: 1024px) {
          .nav-links {
            gap: 20px;
          }
          .nav-link,
          .nav-dropdown-toggle {
            font-size: 0.85rem;
          }
        }
        @media (max-width: 900px) {
          .nav-inner {
            height: 80px;
          }
          .nav-toggle {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            max-width: 100vw;
            height: calc(100vh - 80px);
            height: calc(100dvh - 80px);
            background: var(--color-bg);
            flex-direction: column;
            gap: 8px;
            padding: 24px;
            transform: translateX(100%);
            transition: transform 0.3s ease, visibility 0.3s ease;
            align-items: flex-start;
            visibility: hidden;
            overflow-x: hidden;
            display: none;
            overflow-y: auto;
          }
          .nav-links.open {
            display: flex;
            transform: translateX(0);
            visibility: visible;
          }
          .nav-link {
            font-size: 1.25rem;
            padding: 12px 0;
            width: 100%;
          }
          .nav-dropdown {
            width: 100%;
          }
          .nav-dropdown-toggle {
            width: 100%;
            justify-content: space-between;
            font-size: 1.25rem;
            padding: 12px 0;
          }
          .nav-dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            background: var(--color-surface);
            animation: none;
            margin-top: 4px;
          }
          .nav-dropdown-link {
            padding: 14px 16px;
            font-size: 1rem;
          }
          .nav-order-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            background: var(--color-surface);
            animation: none;
            margin-top: 4px;
            padding: 10px;
          }
          .nav-order-section-label {
            font-size: 0.75rem;
            padding: 6px 8px;
          }
          .nav-order-partner {
            padding: 12px 14px;
          }
          .nav-order-logo {
            width: 110px;
            height: 24px;
          }
          .nav-order-badge {
            font-size: 0.7rem;
          }
          .nav-spacer {
            height: 80px;
          }
          .language-switcher {
            width: 100%;
            margin-top: 8px;
          }
          .language-dropdown-toggle {
            width: 100%;
            justify-content: center;
            padding: 12px 16px;
            font-size: 1rem;
          }
          .language-dropdown-menu {
            position: static;
            width: 100%;
            margin-top: 8px;
            box-shadow: var(--shadow-md);
          }
          .language-dropdown-option {
            padding: 12px 16px;
            font-size: 1rem;
          }
          .nav-cta {
            margin-top: 16px;
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .nav-logo svg {
            width: 100px !important;
            height: auto !important;
          }
        }
      `}</style>
      </header>
      <div className="nav-spacer" aria-hidden="true" />
    </>
  );
}
