import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client

root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path='/products/:id' element={<ProductsScreen/>} />
        </Route>
      </Routes>
    </Router> */}
    <App/>
  </React.StrictMode>
);

reportWebVitals();
