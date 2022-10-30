import StoreView from 'components/common/StoreView';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout'
const Homes = React.lazy(() => import('./pages/home/Homes'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Login = React.lazy(() => import('./forms/LoginForm'))
const Dashboard = React.lazy(() => import('admin/layout/DefaultLayout'))

type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

const AppRouter = (props: BoxProps) => {
  return (
    <>
    <DefaultLayout>
    <Suspense fallback={<div>Loading...</div>}>
      
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="help" element={<Help />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="store/:id" element={<StoreView />} />
     
        
        </Routes>
        
        </Suspense>
        </DefaultLayout>
        </>
  );
};

export default AppRouter;
