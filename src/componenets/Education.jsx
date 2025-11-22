import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Information Technology",
    school: "Chandigarh Enginnering College - CGC",
    year: "2023 - 2027",
    details: "CGPA: 8/10 | Relevant Courses: DSA, Web Dev, AI",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Shanti niketan jubilee public School, Bihar",
    year: "2020 - 2022",
    details: " PCM Stream",
  },
  {
    degree: "Secondary (10th)",
    school: "Ram krishna vivekananda vidya mandir, Bihar",
    year: "2019 - 2020",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-b from-black via-[#12001c] to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="relative border-l-4 border-indigo-500">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full">
                <FaGraduationCap className="text-white text-2xl" />
              </span>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                {edu.branch && (
                  <p className="text-indigo-400">{edu.branch}</p>
                )}
                <p className="text-gray-400">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
                <p className="mt-2 text-gray-300">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
