import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import {
  ComponentsButton,
  ComponentsInputs1,
  ComponentsInputs2,
  ComponentsText,
  Configuration,
  Home,
} from '../../pages';
import { DashboardLayout } from '../../templates';

export const DashboardRouter = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/componentsButton" element={<ComponentsButton />} />
        <Route path="/componentsInputs1" element={<ComponentsInputs1 />} />
        <Route path="/componentsInputs2" element={<ComponentsInputs2 />} />
        <Route path="/componentsText" element={<ComponentsText />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRouter;
