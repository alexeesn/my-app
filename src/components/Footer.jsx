import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Pawfect Homes</h3>
            <p>Helping pets find their forever homes since 2020. Every adoption makes a difference.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/pets" className="footer-link">
              Pets
            </Link>
            <Link to="/about" className="footer-link">
              About
            </Link>
            <Link to="/adopt" className="footer-link">
              Adopt
            </Link>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <i className="fas fa-phone" /> (555) 123-4567
            </p>
            <p>
              <i className="fas fa-envelope" />eldragon@pawfecthomes.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt" /> 123 Pet Street, Animal City
            </p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Pawfect Homes. All rights reserved. | Made with ❤️ for pets everywhere.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
