
import React, { useEffect } from 'react';
import { Section } from '../../layouts/Section';
import '../../styles/pages/affilate-pages/sadhisha-homes.css';
import AuroArchitectsData from '../../assets/data/auroArchitectsData'
import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';
import sadhishaHomesData from '../../assets/data/sadhishaHomesData'

  import SadhishaHomesLogo from '../../assets/images/common/SADHISHA LOGO 1/1.png';


import ContactDetails from '../../Components/index-pages/ContactDetails';

const SadhishaRealty = () => {

    useEffect(() => {
      document.documentElement.scrollTop = 0; // html
      document.body.scrollTop = 0; // body
      window.scrollTo(0, 0); // window fallback
    }, []);
  const { developmentFeaturesData } = sadhishaHomesData;

  return (
    <div>
      <div className="bgWhite">
        <Section>
          <div className="md-md-0">
                <div className=" flex-row-center mb-3" >
                                      <img src={SadhishaHomesLogo} width={130} alt="SadhishaHomesLogo" style={{ borderRadius: "50%" }} />
                                    </div>
            <div className="flex-row-center row mb-md-2 mb-2">
              <h4 className="subTitleGreen fs-3 text-center">Sadhisha Homes</h4>
              <p
                className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-center"
              
              >
                Comfort, Wellness, and Sustainability
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
              We specialize in creating sustainable, human-centered spaces—from eco-friendly homes and smart workplaces to educational campuses, institutions, hotels, and resorts. Every structure we build is thoughtfully designed to promote comfort, health, and harmony with nature, while meeting the evolving needs of modern living.
            </p>
          </div>
        </Section>
      </div>

      {/* Development so far section START */}

      <div className='bgGreen'>
        <Section>
          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleWhite mb-md-3 mb-2 text-center"> Developments So Far </h2>
                          <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-center"   >Architecture in Harmony with Nature</p>

           
          </div>
          <div className="row justify-content-center">
            {
              developmentFeaturesData.map((point, index) => (
                <div className="col-md-3 d-flex align-items-start justify-content-center">
                  <div key={index} className='rounded-2 py-md-5 px-md-3 p-3 developmentFeaturesCard mb-md-4 mb-3 '>
                    <div className='d-flex justify-content-center mb-md-4 mb-3' >
                      <img className='p-3' src={point.image} width={120} alt="" style={{border:"1px solid var(--gold)",borderRadius:"50%"}}/>
                    </div>
                    <div className="service-body align-items-start d-flex row justify-content-center">

                      <div><h3 className="subTitleWhite mb-3 fs-5 text-center">
                        {point.title}
                      </h3>
                        
                      </div>
                      {/* <p className='para1'>{service.description}</p> */}


                    </div>


                  </div>
                </div>

              ))
            }
          </div>
           <div className="row flex-row-center pt-md-5 py-3">
            <p className="paraWhite col-md-10 text-center px-4 px-md-0">
              With over 24 years of experience, 250+ successful project handovers, and more than 10,000 satisfied residents, Sadhisha Homes continues to lead the way in delivering thoughtful, sustainable spaces that improve lives.
              We specialize in designing and constructing a wide range of eco-conscious buildings, including:

            </p>
           </div>
        </Section>
      </div>
      {/*  Development so far section END */}

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

export default SadhishaRealty;
