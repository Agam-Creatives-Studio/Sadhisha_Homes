import React from 'react';
import './general-enquiry-form.css';

const InvestorClubForm = () => {
  return (
    <form className="general-enquiry-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone" required />
         <input type="tel" placeholder="Intrested In" required />
      <textarea placeholder="Message" rows="4" required />
      <div className="d-flex row justify-content-center py-3">
        <button type="submit" className='btn green-btn'>Submit Enquiry</button>
      </div>
    </form>
  )
}

export default InvestorClubForm