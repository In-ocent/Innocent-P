import React, { useState } from "react";
import "../styling/contact.css";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        bot_field: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.bot_field) return;

        setStatus("Sending message...");

        try {
            const response = await axios.post("https://innocent-portfolio-backend.onrender.com/api/contact/", {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
            });

            if (response.status === 201 || response.status === 200) {
                setStatus("✅ Message sent! I'll get back to you soon.");
                // Fixed: Added 'phone' to the reset state so the form clears completely
                setFormData({ name: "", email: "", phone: "", message: "", bot_field: "" });
            }
        } catch (error) {
            console.error("API Error:", error);
            setStatus("❌ Failed to send. Please try again later!!");
        }
    };

    return (
        <section className="contact-container" id="contact">
            <h1 className="contact-title">📬 Contact Me</h1>
            <p className="contact-subtitle">
                I’d love to hear from you! Fill out the form below or reach me directly.
            </p>

            <div className="contact-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {/* Fixed: changed type to "tel" and name to "phone" to match your state */}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number (e.g. +234...)"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="bot_field"
                        style={{ display: "none" }}
                        value={formData.bot_field}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="btn-submit">
                        Send Message
                    </button>

                    {status && <p className="status-message">{status}</p>}
                </form>

                <div className="contact-info">
                    <h2>Let’s Connect</h2>
                    <p>
                        <i className="bi bi-envelope"></i> <a href="mailto:innocoda.team@gmail.com">innocoda.team@gmail.com</a>
                    </p>
                    <p>
                        <i className="bi bi-phone"></i> <a href="tel:+2348136471776">+234 813 647 1776</a>
                    </p>
                    <p>
                        <i className="bi bi-github"></i>{" "}
                        <a href="https://github.com/In-ocent" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                    <p>
                        <i className="bi bi-linkedin"></i>{" "}
                        <a href="https://www.linkedin.com/in/paul-innocent" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;