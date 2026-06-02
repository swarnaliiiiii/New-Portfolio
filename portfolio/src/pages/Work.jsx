import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../components/motion';
import { PROJECTS, EXPERIENCE } from '../data';

const FILTERS = ['ALL', 'AI & ML', 'BACKEND', 'MOBILE', 'TOOLS'];

export default function Work() {
  const [filter, setFilter] = useState('ALL');

  const visible = PROJECTS.filter(
    (p) => filter === 'ALL' || p.tags.includes(filter)
  );

  return (
    <>
      {/* HEADER */}
      <section className="container page-head">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <span className="label">Portfolio</span>
        </motion.div>

        <motion.div
          className="filters"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ marginTop: '1rem' }}
        >
          {FILTERS.map((f, i) => (
            <span key={f} style={{ display: 'inline-flex', gap: '1.5rem' }}>
              <button
                className={`filter-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
              {i < FILTERS.length - 1 && <span className="filter-sep">//</span>}
            </span>
          ))}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="container section-tight">
        <motion.div
          className="project-grid"
          variants={stagger}
          initial="hidden"
          animate="show"
          key={filter}
        >
          {visible.map((p, i) => (
            <motion.article className="project-card" key={p.id} variants={fadeUp}>
              <span className="num">// {String(i + 1).padStart(2, '0')} //</span>
              <h2 className="display project-name">{p.name}</h2>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>
              <ul className="tech-list">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(p.repo || p.demo) && (
                <div className="project-links">
                  {p.repo && (
                    <a
                      className="btn-ghost"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Repository <span className="arrow">↗</span>
                    </a>
                  )}
                  {p.demo && (
                    <a
                      className="btn-ghost"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch Demo <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
          {visible.length === 0 && (
            <p className="muted">No projects in this category yet.</p>
          )}
        </motion.div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* EXPERIENCE */}
      <section className="container section">
        <motion.span
          className="label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ display: 'block', marginBottom: '1.5rem' }}
        >
          Experience
        </motion.span>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {EXPERIENCE.map((e) => (
            <motion.div className="exp-card" key={e.company} variants={fadeUp}>
              <div>
                <h3 className="exp-company">{e.company}</h3>
                <p className="exp-role">{e.role}</p>
                <p className="exp-meta">
                  {e.period} · {e.location}
                </p>
              </div>
              <p className="exp-summary">{e.summary}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
