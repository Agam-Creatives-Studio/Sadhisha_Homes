import React, { useEffect } from 'react';
import building from '../../assets/images/home/builig black and white.jpg';
import logo from '../../assets/images/common/sadhisha-half-logo.jpg'
import { Section } from '../../layouts/Section';
import '../../styles/pages/join-us-pages/channel-partners.css';

import { Link } from 'react-router-dom';
import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';

import ContactDetails from '../../Components/index-pages/ContactDetails';
import channelPartnerData from '../../assets/data/ChannelPartnerData';


const ChannelPartners = () => {
    useEffect(() => {
      document.documentElement.scrollTop = 0; // html
      document.body.scrollTop = 0; // body
      window.scrollTo(0, 0); // window fallback
    }, []);

    const{
      whyChooseChannelPartnerData,
      channelPartnerBenefits
    } = channelPartnerData;
  return (
    <div>
      {/* Welcome Partner Section START */}
      <div className="bgWhite px-md-0 px-2 py-md-0 py-3">
        <Section>
          <div className="row align-items-center justify-content-between">
            
            <div className="col-md-5 mb-4 mb-md-0">
              <h2 className="secTitleGreen text-md-start text-center">Sadhisha Channel Partner Program</h2>
              <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   >Grow with Us. Earn with Confidence</p>
              <p className="paraBlack mt-3">
                At Sadhisha, we believe our Channel Partners are not just associates—they're an integral part of our success story. We treat our partners with the same respect and support we offer our internal teams, creating an environment of trust, transparency, and mutual growth.
              </p>
             <div className="d-none d-md-block">
               <a className="btn green-btn mt-4">
                Join Us
              </a>
             </div>
            </div>

            <div className="col-md-7 p-md-4">
              <div className="row justify-content-center d-flex">
                <div className="col-md-6 pb-md-5 align-items-start flex-row-center">
                  <div className='position-relative'>
                    <img src={building} alt="Workforce" className="img-fluid rounded" />
                  </div>
                </div>
                <div className="col-md-6 pt-md-5 align-items-end flex-row-center">
                  <div className='position-relative'>
                    <img src={building} alt="Workforce" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>

             <div className="d-flex d-md-none flex-row-center">
               <a className="btn green-btn mt-4">
                Join Us
              </a>
             </div>
          </div>
        </Section>
      </div>
      {/* Welcome Partner Section END */}

      {/* Join Program Section START */}
      <div className="bgGreen">
        <Section>
          <div className="row justify-content-center md-md-0">
            <div className='flex-row-center row mb-md-5 mb-3'>
              <h4 className="subTitleWhite fs-3 text-center">Join the Sadhisha Growth Network</h4>
              <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-center"   >Channel Partner Program</p>
              <p className='paraWhite col-md-9 text-center'>
                Become a valued part of the Sadhisha Homes sales ecosystem.
                Whether you're an experienced broker, a retired professional, a college student, or someone seeking part-time income—this is your opportunity to earn while you grow.
              </p>
            </div>

            <div className="row justify-content-evenly">
              {channelPartnerBenefits.map((benefit, index) => (
                <div className="col-md-2 mb-4 d-flex justify-content-center" key={index}>
                  <div className='benefit-card'>
                    <div className="text-center channel-partner-benefit-img-box mb-3">
                      <img src={benefit.img} alt={benefit.title} style={{ width: '100px' }} />

                    </div>
                    <h5 className="subTitleWhite fs-6 text-center mb-md-3">{benefit.desc}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
      {/* Join Program Section END */}


      {/* Why Choose Channel Partner section START */}

      <div className='bgWhite px-md-0 px-2 py-3'>
        <Section>
          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleGreen mb-md-3 mb-2 text-center"> Why Partner with Sadhisha? </h2>
            <p className="paraBlack col-md-10 text-center">
              Sadhisha empowers partners with expert training, tools, and dedicated support for business growth.
              We build lasting, value-driven relationships that foster mutual success.
              High performers are recognized and rewarded through exclusive programs and incentives.
            </p>
          </div>
          <div className="row justify-content-center">
            {
              whyChooseChannelPartnerData.map((point, index) => (
                <div className="col-md-3 d-flex align-items-start justify-content-center">
                  <div key={index} className='rounded-2 whyChooseChannelPartnerCard py-md-5 px-md-3 p-3  mb-md-4 mb-3 '>
                    <div className='flex-row-center mb-md-4 mb-3'>
                      <img src={point.image} width={100} alt="" />
                    </div>
                    <div className="service-body align-items-start d-flex row justify-content-center">

                      <div><h3 className="subTitleGreen mb-3 fs-5 text-center">
                        {point.title}
                      </h3>
                        <p className=' paraBlack  ms-1 mb-2 text-center' >{point.description}</p>
                      </div>
                      {/* <p className='para1'>{service.description}</p> */}


                    </div>


                  </div>
                </div>

              ))
            }
          </div>
        </Section>
      </div>
      {/* Why Choose Channel Partner section END */}

      {/* Join Program Section START */}
      <div className="bgGreen">
        <Section>
          <div className="row justify-content-center md-md-0">
            <div className='flex-row-center row'>
              <h4 className="subTitleWhite fs-3 text-center">Transparent Commission Structure</h4>
              <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-center"   >We Assure 100% transparency</p>
              <p className='paraWhite col-md-9 text-center'>
                Once 25% of the property payment is received from the buyer, we release full commission to our channel partners—ensuring timely rewards for your efforts. </p>
            </div>

          </div>
        </Section>
      </div>
      {/* Join Program Section END */}
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

export default ChannelPartners;
