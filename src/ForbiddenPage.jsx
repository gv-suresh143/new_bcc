import React from 'react';
import './ForbiddenPage.css';

const ForbiddenPage = () => {
  return (
    <div className="forbidden-container">
      <div className="forbidden-content">
        <h1>Access Forbidden</h1>
        <p>This page is only accessible on desktops and laptops.</p>
        <p>Mobile responsiveness is under development.</p>
      </div>
    </div>
  );
};

export default ForbiddenPage;
