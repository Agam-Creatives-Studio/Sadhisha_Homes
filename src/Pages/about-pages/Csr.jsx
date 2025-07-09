import React, { useEffect } from 'react'

import logo from '../../assets/images/home/builig black and white.jpg';
import { Section } from '../../layouts/Section';
import '../../styles/pages/about-pages/csr.css'

import client from '../../assets/images/about/client-centric.png'
import sustainable from '../../assets/images/about/sustainable.png'
import workforce from '../../assets/images/about/workforce.png'
import upcomming from '../../assets/images/about/upcomming-projects.png'
import csrData from '../../assets/data/csrData';
import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
} from 'react-icons/fa';

const Csr = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0; // html
    document.body.scrollTop = 0; // body
    window.scrollTo(0, 0); // window fallback
  }, []);

  const {
    charityData
  } = csrData
  return (
    <div>
      {/* sustinalble construction section START*/}
      <div className="our-story-section px-md-0 px-2 py-md-0 py-3">
        <Section>
          <div className="row align-items-center justify-content-between">
           <div className="d-md-none d-block mb-3">
                
              <h2 className="secTitleGreen text-md-start text-center">Design Excellence Rooted in Sustainability</h2>
              <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   > Eco-Architecture with Human Touch</p>

              </div>

            <div className="col-md-7 p-md-4">
              <div className="row justify-content-center d-flex">
                <div className="col-6 pb-md-5 align-items-start  flex-row-center">
                  <div className='position-relative '>
                    <img src={logo} alt="Workforce" className="img-fluid rounded" />


                  </div>

                </div>
                <div className="col-6 pt-md-5 align-items-end  flex-row-center">
                  <div className='position-relative  '>
                    <img src={logo} alt="Workforce" className="img-fluid rounded" />


                  </div>

                </div>
              </div>
            </div>

            {/* Left Side Content */}
            <div className="col-md-5 mb-4 mb-md-0">
              <div className="d-md-block d-none">
                
              <h2 className="secTitleGreen text-md-start text-center">Design Excellence Rooted in Sustainability</h2>
              <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   > Eco-Architecture with Human Touch</p>

              </div>
              <p className="paraBlack mt-3">
                At Sadhisha, we believe that great architecture is not just about structures—but about harmony with nature. As one of India’s Top 10 Sustainable Design Firms, we bring over 30 years of rich experience in crafting eco-architecture that blends aesthetics, function, and environmental responsibility. <br />
                From eco-friendly homes, schools, and workplaces to hotels, resorts, campuses, and institutions, our projects reflect a commitment to green living and long-term well-being. Every structure is thoughtfully designed to reduce environmental impact while enhancing user comfort and energy efficiency.

              </p>
              <div className=" d-flex justify-content-center justify-content-md-start">
                <a href='#contact-section' className="btn green-btn mt-4">
                Join Us
              </a>
              </div>
            </div>

            <div className="py-md-5 py-5">
              <h4 className="subTitleGreen mb-md-5 mb-5 fs-3 text-md-start text-center"> Our Sustainability Commitment Includes</h4>

              <div className="row justify-content-evenly">
                <div className="col-md-3 mb-md-0 mb-3">
                  <div className="mission-vision-card">

                    <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                      <img src={client} width={120} alt="" />
                    </div>
                    <h4 className="subTitleBlack mb-md-4 text-center mb-2 fs-5">Use of eco-conscious materials</h4>
                  </div>
                </div>
                <div className="col-md-3 mb-md-0 mb-3">
                  <div className="mission-vision-card">

                    <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                      <img src={upcomming} width={120} alt="" />
                    </div>
                    <h4 className="subTitleBlack mb-md-4 text-center mb-2 fs-5">Integration of energy-efficient systems</h4>

                  </div>
                </div>
                <div className="col-md-3 mb-md-0 mb-3">
                  <div className="mission-vision-card">

                    <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                      <img width={120} src={workforce} alt="" />
                    </div>
                    <h4 className="subTitleBlack mb-md-4 text-center mb-2 fs-5">Water conservation and waste reduction strategies</h4>

                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mission-vision-card">

                    <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                      <img src={sustainable} width={120} alt="" />
                    </div>
                    <h4 className="subTitleBlack mb-md-4 text-center mb-2 fs-5">Climate-responsive designs that respect local ecosystems</h4>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </Section>
      </div>
      {/* sustinalble construction section END*/}


      {/* Charitable TrbgGreenust Section START */}

      <div className="bgGreen py-md-0 py-3 px-md-0 px-2">
        <Section>
          <div className="row align-items-center justify-content-between">


            {/* Left Side Content */}
            <div className="col-md-5 mb-4 mb-md-0">

              <h2 className="secTitleWhite text-md-start text-center">Sadhisha Charitable Trust</h2>
              <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-md-start text-center"   >  Building Communities Beyond Construction</p>

              <p className="paraWhite mt-3">
                Driven by a deep commitment to social upliftment, Mr. Bipin Rananaware founded the Sadhisha Charitable Trust as the philanthropic arm of Sadhisha Homes. Guided by his vision of inclusive growth, the Trust actively engages in initiatives that support the health, dignity, and well-being of underprivileged communities.
              </p>
              <a href='#contact-section' className="btn white-btn d-md-block d-none mt-4">
               Join Us
              </a>
            </div>

            {/* Right Side Image & Badge */}

            <div className="col-md-7 p-md-4">
              <div className="row justify-content-center d-flex">
                <div className="col-6 pb-md-5 align-items-start  flex-row-center">
                  <div className='position-relative '>
                    <img src={logo} alt="Workforce" className="img-fluid rounded" />


                  </div>

                </div>
                <div className="col-6 pt-md-5 align-items-end  flex-row-center">
                  <div className='position-relative  '>
                    <img src={logo} alt="Workforce" className="img-fluid rounded" />


                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center d-md-none py-4">
                 <a className="btn white-btn mt-4">
                LEARN MORE
              </a>
              </div>
            </div>

            <hr className="d-md-none hrTag my-4 d-block" />


            <div className=" py-md-5 py-3">
              <h4 className="subTitleWhite  mb-md-5 mb-3 fs-3 text-md-start text-center"> Our Key Initiatives Include</h4>

              <div className="row justify-content-center md-md-0">
                {charityData.map((charity, index) => (
                  <div className="col-md-3 mb-2" key={index}>
                    <div className="position-relative core-values-image-wrapper">
                      <img
                        src={charity.img}
                        alt={charity.title}
                        className="img-fluid"
                      />
                      <div className="core-values-overlay-content">
                        <h3 className="core-values-overlay-title subTitleWhite">{charity.title}</h3>
                        <p className="core-values-overlay-description paraWhite">{charity.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </Section>
      </div>
      {/* Charitable Trust Section END */}

      {/* contact section  START */}

      <div className='bgWhite' id='contact-section'>
        <Section>

          <div>
            <div className="row d-flex justify-content-center py-md-5  py-3">
              <div className="col-md-7">
                <div className="pb-md-4 pb-2">
                  <h2 className="secTitleGreen mb-md-3 text-md-start text-center"> Get In Touch </h2>
                  <p className='paraBlack col-md-10 text-md-start text-center'>
                    Whether you’re exploring property options, seeking partnership, or have a general enquiry.
                  </p>
                </div>
                <div className="row d-flex justify-content-md-start justify-content-center">

                  <div className='py-md-2 col-md-5 '>
                    <div className="contact-card">
                      <h3 className="subTitleGreen d-flex">
                        <FaPhoneAlt className='me-2' />
                        <span><h5>Enquire Us</h5></span>
                      </h3>
                      <ul>
                        <p className='paraBlack'>
                          <span><a className='text-decoration-none paraBlack footer-links' href="+tel: +91 95855 54502 "> +91 95855 54502 </a></span><br />
                          <span><a className='text-decoration-none paraBlack footer-links' href="+tel: +91 95855 54505 "> +91 95855 54505 </a></span>
                        </p>
                      </ul>
                    </div>

                  </div>

                  <div className='py-md-2 col-md-5 '>
                    <div className="contact-card">
                      <h3 className="subTitleGreen d-flex">
                        <FaEnvelope className='me-2' />
                        <span><h5>Mail Us</h5></span>
                      </h3>
                      <ul>
                        <p className='paraBlack'>
                          <span><a className='text-decoration-none paraBlack footer-links' href="mailto:sadhishahomes@gmail.com">sadhishahomes@gmail.com</a></span><br />
                          <span><a className='text-decoration-none paraBlack footer-links' href="mailto:contact.sadhisha@gmail.com">  sadhisha@gmail.com</a></span>
                        </p>
                      </ul>
                    </div>

                  </div>


                </div>

                <div className="row d-flex justify-content-md-start justify-content-center pt-3 mb-md-5">
                  <div className='py-md-2 col-md-5 '>
                    <div className="contact-card">
                      <h3 className="subTitleGreen d-flex">
                        <FaLocationArrow className='me-2' />
                        <span><h5>Head Office - Puducherry</h5></span>
                      </h3>
                      <ul>
                        <p className='paraBlack'>Sadhisha, <br />
                          [Insert Address Line Here] <br />
                          Puducherry – [PIN Code]
                          India
                        </p>
                      </ul>
                    </div>

                  </div>


                  <div className='py-md-2 col-md-5 '>
                    <div className="contact-card">
                      <h3 className="subTitleGreen d-flex">
                        <FaLocationArrow className='me-2' />
                        <span><h5>Branch - Chennai</h5></span>
                      </h3>
                      <ul>
                        <p className='paraBlack'>Sadhisha, <br />
                          [Insert Address Line Here] <br />
                          Chennai – [PIN Code]
                          India
                        </p>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>

              <div className="col-md-5">
                <div className="pb-md-4 pb-2">
                  <h2 className="secTitleGreen mb-md-3 text-md-start text-center"> Enquire Us</h2>
                  <p className='paraBlack col-md-10 text-md-start text-center'>
                    Just Say Hello, Our Team Will Reach You as Soon as Possible
                  </p>
                </div>
                <GeneralEnquiryForm />
              </div>
            </div>

          </div>

        </Section>
      </div>

      {/* contact section  END */}
    </div>
  )
}

export default Csr