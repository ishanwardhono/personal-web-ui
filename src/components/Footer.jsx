import { profile } from "../data/resume";

export default function Footer({ middle }) {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-bottom" style={{ margin: 0 }}>
          <span>© {new Date().getFullYear()} Ishan Wardhono</span>
          <span>{middle ?? profile.email}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
