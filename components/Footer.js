export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <a className="footer-brand" href="#" aria-label="Markr home">
            <span className="brand-mark">M</span>
            <span>Markr</span>
          </a>
          <p>
            AI-powered assessment support for K–12 schools. Markr helps teachers
            reduce marking workload while giving school leaders clearer
            visibility of student progress.
          </p>
          <p className="footer-small">
            Helping schools make evidence-informed assessment and curriculum
            decisions.
          </p>
        </div>

        <div className="footer-col">
          <h3>Platform</h3>
          <a href="#overview">Product overview</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#subscribe">EDM updates</a>
        </div>

        <div className="footer-col">
          <h3>For schools</h3>
          <a href="#features">For principals</a>
          <a href="#features">For curriculum leaders</a>
          <a href="#features">For teachers</a>
          <a href="#features">Assessment visibility</a>
        </div>

        <div className="footer-col">
          <h3>Connect</h3>
          <a href="#subscribe">Subscribe for updates</a>
          <a href="mailto:hello@markr.school">hello@markr.school</a>
          <a href="#overview">Product news</a>
          <a href="#subscribe">Join the mailing list</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
          <a href="#">Contact</a>
        </div>
        <p>© 2026 Markr. Practical exercise concept.</p>
      </div>
    </footer>
  );
}
