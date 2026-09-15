import { Link, Outlet, useLocation } from 'react-router';

function AdminLayout() {
  const location = useLocation();

  const navItems = [
    {
      name: 'My Files',
      path: '/admin',
    },
    {
      name: 'Recent',
      path: '/admin/recent',
    },
    {
      name: 'Starred',
      path: '/admin/starred',
    },
    {
      name: 'Shared with me',
      path: '/admin/shared',
    },
    {
      name: 'Trash',
      path: '/admin/trash',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r md:flex md:flex-col">
          {/* Logo */}
          <div className="border-b px-6 py-6">
            <Link
              to="/admin"
              className="text-2xl font-bold tracking-tight"
            >
              vault.
            </Link>

            <p className="mt-1 text-xs text-muted-foreground">
              Personal cloud storage
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Workspace
            </p>

            {navItems.map((item) => {
              const active =
                location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block border px-3 py-2.5 text-sm transition ${
                    active
                      ? 'border-black bg-black text-white'
                      : 'border-transparent hover:border-black'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Storage */}
          <div className="border-t p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                Storage
              </p>

              <span className="text-xs text-muted-foreground">
                68%
              </span>
            </div>

            <div className="mt-3 h-2 bg-gray-100">
              <div className="h-full w-[68%] bg-black" />
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              6.8 GB of 10 GB used
            </p>

            <Link
              to="/"
              className="mt-4 block border px-3 py-2 text-center text-sm transition hover:bg-black hover:text-white"
            >
              Back to website
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Navbar */}
          <header className="flex h-16 items-center justify-between border-b bg-white px-5 md:px-8">
            <div>
              <p className="text-sm font-semibold">
                My Files
              </p>

              <p className="hidden text-xs text-muted-foreground sm:block">
                Personal workspace
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden border px-4 py-2 text-sm transition hover:bg-black hover:text-white sm:block">
                Upgrade
              </button>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-medium text-white">
                G
              </div>
            </div>
          </header>

          {/* Page */}
          <main className="flex-1 px-5 py-8 md:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <Outlet />
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t px-5 py-5 md:px-8 lg:px-10">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
              <p>
                © 2026 vault.
              </p>

              <p>
                Personal cloud storage
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;