
function Card({ artistas }) {
    return (
        <div>
            <h2>Artistas</h2>
            {artistas.map((artista, index) => (
                <div key={index} className="card">
                    <h3>{artista.nombre} {artista.apellido}</h3>
                </div>
            ))}
        </div>
    );
}

export default Card;