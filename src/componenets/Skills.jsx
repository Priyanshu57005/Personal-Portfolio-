import React from "react";
import cppIcon from "/cpp.png";
import htmlIcon from "/html.png";
import cssIcon from "/css.png";
import jsIcon from "/javascript.png";
import reactIcon from "/react.png";
import tailwindIcon from "/tailwind.png";

export default function Skills() {
    const skills = [
        { name: "C++", icon: cppIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "React", icon: reactIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-[#0a0214] via-[#150325] to-[#0a0214] text-white relative overflow-hidden"
        >
            {/* Background glowing orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 animate-bounce"></div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center z-10">
                My Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-4xl w-full z-10">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(180,0,255,0.5)] cursor-pointer"
                        style={{
                            transformStyle: "preserve-3d",
                            perspective: "1000px",
                        }}
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const rotateX = ((y / rect.height) - 0.5) * 20;
                            const rotateY = ((x / rect.width) - 0.5) * -20;
                            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                        }}
                        onMouseLeave={(e) => {
                            const card = e.currentTarget;
                            card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
                        }}
                    >
                        {/* Glowing animated border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

                        {/* Icon */}
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-16 h-16 mb-4 relative z-10 transition-transform duration-500 group-hover:translate-y-[-8px] group-hover:scale-110"
                        />

                        {/* Skill Name */}
                        <p className="text-lg font-semibold relative z-10">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
