import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Auth from '../pages/Auth';

const Layout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/authentication',
          element: <Auth />,
        },
    ],
  },
]);

export default router;