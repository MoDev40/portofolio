import React from 'react';

const HomeHero: React.FC = () => {
  return (
    <section className="w-full py-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Mukhtaar Ahmed</h1>
        <p className="text-lg text-gray-600 mb-8">Web Developer | MERN</p>
        <p className="text-gray-800 leading-relaxed">
          Welcome to my portfolio! I specialize in creating dynamic and responsive web applications.
          Let's build something amazing together.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;