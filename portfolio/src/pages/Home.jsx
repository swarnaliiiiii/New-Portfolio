import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../components/motion';
import { SKILL_CATEGORIES, PROJECTS } from '../data';

export default function Home() {
  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];

  return (
    <>
      {/* HERO */}
      <section className="container hero">
        <motion.div
          className="split-hero"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div>
            <motion.p className="hero-name" variants={fadeUp}>
              Swarnali Bhattacharyya
              <span className="hero-name-role">
                {' '}
                — Full-Stack Developer
              </span>
            </motion.p>
            <motion.h1 className="display hero-title" variants={fadeUp}>
              FULL-STACK
              <br />
              <span className="dim">THAT SHIPS</span>
              <br />
              PRODUCTS
            </motion.h1>
          </div>

          <motion.div className="hero-right" variants={fadeUp}>
            <p className="hero-tagline">
              I build backends that scale and frontends that speak —{' '}
              <span className="dim">
                through clean architecture, cloud-native systems, and
                idea-driven engineering.
              </span>
            </p>
            <Link to="/work" className="btn">
              View My Work <span className="arrow">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* FEATURED WORK */}
      <section className="container section">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="feat-head" variants={fadeUp}>
            <div>
              <span className="label">Featured Work</span>
              <h2 className="display feat-name">{featured.name}</h2>
            </div>
            <Link to="/work" className="btn-ghost">
              Detail Project <span className="arrow">→</span>
            </Link>
          </motion.div>

          <motion.div className="feat-card" variants={fadeUp}>
            <div className="feat-card-content">
              <div className="mono">
                DEV<span className="accent">RATE</span>
              </div>
              <p>{featured.tech.join(' · ')}</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* SKILLS */}
      <section className="container section">
        <motion.div
          className="feat-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <span className="label">Skills</span>
          <Link to="/about" className="btn-ghost">
            View Full Stack <span className="arrow">→</span>
          </Link>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
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
    </>
  );
}
