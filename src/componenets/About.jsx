import React from 'react';
import img_about from '/about.jpg';
import Tilt from "react-parallax-tilt";

export default function About() {
  const stats = [
    { label: "Coding Problems Solved", value: 1000 },
    { label: "Projects Completed", value: 15 },
    { label: "Tech Stacks Mastered", value: 8 }
  ];

  return (
    <section
      id='about'
      className="min-h-screen flex items-center text-white px-4 sm:px-6 bg-gradient-to-b from-[#0a0214] via-[#140426] to-[#0a0214]"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image with layered shapes */}
        <figure
          data-aos='fade-right'
          data-aos-delay='200'
          className="relative flex justify-center group"
        >
          <div className="absolute top-6 right-6 h-64 w-64 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 h-52 w-52 bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500 rounded-full blur-2xl opacity-40 animate-bounce"></div>
          <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
          <img
            src={img_about}
            alt="About"
            className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 rounded-3xl shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          </Tilt>
        </figure>

        {/* Right Side - Text & Stats */}
        <article
          data-aos="fade-left"
          data-aos-delay="200"
          className="lg:text-left relative"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            I'm <strong className="text-purple-400">Priyanshu Gautam</strong>, a B.Tech student at CGC Landran specializing in IT. 
            I have a strong foundation in <strong>DSA with C++</strong> and frontend development using 
            <strong> HTML, CSS, JavaScript, React.js, Tailwind CSS</strong>.
            <br /><br />
            I enjoy creating clean user interfaces, solving real-world problems, and competing on 
            <strong> LeetCode</strong>, <strong>Codeforces</strong>, and <strong>GFG</strong> with over <span className="text-purple-400">1000+</span> problems solved.
            <br /><br />
            My goal is to work on impactful projects, collaborate with talented teams, and grow as a software engineer who creates value.
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:scale-105 transition">
                <h2 className="text-3xl font-bold text-purple-400">{stat.value}+</h2>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["C++", "HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Git", "DSA"].map((skill, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-purple-700/30 rounded-full border border-purple-500/30 hover:bg-purple-500/50 transition">
                {skill}
              </span>
            ))}
          </div>

          {/* Learn More Button */}
          <button className="inline-flex items-center gap-2 text-white border-2 py-2 px-6 rounded-full text-lg hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(180,0,255,0.8)] transition-all duration-300">
            Scroll down <span className="animate-bounce">↓</span>
          </button>
        </article>
      </div>
    </section>
  );
}
