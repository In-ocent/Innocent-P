# 🚀 InnoCoda Studio — Personal & Agency Portfolio

A high-performance, single-page full-stack portfolio web application built to showcase technical solutions, stream case study demos, and capture prospective client inquiries via an asynchronous email pipeline.

[![Live Demo]](https://me.innocoda.com/)
[![Agency Site]](https://innocoda.com/)

---

## 🌟 Overview & Architecture

This repository contains the full source code for my personal engineering portfolio (`me.innocoda.com`) and digital agency hub. 

The application was designed to solve common portfolio performance pitfalls: it avoids heavy CSS framework bloat by utilizing **100% custom Pure CSS**, while separating frontend presentation from backend logic through a decoupled **Django REST Framework** API.

### Key Highlights:
- **Zero-Bloat Styling:** Built from scratch using Pure CSS (Flexbox, CSS Grid, and custom animations) for lightning-fast microsecond load times.
- **Asynchronous Contact Pipeline:** Integrated form submitting directly to a Django REST endpoint that dispatches instant inbox notifications via **Google SMTP** without UI blocking.
- **Dynamic Case Study Demos:** Video-supported interactive project cards detailing tech stacks, engineering challenges, and direct live links.

---

## 🛠️ Tech Stack

### **Frontend**
- **React (Vite):** Single Page Application (SPA) architecture for instant routing and optimal render performance.
- **Pure CSS:** Custom responsive layout, micro-interactions, and dark-mode styling with zero utility framework overhead.
- **Vanilla JavaScript:** Native DOM interactions and state handling.

### **Backend & Infrastructure**
- **Django REST Framework (DRF):** Secure REST API endpoints for client contact submissions.
- **Google SMTP / Email Backend:** Direct email integration for transactional notifications.
- **Render / Supabase:** Production hosting and database management.

---

## ⚙️ Features

- 📱 **100% Mobile Responsive:** Optimized across desktop, tablet, and mobile viewports.
- 📩 **Instant Form Deliverability:** Direct REST integration routing client messages straight to my personal email inbox (`innocoda.team@gmail.com`).
- ⚡ **Optimized Asset Delivery:** Media assets hosted on Cloudinary for fast video demo streaming.

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18+)
- Python (3.10+)

### 1. Clone the repository
```bash
