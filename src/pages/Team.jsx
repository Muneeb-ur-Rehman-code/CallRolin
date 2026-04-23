import React, { useEffect, useState } from 'react';

const PARTICLES = [...Array(20)].map((_, i) => ({
  left: ((i * 37 + 11) % 100),
  top: ((i * 53 + 7) % 100),
  delay: ((i * 0.31) % 5).toFixed(2),
  duration: (2 + (i % 5) * 0.6).toFixed(2),
}));

const teamMembers = [
  {
    name: 'Muhammad Bilal',
    role: 'CEO CallRolin',
    subrole: 'Lead Software Architect & Visionary',
    image: '/bilal.jpeg',
    linkedin: 'https://www.linkedin.com/in/bilalzafar7/',
  },
  {
    name: 'Wasif Sohail',
    role: 'CTO CallRolin',
    subrole: 'Head of AI Engineering',
    image: '/Wasif.png',
    linkedin: 'https://www.linkedin.com/in/wasifsohail/',
  },
  {
    name: 'Raja Junaid',
    role: 'Machine Learning Engineer',
    subrole: 'Neural Networks & NLP',
    image: '/junaid.jpeg',
    linkedin: 'https://www.linkedin.com/in/raja-junaid-hameed-a1178726a/',
  },
  {
    name: 'Shahzeb Mustafa',
    role: 'Backend Engineer',
    subrole: 'Distributed Systems & AI Integration',
    image: '/shahzeb.jpeg',
    linkedin: 'https://www.linkedin.com/in/shahzeb-mustafa-ab94872b6/',
  },
];

const Team = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const w = typeof window !== 'undefined' ? window.innerWidth || 1 : 1;
  const h = typeof window !== 'undefined' ? window.innerHeight || 1 : 1;

  return (
    <div
      className="min-h-dvh overflow-x-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Same animated background as About hero: grid + particles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, transparent 30%, black 70%)',
          }}
        />
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className={`absolute h-1 w-1 rounded-full bg-white/30 ${reduceMotion ? '' : 'animate-pulse'}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <main id="main-content" className="relative">
        <section
          className="relative w-full overflow-hidden px-6 pt-28 pb-32 sm:px-10 md:px-12 md:pt-36 md:pb-44 lg:px-16 lg:pt-40 lg:pb-52"
          aria-labelledby="team-heading"
        >
          {/* Same hero-style frame: lines + soft light (About hero) */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {!reduceMotion && (
              <div
                className="absolute h-96 w-96 rounded-full blur-3xl opacity-10"
                style={{
                  left: `${(mousePosition.x / w) * 100}%`,
                  top: `${(mousePosition.y / h) * 100}%`,
                  background: 'radial-gradient(circle, white 0%, transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                  transition: 'all 0.1s ease-out',
                }}
              />
            )}
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Title block — original “Meet Our / Visionary Team” treatment */}
            <header className="mb-24 text-center md:mb-32 lg:mb-40">
              <div className="mb-10 inline-flex items-center gap-4 md:mb-12">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/30" />
                <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
                  The Minds Behind
                </span>
                <div className="h-px w-20 bg-gradient-to-r from-white/30 to-transparent" />
              </div>
              <h1
                id="team-heading"
                className="mb-10 text-4xl font-bold leading-tight tracking-tight md:mb-12 md:text-6xl lg:text-7xl"
              >
                <span className="block text-white/90">Meet Our</span>
                <span className="relative mt-2 inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Visionary Team
                  </span>
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-white via-white/50 to-white opacity-30" />
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
                A collective of innovators, engineers, and visionaries dedicated to
                redefining the future of AI voice interaction.
              </p>
            </header>

            <h2 className="sr-only">Team members</h2>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-20 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16 xl:gap-x-14">
              {teamMembers.map((member, index) => (
                <article
                  key={member.name}
                  className="group flex flex-col"
                  style={{
                    animation: reduceMotion
                      ? undefined
                      : `team-card-in 0.5s ease-out ${0.06 + index * 0.06}s both`,
                  }}
                >
                  <div className="relative mb-8 aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-900 md:mb-10">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      width={360}
                      height={480}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-[transform,filter] duration-300 ease-out group-hover:brightness-[1.03] motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=27272a&color=f4f4f5`;
                      }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                        {member.name}
                      </h3>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-[#0a66c2] transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-sm font-medium text-white/55">{member.role}</p>
                    <p className="mt-2 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/50">
                      {member.subrole}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;
