import { SOCIAL } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="label">SB® — Full-Stack Developer · Indore, India</span>
        <ul className="footer-links">
          <li>
            <a href={`mailto:${SOCIAL.email}`}>Email</a>
          </li>
          <li>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={SOCIAL.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <span className="label">© 2026</span>
      </div>
    </footer>
  );
}
