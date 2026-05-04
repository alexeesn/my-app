import React, { useState } from "react";

function Adopt() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // show popup
    setShowModal(true);

    // reset form fields
    e.target.reset();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      <section className="form-container">
        <div className="form-card">
          <h2 className="form-title">Adoption Application</h2>
          <p className="text-center mb-4">
            Fill out the form below to start the adoption process
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Contact Number</label>
              <input type="tel" className="form-input" placeholder="+63..." required />
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea className="form-input" rows="3" required />
            </div>

            <div className="form-group">
              <label className="form-label">Why do you want to adopt?</label>
              <textarea className="form-input" rows="5" required />
            </div>

            <button type="submit" className="btn" style={{ width: "100%" }}>
              Submit Application 🐾
            </button>
          </form>
        </div>
      </section>

      {/* ✅ MODAL POPUP */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>🎉 Form Submitted</h3>
            <p>Your adoption application has been sent successfully!</p>
            <button onClick={closeModal} className="modal-btn">
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Adopt;