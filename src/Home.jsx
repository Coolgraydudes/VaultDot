function Home() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="border-b pb-6">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Dashboard
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Welcome back.
        </h1>

        <p className="mt-2 max-w-2xl text-muted-foreground">
          Manage your santri data, attendance, and academic
          information from one place.
        </p>
      </section>

      {/* Statistics */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Overview
          </h2>

          <span className="text-sm text-muted-foreground">
            2026 Academic Year
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border p-6 transition hover:bg-black hover:text-white">
            <p className="text-sm text-muted-foreground">
              Total Santri
            </p>

            <p className="mt-6 text-5xl font-bold">
              128
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Registered students
            </p>
          </div>

          <div className="border p-6 transition hover:bg-black hover:text-white">
            <p className="text-sm text-muted-foreground">
              Attendance
            </p>

            <p className="mt-6 text-5xl font-bold">
              96%
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Average attendance
            </p>
          </div>

          <div className="border p-6 transition hover:bg-black hover:text-white">
            <p className="text-sm text-muted-foreground">
              Classes
            </p>

            <p className="mt-6 text-5xl font-bold">
              12
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Active classes
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="grid gap-4 lg:grid-cols-3">
        <div className="border p-6 lg:col-span-2">
          <div className="border-b pb-4">
            <h2 className="font-semibold">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Latest updates from the system
            </p>
          </div>

          <div className="divide-y">
            <div className="flex items-center justify-between py-5">
              <div>
                <p className="font-medium">
                  New santri registered
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Ahmad Fauzan joined the system
                </p>
              </div>

              <span className="text-xs text-muted-foreground">
                10:24
              </span>
            </div>

            <div className="flex items-center justify-between py-5">
              <div>
                <p className="font-medium">
                  Attendance updated
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Class 11A attendance has been updated
                </p>
              </div>

              <span className="text-xs text-muted-foreground">
                09:15
              </span>
            </div>

            <div className="flex items-center justify-between py-5">
              <div>
                <p className="font-medium">
                  Academic data updated
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  New academic records were added
                </p>
              </div>

              <span className="text-xs text-muted-foreground">
                08:42
              </span>
            </div>
          </div>
        </div>

        <div className="border p-6">
          <div className="border-b pb-4">
            <h2 className="font-semibold">
              Quick Info
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              System information
            </p>
          </div>

          <div className="space-y-6 pt-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Academic Year
              </p>

              <p className="mt-1 font-medium">
                2026 / 2027
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Total Classes
              </p>

              <p className="mt-1 font-medium">
                12 Classes
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                System Status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-black" />

                <span className="text-sm font-medium">
                  Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative overflow-hidden border bg-black p-8 text-white md:p-10">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Santri Management System
          </p>

          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Everything in one place.
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Keep student information, attendance, and academic
            records organized in one simple management system.
          </p>
        </div>

        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20" />
        <div className="absolute -bottom-24 right-24 h-48 w-48 rounded-full border border-white/10" />
      </section>
    </div>
  );
}

export default Home;