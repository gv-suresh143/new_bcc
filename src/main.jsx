import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AllRoutes from './AllRoutes'; // Import AllRoutes (which defines all the routing logic)
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap your routing logic with BrowserRouter */}
      <AllRoutes />   {/* Render AllRoutes instead of DLogin directly */}
    </BrowserRouter>
  </StrictMode>
);
