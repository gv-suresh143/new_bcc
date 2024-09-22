import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import DLogin from './DLogin.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap DLogin with BrowserRouter */}
      <DLogin />
    </BrowserRouter>
  </StrictMode>
);
