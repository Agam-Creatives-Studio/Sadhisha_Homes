
import React, { useEffect } from 'react';
import { Section } from '../../layouts/Section';
import '../../styles/pages/affilate-pages/sadhisha-homes.css';
import AuroArchitectsData from '../../assets/data/auroArchitectsData'
import building from '../../assets/images/home/builig black and white.jpg';
import dummy2 from '../../assets/images/home/dummy1.jpg';
import dummy1 from '../../assets/images/home/dummy2.jpg';

import logo from '../../assets/images/common/sadhisha-half-logo.jpg';

import SadhishaConstructionLogo from '../../assets/images/common/SADHISHA CONSTRUCTION/1.png';

import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';
import sadhishaConstructionData from '../../assets/data/sadhishaConstructionData'

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
import ContactDetails from '../../Components/index-pages/ContactDetails';

const SadhishaConstruction = () => {

    useEffect(() => {
      document.documentElement.scrollTop = 0; // html
      document.body.scrollTop = 0; // body
      window.scrollTo(0, 0); // window fallback
    }, []);
  const { whyChooseSadhishaConstruction } = sadhishaConstructionData;

  return (
    <div>
      <div className="bgWhite">
        <Section>
          <div className="md-md-0">
                <div className=" flex-row-center mb-3" >
                          <img src={SadhishaConstructionLogo} width={130} alt="SadhishaConstructionLogo" style={{ borderRadius: "50%" }} />
                        </div>
            <div className="flex-row-center row mb-md-2 mb-2">
              <h4 className="subTitleGreen fs-3 text-center">Sadhisha Construction Technologies</h4>
              <p
                className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-center"
              
              >
                Build Better, Faster, Smarter
              </p>

            </div>

            {/* ✅ Bootstrap 5 Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80"

                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Third slide"
                  />
                </div>
              </div>
              {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button> */}
            </div>

          </div>
          <div className="row flex-row-center pt-md-5 pt-3">
            <p className="paraBlack col-md-10  text-md-center px-4 px-md-0">
              At Sadhisha Construction Technologies, we blend engineering excellence with modern innovations to transform how spaces are imagined and built. Our approach prioritizes speed, strength, sustainability, and design flexibility—empowering developers and businesses to build better, faster, and smarter.
            </p>
          </div>
        </Section>
      </div>
      {/*benefits of rapid construction Section START */}
      <div className="bgGreen py-md-0 py-3">
        <Section>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 mb-4 mb-md-0">
              <h2 className="secTitleWhite text-md-start text-center">What is Rapid Building System?</h2>
              <p className="subParaTextWhite text-uppercase mb-md-4 mb-4 text-md-start text-center" >Build Your Future While Building Others’ Dreams</p>
              <p className="paraWhite mt-3  px-4 px-md-0">
                A breakthrough in modern construction, the Rapid Building System uses light gauge steel structures instead of traditional steel or concrete frameworks.
              </p>

              <div className="py-3">
                <div className="d-flex gap-3 mb-md-0 mb-2 align-items-center">

                  <img src={logo} width={40} className='mb-3' alt="" />
                  <h5 className='subTitleWhite fs-6'>
                    Stronger and more durable structural performance
                  </h5>

                </div>
                <div className=" d-flex gap-3 mb-md-0 mb-2 align-items-center">

                  <img src={logo} width={40} className='mb-3' alt="" />
                  <h5 className='subTitleWhite fs-6'>
                    Lightweight yet resilient in diverse environments                  </h5>

                </div>
                <div className=" d-flex gap-3 mb-md-0 mb-2 align-items-center">

                  <img src={logo} width={40} className='mb-3' alt="" />
                  <h5 className='subTitleWhite fs-6' >
                    Simplified construction process and faster delivery
                  </h5>

                </div>

              </div>
            </div>

            <div className="col-md-7 p-md-4">
              <div className="row justify-content-center d-flex">
                <div className="col-6 pb-md-5 align-items-start flex-row-center">
                  <div className='position-relative'>
                    <img src={building} alt="Workforce" className="img-fluid rounded" />
                  </div>
                </div>
                <div className="col-6 pt-md-5 align-items-end d-flex gap-3 flex-column">
                  <div className='position-relative'>
                    <img src={dummy1} alt="Workforce" className="img-fluid rounded" />
                  </div>
                  <div className='position-relative'>
                    <img src={dummy2} alt="Workforce" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
      {/*benefits of rapid construction Section END */}

      {/* why world moving forward section START */}
      
            
                  <div className="bgWhite py-md-0 py-3">
                    <Section>
                      <div className="row justify-content-center md-md-0">
                        <div className='flex-row-center row mb-md-5 mb-3'>
                          <h4 className="subTitleGreen fs-3 text-center">Join the Sadhisha Growth Network</h4>
                          <p className="subParaGreen text-uppercase mb-md-4 mb-4 text-center" >Channel Partner Program</p>
                          <p className='paraBlack col-md-9 text-center'>
                            Become a valued part of the Sadhisha Homes sales ecosystem.
                            Whether you're an experienced broker, a retired professional, a college student, or someone seeking part-time income—this is your opportunity to earn while you grow.
                          </p>
                        </div>
            
                        <div className="row justify-content-evenly">
                          {whyChooseSadhishaConstruction.map((benefit, index) => (
                            <div className="col-md-2 mb-4 d-flex justify-content-center" key={index}>
                              <div className='benefit-card'>
                                <div className="text-center channel-partner-benefit-img-box mb-3">
                                  <img src={benefit.image} alt={benefit.title} style={{ width: '100px' }} />
            
                                </div>
                                <h5 className="subTitleGreen text-center my-md-3 my-1">
                                  {benefit.title}
                                </h5>
                                <p className="paraBlack fs-6 text-center mb-md-3">{benefit.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Section>
                  </div>
                 
            {/* why world moving forward section END */}
      <hr />

      {/*contact section  START */}

      <div className='bgWhite'>
        <Section>

          <div>
            <div className="row d-flex justify-content-center py-md-5  py-3">
              <div className="col-md-7">
                <ContactDetails/>

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
  );
};

export default SadhishaConstruction;
