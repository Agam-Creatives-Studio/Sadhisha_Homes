import React from 'react';

const GeneralEnquiryForm = () => {
  return (
    <form
      method="POST"
      action="https://agamcreatives.site/sadhisha-test/form-handler/General-enquiry-form.php"
      className="general-enquiry-form"
    >
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="tel" name="mobile" placeholder="Phone" required />
      <textarea name="message" placeholder="Message" rows="4" required></textarea>
      <button type="submit" className='btn green-btn'>
        Submit Enquiry
      </button>
    </form>
  );
};

export default GeneralEnquiryForm;
