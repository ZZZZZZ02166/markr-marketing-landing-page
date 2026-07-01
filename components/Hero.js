export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">AI assessment for K–12 schools</div>
          <h1 className="display-title" id="hero-title">
            Mark faster.
            <span className="accent">See progress clearer.</span>
          </h1>
          <p className="hero-copy">
            Markr helps teachers create, assign and automatically mark
            assessments, while giving principals and heads of curriculum a
            clearer view of learning progress over time.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#subscribe">
              Join product updates →
            </a>
            <a className="btn btn-ghost" href="#features">
              View capabilities →
            </a>
          </div>

          <div className="hero-proof" aria-label="Key benefits">
            <span>✓ Front-end EDM form</span>
            <span>✓ Responsive landing page</span>
            <span>✓ School leader focused</span>
          </div>
        </div>

        <div className="device-stage" aria-label="Illustrative Markr product preview">
          <div className="browser-window">
            <div className="browser-top">
              <div className="dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-url">markr.school/dashboard</div>
              <div aria-hidden="true">↗</div>
            </div>

            <div className="dashboard-main">
              <div className="dash-head">
                <div>
                  <h2>Year 7 Assessment Snapshot</h2>
                  <p>Automatically marked, teacher reviewed, leadership ready.</p>
                </div>
                <span className="badge">Live report</span>
              </div>

              <div className="dash-grid">
                <div className="dash-card">
                  <strong>28/30</strong>
                  <span>Responses marked</span>
                </div>
                <div className="dash-card">
                  <strong>82%</strong>
                  <span>Class mastery</span>
                </div>
                <div className="dash-card">
                  <strong>4</strong>
                  <span>Students flagged</span>
                </div>
                <div className="dash-card">
                  <strong>12m</strong>
                  <span>Teacher time saved</span>
                </div>
              </div>

              <div className="assessment-card">
                <div className="assessment-inner">
                  <h3>Progress by learning area</h3>
                  <div className="progress-row">
                    <span>Number</span>
                    <div className="bar">
                      <span style={{ width: "86%" }}></span>
                    </div>
                    <span>86%</span>
                  </div>
                  <div className="progress-row">
                    <span>Algebra</span>
                    <div className="bar">
                      <span style={{ width: "74%" }}></span>
                    </div>
                    <span>74%</span>
                  </div>
                  <div className="progress-row">
                    <span>Reasoning</span>
                    <div className="bar">
                      <span style={{ width: "68%" }}></span>
                    </div>
                    <span>68%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="floating-card">
            <div className="mini-title">Students needing support</div>
            <div className="student-list">
              <div className="student">
                <div className="avatar">JL</div>
                <div>
                  <strong>Jordan Lee</strong>
                  <span>Algebra patterns</span>
                </div>
                <div className="score">Flag</div>
              </div>
              <div className="student">
                <div className="avatar">MP</div>
                <div>
                  <strong>Mia Park</strong>
                  <span>Reasoning task</span>
                </div>
                <div className="score">Review</div>
              </div>
              <div className="student">
                <div className="avatar">AT</div>
                <div>
                  <strong>Ari Tan</strong>
                  <span>Number fluency</span>
                </div>
                <div className="score">Plan</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
