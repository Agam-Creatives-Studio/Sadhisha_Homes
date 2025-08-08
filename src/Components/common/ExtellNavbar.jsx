import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sadhishaLogo from "../../assets/images/common/SADHISHA LOGO 1/2.png";
import '../../styles/components/common/navbar.css';

const ExtellNavbar = () => {
  const navigate = useNavigate();

  const [isAffiliatesOpen, setIsAffiliatesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const handleDropdown = (setter) => ({
    onMouseEnter: () => window.innerWidth >= 992 && setter(true),
    onMouseLeave: () => window.innerWidth >= 992 && setter(false),
    onClick: (e) => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        setter((prev) => !prev);
      }
    },
    onItemClick: () => window.innerWidth >= 992 && setter(false),
  });

  const affiliates = handleDropdown(setIsAffiliatesOpen);
  const about = handleDropdown(setIsAboutOpen);
  const join = handleDropdown(setIsJoinOpen);

  const handleNavClick = (e, path, onItemClick) => {
    e.preventDefault();
    if (onItemClick) onItemClick();
    document.querySelector('.offcanvas.show')?.classList.remove('show'); // close offcanvas manually
    document.body.classList.remove('offcanvas-backdrop');
    navigate(path);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg d-flex justify-content-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}>
      <div className="align-items-center d-flex flex-column w-100 justify-content-center">
        <div className="w-100 px-3 d-flex justify-content-between align-items-center">
          <a className="navbar-brand mx-md-auto" href="/" onClick={(e) => handleNavClick(e, "/")}>
            <img className="bannerLogo" width={130} src={sadhishaLogo} style={{ borderRadius: "50%" }} alt="sadhishaLogo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            ☰
          </button>
        </div>

        <hr className="hrTag w-100 d-md-block d-none" />

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar">
          <div className="offcanvas-body d-flex flex-column flex-lg-row justify-content-lg-start me-5">
            <button type="button" className="btn-close ms-auto mt-3 me-3 d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a href="/" className="nav-link" data-bs-dismiss="offcanvas" onClick={(e) => handleNavClick(e, "/")}>Home</a>
              </li>
              <li className="nav-item">
                <a href="/projects" className="nav-link" data-bs-dismiss="offcanvas" onClick={(e) => handleNavClick(e, "/projects")}>Projects</a>
              </li>
              <li className="nav-item">
                <a href="https://agamcreatives.site/ongoing-projects/" className="nav-link" >Ongoing Projects</a>
              </li>

              {/* Dropdown - Our Companies */}
              <li className={`nav-item dropdown ${isAffiliatesOpen ? "show" : ""}`} {...affiliates}>
                <span className={`nav-link dropdown-toggle ${isAffiliatesOpen ? "show" : ""}`}
                  role="button" aria-expanded={isAffiliatesOpen} onClick={affiliates.onClick}>
                  Our Companies
                </span>
                <ul className={`dropdown-menu ${isAffiliatesOpen ? "show" : ""}`}>
                  {[
                    { path: "/sadhisha-realty", label: "Sadhisha Realty" },
                    { path: "/auro-architects", label: "Auro Architects" },
                    { path: "/sadhisha-constructions", label: "Sadhisha Construction Technologies" },
                    { path: "/sadhisha-homes", label: "Sadhisha Homes" },
                    { path: "/sadhisha-rapid-edge", label: "Sadhisha Rapid Edge" },
                    { path: "/sadhisha-interiors", label: "Sadhisha Interiors" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <a href={path} className="dropdown-item" data-bs-dismiss="offcanvas"
                        onClick={(e) => handleNavClick(e, path, affiliates.onItemClick)}>{label}</a>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Investor Club */}
              <li className="nav-item">
                <a href="/investor-club" className="nav-link" data-bs-dismiss="offcanvas"
                  onClick={(e) => handleNavClick(e, "/investor-club")}>Investor Club</a>
              </li>

              {/* Dropdown - About */}
              <li className={`nav-item dropdown ${isAboutOpen ? "show" : ""}`} {...about}>
                <span className={`nav-link dropdown-toggle ${isAboutOpen ? "show" : ""}`}
                  role="button" aria-expanded={isAboutOpen} onClick={about.onClick}>
                  About
                </span>
                <ul className={`dropdown-menu ${isAboutOpen ? "show" : ""}`}>
                  <li><a href="/about" className="dropdown-item" data-bs-dismiss="offcanvas"
                    onClick={(e) => handleNavClick(e, "/about", about.onItemClick)}>About Us</a></li>
                  <li><a href="/recognition" className="dropdown-item" data-bs-dismiss="offcanvas"
                    onClick={(e) => handleNavClick(e, "/recognition", about.onItemClick)}>Awards & Recognition</a></li>
                  <li><a href="/corprate-social-responsibility" className="dropdown-item" data-bs-dismiss="offcanvas"
                    onClick={(e) => handleNavClick(e, "/corprate-social-responsibility", about.onItemClick)}>CSR</a></li>
                </ul>
              </li>

              {/* Dropdown - Join */}
              <li className={`nav-item dropdown ${isJoinOpen ? "show" : ""}`} {...join}>
                <span className={`nav-link dropdown-toggle ${isJoinOpen ? "show" : ""}`}
                  role="button" aria-expanded={isJoinOpen} onClick={join.onClick}>
                  Join
                </span>
                <ul className={`dropdown-menu ${isJoinOpen ? "show" : ""}`}>
                  <li><a href="/careers" className="dropdown-item" data-bs-dismiss="offcanvas"
                    onClick={(e) => handleNavClick(e, "/careers", join.onItemClick)}>Careers</a></li>
                  <li><a href="/channel-partners" className="dropdown-item" data-bs-dismiss="offcanvas"
                    onClick={(e) => handleNavClick(e, "/channel-partners", join.onItemClick)}>Channel Partners</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ExtellNavbar;
