import { createBrowserRouter, Navigate } from 'react-router';

import SignLayout from './Auth/SignLayout';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

import GuestLayout from './Guest/GuestLayout';
import HomeGuest from './Guest/Home';

import AdminLayout from './Admin/AdminLayout';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <HomeGuest />,
      },
    ],
  },

  {
    element: <SignLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;