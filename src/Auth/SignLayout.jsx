import { Outlet } from 'react-router';

function SignLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-5xl overflow-hidden border border-black">
        <div className="grid min-h-[600px] md:grid-cols-2">
          {/* Image */}
          <div className="bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Auth"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Sign In / Sign Up */}
          <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-sm">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignLayout;