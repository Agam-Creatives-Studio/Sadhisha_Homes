import React from 'react';
import { Section } from '../../layouts/Section';

import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import GeneralEnquiryForm from '../Forms/GeneralEnquiryForm';


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


const TermsAndConditions = () => {
    return (
        <div>
            <Section>


                <div className="container">
                    <h2 className="secTitleGreen pb-3">Terms and Conditions</h2>
                    <p className="paraBlack pb-2"><strong className='paraGreen'> Effective Date:</strong> June 17, 2025</p>
                    <p className="paraBlack pb-4">
                        Welcome to the official website of <strong>Sadhisha Homes</strong> (“Sadhisha”, “we”, “our”, or “us”). These Terms of Use govern your access to and use of this website [www.sadhisha.com] and all related content, services, and tools provided herein (the “Site”).
                        By accessing or using this Site, you agree to be bound by the following terms and conditions. If you do not agree, please do not use the Site.
                    </p>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">1. Use of the Site</h4>
                        <ul className="paraBlack">
                            <li>This Site is intended for informational and general communication purposes only.</li>
                            <li>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use of the Site.</li>
                        </ul>
                    </div>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">2. Intellectual Property</h4>
                        <ul className="paraBlack">
                            <li>All content, designs, images, logos, and text on this Site are the intellectual property of Sadhisha Homes unless otherwise stated.</li>
                            <li>You may not copy, reproduce, republish, distribute, or modify any material on the Site without prior written permission.</li>
                        </ul>
                    </div>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">3. Accuracy of Information</h4>
                        <ul className="paraBlack">
                            <li>We strive to ensure that all information on the Site is accurate and up to date. However, we make no warranties or guarantees regarding the accuracy, completeness, or relevance of any content.</li>
                            <li>Project specifications, prices, availability, and timelines are subject to change without prior notice.</li>
                        </ul>
                    </div>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">4. Links to Third-Party Websites</h4>
                        <ul className="paraBlack">
                            <li>The Site may contain links to external websites for user convenience. These sites are not controlled or endorsed by Sadhisha.</li>
                            <li>We are not responsible for the content or availability of any such external websites.</li>
                        </ul>
                    </div>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">5. Communication & Submissions</h4>
                        <ul className="paraBlack">
                            <li>Any contact information or personal details shared via forms or emails are handled in accordance with our Privacy Policy.</li>
                            <li>Sadhisha is not liable for delayed or failed email communication. For urgent matters, please contact us by phone.</li>
                        </ul>
                    </div>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">6. Limitation of Liability</h4>
                        <ul className="paraBlack">
                            <li>Sadhisha Homes shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of or inability to use the Site.</li>
                            <li>This includes damages from interruptions, errors, malware, or any external interference.</li>
                        </ul>
                    </div>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">7. Termination of Access</h4>
                        <p className="paraBlack">We reserve the right to restrict or terminate access to the Site without notice, for any reason including misuse or breach of these terms.</p>
                    </div>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">8. Governing Law & Jurisdiction</h4>
                        <p className="paraBlack">These Terms shall be governed by and interpreted in accordance with the laws of India. All disputes arising from the use of the Site shall be subject to the exclusive jurisdiction of the courts in Puducherry, India.</p>
                    </div>

                    <div className="pb-4">
                        <h4 className="subTitleGreen pb-2">9. Updates to These Terms</h4>
                        <p className="paraBlack">We reserve the right to update or modify these Terms at any time without prior notice. The updated Terms will be posted on this page with a revised effective date.</p>
                    </div>



                </div>

                <hr />

                {/* contact section  START */}

              


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
       </div >
    );
};

export default TermsAndConditions;
