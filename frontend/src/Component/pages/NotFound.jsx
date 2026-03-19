// // components/pages/NotFound.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// export default function NotFound() {
//   const styles = {
//     container: {
//       minHeight: "100vh",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: "#f8f9fa",
//     },
//     heading: {
//       fontSize: "3rem",
//       fontWeight: "bold",
//       color: "#dc3545", // Bootstrap danger color
//     },
//     paragraph: {
//       marginTop: "1rem",
//       color: "#6c757d", // Bootstrap secondary text
//     },
//     link: {
//       marginTop: "1.5rem",
//       padding: "0.75rem 1.5rem",
//       borderRadius: "0.5rem",
//       backgroundColor: "#198754", // Bootstrap success
//       color: "#fff",
//       textDecoration: "none",
//       transition: "all 0.3s ease",
//     },
//   };

//   return (
//     <div style={styles.container} className="text-center">
//       <h1 style={styles.heading}>404 - Page Not Found</h1>
//       <p style={styles.paragraph}>
//         The page you’re looking for doesn’t exist or was moved.
//       </p>
//       <Link
//         to="/"
//         style={styles.link}
//         className="fw-semibold d-inline-block"
//         onMouseEnter={(e) => (e.target.style.backgroundColor = "#157347")}
//         onMouseLeave={(e) => (e.target.style.backgroundColor = "#198754")}
//       >
//         <i className="bi bi-house-door me-2"></i>
//         Go Back Home
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-light">
            <div className="text-center px-3">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <h2 className="mb-3">Page Not Found</h2>
                <p className="text-secondary mb-4">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link to="/" className="btn btn-outline-light px-4 py-2">
                    Go Back Home
                </Link>
            </div>
        </section>
    );
}

export default NotFound;
