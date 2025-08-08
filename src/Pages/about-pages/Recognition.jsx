import React, { useEffect } from 'react'
import { Page } from '../../layouts/Page'


import '../../styles/pages/about-pages/recognition.css';
import NDTVProfitAward from '../../assets/images/about/NDTV-profit-award.jpg';
import logo from '../../assets/images/common/sadhisha-half-logo.jpg';
import founderAchievement from '../../assets/images/home/founder-achievement.png'
import CEO from '../../assets/images/about/founder.jpeg';
import Founder from '../../assets/images/home/founder-achievement.png';

import client from '../../assets/images/about/client-centric.png'
import architect from '../../assets/images/about/architectural.png'
import sustainable from '../../assets/images/about/sustainable.png'
import workforce from '../../assets/images/about/workforce.png'
import upcomming from '../../assets/images/about/upcomming-projects.png'

import { Section } from '../../layouts/Section';
import PurpleProperties from '../../Components/index-pages/PurpleProperties';
import { Link } from 'react-router-dom';

const Recognition = () => {
    useEffect(() => {
        document.documentElement.scrollTop = 0; // html
        document.body.scrollTop = 0; // body
        window.scrollTo(0, 0); // window fallback
    }, []);
    return (
        <div>
            <Page>
                {/* Leadership section  START */}

                <div className='bgWhite'>
                    <Section>

                        <h2 className="secTitleGreen mb-md-3 text-center text-uppercase"> Our Recognition </h2>
                        <p className="subParaTextGreen text-uppercase mb-md-4 mb-2  text-center"   > Recognized for Excellence and Trust</p>

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



                        <div className="row flex-row-center pt-md-4 pt-3">
                            <p className='paraBlack col-md-10 text-md-center'>
                                We are proud to share that Mr. Bipin Rananaware, Chairman and Managing Director of Sadhisha Homes, was honored with the “Most Promising Real Estate Developer Award” by NDTV Profit, in association with Big Research.
                                This prestigious recognition celebrates his outstanding contribution to infrastructure development and reinforces Sadhisha’s position as a visionary leader in the South Indian real estate landscape. It reflects our unwavering commitment to quality, timely delivery, and customer trust.

                            </p>
                        </div>

                    </Section>
                </div>

                {/* Recogintion section  END */}
            </Page>

            {/* Profit AWARD sECTION START */}

            <div className="bgGreen px-md-0 px-2 py-md-0 py-3">
                <Section>
                    <div className="row align-items-center justify-content-between">
                        <div className="d-md-none d-block mb-4 mb-md-0">
                            <h4 className="subTitleWhite mb-md-2 mb-2 fs-2 text-md-start text-center"> NDTV Profit Recognition</h4>
                            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-md-start text-center"   > Awarded for Excellence </p>

                        </div>

                        <div className="col-md-6 p-md-4">
                            <div className="ceo-img-box position-relative overflow-hidden">
                                <img className="w-100 h-100" src={NDTVProfitAward} alt="founder & Ceo image" />

                                {/* Overlay content */}
                                <div className="ceo-overlay d-flex flex-column justify-content-between p-4">
                                </div>
                            </div>
                        </div>


                        {/* Left Side Content */}
                        <div className="col-md-6 mb-4 mb-md-0">

                            <div className="d-md-block d-none">
                                <h4 className="subTitleWhite mb-md-2 mb-2 fs-2 text-md-start text-center"> NDTV Profit Recognition</h4>
                                <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-md-start text-center"   > Awarded for Excellence </p>

                            </div>
                            <p className="paraWhite pt-md-3 pt-4">
                                We are proud to have been honored with the “Most Promising Real Estate Developer in Puducherry” award as part of the Business & Service Excellence Awards 2012, presented by NDTV Profit and Big Research.
                                This recognition was awarded for our landmark project Purple Apartments, and celebrates our commitment to delivering high-quality, thoughtfully designed residential spaces that meet the evolving needs of modern families.
                                The award reflects the trust of our clients, the dedication of our team, and the vision that drives us forward. It stands as a testament to Sadhisha’s integrity, innovation, and leadership in the Puducherry real estate landscape.

                            </p>
                        </div>


                    </div>
                </Section>
            </div>

            {/* Profit AWARD sECTION END */}


            {/* Excellence Award Section Start */}

            <div className="bgWhite px-md-0 px-2 py-md-0 py-3">
                <Section>
                    <div className="row align-items-center justify-content-between">



                        {/* Left Side Content */}
                        <div className="col-md-6 mb-4 mb-md-0">

                            <h4 className="subTitleGreen mb-md-2 mb-2 fs-2 text-md-start text-center">NDTV Profit Award for Excellence</h4>
                            <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   >  National Recognition </p>

                            <p className="paraBlack mt-3 d-md-block d-none">
                                This accolade recognizes Mr. Rananaware’s outstanding contribution to infrastructure development and his visionary leadership in transforming the real estate landscape of South India. It is a proud moment that reflects the unwavering commitment of the entire Sadhisha team to quality, innovation, and timely delivery.
                                At Sadhisha, this award fuels our passion to set even higher benchmarks in architectural excellence and community-driven development.

                            </p>
                        </div>

                        {/* Right Side Image & Badge */}

                        <div className="col-md-6 p-md-4">
                            <div className="ceo-img-box position-relative overflow-hidden">
                                <img className="w-100 h-100" src={NDTVProfitAward} alt="founder & Ceo image" />

                                {/* Overlay content */}
                                <div className="ceo-overlay d-flex flex-column justify-content-between p-4">
                                </div>
                            </div>
                        </div>

                        <p className="paraBlack mt-3 d-md-none d-block pt-3">
                            This accolade recognizes Mr. Rananaware’s outstanding contribution to infrastructure development and his visionary leadership in transforming the real estate landscape of South India. It is a proud moment that reflects the unwavering commitment of the entire Sadhisha team to quality, innovation, and timely delivery.
                            At Sadhisha, this award fuels our passion to set even higher benchmarks in architectural excellence and community-driven development.

                        </p>


                    </div>
                </Section>
            </div>

            {/* puducherry winning sECTION START */}

            <div className="bgGreen px-md-0 px-2 py-md-0 py-3">
                <Section>
                    <div className="row align-items-center justify-content-between">
                        <div className="d-md-none d-block mb-3">
                            <h4 className="subTitleWhite mb-md-2 mb-2 fs-2 text-md-start text-center"> Award-Winning Real Estate Excellence </h4>
                            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-md-start text-center"   > In Puducherry </p>

                        </div>

                        <div className="col-md-6 p-md-4">
                            <div className="ceo-img-box position-relative overflow-hidden">
                                <img className="w-100 h-100" src={NDTVProfitAward} alt="founder & Ceo image" />

                                {/* Overlay content */}
                                <div className="ceo-overlay d-flex flex-column justify-content-between p-4">
                                </div>
                            </div>
                        </div>


                        {/* Left Side Content */}
                        <div className="col-md-6 mb-4 mb-md-0">

                            <div className="d-md-block d-none">
                                <h4 className="subTitleWhite mb-md-2 mb-2 fs-2 text-md-start text-center"> Award-Winning Real Estate Excellence </h4>
                                <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-md-start text-center"   > In Puducherry </p>

                            </div>
                            <p className="paraWhite mt-3">
                                Sadhisha Homes, under the Purple Group banner, was proud to be honored with the prestigious
                                "Most Promising Real Estate Developer in Puducherry (Pondicherry)" award at the
                                NDTV Profit – Business & Service Excellence Awards 2012, presented in association with Big Research.
                                This recognition, awarded for our landmark development Purple Apartments, reflects our unwavering commitment to

                            </p>

                            <div className="py-3">
                                <div className="d-flex gap-3 align-items-center">

                                    <img src={logo} width={50} className='mb-3' alt="" />
                                    <h5 className='subTitleWhite fs-6'>
                                        Quality construction
                                    </h5>

                                </div>
                                <div className=" d-flex gap-3 align-items-center">

                                    <img src={logo} width={50} className='mb-3' alt="" />
                                    <h5 className='subTitleWhite fs-6'>
                                        Timely project delivery
                                    </h5>

                                </div>
                                <div className=" d-flex gap-3 align-items-center">

                                    <img src={logo} width={50} className='mb-3' alt="" />
                                    <h5 className='subTitleWhite fs-6' >
                                        Community-centric design
                                    </h5>

                                </div>
                                <div className=" d-flex gap-3 align-items-center">

                                    <img src={logo} width={50} className='mb-3' alt="" />
                                    <h5 className='subTitleWhite fs-6'>
                                        Customer trust and satisfaction
                                    </h5>

                                </div>
                            </div>
                        </div>


                    </div>
                </Section>
            </div>

            {/* Profit AWARD sECTION END */}


            {/* Excellence Award Section Start */}

            <div className="bgWhite px-md-0 px-2 py-md-0 py-3">
                <Section>
                    <div className="row align-items-center justify-content-between">



                        {/* Left Side Content */}
                        <div className="col-md-6 mb-4 mb-md-0">

                            <h4 className="subTitleGreen mb-md-2 mb-2 fs-2 text-md-start text-center">NDTV Profit Excellence Award</h4>
                            <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-start text-center"   >  Purple Group, puducherry </p>
                            <div className="row justify-content-center ">
                                <div className="col-md-6 align-items-start">
                                    <div className='position-relative '>
                                        <img src={NDTVProfitAward} alt="Workforce" className="img-fluid rounded" />


                                    </div>

                                </div>
                                <div className="col-md-6 align-items-end  flex-row-center">
                                    <div className='position-relative  '>
                                        <img src={NDTVProfitAward} alt="Workforce" className="img-fluid rounded" />


                                    </div>

                                </div>
                            </div>
          <p className="paraBlack mt-3">
                                We are proud to share that the Purple Group, led by our Managing Director Mr. Bipin Rananaware, was recognized at the NDTV Profit – Big Research Business & Service Excellence Awards 2012.
                            </p>

                            <p className="paraBlack mt-3">
                                These awards were presented in recognition of the group’s outstanding reputation, community impact, and project excellence. The accolades reflect the Purple Group’s ongoing commitment to innovation, customer trust, and the highest standards of real estate development across South India.
                                The award was received by Mr. Bipin Rananaware in the presence of prominent industry leaders and was a proud moment that reaffirmed Sadhisha’s vision to build with purpose and passion.
                            </p>
                        </div>

                        {/* Right Side Image & Badge */}

                        <div className="col-md-6 p-md-4">
                            <div className="ceo-img-box position-relative overflow-hidden">
                                <img className="w-100 h-100" src={NDTVProfitAward} alt="founder & Ceo image" />

                                {/* Overlay content */}
                                <div className="ceo-overlay d-flex flex-column justify-content-between p-4">
                                </div>
                            </div>
                        </div>


                    </div>
                </Section>
            </div>

            {/* Excellence Award Section END */}


            {/* Purple legacy section  START */}

            <div className='bgGreen px-md-0 px-2 py-md-0 py-3'>
                <Section>

                    <h2 className="secTitleWhite mb-md-3 text-center"> Purple Group Expands its Legacy in Pondicherry </h2>
                    <p className="subParaTextWhite text-uppercase mb-md-4 mb-2  text-center"   > Crafting Comfort with Coastal Charm</p>


                    <div className="row justify-content-center d-flex pb-md-5 py-2">
                        {/* <h4 className="subTitleGreen mb-md-2 mb-2 fs-2 text-center"> Bipin Rananaware</h4>
                            <p className="paraBlack text-uppercase mb-md-4 mb-2 text-center"   > Founder-Chairman, Sadhisha</p> */}

                        <div className="ndtv-award-img-box d-flex justify-content-center pb-5 w-100">
                            <PurpleProperties />
                        </div>
                        <div className="row flex-row-center">
                            <p className='paraWhite col-md-10 text-md-center'>
                                Each apartment comes fully equipped with modern comforts—TV, microwave, kitchen accessories, and more—offering both residential quality and investment potential. With sizes starting at 315 sq.ft., Purple’s studio projects offer a balance of lifestyle and value, making them a trusted choice for property buyers and investors in the region.
                            </p>
                        </div>
                        <div className="row flex-row-center">
                            <p className='paraWhite col-md-10 text-md-center'>
                                The Purple Group, backed by over 15 years of expertise through Auro Architects, has consistently delivered premium studio apartments, boutique resorts, and gated communities in the scenic coastal city of Pondicherry. Their attention to architectural finesse, interior design, and landscaping continues to earn wide acclaim.
                                The Group recently expanded into hospitality through the development of Purple Studio Apartments and Hotel Purple—a fully furnished boutique resort near Auroville offering executive lodging, in-house dining, and personalized services including travel, medical, and wellness assistance.

                            </p>
                        </div>
                        <div className="row flex-row-center">
                            <Link to={'/'} className="btn green-btn mt-4">
                                Know More
                            </Link>
                        </div>
                    </div>

                </Section>
            </div>

            {/* Purple legacy section  END */}


            {/*  Feautered in Times of section  START */}

            <div className='bgWhite px-md-0 px-2 py-md-0 py-3'>
                <Section>

                    <h2 className="secTitleGreen mb-md-3 text-center"> Featured in The Times of India <br /> “Leaders of Change” </h2>
                    <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-md-center text-center"   >  Adding the Trust Factor</p>

                    <div className="row justify-content-center d-flex pb-md-5 py-2">
                        {/* <h4 className="subTitleGreen mb-md-2 mb-2 fs-2 text-center"> Bipin Rananaware</h4>
                            <p className="paraBlack text-uppercase mb-md-4 mb-2 text-center"   > Founder-Chairman, Sadhisha</p> */}
                        <div className="row flex-row-center order-md-1 order-2">
                            <p className='paraBlack col-md-11 text-md-center pt-md-0 pt-3'>
                                Sadhisha Homes, under the visionary leadership of Mr. Bipin Rananaware, was featured in the August 15 edition of The Times of India (Chennai) as part of the “Leaders of Change” series—highlighting India's most impactful and purpose-driven businesses.
                                Titled “Adding the Trust Factor,” the article spotlights how Sadhisha Homes has built a legacy rooted in customer satisfaction, transparency, and long-term value creation. From premium residential communities and luxury studio apartments to smart villas and commercial developments, the company continues to raise benchmarks in both design and delivery.

                            </p>
                        </div>
                        <div className="row justify-content-center order-1 order-md-2 w-100">
                            <img src={founderAchievement} className='w-100' alt="founderAchievement" />
                        </div>
                        <div className=" py-md-5 py-3 order-3  px-md-0 px-3">
                            <h4 className="subTitleGreen mb-md-4 mb-3 fs-3 text-md-start text-center"> Key Highlights from the Article:</h4>

                            <div className="row justify-content-evenly">
                                <div className="col-md-3">
                                    <div className="mission-vision-card">

                                        <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                                            <img src={client} width={120} alt="" />
                                        </div>
                                        <h4 className="subTitleBlack mb-md-4 text-center mb-2">Customer-Centric <br /> Approach</h4>
                                        <p className='paraGreen text-center'>
                                            Emphasis on trust, timely delivery, and quality—setting Sadhisha apart in a competitive industry.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mission-vision-card">

                                        <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                                            <img src={upcomming} width={120} alt="" />
                                        </div>
                                        <h4 className="subTitleBlack mb-md-4 text-center mb-2">Upcoming <br /> Projects</h4>
                                        <p className='paraGreen text-center'>
                                            A pipeline of smart townships, affordable villas, luxury apartments, and commercial hubs across Puducherry and Tamil Nadu.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mission-vision-card">

                                        <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                                            <img width={120} src={workforce} alt="" />
                                        </div>
                                        <h4 className="subTitleBlack mb-md-4 text-center mb-2">Workforce <br /> Empowerment</h4>
                                        <p className='paraGreen text-center'>
                                            Acknowledgment of employee satisfaction as a driver of sustained success.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mission-vision-card">

                                        <div className="mission-vision-image-box flex-row-center mb-md-4 mb-3">
                                            <img src={sustainable} width={120} alt="" />
                                        </div>
                                        <h4 className="subTitleBlack mb-md-4 text-center mb-2">Sustainable <br /> Innovation: </h4>
                                        <p className='paraGreen text-center'>
                                            Integration of modern construction methods, automation, and eco-friendly materials
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </Section>
            </div >

            {/* Feautered in Times of India section  END */}


        </div >
    )
}

export default Recognition