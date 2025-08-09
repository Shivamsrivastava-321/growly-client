import React from 'react';

const steps = [
  { title: "Input", desc: "Enter product details", icon: "📝" },
  { title: "AI", desc: "Growly generates ad creatives", icon: "🤖" },
  { title: "Output", desc: "Download ready-to-use ads", icon: "📤" },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 text-center bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">How It Works</h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-700">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
