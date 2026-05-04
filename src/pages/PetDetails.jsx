import { Link, useParams, Navigate } from "react-router-dom";
import { getPetByName } from "../data/petsData";

function PetDetails() {
  const { petName } = useParams();
  const pet = getPetByName(petName);

  if (!pet) {
    return <Navigate to="/pets" replace />;
  }

  return (
    <main>
      <section className="pet-details-hero">
        <div className="container">
          <h1>Meet {pet.name}</h1>
          <p>Your potential new best friend</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pet-details-content">
            <img
              src={pet.image}
              alt={`${pet.name} the ${pet.breed}`}
              className="pet-detail-image"
            />
            <div className="pet-detail-info">
              <h1>{pet.name}</h1>
              <div className="pet-detail-meta">
                <span className="meta-tag">{pet.age}</span>
                <span className="meta-tag">{pet.gender}</span>
                <span className="meta-tag">{pet.breed}</span>
                <span className="meta-tag">Vaccinated</span>
                <span className="meta-tag">Neutered</span>
              </div>
              <h2>About {pet.name}</h2>
              <p>{pet.fullDesc}</p>
              <div style={{ margin: "2rem 0" }}>
                <Link to="/adopt" className="btn" style={{ fontSize: "1.2rem", padding: "1.2rem 3rem" }}>
                  Adopt {pet.name} 🐶
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PetDetails;
