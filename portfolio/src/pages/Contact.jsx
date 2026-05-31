import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../components/motion';
import { SOCIAL } from '../data';

export default function Contact() {
  return (
    <section className="container section">
      <motion.div
        className="split"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* LEFT */}
        <motion.div variants={fadeUp}>
          <span className="num">// Get In Touch //</span>
          <h1 className="display contact-title">
            Let's Build <span className="accent">Something</span>
          </h1>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={fadeUp}>
          <p className="contact-intro">
            Open to full-time SDE roles, freelance backend projects, and
            collaboration on <span className="accent">open source.</span>
          </p>

          <ul className="contact-list">
            <li>
              <span className="ico">📧</span>
              <a href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a>
            </li>
            <li>
              <span className="ico">📍</span>
              <span>{SOCIAL.location}</span>
            </li>
            <li>
              <span className="ico">🔗</span>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/swarnali-bhattacharyya-2a141722b
              </a>
            </li>
            <li>
              <span className="ico">🐙</span>
              <a href={SOCIAL.github} target="_blank" rel="noreferrer">
                github.com/swarnaliiiiii
              </a>
            </li>
          </ul>

          <a href={`mailto:${SOCIAL.email}`} className="btn">
            Send Email <span className="arrow">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
