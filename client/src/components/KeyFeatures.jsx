import React from 'react';

const features = [
  { icon: "🎨", title: "AI Creative Generator" },
  { icon: "🧠", title: "Headline Optimizer" },
  { icon: "📦", title: "Export Ad Formats" },
];

const KeyFeatures = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Key Features</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <div key={i} className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-700">
            <div className="text-5xl mb-4">{feat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{feat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
