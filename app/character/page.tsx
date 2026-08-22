export default function Character() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Marvel Superhero
            </p>

            <h1 className="text-6xl font-black md:text-8xl">
              IRON
              <span className="block text-red-600">MAN</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Tony Stark is a genius, billionaire, inventor and philanthropist
              who created the Iron Man armor and became one of the most powerful
              heroes in the Marvel universe.
            </p>

            <button className="mt-8 rounded-lg bg-red-600 px-6 py-3 font-bold hover:bg-red-700">
              Explore His Story
            </button>
          </div>

          {/* Arc Reactor */}
          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-full border-4 border-red-600/30 bg-slate-900 shadow-2xl shadow-red-900/40">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_70px_rgba(34,211,238,0.6)]">
                <div className="h-20 w-20 rotate-45 border-4 border-cyan-300 bg-cyan-300/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-bold">About Tony Stark</h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            Tony Stark is an extremely intelligent engineer and inventor. After
            experiencing a life-changing event, he developed the first Iron Man
            suit. His technology evolved through many generations of armor,
            making him capable of flight, enhanced strength, advanced combat and
            sophisticated technological analysis.
          </p>
        </div>
      </section>

      {/* Facts */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">Quick Facts</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-500">REAL NAME</p>
            <p className="mt-2 text-xl font-bold">Tony Stark</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-500">ALIAS</p>
            <p className="mt-2 text-xl font-bold">Iron Man</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-500">OCCUPATION</p>
            <p className="mt-2 text-xl font-bold">Inventor</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-500">TEAM</p>
            <p className="mt-2 text-xl font-bold">Avengers</p>
          </div>
        </div>
      </section>

      {/* Abilities */}
      <section className="bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-bold">Abilities & Technology</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 p-7 hover:border-red-600">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-4 text-xl font-bold">Arc Reactor</h3>
              <p className="mt-3 text-slate-400">
                An advanced power source used to power Stark's technology and
                armor.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-7 hover:border-red-600">
              <div className="text-4xl">🧠</div>
              <h3 className="mt-4 text-xl font-bold">Genius Intelligence</h3>
              <p className="mt-3 text-slate-400">
                Exceptional knowledge of engineering, physics, robotics and
                computer technology.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-7 hover:border-red-600">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-4 text-xl font-bold">Flight</h3>
              <p className="mt-3 text-slate-400">
                Powerful propulsion systems allow Iron Man to fly at extremely
                high speeds.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-7 hover:border-red-600">
              <div className="text-4xl">💥</div>
              <h3 className="mt-4 text-xl font-bold">Repulsors</h3>
              <p className="mt-3 text-slate-400">
                Energy-based systems used for propulsion and combat.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-7 hover:border-red-600">
              <div className="text-4xl">🛡️</div>
              <h3 className="mt-4 text-xl font-bold">Armor</h3>
              <p className="mt-3 text-slate-400">
                Advanced armor provides protection, strength, weapons, sensors
                and flight capabilities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-7 hover:border-red-600">
              <div className="text-4xl">🤖</div>
              <h3 className="mt-4 text-xl font-bold">
                Artificial Intelligence
              </h3>
              <p className="mt-3 text-slate-400">
                AI systems assist Stark with operating and analyzing his
                advanced armor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personality */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="font-bold uppercase tracking-widest text-red-500">
          Personality
        </p>

        <h2 className="mt-3 text-4xl font-bold">More Than The Armor</h2>

        <p className="mt-6 text-lg leading-9 text-slate-400">
          Tony Stark is confident, intelligent, sarcastic, ambitious and
          creative. Although he can be arrogant and reckless, he develops a
          strong sense of responsibility and repeatedly puts himself in danger
          to protect others.
        </p>
      </section>

      {/* Timeline */}
      <section className="bg-slate-900/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-4xl font-bold">Iron Man Journey</h2>

          <div className="mt-10 space-y-5">
            <div className="rounded-xl border border-slate-800 p-6">
              <span className="font-bold text-red-500">2008</span>
              <h3 className="mt-2 text-xl font-bold">Iron Man</h3>
              <p className="mt-2 text-slate-400">
                Tony Stark creates the first Iron Man armor.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 p-6">
              <span className="font-bold text-red-500">2012</span>
              <h3 className="mt-2 text-xl font-bold">The Avengers</h3>
              <p className="mt-2 text-slate-400">
                Stark joins the Avengers and helps defend New York.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 p-6">
              <span className="font-bold text-red-500">2018</span>
              <h3 className="mt-2 text-xl font-bold">Infinity War</h3>
              <p className="mt-2 text-slate-400">
                Tony faces Thanos and one of the greatest threats to humanity.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 p-6">
              <span className="font-bold text-red-500">2019</span>
              <h3 className="mt-2 text-xl font-bold">Endgame</h3>
              <p className="mt-2 text-slate-400">
                Tony makes the ultimate sacrifice to save the universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="text-6xl text-red-600">"</div>

        <p className="mt-4 text-3xl font-bold leading-relaxed">
          Sometimes you gotta run before you can walk.
        </p>

        <p className="mt-5 text-slate-500">— Tony Stark</p>
      </section>
    </main>
  );
}
