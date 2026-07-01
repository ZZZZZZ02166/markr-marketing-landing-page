const CARDS = [
  {
    n: "01",
    title: "Plan with purpose",
    body: "Teachers create assessment tasks from year level, subject area and learning goals, keeping classroom checks aligned with curriculum intent.",
  },
  {
    n: "02",
    title: "Assign with structure",
    body: "Classes receive clear assessment activities, due dates and instructions, giving schools a more consistent way to run formative checks.",
  },
  {
    n: "03",
    title: "Mark with confidence",
    body: "AI-assisted marking suggestions reduce repetitive admin while keeping teachers in control through review and approval steps.",
  },
  {
    n: "04",
    title: "Lead with insight",
    body: "Principals and curriculum leaders can see progress trends, skill gaps and support needs across classes, cohorts and learning areas.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="section" aria-labelledby="overview-title">
      <div className="container">
        <div className="section-heading">
          <div className="pill">Product overview</div>
          <h2 id="overview-title">
            From classroom assessment to <span>school-wide evidence.</span>
          </h2>
          <p>
            Markr helps schools move from isolated test results to a clearer
            picture of student progress, teacher workload and curriculum
            priorities.
          </p>
        </div>

        <div className="overview-band">
          <div className="overview-grid">
            {CARDS.map((c) => (
              <article className="overview-card" key={c.n}>
                <div className="overview-icon">{c.n}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
