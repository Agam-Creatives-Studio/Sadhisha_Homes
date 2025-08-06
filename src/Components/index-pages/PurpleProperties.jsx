import React, { useEffect, useRef } from 'react';
import './purpleproperties.css';

const PurpleProperties = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Always enable animation on mount
    contentRef.current.classList.add('step-animation');
  }, []);

  const properties = [
    {
      img: '/images/home/building-black-white.jpg',
      title: 'Purple Lakeview',
      desc: 'Luxury waterfront studio apartments near the Pondicherry–Chennai highway.'
    },
    {
      img: 'https://picsum.photos/id/1012/400/250',
      title: 'Purple Seaview',
      desc: 'Elegant studio homes just steps away from Auroville and the seashore.'
    },
    {
      img: 'https://picsum.photos/id/1013/400/250',
      title: 'Purple Koottumedu',
      desc: 'A thoughtfully planned development featuring high-end living with modern amenities.'
    },
  ];

  return (
    <figure className="purpleproperties-icon-cards mt-md-5 mt-3">
      <div className="purpleproperties-icon-cards__content" ref={contentRef}>
        {properties.map((property, idx) => (
          <div className="purpleproperties-icon-cards__item" key={idx}>
            <img src={property.img} alt={property.title} className="img-fluid" />
            <div className="purpleproperties-overlay-text">
              <h6 className="subTitleWhite">{property.title}</h6>
              <p className="paraWhite text-center">{property.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
};

export default PurpleProperties;
