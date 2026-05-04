import { Link } from "react-router-dom";

// ✅ IMPORT LOCAL IMAGES (based on your folder)
import maxImg from "../assets/img/pets/max.jpg";
import lunaImg from "../assets/img/pets/luna.webp";
import buddyImg from "../assets/img/pets/buddy.webp";

// ✅ FEATURED PETS DATA
const featuredPets = [
  {
    name: "Max",
    age: "2 years",
    breed: "Golden Retriever",
    desc: "Playful and loving Golden Retriever who loves everyone he meets!",
    image: maxImg,
  },
  {
    name: "Luna",
    age: "1 year",
    breed: "Tabby Cat",
    desc: "Sweet and cuddly cat who loves to curl up on your lap.",
    image: lunaImg,
  },
  {
    name: "Buddy",
    age: "6 months",
    breed: "Beagle",
    desc: "Energetic puppy ready for adventures and lots of love!",
    image: buddyImg,
  },
];

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content container">
          <div>
            <h1>Find Your New Best Friend 🐶</h1>
            <p>
              Discover loving, healthy pets ready for their forever homes. Every
              adoption changes a life.
            </p>
            <Link to="/pets" className="btn">
              Adopt Now
            </Link>
          </div>

          {/* ✅ HERO IMAGE (LOCAL) */}
          <div className="hero-image">
            <img src={maxImg} alt="Happy dog waiting for adoption" />
          </div>
        </div>
      </section>

      {/* FEATURED PETS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Pets</h2>

          <div className="pet-grid">
            {featuredPets.map((pet) => (
              <article key={pet.name} className="pet-card">
                <div className="pet-image">
                  <img src={pet.image} alt={pet.name} />
                </div>

                <div className="pet-info">
                  <h3 className="pet-name">{pet.name}</h3>

                  <div className="pet-meta">
                    <span>{pet.age}</span>
                    <span>{pet.breed}</span>
                  </div>

                  <p className="pet-desc">{pet.desc}</p>

                  <Link to={`/pet-details/${pet.name}`} className="btn">
                    Adopt Me
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/pets" className="btn">
              View All Pets
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ADOPT */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Adopt?</h2>

          <div className="why-adopt-grid">
            <div className="feature-card">
              <div className="feature-icon">🐾</div>
              <h3>Save a Life</h3>
              <p>
                Your adoption gives a homeless pet a second chance at happiness.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Already Loved</h3>
              <p>
                Shelter pets are socialized, healthy, and ready to love.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Perfect Match</h3>
              <p>
                We help you find the perfect pet for your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;