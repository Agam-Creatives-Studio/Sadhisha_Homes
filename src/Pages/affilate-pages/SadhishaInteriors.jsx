// src/components/UnderConstruction.jsx

import React from 'react';
import '../../styles/pages/underconstruction/underconstruction.css'; 

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-message">
        <h1>🚧 Site Under Construction 🚧</h1>
        {/* <p>We're working hard to get everything ready. Stay tuned!</p>
        <p>Thanks for your patience.</p> */}
      </div>
      {/* <div className="construction-image">
        <img src="https://via.placeholder.com/300x200" alt="Under Construction" />
      </div> */}
    </div>
  );
};

export default UnderConstruction;
