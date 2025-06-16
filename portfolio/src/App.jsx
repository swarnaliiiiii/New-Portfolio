import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Gr8ame",
      period: "September 2024 – February 2025",
      location: "Remote",
      description: [
        "Engineered the complete backend of Gr8ame's web platform from scratch, leveraging Java, Spring Boot, and secure OAuth2 integrations with Discord and Google, enabling robust authentication and user management.",
        "Focused on enhancing performance and scalability by structuring a maintainable backend architecture, ensuring seamless integration with front-end services and third-party APIs."
      ]
    },
    {
      title: "IT Intern", 
      company: "Indore Municipal Corporation",
      period: "June 2024 – August 2024",
      location: "Indore, India",
      description: [
        "Developed a full-stack tax ticketing system using Java and Spring Boot MVC, enabling ticket generation, tracking, updates, and payment processing.",
        "Integrated and tested backend services using Postman, and collaborated with municipal staff to align features with real-world tax workflows."
      ]
    },
    {
      title: "Content Lead",
      company: "Google Developer Student Club", 
      period: "June 2023 – July 2024",
      location: "Indore, India",
      description: [
        "Directed content creation and strategy for events and online platforms, enhancing community engagement and knowledge sharing.",
        "Organized and managed technical events and workshops, including promotional activities, logistics, and speaker coordination."
      ]
    }
  ];

  const projects = [
    {
      title: "SuCaSa - AI Interior Designer",
      description: "Pioneered an AI-driven mobile app that delivers tailored interior design recommendations by integrating OpenAI and generative AI for dynamic image generation.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Flutter", "MongoDB"],
      type: "AI/Mobile"
    },
    {
      title: "Jibly.ai - Resume Insights Extension", 
      description: "Designed and implemented a full-stack Chrome extension with React, Tailwind, and DaisyUI for an interactive UI, with Flask backend for resume-job matching.",
      tech: ["React", "Tailwind", "Flask", "Firebase", "OpenAI API"],
      type: "Web Extension"
    },
    {
      title: "Water Tax Ticketing System",
      description: "Architected a full-stack solution for managing water tax tickets using Java, Spring Boot MVC, and Razorpay for municipal operations.",
      tech: ["Java", "Spring Boot", "Razorpay", "Postman"],
      type: "Full-Stack"
    },
    {
      title: "Lokus - Travel Engaging App",
      description: "Contributed to a full-stack travel application using Flutter for cross-platform UI and Django for backend infrastructure.",
      tech: ["Flutter", "Django", "Cloud Storage"],
      type: "Mobile/Backend"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdebd0] text-stone-700 font-serif">
      {/* Header */}
      <header className="border-b border-stone-150">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <a href="https://github.com/swarnaliiiiii" className="text-2xl text-black-400 font-light">
              swarnali
            </a>
            <nav>
              <ul className="flex space-x-10">
                <li>
                  <button 
                    onClick={() => setActiveSection('projects')}
                    className={`text-stone-500 hover:text-stone-800 transition-colors font-normal ${activeSection === 'projects' ? 'text-stone-800' : ''}`}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('experience')}
                    className={`text-stone-500 hover:text-stone-800 transition-colors font-normal ${activeSection === 'experience' ? 'text-stone-800' : ''}`}
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('about')}
                    className={`text-stone-500 hover:text-stone-800 transition-colors font-normal ${activeSection === 'about' ? 'text-stone-800' : ''}`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('contact')}
                    className={`text-stone-500 hover:text-stone-800 transition-colors font-normal ${activeSection === 'contact' ? 'text-stone-800' : ''}`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-indigo-700 leading-tight max-w-4xl font-serif">
          Developer who thinks in code & AI.
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <h2 className="text-lg text-indigo-700 mb-6 font-normal">
              {activeSection === 'about' && 'Who I am'}
              {activeSection === 'projects' && 'What I build'}
              {activeSection === 'experience' && 'Where I\'ve worked'}
              {activeSection === 'contact' && 'Get in touch'}
            </h2>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {activeSection === 'about' && (
              <div className="text-stone-600 text-base leading-relaxed space-y-5">
                <p>
                  I am a passionate developer and AI enthusiast based in <a href="#" className="text-indigo-700 underline hover:text-indigo-800">Indore, India</a>. Currently pursuing M.Tech in IT from International Institute of Professional Studies, DAVV, I specialize in full-stack development with a focus on AI integration and user experience.
                </p>
                <p>
                  Since 2024, I have been building innovative solutions for companies like <a href="#" className="text-indigo-700 underline hover:text-indigo-800">Gr8ame</a> and <a href="#" className="text-indigo-700 underline hover:text-indigo-800">Indore Municipal Corporation</a>, developing everything from secure OAuth2 authentication systems to AI-powered interior design applications.
                </p>
                <p>
                  I believe in building meaningful, user-centric products. My expertise spans across modern web technologies, mobile development, and machine learning, with hands-on experience in Java, Python, React, Flutter, and various AI frameworks.
                </p>
                <p>
                  As the former Content Lead at Google Developer Student Club, I've also contributed to the developer community through technical events, workshops, and knowledge sharing initiatives.
                </p>
                <div className="flex space-x-6 pt-4">
                  <a 
                    href="https://github.com/swarnaliiiiii" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-700 hover:text-indigo-800 transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/swarnali-bhattacharyya-2a141722b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-700 hover:text-indigo-800 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-10">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-b border-stone-500 pb-8 last:border-b-0">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-stone-800 mb-1">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <span className="text-indigo-700 font-medium">{exp.company}</span>
                        <span className="text-sm text-stone-500">{exp.location}</span>
                      </div>
                      <span className="text-sm text-stone-500 italic">{exp.period}</span>
                    </div>
                    <div className="space-y-3">
                      {exp.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-stone-600 leading-relaxed">
                          • {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="border-b border-stone-500 pb-8 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-stone-800">{project.title}</h3>
                      <span className="text-sm text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-stone-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs text-stone-500 bg-stone-50 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="text-stone-600 text-base leading-relaxed space-y-6">
                <p>
                  I'm always interested in discussing new opportunities, collaborating on exciting projects, or just having a conversation about technology and innovation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-indigo-700" />
                    <a 
                      href="mailto:bswarnali78@gmail.com" 
                      className="text-indigo-700 hover:text-indigo-800 transition-colors"
                    >
                      bswarnali78@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-indigo-700">📍</span>
                    <span>Indore, Madhya Pradesh, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-indigo-700">📱</span>
                    <a 
                      href="tel:+919399711769" 
                      className="text-indigo-700 hover:text-indigo-800 transition-colors"
                    >
                      +91-9399711769
                    </a>
                  </div>
                </div>
                <p className="pt-4">
                  Whether you're looking for a developer to join your team, need help with a project, or want to discuss the latest in AI and web development, feel free to reach out!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-8 py-12 mt-16 border-t border-stone-200">
        <div className="flex justify-between items-center text-stone-500 text-sm">
          <p>© 2025 Swarnali Bhattacharyya</p>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/swarnaliiiiii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-stone-700 transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/swarnali-bhattacharyya-2a141722b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-stone-700 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:bswarnali78@gmail.com"
              className="hover:text-stone-700 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;