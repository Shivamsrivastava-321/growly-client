import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-4 text-center"
    style={{
      backgroundImage:`url("https://plus.unsplash.com/premium_photo-1667862241971-e1f08f51dd07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRlY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww")`
    }}
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Create High-Converting Ads in Seconds — <span className='text-red-500'>Powered by AI</span>
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
        No design or copywriting needed. Just enter your product and let Growly do the rest.
      </p>
      <a href="#lead-form" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
        Book Free Demo
      </a>
    </section>
  );
};

export default Hero;
