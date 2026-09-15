import { Link } from 'react-router';
import { Button } from '../components/ui/button';

function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold">
          santri.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm hover:underline">
            Home
          </a>

          <a href="#about" className="text-sm hover:underline">
            About
          </a>

          <a href="#testimony" className="text-sm hover:underline">
            Testimony
          </a>

          <a href="#faq" className="text-sm hover:underline">
            FAQ
          </a>
        </nav>

        <Button asChild>
          <Link to="/sign-in">
            Sign In
          </Link>
        </Button>
      </div>
    </header>
  );
}

export default Navbar;