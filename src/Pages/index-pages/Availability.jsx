import { useEffect } from 'react';
import availablityData from '../../assets/data/availablityData'
import { Section } from '../../layouts/Section';

import '../../styles/pages/index-pages/availabilty.css'
import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';
import ContactDetails from '../../Components/index-pages/ContactDetails';


const Availability = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0; // html
    document.body.scrollTop = 0; // body
    window.scrollTo(0, 0); // window fallback
  }, []);

  const {
    properties
  } = availablityData;

  return (
   <>
    <div className="properties-wrapper bg-white">
      <Section>
        {properties.map((property, index) => (
        <div className="property-card row mb-5" key={index}>
          <div className="col-md-4">
            <img src={property.image} alt={property.name} className="img-fluid w-100" />
          </div>
          <div className="col-md-8">
            <h2 className="secTitleGreen mb-3">{property.name}</h2>
            <table className="table property-table">
              <thead>
                <tr>
                  <th className='py-2'><h6 className='fs-6'>Residence</h6></th>
                  <th className='py-2'><h6>Beds</h6></th>
                  <th className='py-2'><h6>Baths</h6></th>
                  <th className='py-2'><h6>Area</h6></th>
                  <th className='py-2'><h6>Price</h6></th>
                  <th className='py-2'><h6>Estd Monthly</h6></th>
                  <th className='py-2'><h6>Floor Plan</h6></th>
                </tr>
              </thead>
              <tbody>
                {property.listings.map((listing, i) => (
                  <tr  key={i}>
                    <td className='py-3'>{listing.residence}</td>
                    <td className='py-3'>{listing.beds}</td>
                    <td className='py-3'>{listing.baths}</td>
                    <td className='py-3'>{listing.area}</td>
                    <td className='py-3'>{listing.price}</td>
                    <td className='py-3'>{listing.carryingCost}</td>
                    <td className='py-3'>
                      <a href={listing.floorPlan} className="btn btn-outline-dark btn-sm rounded-0" download>
                        DOWNLOAD
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex gap-3 mt-3">
              <button className="btn btn-outline-dark rounded-0">MORE INFO</button>
              <button className="btn btn-outline-dark rounded-0">GO TO PROPERTY SITE</button>
              <span className="align-self-center text-muted">LEGAL</span>
            </div>
          </div>
        </div>
      ))}
      </Section>
      <hr />
    </div>
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
   </>
  );
};

export default Availability;
