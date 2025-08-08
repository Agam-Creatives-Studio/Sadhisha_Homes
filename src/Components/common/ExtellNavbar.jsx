import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sadhishaLogo from "../../assets/images/common/SADHISHA LOGO 1/2.png";
import '../../styles/components/common/navbar.css';

const ExtellNavbar = () => {
  const navigate = useNavigate();

  const [isAffiliatesOpen, setIsAffiliatesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const handleNavClick = (e, path, closeDropdown) => {
    e.preventDefault();
    if (closeDropdown) closeDropdown();

    // Close offcanvas menu on mobile using Bootstrap's JS API
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement && window.bootstrap) {
      const offcanvasInstance = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }

    navigate(path);
  };

  const getDropdownHandlers = (setOpen) => ({
    onMouseEnter: () => window.innerWidth >= 992 && setOpen(true),
    onMouseLeave: () => window.innerWidth >= 992 && setOpen(false),
    onClickToggle: (e) => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    },
    close: () => {
      if (window.innerWidth >= 992) setOpen(false);
    }
  });

  const affiliates = getDropdownHandlers(setIsAffiliatesOpen);
  const about = getDropdownHandlers(setIsAboutOpen);
  const join = getDropdownHandlers(setIsJoinOpen);

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
                <a href="/" className="nav-link" onClick={(e) => handleNavClick(e, "/")}>Home</a>
              </li>

              <li className="nav-item">
                <a href="/projects" className="nav-link" onClick={(e) => handleNavClick(e, "/projects")}>Projects</a>
              </li>

              <li className="nav-item">
                <a href="https://agamcreatives.site/ongoing-projects/" className="nav-link" target="_blank" rel="noreferrer">Ongoing Projects</a>
              </li>

              {/* Our Companies Dropdown */}
              <li
                className={`nav-item dropdown ${isAffiliatesOpen ? "show" : ""}`}
                onMouseEnter={affiliates.onMouseEnter}
                onMouseLeave={affiliates.onMouseLeave}
              >
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${isAffiliatesOpen ? "show" : ""}`}
                  onClick={affiliates.onClickToggle}
                  aria-expanded={isAffiliatesOpen}
                >
                  Our Companies
                </a>
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
                      <a className="dropdown-item" href={path} onClick={(e) => handleNavClick(e, path, affiliates.close)}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <a href="/investor-club" className="nav-link" onClick={(e) => handleNavClick(e, "/investor-club")}>Investor Club</a>
              </li>

              {/* About Dropdown */}
              <li
                className={`nav-item dropdown ${isAboutOpen ? "show" : ""}`}
                onMouseEnter={about.onMouseEnter}
                onMouseLeave={about.onMouseLeave}
              >
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${isAboutOpen ? "show" : ""}`}
                  onClick={about.onClickToggle}
                  aria-expanded={isAboutOpen}
                >
                  About
                </a>
                <ul className={`dropdown-menu ${isAboutOpen ? "show" : ""}`}>
                  <li>
                    <a href="/about" className="dropdown-item" onClick={(e) => handleNavClick(e, "/about", about.close)}>About Us</a>
                  </li>
                  <li>
                    <a href="/recognition" className="dropdown-item" onClick={(e) => handleNavClick(e, "/recognition", about.close)}>Awards & Recognition</a>
                  </li>
                  <li>
                    <a href="/corprate-social-responsibility" className="dropdown-item" onClick={(e) => handleNavClick(e, "/corprate-social-responsibility", about.close)}>CSR</a>
                  </li>
                </ul>
              </li>

              {/* Join Dropdown */}
              <li
                className={`nav-item dropdown ${isJoinOpen ? "show" : ""}`}
                onMouseEnter={join.onMouseEnter}
                onMouseLeave={join.onMouseLeave}
              >
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${isJoinOpen ? "show" : ""}`}
                  onClick={join.onClickToggle}
                  aria-expanded={isJoinOpen}
                >
                  Join
                </a>
                <ul className={`dropdown-menu ${isJoinOpen ? "show" : ""}`}>
                  <li>
                    <a href="/careers" className="dropdown-item" onClick={(e) => handleNavClick(e, "/careers", join.close)}>Careers</a>
                  </li>
                  <li>
                    <a href="/channel-partners" className="dropdown-item" onClick={(e) => handleNavClick(e, "/channel-partners", join.close)}>Channel Partners</a>
                  </li>
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
