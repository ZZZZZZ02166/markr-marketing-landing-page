import { useState } from "react";

const ITEMS = [
  {
    q: "Does Markr replace teacher judgement?",
    a: "No. Markr is positioned as a teacher-support tool. AI can suggest marking and patterns, while teachers review and approve outcomes.",
  },
  {
    q: "Who is Markr designed for?",
    a: "Markr is designed for K–12 schools, with daily workflows for teachers and reporting visibility for principals and heads of curriculum.",
  },
  {
    q: "Does the EDM form need a backend?",
    a: "No. For this practical exercise, a front-end subscription form with basic validation is enough. No database or email service is required.",
  },
  {
    q: "How does Markr help school leaders?",
    a: "Markr turns assessment results into clearer evidence about class progress, cohort trends, learning gaps and areas that may need targeted support.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-heading">
          <div className="pill">FAQ</div>
          <h2 id="faq-title">
            <span className="heading-line-dark">Questions school leaders</span>
            <span className="heading-line-accent">may ask.</span>
          </h2>
          <p>
            Short answers keep the page practical, credible and focused on the
            audience.
          </p>
        </div>

        <div className="faq-wrap">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <article
                className="faq-item"
                data-open={isOpen ? "true" : "false"}
                key={item.q}
              >
                <button
                  className="faq-button"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq-answer">{item.a}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
