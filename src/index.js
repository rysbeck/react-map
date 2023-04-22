import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Accordion from './components/props';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Accordion/>
  </React.StrictMode>
);