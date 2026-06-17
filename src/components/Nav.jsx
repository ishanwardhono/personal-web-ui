import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work", end: false },
  { to: "/contact", label: "Contact", end: false },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="shell nav-inner">
        <NavLink className="nav-brand" to="/">
          Ishan Wardhono<span className="dot">.</span>
        </NavLink>
        <button
          className="nav-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul
          className={open ? "nav-links open" : "nav-links"}
          onClick={(e) => {
            if (e.target.tagName === "A") setOpen(false);
          }}
        >
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
