import React from "react";

import proj1 from "/project1.png";
import proj2 from "/project2.png";
import proj3 from "/project3.png";
import proj4 from "/project4.png";
import proj5 from "/project5.png";
import mainProj from "/MainProject.jpg"


export default function Projects() {
    const projects = [
        {
            title: "Banking System Backend",
            image: mainProj,
            description: "A secure backend banking application built using Node.js, Express.js, MongoDB, and JWT Authentication. Features user registration, login, account management, balance tracking, and protected APIs.",
            github: "https://github.com/Priyanshu57005/Banking-System",
            demo: "https://banking-system-lk9p.onrender.com/"
        },
        {
            title: "Typing Speed Test",
            image: proj1,
            description:
                "A sleek typing speed tester built using HTML, CSS, and JavaScript, measuring WPM and accuracy with real-time updates.",
            github: "https://github.com/Priyanshu57005/TYPING-SPEED-TRACKER",
            demo: "https://priyanshu57005.github.io/TYPING-SPEED-TRACKER/",
        },
        {
            title: "India Trip Planner",
            image: proj2,
            description:
                "A beautiful and responsive India Trip Planner website built with modern UI. Includes trip sections, destinations, and smooth scrolling.",
            github: "https://github.com/Priyanshu57005/Trip-Plan",
            demo: "https://india-trip-planner.netlify.app/",
        },

        {
            title: "Workout Tracker",
            image: proj4,
            description:
                "A full-stack MERN application that allows users to create, track, update, and manage workout routines. Built using React.js, Node.js, Express.js, and MongoDB with RESTful APIs for seamless workout management.",
            github: "https://github.com/Priyanshu57005/workout-mern-app",
            demo: "https://workoutmern.netlify.app/login",
        },
        {
            title: "SoundWave Music System",
            image: proj5,
            description:
                "A modern music streaming web application featuring an interactive UI, playlist management, music controls, and responsive design. Built using React.js, JavaScript, and modern frontend technologies to deliver an engaging user experience.",
            github: "https://github.com/Priyanshu57005/Soundwave-MusicWeb",
            demo: "https://github.com/Priyanshu57005/Soundwave-MusicWeb",
        },
        {
            title: "Real Estate Promo Website",
            image: proj3,
            description:
                "A modern real estate promotional website featuring elegant property showcases, smooth animations, responsive layouts, and an engaging user experience built using HTML, CSS, and JavaScript.",
            github: "https://github.com/Priyanshu57005/Real-Estate-Website",
            demo: "https://real-estate-promo-website.netlify.app/",
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
