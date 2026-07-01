export default function Nav() {
  return (
    <header className="nav-shell">
      <div className="container nav">
        <a className="brand" href="#" aria-label="Markr home">
          <span className="brand-mark">M</span>
          <span>Markr</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#features">Capabilities</a>
          <a href="#faq">FAQ</a>
          <a className="btn btn-purple" href="#subscribe">
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
