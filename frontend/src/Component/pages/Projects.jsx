import React from "react";
import { motion } from "framer-motion";
import "../styling/project.css";
import { Helmet } from 'react-helmet-async';

function Projects() {
    const projects = [
        {
            title: "CodaSite – Enterprise Construction SaaS",
            // Notice the video link is now the /embed/ format
            video: "https://www.youtube.com/embed/SEx-qhUcYEI",
            type: "Full-stack",
            tech: ["Python", "Django", "HTMX", "Tailwind CSS", "Vanilla JavaScript"],
            liveLink: "https://codasite.onrender.com/",
            github: null,
            challenges: `
            A Progressive Web App (PWA) built to 
            eliminate operational fraud on large-scale
             construction sites. Engineered with a lightweight 
             HTMX frontend for maximum speed in low-bandwidth 
             areas, CodaSite features GPS-locked worker attendance,
              real-time material tracking requiring photo-proof, and 
              an automated backend pipeline that generates and
               dispatches daily PDF reports to project managers
          `,
        },
        {
            title: "Aylum Limited – Corporate Engineering Platform",
            video: "https://res.cloudinary.com/dftiveap3/video/upload/q_auto/f_auto/v1776286491/Screen_Recording_2026-04-15_215316_o3l1cn.mp4",
            type: "Full-stack",
            tech: ["Django", "HTMX", "Tailwind CSS", "Vanilla JavaScript"],
            liveLink: "https://elumlimited.onrender.com/",
            github: null,
            challenges: `
            Architected the complete digital infrastructure for a premier glass 
            and aluminum construction firm. Designed a highly responsive, mobile-optimized 
            interface featuring a direct booking engine and remote video consultation 
            integration, streamlining their client acquisition pipeline from initial 
            contact to project scheduling.
          `,
        },
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
            title: "Ivibe Social Media App",
            video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763439430/Screen_Recording_2025-09-22_111545_pn1gp8.mp4",
            type: "Full-stack",
            tech: ["HTML", "CSS", "Bootstrap 5", "Django", "JavaScript"],
            liveLink: "#",
            github: null,
            challenges: "Handling video uploads and user authentication securely.",
        },
        //         // {
        //         //     title: "Construction Website",
        //         //     video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763439533/Screen_Recording_2025-09-23_102158_q4nym6.mp4",
        //         //     type: "Frontend",
        //         //     tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
        //         //     liveLink: "https://in-ocent.github.io/construction/",
        //         //     github: "https://github.com/In-ocent/construction.git",
        //         //     challenges: "Serve as an online portfolio showcasing past projects.",
        //         //     loading: "lazy",
        //         // },
        //         // {
        //         //     title: "E-Commerce WhatsApp Integration", // Focus on the business value
        //         //     video: "https://res.cloudinary.com/dftiveap3/video/upload/v1763437749/Screen_Recording_2025-11-16_153809_m6kr8j.mp4",
        //         //     type: "Full-stack Solution",
        //         //     tech: ["Django", "JavaScript", "Bootstrap 5"],
        //         //     liveLink: "https://emsskynet.com/",
        //         //     github: "https://github.com/In-ocent/EmsskyProjec",
        //         //     challenges:
        //         //         "Engineered a multi-service platform that automates sales through a direct WhatsApp checkout flow, significantly reducing user drop-off for regional businesses.",
        //         // },

        //         // {
        //         //     title: "EmperWilf Restorant",
        //         //     video: "https://res.cloudinary.com/dftiveap3/video/upload/v1770228979/Screen_Recording_2026-02-04_190949_aazj4a.mp4",
        //         //     type: "Frontend",
        //         //     tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
        //         //     liveLink: "https://emberwolf.vercel.app/",
        //         //     github: null,
        //         //     challenges: "Developed a high-performance restaurant landing page with a unique 'heavy metal' aesthetic. Focused on creating a seamless online ordering interface and a dark-mode UI that doesn't compromise on readability.",
        //         //     loading: "lazy",
        //         // },

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
                                ) : project.video.includes("youtube.com") ? (
                                    /* This iframe will ONLY render for YouTube links */
                                    <iframe
                                        src={project.video}
                                        title={project.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ width: "100%", height: "100%", aspectRatio: "16/9", borderRadius: "inherit" }}
                                    ></iframe>
                                ) : (
                                    /* This video tag will render for your Cloudinary MP4 links */
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
