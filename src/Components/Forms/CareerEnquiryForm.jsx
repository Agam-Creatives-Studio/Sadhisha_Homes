import React from 'react';

const CareerEnquiryForm = () => {
  return (
    <form
      method="POST"
      action="http://localhost/sadhisha-homes-backend/form-handler/Career-enquiry-form.php"
      className="general-enquiry-form"
      encType="multipart/form-data"
    >
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="tel" name="mobile" placeholder="Phone" required />
       <input type="file" name="attachment" accept=".pdf" />
      <textarea name="message" placeholder="Message" rows="4" required></textarea>
      <button type="submit" className='btn green-btn'>
        Submit Enquiry
      </button>
    </form>
  );
};

export default CareerEnquiryForm;
