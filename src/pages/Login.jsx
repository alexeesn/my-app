import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <main>
      <section className="auth-container">
        <div className="auth-card">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Welcome Back</h1>
            <p style={{ color: "#6b7280" }}>Sign in to your account</p>
          </div>

          <div className="auth-tabs">
            <button
              type="button"
              className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "register" ? "active" : ""}`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>

          <div className={activeTab === "login" ? "tab-content active" : "tab-content"}>
            <form>
              <div className="input-group">
                <span className="input-icon">✉️</span>
                <input type="email" className="form-input" placeholder="Email address" required />
              </div>
              <div className="input-group">
                <span className="input-icon">🔒</span>
                <input type="password" className="form-input" placeholder="Password" required />
              </div>
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" className="btn" style={{ width: "100%", marginBottom: "1rem" }}>
                Sign In
              </button>
              <div style={{ textAlign: "center", color: "#6b7280" }}>
                Don't have an account?{' '}
                <button type="button" className="btn" style={{ width: "auto", padding: "0.5rem 1rem", background: "transparent", color: "#4f46e5", boxShadow: "none" }} onClick={() => setActiveTab("register")}>Sign up here</button>
              </div>
            </form>
          </div>

          <div className={activeTab === "register" ? "tab-content active" : "tab-content"}>
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
                <span className="input-icon">🔒</span>
                <input type="password" className="form-input" placeholder="Password" required />
              </div>
              <div className="input-group">
                <span className="input-icon">📞</span>
                <input type="tel" className="form-input" placeholder="Phone Number" required />
              </div>
              <button type="submit" className="btn" style={{ width: "100%" }}>
                Create Account
              </button>
              <div style={{ textAlign: "center", color: "#6b7280", marginTop: "1rem" }}>
                Already have an account?{' '}
                <button type="button" className="btn" style={{ width: "auto", padding: "0.5rem 1rem", background: "transparent", color: "#4f46e5", boxShadow: "none" }} onClick={() => setActiveTab("login")}>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
