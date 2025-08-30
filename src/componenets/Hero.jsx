// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";

// import ProfilePic from "/Profile_Pic.jpg";
// import github from "/github.png";
// import LinkedIn from "/linkedin.png";
// import Leetcode from "/leetcode.png";
// import GFG from "/geeksforgeeks.png";
// import CP from "/codeforces.png";

// const titles = [
//   "Frontend Developer",
//   "Software Developer",
//   "C++ Enthusiast",
//   "Tech Explorer"
// ];

// export default function Hero() {
//   const [displayedTitle, setDisplayedTitle] = useState("");
//   const [titleIndex, setTitleIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   // Typing effect
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const currentTitle = titles[titleIndex];
//       if (charIndex < currentTitle.length) {
//         setDisplayedTitle((prev) => prev + currentTitle[charIndex]);
//         setCharIndex((prev) => prev + 1);
//       } else {
//         setTimeout(() => {
//           setDisplayedTitle("");
//           setCharIndex(0);
//           setTitleIndex((prev) => (prev + 1) % titles.length);
//         }, 1500);
//       }
//     }, 120);
//     return () => clearTimeout(timeout);
//   }, [charIndex, titleIndex]);

//   return (
//     <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#12001c] to-black text-white">

//       {/* Animated background grid */}
//       <motion.div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
//           backgroundSize: "40px 40px"
//         }}
//         animate={{
//           backgroundPosition: ["0px 0px", "40px 40px"]
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 10,
//           ease: "linear"
//         }}
//       ></motion.div>

//       {/* Floating blobs */}
//       <motion.div
//         className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-40"
//         animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-10 right-10 w-52 h-52 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-40"
//         animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
//       />

//       <main className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-24 pt-28 md:pt-40 z-10">

//         {/* Text Section */}
//         <motion.section
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex-1 md:text-left relative"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-wide">
//             Priyanshu Gautam
//           </h1>
//           <h2 className="text-xl md:text-2xl font-semibold text-purple-400 min-h-[32px] flex">
//             {displayedTitle}
//             <span className="animate-pulse ml-1">|</span>
//           </h2>

//           {/* Glass Bio Card */}
//           <div className="mt-6 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg max-w-xl">
//             <p className="text-gray-300 leading-relaxed">
//               B.Tech student at CGC Landran, specializing in IT. Passionate about coding, problem-solving, 
//               and building innovative solutions. Skilled in C++, web technologies (HTML, CSS, JavaScript, React.js, TailwindCSS).
//               Always eager to learn and grow.
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center space-x-5 mt-6">
//             {[
//               { img: github, link: "https://github.com/Priyanshu57005", name: "GitHub" },
//               { img: LinkedIn, link: "https://www.linkedin.com/in/priyanshu-gautam-12b5a0298/", name: "LinkedIn" },
//               { img: Leetcode, link: "https://leetcode.com/u/priyanshu_307/", name: "LeetCode" },
//               { img: CP, link: "https://codeforces.com/profile/Priyanshu_0705", name: "Codeforces" },
//               { img: GFG, link: "https://www.geeksforgeeks.org/user/priyanshu_307/", name: "GeeksforGeeks" }
//             ].map(({ img, link, name }) => (
//               <motion.a
//                 whileHover={{ rotateY: 360, scale: 1.2 }}
//                 transition={{ duration: 0.6 }}
//                 key={name}
//                 href={link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="relative group"
//               >
//                 <img
//                   src={img}
//                   alt={name}
//                   className="w-10 h-10 transition-transform duration-300"
//                 />
//                 <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//                   {name}
//                 </span>
//               </motion.a>
//             ))}
//           </div>

//           {/* Resume Button */}
//           <a href="/Resume.pdf" download>
//             <motion.button
//               whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(180,0,255,0.8)" }}
//               className="mt-6 inline-flex text-white border-2 py-2 px-6 rounded-full text-lg hover:bg-purple-700 transition-all duration-300"
//             >
//               Download Resume
//             </motion.button>
//           </a>
//         </motion.section>

//         {/* Profile Pic with 3D Tilt */}
//         <motion.figure
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex-1 flex justify-center mt-10 md:mt-0"
//         >
//           <Tilt glareEnable={true} glareMaxOpacity={0.5} scale={1.05}>
//             <div className="relative group">
//               <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
//               <img
//                 src={ProfilePic}
//                 alt="Profile"
//                 className="relative z-10 h-[400px] w-[300px] object-cover rounded-xl shadow-lg"
//               />
//             </div>
//           </Tilt>
//         </motion.figure>
//       </main>

//       {/* Animated Scroll Indicator */}
//       <div className="absolute bottom-6 flex flex-col items-center text-gray-400">
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
//         >
//           <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
//         </motion.div>
//         <span className="text-sm mt-2">Scroll Down</span>
//       </div>
//     </div>
//   );
// }



import React from "react";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import ProfilePic from "/Profile_Pic.jpg";
import github from "/github.png";
import linkedin from "/linkedin.png";
import leetcode from "/leetcode.png";
import codeforces from "/codeforces.png";
import gfg from "/geeksforgeeks.png";

export default function Hero() {
  const titles = [
    "Frontend Developer",
    "Software Developer",
    "C++ Enthusiast",
    "Tech Explorer"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 from-[#0a0214] via-[#140426] to-[#0a0214] text-white px-6 md:px-16"
    >
      {/* Left Text Section */}
      <div className="flex-1 flex flex-col items-start space-y-6 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-purple-500">Priyanshu Gautam</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold">
          <Typewriter
            words={titles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Passionate about crafting clean, efficient, and scalable code.
          Always exploring new technologies to improve problem-solving skills.
        </p>

        {/* See My Profile Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">See My Profile:</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/Priyanshu57005" target="_blank">
              <img src={github} alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-gautam-12b5a0298/" target="_blank">
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://leetcode.com/u/priyanshu_307/" target="_blank">
              <img src={leetcode} alt="LeetCode" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://codeforces.com/profile/Priyanshu_0705" target="_blank">
              <img src={codeforces} alt="Codeforces" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/priyanshu_307/" target="_blank">
              <img src={gfg} alt="GFG" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-purple-500 hover:bg-purple-500 rounded-full transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />
        </Tilt>
      </div>
    </section>
  );
}
