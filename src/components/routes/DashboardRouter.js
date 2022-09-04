import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import { Configuration, Home } from '../pages';
import { DashboardLayout } from '../templates';

export const DashboardRouter = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRouter;
