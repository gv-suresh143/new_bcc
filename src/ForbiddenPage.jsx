import React, { useState, useEffect } from 'react';

const ForbiddenPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen size is mobile
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {  // Screen width <= 768px is considered mobile
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Check the screen size on initial load and when window is resized
  useEffect(() => {
    checkScreenSize(); // Check the screen size on load
    window.addEventListener('resize', checkScreenSize); // Add event listener for resize

    // Cleanup the event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // If it's not mobile, don't show the ForbiddenPage
  if (!isMobile) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ color: 'red', marginBottom: '10px' }}>Access Forbidden</h1>
        <p style={{ color: '#333' }}>
          This page is only accessible on desktops and laptops.
        </p>
        <p style={{ color: '#333' }}>
          Mobile responsiveness is under development.
        </p>
      </div>
    </div>
  );
};

export default ForbiddenPage;
