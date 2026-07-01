import { useState } from "react";

const ROWS = [
  {
    pill: "Marking",
    pillBlue: false,
    title: (
      <>
        Faster, fairer <span>marking</span>
      </>
    ),
    items: [
      {
        title: "AI-assisted marking",
        body: "Objective questions mark themselves, and written responses come back with suggested scores, feedback and rubric guidance — ready for the teacher to review and approve.",
      },
      {
        title: "Shared rubrics & feedback",
        body: "Apply consistent rubrics across classes so marking standards stay fair between teachers and departments.",
      },
      {
        title: "Teachers stay in control",
        body: "Every AI suggestion is a draft. Teachers review, adjust and approve before anything reaches a student.",
      },
    ],
    visual: (
      <div className="feature-visual">
        <div className="fv-card">
          <div className="fv-head">
            <strong>Q3 · Short response</strong>
            <span className="fv-chip">Auto-marked</span>
          </div>
          <div className="fv-answer">
            &quot;Plants convert sunlight into energy through photosynthesis,
            using chlorophyll in their leaves…&quot;
          </div>
          <div className="fv-score">
            <div>
              <span className="fv-label">AI suggested score</span>
              <strong>8 / 10</strong>
            </div>
            <span className="fv-check">✓</span>
          </div>
          <button className="fv-approve" type="button">
            Approve &amp; send feedback
          </button>
        </div>
        <div className="fv-float">+12 min saved</div>
      </div>
    ),
  },
  {
    pill: "Assessment builder",
    pillBlue: true,
    title: (
      <>
        Build assessments <span className="blue">in minutes</span>
      </>
    ),
    items: [
      {
        title: "One simple workspace",
        body: "Create quizzes, topic checks, written tasks and rubric-based assessments from a single place — no juggling documents and spreadsheets.",
      },
      {
        title: "Reusable templates",
        body: "Save your best assessments as templates and reuse them across classes and year levels.",
      },
      {
        title: "Aligned to curriculum",
        body: "Tag tasks to year level, subject and learning goals so classroom checks stay aligned with curriculum intent.",
      },
    ],
    visual: (
      <div className="feature-visual blue">
        <div className="fv-card">
          <div className="fv-head">
            <strong>New assessment</strong>
            <span className="fv-chip blue">Year 7</span>
          </div>
          <div className="fv-q">
            <span className="fv-qnum">1</span> Multiple choice
          </div>
          <div className="fv-q">
            <span className="fv-qnum">2</span> Short written answer
          </div>
          <div className="fv-q">
            <span className="fv-qnum">3</span> Rubric-based task
          </div>
          <div className="fv-add">+ Add question</div>
        </div>
      </div>
    ),
  },
  {
    pill: "Leadership insight",
    pillBlue: false,
    title: (
      <>
        Clear insight for <span>school leaders</span>
      </>
    ),
    items: [
      {
        title: "Progress dashboards",
        body: "See student, class and cohort progress over time through clear dashboards built for teachers and school leaders alike.",
      },
      {
        title: "Learning gap insights",
        body: "Surface the skills, topics and curriculum areas where students are struggling most, so teams know what to reteach.",
      },
      {
        title: "Leadership reporting",
        body: "Turn assessment data into simple reports for curriculum, intervention and school improvement decisions.",
      },
    ],
    visual: (
      <div className="feature-visual">
        <div className="fv-card">
          <div className="fv-head">
            <strong>Class mastery</strong>
            <span className="fv-chip">Year 7</span>
          </div>
          <div className="fv-donut">
            <div className="fv-donut-center">82%</div>
          </div>
          <div className="fv-stat">
            <span>Number</span>
            <div className="fv-bar">
              <span style={{ width: "86%" }}></span>
            </div>
          </div>
          <div className="fv-stat">
            <span>Algebra</span>
            <div className="fv-bar">
              <span style={{ width: "74%" }}></span>
            </div>
          </div>
          <div className="fv-stat">
            <span>Reasoning</span>
            <div className="fv-bar">
              <span style={{ width: "68%" }}></span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function FeatureRow({ row }) {
  const [open, setOpen] = useState(0);

  return (
    <article className="feature-row">
      <div className="feature-text">
        <span className={row.pillBlue ? "feature-pill blue" : "feature-pill"}>
          {row.pill}
        </span>
        <h3>{row.title}</h3>

        <div className="feature-accordion">
          {row.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                className={isOpen ? "feature-acc-item open" : "feature-acc-item"}
                key={item.title}
              >
                <button
                  className="feature-acc-head"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="feature-acc-sign" aria-hidden="true"></span>
                  <span className="feature-acc-title">{item.title}</span>
                </button>
                <div className="feature-acc-body">{item.body}</div>
              </div>
            );
          })}
        </div>
      </div>

      {row.visual}
    </article>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="section capability-section"
      aria-labelledby="features-title"
    >
      <div className="container">
        <div className="section-heading">
          <div className="pill">Features &amp; capabilities</div>
          <h2 id="features-title">
            <span className="heading-line-dark">Faster marking.</span>
            <span className="heading-line-accent">
              Clearer assessment insight.
            </span>
          </h2>
          <p>
            Markr gives teachers faster assessment tools while helping school
            leaders understand progress across classes, year levels and
            curriculum areas.
          </p>
        </div>

        <div className="feature-rows">
          {ROWS.map((row) => (
            <FeatureRow row={row} key={row.pill} />
          ))}
        </div>
      </div>
    </section>
  );
}
