import { Link } from "react-router-dom";
import { petsData } from "../data/petsData";

function Pets() {
  const pets = petsData;

  return (
    <main>
      <section className="pets-hero">
        <div className="container">
          <h1>Meet Our Lovely Pets</h1>
          <p>Browse through our collection of adorable pets waiting for their forever homes.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pet-grid">
            {pets.map((pet) => (
              <article key={pet.name} className="pet-card">
                <div className="pet-image">
                  <img src={pet.image} alt={pet.name} />
                </div>
                <div className="pet-info">
                  <h3 className="pet-name">{pet.name}</h3>
                  <div className="pet-meta">
                    <span>{pet.age}</span>
                    <span>{pet.breed}</span>
                    <span>{pet.gender}</span>
                  </div>
                  <p className="pet-desc">{pet.desc}</p>
                  <Link to={`/pet-details/${pet.name}`} className="btn">
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pets;
