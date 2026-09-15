import { Link } from 'react-router';

import { AspectRatio } from '../components/ui/aspect-ratio';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
} from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { Separator } from '../components/ui/separator';

function Home() {
  const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'Product Designer',
      text: 'Vault makes it much easier to keep all my project files organized and accessible.',
      initials: 'AM',
    },
    {
      name: 'Sarah Chen',
      role: 'Freelance Developer',
      text: 'Simple, clean, and exactly what I need for managing files across different projects.',
      initials: 'SC',
    },
    {
      name: 'Daniel Kim',
      role: 'Creative Director',
      text: 'I can finally keep my design files, documents, and assets in one organized place.',
      initials: 'DK',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section
        id="home"
        className="border-b"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Text */}
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Your files. Your space.
              </p>

              <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                A simpler place for all your files.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                Store, organize, and access your files from anywhere.
                Keep everything you need in one clean and secure workspace.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                >
                  <Link to="/sign-up">
                    Get Started
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link to="/sign-in">
                    Sign In
                  </Link>
                </Button>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                No complicated setup. Just upload and organize.
              </p>
            </div>

            {/* Hero Preview */}
            <Card className="overflow-hidden">
              <CardContent className="p-3">
                <AspectRatio ratio={4 / 3}>
                  <div className="h-full w-full border bg-muted/30 p-4">
                    {/* Fake browser header */}
                    <div className="flex items-center gap-2 border-b pb-3">
                      <div className="h-2 w-2 rounded-full bg-black" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />

                      <div className="ml-4 h-7 flex-1 bg-background" />
                    </div>

                    {/* Preview */}
                    <div className="grid h-[calc(100%-48px)] grid-cols-[90px_1fr] gap-3 pt-4">
                      <div className="space-y-2 border-r pr-3">
                        <div className="h-5 bg-black" />
                        <div className="h-4 bg-background" />
                        <div className="h-4 bg-background" />
                        <div className="h-4 bg-background" />
                        <div className="h-4 bg-background" />
                      </div>

                      <div className="space-y-3">
                        <div className="h-8 w-2/3 bg-background" />

                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-20 bg-background" />
                          <div className="h-20 bg-background" />
                          <div className="h-20 bg-background" />
                        </div>

                        <div className="space-y-2 pt-2">
                          <div className="h-8 bg-background" />
                          <div className="h-8 bg-background" />
                          <div className="h-8 bg-background" />
                          <div className="h-8 bg-background" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-b"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Why vault.
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Everything organized.
                <br />
                Nothing complicated.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                Vault gives you a straightforward way to manage your
                digital files. Create folders, find documents quickly,
                and keep your workspace organized without unnecessary
                clutter.
              </p>

              <div className="mt-7">
                <Button
                  asChild
                  variant="outline"
                >
                  <Link to="/sign-up">
                    Create your space
                  </Link>
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-3">
                <AspectRatio ratio={16 / 10}>
                  <div className="grid h-full grid-cols-2 gap-3 p-4">
                    <div className="border p-4">
                      <div className="h-8 w-8 bg-black" />

                      <div className="mt-6 h-3 w-2/3 bg-muted" />
                      <div className="mt-2 h-2 w-1/2 bg-muted" />
                    </div>

                    <div className="border p-4">
                      <div className="h-8 w-8 bg-black" />

                      <div className="mt-6 h-3 w-2/3 bg-muted" />
                      <div className="mt-2 h-2 w-1/2 bg-muted" />
                    </div>

                    <div className="col-span-2 border p-4">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-black" />

                        <div className="flex-1">
                          <div className="h-3 w-1/2 bg-muted" />
                          <div className="mt-2 h-2 w-1/3 bg-muted" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Built around your workflow.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center bg-black text-sm font-bold text-white">
                  01
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  Organize
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Keep your documents, projects, and personal files
                  neatly organized in folders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center bg-black text-sm font-bold text-white">
                  02
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  Find quickly
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Search through your workspace and find what you need
                  without digging through folders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center bg-black text-sm font-bold text-white">
                  03
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  Access anywhere
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Your workspace stays available wherever you need
                  to work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimony */}
      <section
        id="testimony"
        className="border-b"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Testimony
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              People are keeping things simple.
            </h2>
          </div>

          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col p-6">
                      <p className="flex-1 text-sm leading-7 text-muted-foreground">
                        "{testimonial.text}"
                      </p>

                      <Separator className="my-6" />

                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="text-sm font-medium">
                            {testimonial.name}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-b"
      >
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-24">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Questions, answered.
            </h2>
          </div>

          <div className="border-t">
            <div className="border-b py-6">
              <h3 className="font-semibold">
                What is vault.?
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Vault is a personal cloud workspace for storing and
                organizing your digital files.
              </p>
            </div>

            <div className="border-b py-6">
              <h3 className="font-semibold">
                Can I organize files into folders?
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Yes. You can keep different projects and types of files
                separated into their own folders.
              </p>
            </div>

            <div className="border-b py-6">
              <h3 className="font-semibold">
                Can I access my files anywhere?
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Your files are designed to be accessible from your
                workspace wherever you work.
              </p>
            </div>

            <div className="border-b py-6">
              <h3 className="font-semibold">
                Is there a free plan?
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Yes. You can start with the basic storage included in
                your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Ready when you are
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Your files deserve
            <br />
            a better home.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Create your workspace and start organizing your files
            today.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Button
              asChild
              size="lg"
            >
              <Link to="/sign-up">
                Get Started
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <Link to="/sign-in">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-bold">
                vault.
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                A simpler place for your files.
              </p>
            </div>

            <div className="flex gap-5 text-sm text-muted-foreground">
              <a
                href="#about"
                className="hover:text-foreground"
              >
                About
              </a>

              <a
                href="#testimony"
                className="hover:text-foreground"
              >
                Testimony
              </a>

              <a
                href="#faq"
                className="hover:text-foreground"
              >
                FAQ
              </a>

              <Link
                to="/sign-in"
                className="hover:text-foreground"
              >
                Sign In
              </Link>
            </div>
          </div>

          <Separator className="my-6" />

          <p className="text-xs text-muted-foreground">
            © 2026 vault. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;