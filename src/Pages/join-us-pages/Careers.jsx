import React, { useEffect } from 'react'
import building from '../../assets/images/home/builig black and white.jpg';
import logo from '../../assets/images/common/sadhisha-half-logo.jpg'
import { Section } from '../../layouts/Section';
import '../../styles/pages/join-us-pages/careers.css';
import careerData from '../../assets/data/careerData';

import { GoArrowUpRight } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
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
import { Link } from 'react-router-dom';
import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';
import ContactDetails from '../../Components/index-pages/ContactDetails';
import CareerEnquiryForm from '../../Components/Forms/CareerEnquiryForm';



const Careers = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0; // html
    document.body.scrollTop = 0; // body
    window.scrollTo(0, 0); // window fallback
  }, []);

  const {
    currentOpenings,
    careerBenefitsData
  } = careerData

  return (
    <div>
      {/*Career Welcome Section START */}
      <div className="bgWhite py-3 py-md-0">
        <Section>
          <div className="row align-items-center justify-content-between">
            <div className="d-md-none d-block mb-md-0 mb-4">
              <h2 className="secTitleGreen text-md-start text-center">Career at Sadhisha </h2>
              <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center" >Build Your Future While Building Others’ Dreams</p>
            </div>
            <div className="col-md-5 mb-4 mb-md-0 order-2 order-md-1 px-md-0 px-4">

              <div className="d-md-block d-none">
                <h2 className="secTitleGreen text-md-start text-center">Career at Sadhisha </h2>
                <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center" >Build Your Future While Building Others’ Dreams</p>
              </div>

              <p className="paraBlack mt-3">
                At Sadhisha Homes, we are proud to be one of the fastest-growing real estate brands and top developers in Puducherry. But our real strength lies in the people behind the progress. <br /><br />
                We believe in creating high-performance teams driven by passion, purpose, and excellence. Our work culture nurtures self-motivated professionals who aspire to grow—not just in their careers, but as individuals. Every role at Sadhisha is seen as a leadership opportunity, and every employee is empowered to make meaningful contributions

              </p>

              <div className=" d-flex justify-content-center justify-content-md-start">
                <a className="btn green-btn mt-4">
                  Join Us
                </a>
              </div>
            </div>

            <div className="col-md-7 p-md-4 order-1 order-md-2">
              <div className="row justify-content-center d-flex">
                <div className="col-6 pb-md-5 pb-3 align-items-start  flex-row-center">
                  <div className='position-relative'>
                    <img src={building} alt="Workforce" className="img-fluid rounded " />
                  </div>

                </div>
                <div className="col-6 pt-md-5 pt-3 align-items-end  flex-row-center">
                  <div className='position-relative  '>
                    <img src={building} alt="Workforce" className="img-fluid rounded" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
      {/*Career Welcome Section END */}

      <div className=" bgGreen py-3 py-md-0 px-md-0 px-2">
        <Section>
          <div className='flex-row-center row mb-md-5 mb-3'>
            <h4 className="subTitleWhite fs-3 text-center">Why Work With Us?</h4>
            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-center">Carrer at sadhisha</p>
                     </div>


          <div className="row justify-content-center md-md-0">
            {careerBenefitsData.map((benefits, index) => (
              <div className="col-md-3 mb-md-2 mb-3" key={index}>
                <div className="position-relative career-benefits-image-wrapper">
                  <img
                    src={benefits.image}
                    alt={benefits.title}
                    className="img-fluid"
                  />
                  <div className="career-benefits-overlay-content">
                    <h3 className="career-benefits-overlay-title subTitleWhite">{benefits.title}</h3>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="row flex-row-center mt-3">
             <p className='paraWhite col-md-9 text-center'>
              If you're someone who thrives on challenges, believes in innovation, and is ready to push the boundaries of your potential—Sadhisha Homes is the place for you.  </p>

          </div>
        </Section>
      </div>


      {/* Current Openings Section START */}
      {/*Career Welcome Section END */}

      <div className="bgWhite py-md-0 py-3 px-md-0 px-2">
        <Section>
          <div className='flex-row-center row mb-md-5 mb-5'>
            <h4 className="subTitleGreen fs-3 text-center">Currently We Are Hiring For </h4>
            <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-center" >choose your role in sadhisha</p>

          </div>


          <div className="row justify-content-center md-md-0">
            {currentOpenings.map((opening, index) => (
              <div className="col-md-9 mb-2" key={index}>
                <div className="row ">
                  <div className="d-md-flex justify-content-between align-items-center pt-3 mb-md-0 mb-3">
                    <h3 className="subTitleGreen mb-md-3 mb-3 ">{opening.title}</h3>
                  <a href='' className="paraGreen btn btn-outline-dark rounded-5 apply-btn py-2  px-3">Apply Now<GoArrowUpRight /></a>
                  </div>
                  <p className='paraBlack col-md-9'>{opening.description}</p>
                </div>
                <div className='flex-md-row flex-column gap-3 d-md-flex '>
                  <p className="paraBlack btn btn-dark apply-btn px-3 py-2 rounded-5">
                    <CiLocationOn className='fs-4 me-2' />{opening.location}
                  </p>
                  <p className="paraBlack btn btn-dark apply-btn px-3 py-2 rounded-5">
                    <PiSuitcaseSimpleThin className='fs-4 me-2' />{opening.department}
                  </p>
                </div>
                <hr className='bg-dark opacity-100' />
              </div>

            ))}


          </div>

        </Section>
      </div>
      {/* Current Openings Section END */}

      {/* contact section  START */}

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
                <CareerEnquiryForm />
              </div>
            </div>

          </div>

        </Section>
      </div>
    </div>
  )
}

export default Careers