import {FaInstagram} from 'react-icons/fa';
import imgCat from '../assets/cat.png';
import "./groupPersons.css";

const Artists = () => {
  const miembros = [
    {
      id: 1,
      nombre: "Frank Monsalve",
      cargo: "Artista Neotradicional, anime",
      descripcion: "Artista apasionado por el estilo neotradicional y anime",
      instagram: "https://instagram.com",
    },
    {
      id: 2,
      nombre: "Johnatan ",
      cargo: "Artista cover",
      descripcion: "Artista especialista en el estilo cover, realismo, color",
      instagram: "https://instagram.com",
    },
    {
      id: 3,
      nombre: "Martin",
      cargo: "Artista sombras, minimalista",
      descripcion: "Artista dedicado al estilo sombras, realismo y tattoos minimalistas",
      instagram: "https://instagram.com",
    },
  ];

  return (
    <div className="miembro-container">
      <div className="paw-background">
        <div className="section-conocenos">
          <h2>Equipo</h2>
          <div className="miembros-grid">
            {miembros.map((miembro) => (
              <div key={miembro.id} className="miembro-card">
                <h3>{miembro.nombre}</h3>
                <p className="cargo">{miembro.cargo}</p>
                <p className="descripcion">{miembro.descripcion}</p>
                <div className="social-icons">
                  <a href={miembro.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-proposito-metas">            
          <div className="proposito">
            <h3>A team of Tevelopers Passionate about Cats and Technology</h3>
            <p>
              At FelineCare, we are a team of innovative and passionate cat developers, committed
              with creating exceptional digital experiences for cat lovers. Our mission is to merge
              technology and love for cats to offer content that promotes well-being and
              the happiness of our feline children.
            </p>
          </div>
          <div className="metas">
            <h3>Goals</h3>
            <ul>
              <li>Promote education about the care and well-being of kittens.</li>
              <li>Create a supportive and committed community with kittens.</li>
              <li>Provide useful information.</li>
            </ul>           
            <figure>
                <img src={imgCat}></img>
            </figure>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;