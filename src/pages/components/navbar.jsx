import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container">
            <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="/">
                <span role="img" aria-label="Trophy">🏆</span> Futbolero 2025
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {[
                        { name: "Inicio", href: "/" },
                        { name: "Equipos", href: "/equipos" },
                        { name: "Partidos", href: "/partidos" },
                        { name: "Tabla", href: "/tabla" },
                        { name: "Noticias", href: "/noticias" }
                    ].map((item, idx) => (
                        <li className="nav-item" key={item.name}>
                            <a
                                className={`nav-link${idx === 0 ? " active" : ""}`}
                                href={item.href}
                                aria-current={idx === 0 ? "page" : undefined}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
);
}
