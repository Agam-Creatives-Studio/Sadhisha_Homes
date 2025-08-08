import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Recognition from './Recognition';
import Csr from './Csr'

import '../../styles/pages/about-pages/about.css';
import logo from '../../assets/images/home/builig black and white.jpg';

import CEO from '../../assets/images/about/founder.jpeg';
import Founder from '../../assets/images/home/founder-achievement.png';

import founderSignature from '../../assets/images/about/founder-signature.png';
import mission from '../../assets/images/about/mission.png';
import vision from '../../assets/images/about/vision.png';

import { Section } from '../../layouts/Section';
import { Page } from '../../layouts/Page';
import aboutData from '../../assets/data/aboutData';

import { GiFeather } from "react-icons/gi";
import { Link } from 'react-router-dom';
import OurTeam from '../../Components/index-pages/OurTeam';


const About = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0; // html
    document.body.scrollTop = 0; // body
    window.scrollTo(0, 0); // window fallback
  }, []);

  const {
    dataStats,
    coreValues,
    affiliatesData
  } = aboutData;

  // Set up the inView observer
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // trigger when 30% of the section is visible
  });

  return (
    <div>
      <Page>
        <div className="our-story-section">
          <Section>
            <div className="row align-items-center justify-content-between">
              <div className="d-md-none d-block">
                <h2 className="secTitleGreen text-center text-md-start">OUR STORY</h2>
                <p className="subParaTextGreen text-uppercase mb-md-4 mb-3 text-md-start text-center"   >  Shaping Skylines, Earning Trust </p>

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
              </div>

              {/* Left Side Content */}
              <div className="col-md-5 mb-4 mb-md-0">

                <div className="d-md-block d-none">
                  <h2 className="secTitleGreen text-center text-md-start">OUR STORY</h2>
                  <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   >  Shaping Skylines, Earning Trust </p>

                </div>
                <p className=" mt-3">
                  Sadhisha stands as a global leader in architecture and construction, renowned for
                  delivering innovative, sustainable, and future-ready solutions. Backed by a team of
                  seasoned architects, engineers, and construction specialists, we bring every project to
                  life with unmatched precision, creativity, and attention to detail. <br /> <br />
                  From residential villas and gated communities to commercial hubs, industrial
                  complexes, and urban infrastructure—we’ve built a versatile portfolio that reflects our
                  technical strength, design excellence, and commitment to quality.
                  With every structure we create, we don’t just build spaces—we build trust, value, and
                  lasting impact.
                </p>
               
              </div>


            </div>
          </Section>
        </div>
      </Page >

      {/* Affilates section START */}

      <div className='bgGreen'>
        <Section>
          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleWhite mb-md-3 mb-2 text-center"> OUR  JOURNEY </h2>
            <p className="  subParaTextWhite text-uppercase mb-md-4 mb-2  text-center"   >  Decades of Trusted Delivery </p>
          </div>

          <div className="row justify-content-center d-flex pb-md-5 py-2">
            <div className="col-md-3 mb-3 col-6 pb-md-3 align-items-start  flex-row-center">
              <div className='position-relative '>
                <img src={logo} alt="Workforce" className="img-fluid rounded" />


              </div>

            </div>
            <div className="col-md-3 col-6 mb-3 pt-md-3 align-items-end  flex-row-center">
              <div className='position-relative  '>
                <img src={logo} alt="Workforce" className="img-fluid rounded" />


              </div>

            </div>


            <div className="col-md-3 col-6 pb-md-3 align-items-start  flex-row-center">
              <div className='position-relative '>
                <img src={logo} alt="Workforce" className="img-fluid rounded" />


              </div>

            </div>
            <div className="col-md-3 col-6 pt-md-3 align-items-end  flex-row-center">
              <div className='position-relative  '>
                <img src={logo} alt="Workforce" className="img-fluid rounded" />


              </div>

            </div>

          </div>


          <div className="row flex-row-center pt-md-0 pt-3 px-2">
            <p className='paraWhite col-md-10 text-md-center'>
              Established in 1996, Sadhisha set out with a bold vision—to redefine real estate and
              construction standards in South India. What began as a modest venture with a villa and
              plot development was completed in a record 18 months, setting the tone for our future.
              Since then, our journey has been marked by consistency, speed, and trust. Every project
              we launched was delivered on time—many within just a few months—cementing our
              reputation for dependable execution.<br /><br />
              To date, we’ve successfully completed over 22 major projects, including more than
              3,000 villas and 10,000 residential plots, spanning integrated townships, multi-
              storied residential complexes, and commercial developments across India.
              With each milestone, Sadhisha has continuously evolved—embracing innovation,
              adopting sustainable technologies, and scaling our impact across architecture,
              construction, and community development.
            </p>
          </div>
        </Section>
      </div>
      {/* Our Journey section END */}

      {/* CEO note start */}

      <div className="our-story-section py-3 px-md-0 px-2">
        <Section>
          <div className="row align-items-center justify-content-between">
            <div className="d-md-none d-block mb-3">
              <h2 className="secTitleGreen fs-1 text-md-start text-center text-uppercase">Message From Chairman</h2>
              <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   >From Years of Industry Expertise   </p>

            </div>
            {/* Right Side Image & Badge */}

            <div className="col-md-6 p-md-4">
              <div className="ceo-img-box position-relative overflow-hidden">
                <img className="w-100 h-100" src={CEO} alt="founder & Ceo image" />

                {/* Overlay content */}
                <div className="ceo-overlay d-flex flex-column justify-content-between p-4">
                  <span className="ceo-quote">“</span>
                  <h2 className="ceo-overlay-text ">
                    <h2 className="secTitleWhite fs-1 text-end justify-content-end "> <span></span> Chairman <br /> Note <GiFeather className='fs-1' /></h2>
                  </h2>
                </div>
              </div>
            </div>


            {/* Left Side Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-md-block d-none">
                <h2 className="secTitleGreen fs-1 text-md-start text-center text-capitalize">Message From Chairman</h2>
                <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   >From Years of Industry Expertise   </p>

              </div>
              <p className="paraBlack mt-3">
                At Sadhisha, we believe in crafting more than just buildings; we create environments
                that inspire and uplift. With decades of experience in architecture, construction, and
                real estate, we are proud to be at the forefront of shaping skylines and communities.
                Our journey is driven by a passion for innovation, quality, and sustainability. We are
                dedicated to pushing the boundaries of design and construction, always striving to
                exceed expectations and set new industry standards. Our projects are a testament to
                our commitment to excellence, each one meticulously planned and executed to enhance
                the lives of those who inhabit our spaces. <br /><br />
                Our team of talented professionals is the backbone of our success. Their creativity,
                expertise, and dedication are the cornerstones of our projects. We foster a culture of

                collaboration and continuous learning, ensuring that we stay ahead in a rapidly evolving
                industry.
                We are also deeply committed to sustainable practices, integrating green building
                technologies and energy-efficient solutions into our projects. Our goal is to not only
                build beautiful and functional spaces but also to contribute positively to the
                environment and the communities we serve.
                We invite you to learn more about our projects and services, each reflecting our
                unwavering commitment to quality and innovation, meet our team, and explore how we
                can bring your vision to life.
              </p>

              <div className=' flex-row-end'>
                <img src={founderSignature} width={300} alt="" />
              </div>
            </div>


          </div>
        </Section>
      </div>
      {/* CEO note end */}

      {/* Data Section START*/}
      <div className=" bgGreen">
        <Section>
          <div ref={ref}>
            <div className="row justidy-content-center align-items-center d-flex text-center">
              {dataStats.map((item, index) => (
                <div className="col-md-3 mb-md-1 mb-4" key={index}>
                  <h2 className="titleWhite fw-bold  text-center">
                    {inView ? (
                      <CountUp end={item.value} duration={2} separator="," suffix={item.suffix} />
                    ) : (
                      '0'
                    )}
                  </h2>
                  <p className="paraWhite text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
      {/* Data Section END*/}


      {/* core values section START */}

      <div className='bgWhite px-2 py-md-5 py-3'>
        <Section>
          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleGreen mb-md-3 mb-2 text-center"> OUR CORE VALUES </h2>
            <p className="subParaTextGreen text-uppercase mb-md-4 mb-2  text-center"   > What Drives Our Every Decision

            </p>
          </div>
          <div className="row justify-content-center md-md-0">
            {coreValues.map((value, index) => (
              <div className="col-md-3  mb-2" key={index}>
                <div className="position-relative core-values-image-wrapper">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="img-fluid w-100 h-100"
                  />
                  <div className="core-values-overlay-content">
                    <h3 className="core-values-overlay-title subTitleWhite">{value.title}</h3>
                    <p className="core-values-overlay-description paraWhite">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
          {/* mission-vision-section START*/}

          <div className="mission-vision-section bgWhite">

            <div className='mb-md-4 mb-5 row flex-row-center'>
              <h2 className="secTitleWhite mb-md-3 mb-2 text-center"> OUR SERVICES </h2>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-md-4">
                <div className="mission-vision-card">

                  <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                    <img src={vision} width={200} alt="" />
                  </div>
                  <h4 className="subTitleBlack mb-md-4 text-center mb-2">OUR VISION</h4>
                  <p className='paraGreen text-center px-md-0 px-2'>
                    To become world’s most trusted and pioneering name in real estate, by embedding
                    innovation, growth, and modern thinking into every aspect of planning, design, and
                    execution. We aim to set new benchmarks in the built environment through purposeful
                    development that enriches lives and communities.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mission-vision-card">

                  <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                    <img className='p-md-3 p-3' src={mission} width={200} alt="" />
                  </div>
                  <h4 className="subTitleBlack mb-md-4 text-center mb-2">OUR MISSION</h4>
                  <p className='paraGreen text-center px-2 px-md-0'>
                    To consistently deliver high-quality craftsmanship and professional excellence across all
                    projects—whether in architecture, construction, or customer engagement. We are
                    committed to upholding integrity, transparency, and respect in every interaction—with
                    our clients, team members, and partners—ensuring lasting value and satisfaction.
                  </p>
                </div>
              </div>

            </div>

          </div>
          {/* mission-vision-section END*/}

        </Section>


      </div>
      {/* core values section END */}



      {/* Leadership section  START */}

      <div className='bgGreen px-md-0 px-2'>
        <Section>
          <div className='mb-md-4 mb-3 row flex-row-center'>
            <h2 className="secTitleWhite text-center"> OUR LEADERSHIP</h2>
          </div>

          <div className="row justify-content-center d-flex  py-2">
            
            <div className="founder-img-box w-100">
              <img src={CEO} alt="" />
            </div>

            <div className="pt-4">
              <h4 className="subTitleWhite mb-md-2 mb-2 fs-2 text-center"> Bipin Rananaware</h4>
            <p className="  subParaTextWhite text-uppercase mb-md-4 mb-2 text-center"   > Founder-Chairman, Sadhisha</p>

            </div>

          </div>


          <div className="row flex-row-center">
            <p className='paraWhite col-md-10 text-md-center pt-md-0 pt-3'>
              A visionary with sharp business acumen and an unshakable commitment to excellence,
              Bipin Rananaware is the driving force behind Sadhisha’s remarkable growth. Under his
              leadership, Sadhisha has risen to become a benchmark in South India&#39;s real estate,
              architecture, and construction landscape—especially in Puducherry.
              His foresight and execution have earned widespread trust, with Sadhisha’s projects
              consistently recognized for their innovation, quality, and timely delivery. Beyond
              business, Mr. Rananaware is also known for his dedication to social responsibility
              through the Sadhisha Charitable Trust, supporting large-scale community initiatives
              such as medical camps, mass weddings, housing, and aid for the underprivileged.
              With deep respect in both the real estate sector and Puducherry’s business community,
              Bipin Rananaware continues to build not just infrastructure—but impact.
            </p>
          </div>

          <hr className="hrTag my-md-5" />

          <div className="d-md-none d-block py-4">
            <h4 className="subTitleWhite mb-md-2 mb-2 fs-2 text-md-start text-center"> Bharathi Rananaware</h4>
            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-md-start text-center"   > Managing Director, Sadhisha</p>

          </div>

          <div className="row align-items-center justify-content-between">
            {/* Right Side Image & Badge */}

            <div className="col-md-6 p-md-4 ">
              <div className="ceo-img-box position-relative overflow-hidden">
                <img className="w-100 h-100" src={CEO} alt="founder & Ceo image" />

                {/* Overlay content */}
                <div className="ceo-overlay d-flex flex-column justify-content-between p-4">
                </div>
              </div>
            </div>


            {/* Left Side Content */}
            <div className="col-md-6 mb-4 mb-md-0">

              <div className="d-md-block d-none">
                <h4 className="subTitleWhite mb-md-2 mb-2 fs-2 text-md-start text-center"> Bharathi Rananaware</h4>
                <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-md-start text-center"   > Managing Director, Sadhisha</p>

              </div>
              <p className="paraWhite mt-3  ">
                With a postgraduate specialization in Interior Design, Bharati Rananaware brings a
                refined aesthetic sensibility and a strategic outlook to Sadhisha’s operations. Her entry
                into the leadership team marked a turning point in the company’s growth—focusing on
                enhancing the clarity, creativity, and consistency of project execution.
                <br /><br />
                Bharati plays a pivotal role in strengthening the group’s operational presence and
                expanding its footprint across residential, commercial, and interior design projects. Her
                commitment to design excellence and project discipline ensures that every Sadhisha
                development resonates with elegance, functionality, and purpose.
              </p>
            </div>


          </div>
        </Section>
      </div>

      {/* Leadership section  END */}


      {/* life-at-sadhisha section START */}
      <div className="our-story-section px-md-0 px-2 py-md-0 py-3">
        <Section>
          <div className="row align-items-center justify-content-between">
            {/* Right Side Image & Badge */}

            <div className="d-md-none d-block">
              <h2 className="secTitleGreen text-md-start text-center">LIFE AT SADHISHA</h2>
              <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   >People First, always</p>

            </div>

            {/* Left Side Content */}
            <div className="col-md-5 mb-4 mb-md-0 order-md-1 order-2">

              <div className="d-md-block d-none">
                <h2 className="secTitleGreen text-md-start text-center">LIFE AT SADHISHA</h2>
                <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   >People First, always</p>

              </div>
              <p className="paraBlack mt-3">
                At Sadhisha, our people are our greatest strength—the foundation on which our
                growth and success are built. Every achievement we celebrate is a reflection of the
                dedication, talent, and passion of our team members.
                We are proud of our close-knit, high-performing leadership and operations
                teams—many of whom have been with us for over a decade. These experienced
                professionals bring deep industry expertise and a shared commitment to excellence. <br /><br />

                They lead with energy and empathy, driving innovation while nurturing a culture of
                collaboration and integrity.
                Rooted in our Vision, Mission, and Core Values, the culture at Sadhisha is one of trust,
                accountability, and continuous evolution. We don’t just build projects—we build
                careers, empower individuals, and create an environment where people thrive.
              </p>
              <div className='d-flex justify-content-md-start justify-content-center'>
                <Link to={'/careers'} className="btn green-btn mt-4">
                  Join Us
                </Link>
              </div>
            </div>

            <div className="col-md-7 p-md-4 order-md-2 order-1">
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


          </div>
        </Section>
      </div>
      {/* life-at-sadhisha section END */}

      {/* our team section START */}

      <div className='bgGreen py-md-4 py-3 px-5'>
        <Section>
          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleWhite mb-md-4 mb-2 text-center"> OUR TEAM </h2>
            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-center"   >   Driven Minds. Shared Mission. </p>

          </div>
          <div className="row justify-content-center">
            <OurTeam />
          </div>
        </Section>
      </div>
      {/* our team section END */}


      {/* Affilates section START */}

      <div className='bgWhite px-md-0 px-2 py-md-0 py-3'>
        <Section>
          <div className='mb-md-4 mb-5 row flex-row-center'>
            <h2 className="secTitleGreen mb-md-3 mb-2 text-center"> OUR COMPANIES </h2>
            <p className="subParaTextGreen text-uppercase mb-md-4 mb-2  text-center"   >  Integrated Strength. Unified Vision. </p>


          </div>
          <div className="row justify-content-center">
            {
              affiliatesData.map((affiliates, index) => (
                <div className="col-md-4">
                  <div key={index} className='rounded-2 affilates-card  mb-md-4 mb-3 '>
                    <div className='mb-4 flex-row-center'>
                      <img src={affiliates.image} width={180} alt="" />
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
            <p className="paraBlack col-md-10 text-center">
              Sadhisha operates through a well-defined ecosystem of expert verticals, each
              contributing uniquely to our design, development, and execution excellence. Together,
              these entities ensure that every project is delivered with precision, purpose, and high
              integrity.
            </p>
          </div>
        </Section>
      </div>
      {/* Affilates section END */}

      <Recognition/>
      <Csr/>
    </div >
  );
};

export default About;
