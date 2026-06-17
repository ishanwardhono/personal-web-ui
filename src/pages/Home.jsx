import { useEffect } from "react";
import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";
import Portrait from "../components/Portrait";
import { profile, education, certifications } from "../data/resume";

export default function Home() {
  useEffect(() => {
    document.title = "Ishan Wardhono — Backend Software Engineer";
  }, []);
  return (
    <>
      <main>
        <section className="shell hero">
          <div className="hero-grid">
            <div>
              <div className="status" style={{ display: "flex" }}>
                <span className="pulse" /> {profile.status}
              </div>
              <Eyebrow>{profile.role}</Eyebrow>
              <h1 className="display h-xl hero-name">
                Ishan<br />Wardhono
              </h1>
              <p className="lead" style={{ maxWidth: "34ch" }}>
                {profile.summary}
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" to="/work">
                  See my experiences <span className="arrow">→</span>
                </Link>
                <Link className="btn btn-ghost" to="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
            <Portrait src="/assets/img/portrait.jpg" alt="Ishan Wardhono" caption="Bromo, East Java" />
          </div>
        </section>

        <section className="shell section reveal" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <Eyebrow index="01">About</Eyebrow>
          </div>
          <p style={{ margin: 0 }}>{profile.about}</p>
        </section>

        <section className="shell section reveal" style={{ paddingTop: 0 }}>
          <div className="cols">
            <div>
              <Eyebrow index="02" style={{ marginBottom: 24 }}>
                Education
              </Eyebrow>
              <h3 className="display h-sm" style={{ margin: "0 0 4px" }}>
                {education.degree}
              </h3>
              <div
                className="company"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--clay)",
                  marginBottom: 6,
                }}
              >
                {education.school}
              </div>
              <p
                className="muted"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 12.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 18px",
                }}
              >
                {education.period} · {education.place}
              </p>
              <p style={{ margin: "0 0 8px" }}>
                <b style={{ color: "var(--ink)" }}>{education.gpa}</b> {education.coursework}
              </p>
              <p style={{ margin: 0 }}>{education.ta}</p>
            </div>
            <div>
              <Eyebrow index="03" style={{ marginBottom: 24 }}>
                Certifications
              </Eyebrow>
              {certifications.map((c) => (
                <div className="contact-line" style={{ paddingTop: 0 }} key={c.year}>
                  <span className="k">{c.year}</span>
                  <span>
                    <b style={{ color: "var(--ink)" }}>{c.name}</b> — {c.issuer}{" "}
                    <a
                      className="text-link"
                      style={{ border: "none", padding: 0, fontSize: 12, marginLeft: 8 }}
                      href={c.url}
                    >
                      View →
                    </a>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
