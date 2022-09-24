import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import {
  ComponentsAlert,
  ComponentsButton,
  ComponentsDialog,
  ComponentsInputs1,
  ComponentsInputs2,
  ComponentsInputs3,
  ComponentsInputs4,
  ComponentsLoader,
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
        <Route path="/componentsAlert" element={<ComponentsAlert />} />
        <Route path="/componentsButton" element={<ComponentsButton />} />
        <Route path="/componentsDialog" element={<ComponentsDialog />} />
        <Route path="/componentsInputs1" element={<ComponentsInputs1 />} />
        <Route path="/componentsInputs2" element={<ComponentsInputs2 />} />
        <Route path="/componentsInputs3" element={<ComponentsInputs3 />} />
        <Route path="/componentsInputs4" element={<ComponentsInputs4 />} />
        <Route path="/componentsLoader" element={<ComponentsLoader />} />
        <Route path="/componentsText" element={<ComponentsText />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRouter;
