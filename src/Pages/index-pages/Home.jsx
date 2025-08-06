import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


import { Section } from '../../layouts/Section';
import { Page } from '../../layouts/Page'
import '../../styles/pages/index-pages/home.css';

import HomeData from '../../assets/data/homeData';

import { BsBuildings } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import founderAchievement from '../../assets/images/home/founder-achievement.png'
import ApproachTimeline from '../../Components/index-pages/ApproachTimelinie';
import heroVideo from '../../assets/images/home/hero-video (1).mp4';
import { Link } from 'react-router-dom';
import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';
import ContactDetails from '../../Components/index-pages/ContactDetails';
import gsap from 'gsap';


const Home = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0; // html
    document.body.scrollTop = 0; // body
    window.scrollTo(0, 0); // window fallback
  }, []);

  const {
    dataStats,
    serviceCategories,
    pillars,
    departments,
    affiliatesData

  } = HomeData;

  const [hovered, setHovered] = useState(null);


  // Set up the inView observer
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // trigger when 30% of the section is visible
  });




  return (
    <div>

      {/* Hero Section START */}
      <div className="video-banner">
        <video autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>


        {/* <div className="overlay-content">
          <h1>Your Title Here</h1>
          <p>Your subtitle or call to action</p>
        </div> */}
      </div>
      {/* Hero Section END */}

      {/* Welcome Section */}
      <div className="welcome-container">
        <Section>
          <div className="d-flex flex-column justify-content-md-between justify-content-center welcome-message">
            <div className='heading-contet flex-row-center row mx-md-0 mx-1'>
              <h1 className='secTitleWhite text-center col-md-9'>
                Global Leader in Real Estate, Architecture and Construction
                Crafting Landmarks. Building Legacies.
              </h1>
              <p className="paraWhite col-md-9 text-center">
                Sadhisha has been transforming India’s Real Estate — creating residential, commercial,
                industrial and institutional projects that blend modern living with sustainability,
                reflecting our versatility and expertise.
              </p>
            </div>

            {/* <div className='flex-row-center row'>
              <button className='btn black-btn'>Scroll Down <MdKeyboardDoubleArrowDown /></button>
            </div> */}
          </div>
        </Section>
      </div>
      {/* Welcome Section END*/}

      {/* Data Section START*/}
      <div className="data-section">
        <Section>
          <div ref={ref}>
            <div className="row justidy-content-center align-items-center d-flex text-center">
              {dataStats.map((item, index) => (
                <div className="col-md-3 mb-md-1 mb-4" key={index}>
                  <h2 className="titleGreen fw-bold  text-center">
                    {inView ? (
                      <CountUp end={item.value} duration={2} separator="," suffix={item.suffix} />
                    ) : (
                      '0'
                    )}
                  </h2>
                  <p className="count-label paraBlack text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
      {/* Data Section END*/}

      {/* Services Section Start */}

      <div className='bgGreen px-md-0 px-2 py-md-0 py-3'>
        <Section>

          <div className='mb-md-4 mb-5 row flex-row-center '>
            <h2 className="secTitleWhite mb-md-3 mb-2 text-center"> OUR SERVICES </h2>
            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-center">  Innovative, Sustainable Building Solutions </p>

          </div>
          <div className="row justify-content-center">

            {
              serviceCategories.map((category, index) => (
                <div className="col-md-4">
                  <div key={index} className='rounded-2 services-category-card mb-md-4 mb-3 '>
                    <div className='mb-4'>
                      <img src={category.image} width={100} alt="" />
                    </div>
                    <div className="service-body">

                      <h3 className="subTitleGreen mb-3">
                        {category.title}
                      </h3>
                      {/* <p className='para1'>{service.description}</p> */}

                      {category.services.map((service, index) => (

                        <li className='list-unstyled paraBlack  ms-1 mb-2 text-start' key={index}><BsBuildings className='fs-6 me-2' />{service}</li>

                      ))}

                    </div>
                  </div>
                </div>

              ))
            }
          </div>

          <div className="row flex-row-center">
             <a href='#contact-section' className="btn green-btn mt-4">
                  Enquire Us
                </a>
          </div>
        </Section>
      </div>
      {/* Services Section END */}

      {/* Approach section Start */}

      <div className='bgWhite approach-section py-5 px-md-0 px-2'>

        <div className='mb-md-4 mb-5 row flex-row-center'>
          <h2 className="secTitleGreen mb-md-3 mb-2 text-center"> Our Approach </h2>

          <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-center" >  From Concept to Completion, We Build with Precision. </p>

        </div>

        <div className="row justify-content-center pb-md-4 pb-3">
          <ApproachTimeline />

        </div>
      </div>
      {/* Approach section END */}


      {/* Founder Achievement Section START */}
      <div className='bgGreen px-md-0 px-2 py-md-0 py-3'>
        <Section>

          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleWhite mb-md-3 mb-2 text-center"> Sadhisha - Leaders of Change </h2>
            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2  text-center" >
              Redefining the Built Environment
            </p>

          </div>
          <div className="row justify-content-center">
            <img src={founderAchievement} alt="founderAchievement" />
          </div>
        </Section>
      </div>
      {/* Founder Achievement Section END */}


      {/* Departments section START */}

      <div className='bgWhite px-4 px-md-2 py-md-5 py-5'>
        <div className='mb-md-4 mb-5 row flex-row-center'>
          <h2 className="secTitleGreen mb-md-3 mb-2 text-center"> Our End-to-End Ecosystem </h2>
          <p className="subParaTextGreen text-uppercase mb-md-4 mb-2  text-center"  >  From Vision to Completion. </p>

          
        </div>
        <div className="row justify-content-center md-md-0">
          {departments.map((department, index) => (
            <div className="department-card mb-4" key={index}>
              <div className="position-relative department-image-wrapper">
                <img
                  src={department.image}
                  alt={department.title}
                  className="img-fluid"
                />
                <div className="department-overlay-content">
                  <h3 className="department-overlay-title subTitleWhite">{department.title}</h3>
                  <p className="department-overlay-description paraWhite">{department.description}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

        <div className="row flex-row-center">
          <p className="paraBlack col-md-10 text-center">
            At Sadhisha, we don’t just build structures—we build a seamless ecosystem where
            every stage of real estate development is managed in-house with precision, passion, and
            purpose. From land acquisition and financial planning to architectural design,
            construction, marketing, and after-sales support—our integrated model ensures
            efficiency, transparency, and exceptional value for every stakeholder. Explore the
            divisions that power our promise of excellence:
          </p>
        </div>
        <div className="row flex-row-center">
             <a href='#contact-section' className="btn green-btn mt-4">
                  Enquire Us
                </a>
          </div>
      </div>
      {/* Departments section END */}


      {/* Affilates section START */}

      <div className='bgGreen px-md-0 px-2 py-md-0 py-3'>
        <Section>
          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleWhite mb-md-3 mb-2 text-center"> OUR Companies </h2>
            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2  text-center"  >  Integrated Strength. Unified Vision. </p>


          </div>
          <div className="row justify-content-center">
            {
              affiliatesData.map((affiliates, index) => (
                <div className="col-md-4">
                  <div key={index} className='rounded-2 affilates-card  mb-md-4 mb-3 '>
                    <div className='mb-4 flex-row-center'>
                      <img src={affiliates.image} width={180} style={{borderRadius:"50%"}} alt="" />
                    </div>
                    <div className="service-body ">

                      <h3 className="subTitleGreen mb-3 text-center">
                        {affiliates.name}
                      </h3>
                      {/* <p className='para1'>{service.description}</p> */}
                      <p className=' paraBlack  ms-1 mb-2 text-center' >{affiliates.description}</p>

                    </div>

                    <div className='row flex-row-center py-3'>
                      <Link to={`${affiliates.route}`} className='btn green-btn'> Know More </Link>
                    </div>
                  </div>
                </div>

              ))
            }
          </div>

          <div className="row flex-row-center pt-md-4 pt-3">
            <p className="paraWhite col-md-10 text-center">
              Sadhisha operates through a well-defined ecosystem of expert verticals, each
              contributing uniquely to our design, development, and execution excellence. Together,
              these entities ensure that every project is delivered with precision, purpose, and high
              integrity.
            </p>
          </div>
        </Section>
      </div>
      {/* Affilates section END */}



      {/* FACTOR section START */}

      <div className='bgWhite px-md-0 px-2 py-md-0 py-3'>
        <Section>
          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleGreen mb-md-3 mb-2 text-center"> SADHISHA FACTOR </h2>
            <p className="subParaTextGreen text-uppercase mb-md-4 mb-2  text-center"  >  Sustainable. Ethical. Client-Focused.</p>


          </div>
          <div className="row justify-content-center">
            {pillars.map((pillar, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="position-relative">
                  <div className="pillar-image-wrapper">
                    <img
                      src={pillar.image || "https://via.placeholder.com/300x200?text=Placeholder"}
                      alt={pillar.title}
                      className="img-fluid rounded"
                    />
                    <h3 className="pillars-overlay-text ">{pillar.title}</h3>
                  </div>
                  <p className="mt-3 paraBlack text-center">{pillar.description}</p>
                </div>
              </div>
            ))}

          </div>
          <hr />
        </Section>

      </div>
      {/* FACTOR section END */}



      {/*contact section  START */}

      <div id='contact-section' className='bgWhite px-md-0 px-2 py-md-0'>
        <Section>

          <div>
            <div className="row d-flex justify-content-center py-md-5 py-3">
              <div className="col-md-7 mb-md-0 mb-5">
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

    </div >


  );
};

export default Home;
