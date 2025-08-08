import React, { useEffect } from "react";
import { Section } from "../../layouts/Section";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

import logo from "../../assets/images/home/builig black and white.jpg";
import InvestorClubForm from "../../Components/Forms/InvestorClubForm";
import ContactDetails from "../../Components/index-pages/ContactDetails";

gsap.registerPlugin(SplitText);

const InvestorClub = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="our-story-section">
        <Section>
          <div className="row align-items-center justify-content-between">
            {/* Image Section */}
            <div className="col-md-7 p-md-4 mb-md-0 mb-3">
              <div className="row justify-content-center d-flex">
                <div className="col-6 pb-md-5 pb-3 flex-row-center">
                  <div className="position-relative">
                    <img
                      src={logo}
                      alt="Investor"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <div className="col-6 pt-md-5 pt-3 flex-row-center">
                  <div className="position-relative">
                    <img
                      src={logo}
                      alt="Investor"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="col-md-5 mb-4 mb-md-0 px-md-0 px-4">
              <div className="overflow-hidden">
                <h2 className="  secTitleGreen text-md-start text-center">
                  Investor Club
                </h2>
              </div>
              <p className="  subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center">
                Global Vision, Local Expertise
              </p>

              <p className=" paraBlack mt-3">
                At Sadhisha, we help you navigate your property investment
                journey with confidence and clarity. Whether you're exploring
                promising land opportunities in Puducherry or top-tier
                residential and commercial projects in Chennai, or India or
                Worldwide — our experts are here to guide you. Our diverse
                portfolio offers a wide range of investment options across
                segments—ensuring you find the right fit for your goals and
                budget.
              </p>

              <div className="d-flex justify-content-md-start justify-content-center">
                <a href="#contact-section" className="btn green-btn mt-4">
                  Enquire Us
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <hr id="contact-section" />

      {/* Contact Section */}
      <div className="bgWhite">
        <Section>
          <div className="row d-flex justify-content-center py-md-5 py-3">
            <div className="col-md-7">
              <ContactDetails />
            </div>

            <div className="col-md-5">
              <div className="pb-md-4 pb-2">
                <h2 className="secTitleGreen  mb-md-3 text-md-start text-center">
                  Enquire Us
                </h2>
                <p className="paraBlack  col-md-10 text-md-start text-center">
                  Just Say Hello, Our Team Will Reach You as Soon as Possible
                </p>
              </div>
              <InvestorClubForm />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default InvestorClub;
