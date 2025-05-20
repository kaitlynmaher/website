import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Let’s Connect</h3>
      <p className="mb-4">I’m always excited to collaborate on bold ideas and meaningful work. Drop a line or connect below.</p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:kaitlyn@email.com" className="text-blue-600 hover:underline">Email</a>
        <a href="https://www.linkedin.com/in/kaitlynmaher" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="https://www.instagram.com/kaitlyn" target="_blank" className="text-blue-600 hover:underline">Instagram</a>
      </div>
    </section>
  );
}

export default Contact;
