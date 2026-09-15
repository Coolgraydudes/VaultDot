import { Link } from 'react-router';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

function SignUp() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">
          Create your account
        </p>

        <h1 className="mt-1 text-3xl font-bold">
          Sign Up
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Create a new account to get started.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Username
          </label>

          <Input
            type="text"
            placeholder="Enter your username"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Password
          </label>

          <Input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Confirm Password
          </label>

          <Input
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <Button className="w-full">
          Sign Up
        </Button>

        <Button
          asChild
          variant="outline"
          className="w-full"
        >
          <Link to="/sign-in">
            Already have an account? Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default SignUp;