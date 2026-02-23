"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Added Phone and Linkedin to imports
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon, Download, Phone } from 'lucide-react';

export default function Portfolio() {
  const [time, setTime] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [glitters, setGlitters] = useState([]);

  // --- REPLACE THESE WITH YOUR ACTUAL DETAILS ---
  const contactDetails = {
    linkedin: "https://www.linkedin.com/in/piyush-maurya-72a554285/",
    github: "https://github.com/piyushmauryacodes",
    email: "mailto:piyushmaurya0823@gmail.com",
    phone: "+91 88875 77211 "
  };


  // Real-time Clock
  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Theme Toggle Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Glitter Mouse Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newGlitter = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: Math.random() > 0.5 ? 'bg-blue-400' : 'bg-purple-400'
      };
      setGlitters((prev) => [...prev.slice(-12), newGlitter]); // Keep a short trail
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Custom Scroll Function for Centering
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const isTopOrBottom = targetId === 'home' || targetId === 'contact';
      target.scrollIntoView({
        behavior: 'smooth',
        block: isTopOrBottom ? 'start' : 'center',
      });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const skillsList = [
    { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Bash", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
    { name: "PowerBI", src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.png" }

  ];

  const myProjects = [
    {
      id: 1,
      title: "TruthCheck.AI",
      description: "A real-time fake news detection platform utilizing React, Node.js, and LLM APIs for advanced verification.",
      image: "/images/truthcheck.png",
      liveLink: "https://truthcheck-ai-1-tiqp.onrender.com/",
      githubLink: "https://github.com/piyushmauryacodes/truthcheck-ai.git"
    },
    {
      id: 2,
      title: "UI Generator",
      description: "An automated tool designed to streamline the creation of React components and accelerate frontend development timelines.",
      image: "/images/ui-generator.png",
      liveLink: "https://ui-generator-qcpcfp44x-piyushmauryacodes-projects.vercel.app/",
      githubLink: "https://github.com/piyushmauryacodes/ui-generator.git"
    },
    {
      id: 3,
      title: "Grow My Therapy",
      description: "A professional, responsive web application focused on accessibility and modern brand identity.",
      image: "/images/grow-therapy.png",
      liveLink: "https://dr-maya-website-project-grow-my-the.vercel.app/",
      githubLink: "https://github.com/piyushmauryacodes/dr-maya-website-project-Grow-My-Therapy.git"
    }
  ];

  return (
    <div className="space-bg min-h-screen font-sans selection:bg-blue-500/30">

      {/* Glitter Rendering */}
      {glitters.map((g) => (
        <motion.div
          key={g.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0, y: g.y + 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`fixed w-2 h-2 rounded-full pointer-events-none z-50 blur-[1px] ${g.color}`}
          style={{ left: g.x, top: g.y }}
        />
      ))}

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 glass border-b-0 px-6 py-4 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <span className="text-blue-500 font-bold text-xl">&lt;/&gt;</span>
          <span className="font-bold tracking-widest text-[var(--foreground)]">PIYUSH</span>
          <a href="https://github.com/piyushmauryacodes" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
            <Github size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-15 text-black font-extrabold bg-purple-200 border-r-8 border-b-8 border-purple-950 p-4 rounded-4xl text-sm font-medium">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="opacity-70 hover:opacity-100 hover:text-purple-600 hover:font-bold transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Top Right: Clock & Theme Toggle */}
        <div className="flex items-center gap-4">
          <div className="text-sm font-mono text-amber-50 font-extrabold hidden sm:block">{time}</div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 glass rounded-full hover:bg-blue-500/20 transition flex items-center justify-center"
          >
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-600" />}
          </button>
        </div>
      </nav>

      <main className="pt-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col gap-32 pb-20">

        {/* HERO SECTION */}
        <div className="flex flex-col h-full w-full">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute md:top-[-400px] hidden md:block left-0 md:w-full h-full object-cover -z-20"
          >
            <source src="/images/blackhole.webm" type="video/webm" />
          </video>
          <section id="home" className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="flex-1 flex flex-col gap-6">

              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Piyush Maurya</span>
              </h1>
              <h2 className="text-2xl md:text-3xl opacity-80">Full Stack Developer</h2>
              <p className="opacity-70 leading-relaxed max-w-lg">
                Building dynamic web applications with expertise in the MERN stack, React, and Tailwind CSS.
              </p>
              <div className="flex gap-4 mt-4">
                <button onClick={(e) => handleScroll(e, 'projects')} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  View Projects
                </button>
                <a
                  href="/Piyush Maurya.pdf"
                  download="Piyush Maurya.pdf"
                  className="px-6 py-3 glass hover:bg-[var(--card-hover)] rounded-lg flex items-center gap-2 transition cursor-pointer"
                >
                  <Download size={18} /> Resume
                </a>
              </div>

            </motion.div>
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="flex-1 flex justify-center">
              <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_40px_rgba(147,51,234,0.5)]">
                <div className="w-full h-full bg-gray-900 rounded-full border-4 border-[var(--background)] overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/profilepic.png"
                    alt="Piyush Maurya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </section></div>


        {/* ABOUT SECTION */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="glass p-10 rounded-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="opacity-80 mb-8 max-w-3xl">
            I am a passionate developer focused on crafting clean and user-friendly experiences. I love solving complex problems and turning ideas into reality using modern web technologies.
          </p>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-2">Skills</h2>
          <p className="text-blue-500 text-lg mb-10 tracking-wide uppercase font-semibold">My Technical Knowledge</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
            {skillsList.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
              >
                <img src={skill.src} alt={skill.name} className="w-16 h-16 drop-shadow-lg" />
                <span className="font-medium opacity-80">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                className="glass rounded-xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 flex flex-col"
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-800/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition">{project.title}</h3>
                  <p className="opacity-70 text-sm mb-6 flex-1">{project.description}</p>

                  {/* Buttons */}
                  <div className="flex justify-between mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-sm bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded transition flex items-center gap-2">
                      <ExternalLink size={16} /> Live
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-sm glass hover:bg-[var(--card-hover)] px-4 py-2 rounded transition flex items-center gap-2">
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION - UPDATED */}
        <section id="contact" className="max-w-6xl mx-auto w-full my-20 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden"
          >
             {/* Optional subtle glow blobs for extra space feel */}
             <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
             <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column: The Form */}
              <div>
                <form className="flex flex-col gap-5">
                  <input type="text" placeholder="Name" className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition placeholder-gray-400" />
                  <input type="email" placeholder="Email" className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition placeholder-gray-400" />
                  <textarea placeholder="Message" rows="4" className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition resize-none placeholder-gray-400"></textarea>
                  <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] transition active:scale-95">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Column: Contact Info & Socials */}
              <div className="flex flex-col justify-center space-y-8 md:pl-10 md:border-l border-gray-700/30">
                <div>
                   <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Info</h3>
                   {/* Phone Number */}
                   <div className="flex items-center gap-4 group">
                      <div className="p-3 glass rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <Phone size={24} />
                      </div>
                      <span className="text-lg font-medium tracking-wide">{contactDetails.phone}</span>
                   </div>
                </div>

                <div>
                   <h3 className="text-2xl font-semibold mb-6 text-purple-400">Follow Me</h3>
                   <div className="flex gap-4">
                      <SocialLink href={contactDetails.linkedin} icon={<Linkedin size={24} />} label="LinkedIn" colorClass="text-blue-400" />
                      <SocialLink href={contactDetails.github} icon={<Github size={24} />} label="GitHub" colorClass="text-purple-400" />
                      <SocialLink href={contactDetails.email} icon={<Mail size={24} />} label="Email" colorClass="text-green-400" />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}

// Helper Component for Social Links to keep main JSX clean
const SocialLink = ({ href, icon, label, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`p-4 glass rounded-xl text-gray-300 hover:${colorClass} border border-transparent hover:border-current hover:-translate-y-2 shadow-lg transition-all duration-300`}
  >
    {icon}
  </a>
);