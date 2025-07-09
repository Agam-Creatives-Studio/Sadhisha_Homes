import React from 'react';
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

const ContactDetails = () => {
    return (
        <div>
            <div className="pb-md-4 pb-2">
                <h2 className="secTitleGreen mb-md-3 text-md-start text-center"> Get In Touch </h2>
                <p className='paraBlack col-md-10 text-md-start text-center'>
                    Whether you’re exploring property options, seeking partnership, or have a general enquiry.
                </p>
            </div>
            <div className="row d-flex justify-content-md-start justify-content-center">

                <div className='py-md-2 col-md-5 mb-md-0 mb-3'>
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
                <div className='py-md-2 col-md-5 mb-md-0 mb-3'>
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
    )
}

export default ContactDetails