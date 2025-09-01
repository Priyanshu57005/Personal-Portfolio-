import React from "react";

import proj1 from "/project1.png";
import proj2 from "/project2.png";
import proj3 from "/project3.png";

export default function Projects() {
    const projects = [
        {
            title: "Typing Speed Test",
            image: proj1,
            description:
                "A sleek typing speed tester built using HTML, CSS, and JavaScript, measuring WPM and accuracy with real-time updates.",
            github: "https://github.com/Priyanshu57005/TYPING-SPEED-TRACKER",
            demo: "https://priyanshu57005.github.io/TYPING-SPEED-TRACKER/",
        },
        {
            title: "Simple Payment Website",
            image: proj2,
            description:
                "A responsive payment gateway UI project made using React and Tailwind CSS, with mock transaction flow.",
            github: "#",
            demo: "#", 
        },
        {
            title: "Portfolio Website",
            image: proj3,
            description:
                "This personal portfolio website made using React, Tailwind, and AOS showcases my projects, skills, and resume.",
            github: "https://github.com/Priyanshu57005/Personal-Portfolio-",
            demo: "https://priyanshu-portf.netlify.app/",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen bg-[#0a0214] text-white px-4 py-16 sm:px-6"
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
                My Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#1e1b2e] rounded-2xl shadow-lg p-4 group hover:shadow-purple-500/30 transition-shadow duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="text-sm px-4 py-2 rounded-full border border-purple-500 hover:bg-purple-700 transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="text-sm px-4 py-2 rounded-full border border-purple-500 hover:bg-purple-700 transition"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
