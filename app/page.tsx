function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Welcome to my website
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Build something
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                amazing.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              Welcome to my modern Next.js website. Explore my projects, skills,
              experience and everything I'm building with modern web
              technologies.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/character"
                className="rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-slate-200"
              >
                Explore Projects →
              </a>

              <a
                href="/about"
                className="rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-slate-500"
              >
                About Me
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-slate-800 pt-8">
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="mt-1 text-sm text-slate-500">Projects</p>
              </div>

              <div>
                <p className="text-3xl font-bold">5+</p>
                <p className="mt-1 text-sm text-slate-500">Technologies</p>
              </div>

              <div>
                <p className="text-3xl font-bold">∞</p>
                <p className="mt-1 text-sm text-slate-500">Ideas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-blue-400">
              What I do
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Turning ideas into digital experiences.
            </h2>

            <p className="mt-5 text-slate-400">
              I focus on building clean, modern and useful applications using
              today's web technologies.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                ⚡
              </div>

              <h3 className="mt-6 text-xl font-bold">Fast & Modern</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Building fast, responsive and modern applications with Next.js
                and modern web technologies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                🎨
              </div>

              <h3 className="mt-6 text-xl font-bold">Beautiful UI</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Creating clean and beautiful interfaces with responsive layouts
                and thoughtful user experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-950/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-2xl">
                🚀
              </div>

              <h3 className="mt-6 text-xl font-bold">Always Learning</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Continuously learning new technologies and improving development
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Let's build something great.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Have an idea, project or something interesting to build? Let's turn
            that idea into reality.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3.5 font-semibold shadow-lg shadow-purple-900/30 transition hover:-translate-y-1"
          >
            Get In Touch →
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
