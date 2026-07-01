import { useState } from "react";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Principal");
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedName || !trimmedEmail) {
      setStatus("Please enter your name and work email.");
      return;
    }
    if (!validEmail) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Thanks — you are subscribed to Markr updates.");
    setName("");
    setEmail("");
    setRole("Principal");
  }

  return (
    <section
      id="subscribe"
      className="subscribe-section"
      aria-labelledby="subscribe-title"
    >
      <div className="container">
        <div className="subscribe-panel">
          <div>
            <div className="pill subscribe-pill">EDM subscription</div>
            <h2 id="subscribe-title">Get Markr product updates.</h2>
            <p>
              Subscribe for launch news, product notes and practical assessment
              ideas for K–12 school teams.
            </p>
          </div>

          <form className="form-card" noValidate onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Zhi Qi Nioo"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@school.edu.au"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option>Principal</option>
                <option>Head of Curriculum</option>
                <option>Teacher</option>
                <option>School operations</option>
                <option>Other</option>
              </select>
            </div>

            <button className="btn btn-purple" type="submit">
              Subscribe for updates →
            </button>
            <p className="form-note">
              Front-end validation only. No backend or email service is
              connected.
            </p>
            <div className="form-status" aria-live="polite">
              {status}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
