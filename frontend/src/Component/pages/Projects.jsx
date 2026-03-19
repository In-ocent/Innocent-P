import React from "react";
import { motion } from "framer-motion"; // for animations
import "../styling/project.css"; // styling
import { Helmet } from 'react-helmet-async';
function Projects() {
    const projects = [
        // {
        //     title: "WhatsApp-driven checkout",
        //     video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763437749/Screen_Recording_2025-11-16_153809_m6kr8j.mp4",
        //     type: "Full-stack",
        //     tech: ["HTML", "CSS", "Bootstrap 5", "Django", "JavaScript"],
        //     liveLink: "https://emsskynet.com/",
        //     github: "https://github.com/In-ocent/EmsskyProjec",
        //     challenges:
        //         "Built a multi-service website for a real business offering branding, ICT training, POS services, gadgets, and digital products. Users can browse services and complete orders through a WhatsApp checkout flow.",
        // },
        {
            title: "E-Commerce WhatsApp Integration", // Focus on the business value
            video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763437749/Screen_Recording_2025-11-16_153809_m6kr8j.mp4",
            type: "Full-stack Solution",
            tech: ["Django", "JavaScript", "Bootstrap 5"],
            liveLink: "https://emsskynet.com/",
            github: "https://github.com/In-ocent/EmsskyProjec",
            challenges:
                "Engineered a multi-service platform that automates sales through a direct WhatsApp checkout flow, significantly reducing user drop-off for regional businesses.",
        },
        // {
        //     title: "Nuconic",
        //     video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763446481/nuconi_-_Made_with_Clipchamp_1_ckca37.mp4",
        //     type: "Full-stack",
        //     tech: ["HTML", "CSS", "Bootstrap 5", "React", "JavaScript"],
        //     liveLink: "https://nuconic.com/",
        //     github: null, // Client-owned, code private
        //     challenges:
        //         "Implemented responsive design for multiple product categories, optimized page load for high-resolution images, and built reusable components for case study sections. Managed dynamic content layout without access to backend code.",
        // },
        {
            title: "Nuconic Corporate Platform",
            video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763446481/nuconi_-_Made_with_Clipchamp_1_ckca37.mp4",
            type: "Full-stack Development",
            tech: ["React", "Bootstrap 5", "JavaScript"],
            liveLink: "https://nuconic.com/",
            github: null,
            challenges:
                "Optimized front-end performance for high-resolution asset delivery and built a scalable component architecture for dynamic product categorization.",
        },
        {
            title: "EmperWilf Restorant",
            video: "https://res.cloudinary.com/dftiveap3/video/upload/v1770228979/Screen_Recording_2026-02-04_190949_aazj4a.mp4",
            type: "Frontend",
            tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
            liveLink: "https://emberwolf.vercel.app/",
            github: null,
            challenges: "Developed a high-performance restaurant landing page with a unique 'heavy metal' aesthetic. Focused on creating a seamless online ordering interface and a dark-mode UI that doesn't compromise on readability.",
            loading: "lazy",
        },
        // {
        //   title: "FinQuest Finance",
        //   video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763436834/Screen_Recording_2025-11-17_055822_ovkltb.mp4",
        //   type: "Full-stack",
        //   tech: ["HTML", "CSS", "Bootstrap 5", "Django", "Python", "jQuery", "JavaScript"],
        //   liveLink: "https://finquestfinance.com/",
        //   github: null, // Client-owned, code private
        //   challenges: `
        //     Built a responsive and trustworthy fintech platform for education financing:
        //     - Created a clean, mission-driven UI to communicate zero‑interest financing.
        //     - Designed and implemented multi-step forms for applying to training programs.
        //     - Managed dynamic content for “Programs,” “Testimonials,” and “Help” pages.
        //     - Ensured the site works smoothly on mobile devices and across browsers.
        //     - Optimized page load for content-heavy sections.
        //     - Collaborated with backend team to enable secure, user-friendly loan application flows.
        //   `,
        // },
        {
            title: "Ivibe Social Media App",
            video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763439430/Screen_Recording_2025-09-22_111545_pn1gp8.mp4",
            type: "Full-stack",
            tech: ["HTML", "CSS", "Bootstrap 5", "Django", "JavaScript"],
            liveLink: "#",
            github: null, // Under development
            challenges: "Handling video uploads and user authentication securely.",
        },
        {
            title: "Construction Website",
            video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763439533/Screen_Recording_2025-09-23_102158_q4nym6.mp4",
            type: "Frontend",
            tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
            liveLink: "https://in-ocent.github.io/construction/",
            github: "https://github.com/In-ocent/construction.git",
            challenges: "Serve as an online portfolio showcasing past projects.",
            loading: "lazy",
        },
    ];

    return (
        <>




            <section className="project-container">

                <Helmet>
                    <title>Project Portfolio | Paul Innocent - Full Stack Developer</title>
                    <meta name="description" content="View the software portfolio of Paul Innocent. Scalable web applications, WhatsApp e-commerce solutions, and high-performance React frontends." />
                </Helmet>

                <div className="project-section">
                    <h1 className="text-header">Technical Solutions & Case Studies</h1>
                    <p className="text-subheader">
                        Demonstrating engineering expertise through scalable digital products and real-world business applications.
                    </p>
                </div>

                <div className="project-snippet">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: index % 2 === 0 ? -80 : 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <div className="image-container">
                                {project.img ? (
                                    <img src={project.img} alt={project.title} loading="lazy" />
                                ) : (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="none"
                                        className="project-video"
                                        aria-label={project.title}
                                    />
                                )}
                            </div>

                            <h2>{project.title}</h2>
                            <p className="project-type">{project.type}</p>

                            <div className="tech-tags">
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>

                            <p className="challenges">
                                <strong>Challenges:</strong> {project.challenges}
                            </p>

                            <div className="project-links">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                    onClick={(e) => {
                                        if (project.liveLink === "#") {
                                            e.preventDefault();
                                            alert("This project is under development and not yet publicly available.");
                                        }
                                    }}
                                >
                                    View Project
                                </a>

                                {project.github ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn github-btn"
                                    >
                                        GitHub
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => {
                                            if (project.title === "Ivibe Social Media App") {
                                                alert("This project is under development and not yet publicly available.");
                                            } else {
                                                alert("This project is client-owned. Code cannot be shared due to privacy.");
                                            }
                                        }}
                                        className="btn github-btn"
                                    >
                                        GitHub
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>

    );
}

export default Projects;
