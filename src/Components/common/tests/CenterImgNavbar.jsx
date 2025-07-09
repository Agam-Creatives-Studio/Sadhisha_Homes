import { useState } from "react";
import { useNavigate } from "react-router-dom";

import sadhishaLogo from "../../../assets/images/common/SADHISHA LOGO 1/2.png";
import '../../styles/components/common/navbar.css';

const CenterImgNavbar = () => {
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
    navigate(path);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg  d-flex justify-content-center" style={{backgroundColor:"rgba(0,0,0,0.6)",backdropFilter:"blur(10px)"}}>
      <div className=" align-items-center d-flex justify-content-center">

        <ul className="navbar-nav gap-3">

              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link"
                  data-bs-dismiss="offcanvas"
                  onClick={(e) => handleNavClick(e, "/")}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/projects"
                  className="nav-link"
                  data-bs-dismiss="offcanvas"
                  onClick={(e) => handleNavClick(e, "/projects")}
                >
                  Projects
                </a>
              </li>

              <li className={`nav-item dropdown ${isAffiliatesOpen ? "show" : ""}`} {...affiliates}>
                <span
                  className={`nav-link dropdown-toggle ${isAffiliatesOpen ? "show" : ""}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isAffiliatesOpen ? "true" : "false"}
                  onClick={affiliates.onClick}
                >
                  Our Companies
                </span>
                <ul className={`dropdown-menu ${isAffiliatesOpen ? "show" : ""}`}>
                  <li>
                    <a
                      href="/sadhisha-realty"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/sadhisha-realty", affiliates.onItemClick)}
                    >
                      Sadhisha Realty
                    </a>
                  </li>
                  <li>
                    <a
                      href="/auro-architects"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/auro-architects", affiliates.onItemClick)}
                    >
                      Auro Architects
                    </a>
                  </li>


                  <li>
                    <a
                      href="/sadhisha-constructions"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/sadhisha-constructions", affiliates.onItemClick)}
                    >
                      Sadhisha Construction Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sadhisha-homes"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/sadhisha-homes", affiliates.onItemClick)}
                    >
                      Sadhisha Homes
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sadhisha-rapid-edge"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/sadhisha-rapid-edge", affiliates.onItemClick)}
                    >
                      Sadhisha Rapid Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sadhisha-interiors"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/sadhisha-interiors", affiliates.onItemClick)}
                    >
                      Sadhisha Interiors
                    </a>
                  </li>
                </ul>
              </li>

             
            </ul>

        <div className="ms-5">
          <a className="navbar-brand" href="/" onClick={(e) => handleNavClick(e, "/")}>
            <img className="bannerLogo" width={130} src={sadhishaLogo} style={{borderRadius:"50%"}} alt="sadhishaLogo" />
          </a>

        

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            ☰
          </button>
        </div>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar">
          <div className="offcanvas-body d-flex flex-column flex-lg-row justify-content-lg-start me-5">
            <button
              type="button"
              className="btn-close ms-auto mt-3 me-3 d-lg-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>

            <ul className="navbar-nav gap-3">

             

              <li className="nav-item">
                <a
                  href="/investor-club"
                  className="nav-link"
                  data-bs-dismiss="offcanvas"
                  onClick={(e) => handleNavClick(e, "/investor-club")}
                >
                  Investor Club
                </a>
              </li>

              <li className={`nav-item dropdown ${isAboutOpen ? "show" : ""}`} {...about}>
                <span
                  className={`nav-link dropdown-toggle ${isAboutOpen ? "show" : ""}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isAboutOpen ? "true" : "false"}
                  onClick={about.onClick}
                >
                  About
                </span>
                <ul className={`dropdown-menu ${isAboutOpen ? "show" : ""}`}>
                  <li>
                    <a
                      href="/about"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/about", about.onItemClick)}
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/recognition"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/recognition", about.onItemClick)}
                    >
                      Awards & Recognition
                    </a>
                  </li>
                  <li>
                    <a
                      href="/corprate-social-responsibility"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/corprate-social-responsibility", about.onItemClick)}
                    >
                      CSR
                    </a>
                  </li>
                </ul>
              </li>

              <li className={`nav-item dropdown ${isJoinOpen ? "show" : ""}`} {...join}>
                <span
                  className={`nav-link dropdown-toggle ${isJoinOpen ? "show" : ""}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isJoinOpen ? "true" : "false"}
                  onClick={join.onClick}
                >
                  Join
                </span>
                <ul className={`dropdown-menu ${isJoinOpen ? "show" : ""}`}>
                  <li>
                    <a
                      href="/careers"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/careers", join.onItemClick)}
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/channel-partners"
                      className="dropdown-item"
                      data-bs-dismiss="offcanvas"
                      onClick={(e) => handleNavClick(e, "/channel-partners", join.onItemClick)}
                    >
                      Channel Partners
                    </a>
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

export default CenterImgNavbar;
