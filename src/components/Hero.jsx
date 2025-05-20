import React from 'react';

function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb, #ff69b4)',
        animation: 'gradientMove 15s ease infinite',
        backgroundSize: '400% 400%',
      }}
    >
      <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Hi, I’m Kaitlyn Maher</h2>
      <p className="text-lg max-w-2xl text-white drop-shadow-sm">
        Creative strategist, actor, and writer at the intersection of entertainment, tech, and global impact.
      </p>
      <a
        href="#contact"
        className="mt-6 px-6 py-3 bg-white text-pink-600 rounded-xl shadow hover:bg-pink-100 font-semibold"
      >
        Get in Touch
      </a>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        <img src="/headshot.jpg" alt="Headshot" className="rounded-xl w-48 h-64 object-cover shadow-lg" />
        <img src="/behind-the-scenes.jpg" alt="Behind the Scenes" className="rounded-xl w-64 h-48 object-cover shadow-lg" />
      </div>
    </section>
  );
}

export default Hero;
