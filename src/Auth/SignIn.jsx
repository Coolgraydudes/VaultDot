import { Link, useNavigate } from 'react-router';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

function SignIn() {
  const navigate = useNavigate();

  function handleSignIn(event) {
    event.preventDefault();

    navigate('/admin');
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">
          Welcome back
        </p>

        <h1 className="mt-1 text-3xl font-bold">
          Sign In
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to continue to your account.
        </p>
      </div>

      <form
        onSubmit={handleSignIn}
        className="space-y-4"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Password
          </label>

          <Input
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Sign In
        </Button>

        <Button
          asChild
          variant="outline"
          className="w-full"
        >
          <Link to="/sign-up">
            Sign Up
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default SignIn;