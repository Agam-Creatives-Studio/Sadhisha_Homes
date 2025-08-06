import React, { useEffect } from 'react';
import { Section } from '../../layouts/Section';
import '../../styles/pages/affilate-pages/auro-architect.css';
import AuroArchitectsData from '../../assets/data/auroArchitectsData'
import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';

import AuroLogo from '../../assets/images/common/AURO ARCHITECTS/1.png';

import ContactDetails from '../../Components/index-pages/ContactDetails';

const AuroArchitects = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0; // html
    document.body.scrollTop = 0; // body
    window.scrollTo(0, 0); // window fallback
  }, []);
  const { specializationData } = AuroArchitectsData
  return (
    <div>
      <div className="bgWhite">
        <Section>
          <div className="md-md-0">
            <div className=" flex-row-center mb-3" >
              <img src={AuroLogo} width={130} alt="AuroLogo" style={{ borderRadius: "50%" }} />
            </div>
            <div className="flex-row-center row mb-md-2 mb-2">
              <h4 className="subTitleGreen fs-3 text-center">Auro Architects</h4>
              <p
                className="paraGreen text-uppercase mb-md-4 mb-2 text-center"
                style={{ letterSpacing: '3px', fontSize: '14px' }}
              >
                Architecture in Harmony with Nature
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
            <p className="paraBlack col-md-10 text-md-center px-4 px-md-0">
              Auro Architects is the creative design force behind many of Sadhisha’s most iconic projects. Recognized as one of India’s Top 10 Sustainable Design Firms, Auro brings over 30 years of experience in delivering world-class architecture that blends innovation with environmental responsibility.
              With a philosophy rooted in architecture in harmony with nature, Auro Architects specializes in eco-architecture, urban planning, interior design, and landscape development. Their approach balances functionality, aesthetics, and sustainability—creating spaces that are not only beautiful but deeply meaningful and future-ready.
              Whether it’s residential communities, institutional campuses, resorts, or mixed-use developments, Auro Architects continues to set benchmarks for responsible, human-centered design.

            </p>
          </div>
        </Section>
      </div>

      {/* Specialzation Section START */}
      <div className="bgWhite">
        <Section>
          <div className="row justify-content-center md-md-0">
            <div className='flex-row-center row mb-md-5 mb-3'>
              <h4 className="secTitleGreen text-center">Our Specialization</h4>
              <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-center"   >Architecture in Harmony with Nature</p>
              <p className='paraBlack col-md-9 text-center'>
                At Sadhisha and Auro Architects, we combine aesthetics with purpose—delivering spaces that are innovative, functional, and timeless. Our multi-disciplinary expertise ensures that every element of the built environment is thoughtfully crafted and seamlessly integrated.
              </p>
            </div>

            <div className="row justify-content-center pb-md-5">
              {specializationData.map((specialization, index) => (
                <div className="col-md-4 mb-md-4 mb-5 pb-md-0 pb-5 d-flex justify-content-center" key={index}>
                  <div className="hexagon-card">
                    <div className="hexagon-card-content px-4 py-3">
                      <div className="text-center mb-2">
                        <img src={specialization.image} alt={specialization.title} style={{ width: '80px' }} />
                      </div>
                      <h4 className="subTitleWhite my-3 fs-5 text-center">
                        {specialization.title}
                      </h4>
                      <p className="fs-6 paraWhite text-center">{specialization.description}</p>
                    </div>
                  </div>

                  <div className="normal-specialization-card rounded-3 bgGreen">
                    <div className="normal-specialization-card-content p-3">
                      <div className="text-center my-3">
                        <img src={specialization.image} alt={specialization.title} style={{ width: '80px' }} />
                      </div>
                      <h4 className="subTitleWhite my-3 fs-5 text-center">
                        {specialization.title}
                      </h4>
                      <p className="fs-6 paraWhite text-center">{specialization.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Section>
      </div>
      {/* Specialzation Section END */}

      {/* contact section  START */}

      <div className='bgWhite'>
        <Section>

          <div>
            <div className="row d-flex justify-content-center py-md-5  py-3">
              <div className="col-md-7">
                <ContactDetails />

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

export default AuroArchitects;
