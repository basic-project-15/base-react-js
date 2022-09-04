import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import { Home } from '../pages';

export const DashboardRouter = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
