import { Outlet } from 'react-router';

import Navbar from './Navbar';

function GuestLayout() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;