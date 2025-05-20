import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Select Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Hard Break (2025)</h4>
            <p className="text-sm text-gray-600">Writer & Director – A dystopian short film exploring emotional autonomy in an AI-driven society. Festival submission pending.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold mb-2">AI in Entertainment Policy</h4>
            <p className="text-sm text-gray-600">Capstone paper on ethical AI governance in Hollywood. Presented to media policymakers and creators in 2024.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
