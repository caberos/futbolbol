import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
// Dummy data for demonstration
const teams = [
    { name: "Team A", points: 12, matches: 5, goals: 10 },
    { name: "Team B", points: 10, matches: 5, goals: 9 },
    { name: "Team C", points: 8, matches: 5, goals: 7 },
];

const news = [
    {
        title: "Gran victoria de Team A",
        text: "Team A se impone 3-1 ante su clásico rival y sigue en la cima.",
    },
    {
        title: "Lesión preocupa a Team B",
        text: "El capitán de Team B será baja por 2 semanas tras una lesión muscular.",
    },
    {
        title: "Calendario actualizado",
        text: "Revisa los cambios de horarios en las próximas fechas del torneo.",
    },
];

const featuredMatch = {
    teams: ["Team A", "Team B"],
    date: "15 de Junio, 18:00 hs",
    stadium: "Estadio Nacional",
};

return (
    <div className="container py-5">
        <header className="text-center mb-5">
            <h1 className="display-4 fw-bold text-success">Campeonato Futbolero 2025</h1>
            <p className="lead">¡Sigue todos los partidos, resultados y estadísticas en un solo lugar!</p>
            <a href="#teams" className="btn btn-primary mt-3">Ver Equipos</a>
        </header>

        <section className="row mb-5 align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
                <img
                    src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6"
                    alt="fútbol"
                    className="img-fluid rounded shadow"
                    loading="lazy"
                />
            </div>
            <div className="col-md-6">
                <h2>🔥 Próximo partido destacado</h2>
                <p>
                    <strong>{featuredMatch.teams[0]}</strong> vs <strong>{featuredMatch.teams[1]}</strong>
                </p>
                <p>
                    <i>
                        {featuredMatch.stadium} - {featuredMatch.date}
                    </i>
                </p>
                <a href="#calendar" className="btn btn-outline-success">
                    Ver calendario completo
                </a>
            </div>
        </section>

        <section className="mb-5" id="teams">
            <h2 className="mb-3">🏆 Tabla de posiciones</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Equipo</th>
                        <th>Puntos</th>
                        <th>Partidos</th>
                        <th>Goles</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.name}>
                            <td>{team.name}</td>
                            <td>{team.points}</td>
                            <td>{team.matches}</td>
                            <td>{team.goals}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

        <section className="mb-5">
            <h2 className="mb-3">📰 Noticias recientes</h2>
            <div className="row">
                {news.map((item, idx) => (
                    <div className="col-md-4 mb-3" key={idx}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <footer className="text-center pt-4 border-top">
            <p>
                &copy; {new Date().getFullYear()} Campeonato Futbolero. Todos los derechos reservados.
            </p>
        </footer>
    </div>
);
}
