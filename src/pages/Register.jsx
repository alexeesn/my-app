import { Link } from "react-router-dom";

function Register() {
  return (
    <main>
      <section className="auth-container">
        <div className="auth-card">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Create Account</h1>
            <p style={{ color: "#6b7280" }}>Join our community of pet lovers</p>
          </div>

          <form>
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input type="text" className="form-input" placeholder="Full Name" required />
            </div>
            <div className="input-group">
              <span className="input-icon">✉️</span>
              <input type="email" className="form-input" placeholder="Email address" required />
            </div>
            <div className="input-group">
              <span className="input-icon">📞</span>
              <input type="tel" className="form-input" placeholder="Phone Number" required />
            </div>
            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input type="password" className="form-input" placeholder="Password" required />
            </div>
            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input type="password" className="form-input" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className="btn" style={{ width: "100%", marginBottom: "1rem" }}>
              Create Account
            </button>
            <div style={{ textAlign: "center", color: "#6b7280" }}>
              Already have an account? <Link to="/login" style={{ color: "#4f46e5" }}>Sign in here</Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;
