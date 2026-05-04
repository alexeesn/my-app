import React from "react";

// ✅ DEV IMAGES (from your folder structure)
import adrianImg from "../assets/img/devs/adrian.jpg";
import beejhyImg from "../assets/img/devs/beejhy.jpg";
import lourenceImg from "../assets/img/devs/lourence (2).jpg";
import neggiImg from "../assets/img/devs/neggi.jpg";
import vinceImg from "../assets/img/devs/vince.jpg";
import xeeshImg from "../assets/img/devs/xeesh.jpg";

// ✅ STATS
const stats = [
  { value: "500+", label: "Pets Adopted" },
  { value: "98%", label: "Success Rate" },
  { value: "50+", label: "Rescues Partnered" },
  { value: "24/7", label: "Support" },
];

// ✅ TEAM (NOW USING IMAGES)
const team = [
  {
    avatar: adrianImg,
    name: "Mark Adrian Dela Cruz",
    role: "Developer",
    detail: "Frontend & UI",
  },
  {
    avatar: beejhyImg,
    name: "Brent Jade Yap",
    role: "Developer",
    detail: "Backend & Logic",
  },
  {
    avatar: lourenceImg,
    name: "Lourence Ymana",
    role: "Developer",
    detail: "System Design",
  },
  {
    avatar: neggiImg,
    name: "John Arnold Cabigas",
    role: "Developer",
    detail: "Testing & QA",
  },
  {
    avatar: vinceImg,
    name: "Vince Jayson Haya",
    role: "Developer",
    detail: "UI/UX Support",
  },
  {
    avatar: xeeshImg,
    name: "Alexis Teodosio",
    role: "Lead Developer",
    detail: "Project Manager",
  },
];

function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Mission</h1>
          <p>Creating forever homes for every pet in need</p>
        </div>
      </section>

      {/* STATS */}
      <section className="about-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-number">{stat.value}</span>
                <h3>{stat.label}</h3>
              </div>
            ))}
          </div>

          <div className="about-copy">
            <h2 className="section-title">Our Story</h2>
            <p>
              Pawfect Homes was founded in 2020 by a group of animal lovers who saw too many healthy,
              loving pets waiting in shelters. We created a platform that matches perfect pets with
              perfect families using our unique compatibility system. Every pet we feature has been
              vet-checked, vaccinated, and loved.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>

          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name} className="team-card">
                
                {/* ✅ IMAGE AVATAR */}
                <div className="team-avatar">
                  <img src={member.avatar} alt={member.name} />
                </div>

                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p className="team-detail">{member.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;