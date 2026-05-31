import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../components/motion';
import { PROCESS } from '../data';
import {
  TargetIcon,
  VennIcon,
  ChecklistIcon,
} from '../components/ProcessIcons';

const ICONS = {
  target: TargetIcon,
  venn: VennIcon,
  checklist: ChecklistIcon,
};

export default function Process() {
  return (
    <>
      {/* HEADER */}
      <section className="container section">
        <motion.div
          className="split"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <span className="num">// How I Work //</span>
            <h1 className="display page-title">
              Seamless
              <br />
              Process
            </h1>
          </motion.div>
          <motion.p className="teaser-body" variants={fadeUp}>
            From first insights to final execution, every step is crafted to
            ensure your product communicates clearly,{' '}
            <span className="dim">consistently, and meaningfully.</span>
          </motion.p>
        </motion.div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* STEPS */}
      <section className="container section">
        <motion.div
          className="process-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROCESS.map((step) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div className="process-col" key={step.num} variants={fadeUp}>
                <div className="icon-wrap">
                  <Icon />
                </div>
                <span className="num">// {step.num} //</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}
