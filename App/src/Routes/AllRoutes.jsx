import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Form from '../components/Form';

// Adding routes to link pages 
const AllRoutes = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </div>
  );
};

export default AllRoutes;
