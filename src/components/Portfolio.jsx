// Portfolio React component for Joshua S
// Instructions:
// 1) This component uses Tailwind CSS for styling. If your project doesn't have Tailwind set up,
//    either set up Tailwind (recommended) or paste the compiled CSS / use the quick CDN link in index.html:
//    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
// 2) Save this file as src/components/Portfolio.jsx and import it in src/App.jsx: `import Portfolio from './components/Portfolio'` then render <Portfolio />.
// 3) Update contact links, GitHub, and project links as needed.

import React from 'react';

export default function Portfolio(){
  const projects = [
    {
      title: 'IoT Street-Light Fault Detection',
      desc: 'An IoT-based system to automatically detect faults in street lights and provide precise location tracking for quick maintenance.',
      tags: ['IoT','Sensors','Location Tracking']
    },
    {
      title: 'Vehicle-to-Vehicle (V2V) Charging System',
      desc: 'A dynamic V2V charging system implemented using a buck-boost converter for efficient power transfer.',
      tags: ['Power Electronics','Embedded','Control']
    }
  ];

  const skills = {
    languages: ['Java', 'JavaScript', 'HTML', 'CSS'],
    web: ['React', 'Node.js', 'Express'],
    db: ['MySQL'],
    tools: ['VS Code', 'Git', 'GitHub']
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">JOSHUA S</h1>
            <p className="text-sm text-gray-600">Java Full Stack Developer</p>
          </div>
          <div className="text-right text-sm">
            <p>📱 +91 88256 77855</p>
            <p>✉️ joshuasr031@gmail.com</p>
            <p className="text-gray-500">597, Movendhar Nagar, Madurai</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold mb-3">Aspiring software developer with a strong foundation in programming and problem-solving.</h2>
            <p className="text-gray-600 mb-4">Seeking an entry-level position to apply my skills and contribute to the success of a dynamic development team. I have hands-on experience in web development, databases, and embedded systems through academic projects and internships.</p>

            <div className="flex flex-wrap gap-2">
              <a href="#projects" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">View Projects</a>
              <a href="#contact" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">Contact Me</a>
              <a 
  href="/Joshua Resume JFS.pdf" 
  download 
  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
>
  📄 Download Resume
</a>

            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-48 h-48 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">JS</div>
            
          </div>
          
        </section>

        {/* Skills & Education */}
        <section className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="text-sm text-gray-700">
              <p className="font-medium">Languages</p>
              <p className="mb-2">{skills.languages.join(', ')}</p>
              <p className="font-medium">Web / Frameworks</p>
              <p className="mb-2">{skills.web.join(', ')}</p>
              <p className="font-medium">Databases</p>
              <p className="mb-2">{skills.db.join(', ')}</p>
              <p className="font-medium">Tools</p>
              <p>{skills.tools.join(', ')}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
            <h3 className="font-semibold mb-2">Education</h3>
            <div className="text-sm text-gray-700">
              <p className="font-medium">Bachelor of Engineering - Electrical & Electronics (K.L.N. College of Engineering)</p>
              <p>CGPA: 8.25 (2021 - 2025)</p>

              <div className="mt-4">
                <p className="font-medium">HSC - Srivi Lions Matric Hr Sec School (2019 - 2021)</p>
                <p>Percentage: 79%</p>
              </div>

              <div className="mt-4">
                <p className="font-medium">SSLC (2018 - 2019)</p>
                <p>Percentage: 70%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article key={i} className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-gray-600 mt-2">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-xs border px-2 py-1 rounded text-gray-600">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <a className="text-sm px-3 py-1 rounded border" href="#">View Code</a>
                  <a className="text-sm px-3 py-1 rounded bg-indigo-600 text-white" href="#">Live Demo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications & Training */}
        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Certifications</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Cloud Computing - NPTEL</li>
              <li>Introduction to Internet of Things - NPTEL</li>
              <li>AutoCAD in Electrical - EcareerPlus</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Inplant Training</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>R&D - TVS Sensing Solutions Pvt. Ltd., Madurai (7 days)</li>
              <li>Electronics Trainee - Shri Vishnu Engineering (5 days)</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-700 mb-4">Feel free to reach out for work or collaboration.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600">joshuasr031@gmail.com</p>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-gray-600">+91 88256 77855</p>
            </div>
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-gray-600">597, Movendhar Nagar, Madurai</p>
            </div>
          </div>

          <form 
  className="mt-6 grid md:grid-cols-2 gap-4"
  onSubmit={(e) => {
    e.preventDefault(); // stop page refresh
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // 👉 Here you can do whatever you want with the message
    console.log("New message received:", { name, email, message });
    alert("✅ Message received! Check console for details.");
  }}
>
  <input 
    name="name" 
    className="border p-3 rounded" 
    placeholder="Your name" 
    required 
  />
  <input 
    name="email" 
    type="email" 
    className="border p-3 rounded" 
    placeholder="Your email" 
    required 
  />
  <textarea 
    name="message" 
    className="border p-3 rounded md:col-span-2" 
    rows="4" 
    placeholder="Message"
    required
  ></textarea>
  <button 
    type="submit" 
    className="md:col-span-2 px-4 py-2 bg-indigo-600 text-white rounded"
  >
    Send Message
  </button>
</form>

        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Built by Joshua S — Java Full Stack Developer</p>
        </footer>
      </main>
    </div>
  );
}
