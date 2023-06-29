import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Home from './refugeehubbuild.webflow/Home';
import UkraineToUSA from './refugeehubbuild.webflow/UkraineToUSA';
import { BrowserRouter, Routes, Route } from "react-router-dom";








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Ukraine" element={<UkraineToUSA />} />
      </Routes>
    </BrowserRouter>

  

  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
