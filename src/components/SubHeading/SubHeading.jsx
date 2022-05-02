import React from 'react';




const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={"/images/gold.png"} alt="gold" className="gold__img"/>
  </div>
);

export default SubHeading;