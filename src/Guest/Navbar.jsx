import { Link } from 'react-router';

import { Button } from '../components/ui/button';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          vault.
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            About
          </a>

          <a
            href="#testimony"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Testimony
          </a>

          <a
            href="#faq"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            FAQ
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden sm:flex"
          >
            <Link to="/sign-in">
              Sign In
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
          >
            <Link to="/sign-up">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;