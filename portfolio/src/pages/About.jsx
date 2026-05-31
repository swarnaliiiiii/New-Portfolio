import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../components/motion';
import { ACHIEVEMENTS, SKILLS, SKILL_CATEGORIES } from '../data';

export default function About() {
  return (
    <>
      {/* HEADER + BIO */}
      <section className="container section">
        <motion.div
          className="split"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <span className="num">// Who I Am //</span>
            <h1 className="display page-title">About</h1>
          </motion.div>

          <motion.div className="bio" variants={fadeUp}>
            <p>
              I'm a Full-Stack Developer and final-year Integrated M.Tech (IT)
              student at IIPS, <span className="accent">DAVV Indore</span>,
              graduating June 2026 with a CGPA of 9.27. I build backends that
              scale and frontends that speak.
            </p>
            <p>
              My work centers on{' '}
              <span className="accent">distributed systems</span> — rate
              limiters, decision engines, multi-tenant architectures — and the
              cloud-native infrastructure that ships them. I care about clean
              architecture, observability, and engineering that holds up under
              real load.
            </p>
            <p>
              Beyond the codebase, I contribute to open source, compete in
              hackathons, and stay sharp through consistent algorithmic
              practice. I believe the best engineering is idea-driven — clear in
              intent before it's clever in execution.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* EDUCATION */}
      <section className="container section">
        <motion.div
          className="split"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="label" variants={fadeUp}>
            Education
          </motion.span>
          <motion.div className="edu-card" variants={fadeUp}>
            <h3>International Institute of Professional Studies, DAVV</h3>
            <p className="muted">Integrated Master of Technology — Information Technology</p>
            <div className="edu-meta">
              <span>2021 — 2026</span>
              <span>Indore, India</span>
              <span>
                CGPA <strong>9.27</strong>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* ACHIEVEMENTS */}
      <section className="container section">
        <motion.span
          className="label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ display: 'block', marginBottom: '1.5rem' }}
        >
          Achievements
        </motion.span>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div className="achieve-row" key={a} variants={fadeUp}>
              <span className="num">// {String(i + 1).padStart(2, '0')} //</span>
              <span className="achieve-text">{a}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* SKILLS — categorized */}
      <section className="container section">
        <motion.span
          className="label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ display: 'block', marginBottom: '1.5rem' }}
        >
          Skills
        </motion.span>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div className="skill-row" key={cat.title} variants={fadeUp}>
              <h3 className="display skill-cat">{cat.title}</h3>
              <ul className="skill-pills">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* SOFT SKILLS STRIP */}
      <section className="container section-tight">
        <motion.div
          className="skills-strip"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {SKILLS.map((s, i) => (
            <span key={s}>
              {s}
              {i < SKILLS.length - 1 && <span className="dot"> · </span>}
            </span>
          ))}
        </motion.div>
      </section>
    </>
  );
}
