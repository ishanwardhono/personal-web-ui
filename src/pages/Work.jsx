import { useEffect } from "react";
import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";
import Portrait from "../components/Portrait";
import SkillRow from "../components/SkillRow";
import ExperienceItem from "../components/ExperienceItem";
import { profile, skills, experiences } from "../data/resume";

export default function Work() {
  useEffect(() => {
    document.title = "Work — Ishan Wardhono";
  }, []);
  return (
    <>
      <main>
        <section className="shell hero">
          <div className="hero-grid">
            <div>
              <Eyebrow style={{ marginBottom: 22 }}>Work</Eyebrow>
              <h1 className="display h-lg hero-name" style={{ marginTop: 0 }}>
                7 Years as<br />Backend Software<br />Engineer
              </h1>
              <p className="lead" style={{ maxWidth: "40ch" }}>
                {profile.workSummary}
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="/assets/ishan-wardhono-resume.pdf">
                  Download Résumé <span className="arrow">↓</span>
                </a>
                <Link className="btn btn-ghost" to="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
            <Portrait src="/assets/img/about.jpg" alt="Ishan Wardhono" />
          </div>
        </section>

        <section className="shell section reveal">
          <div className="section-head">
            <Eyebrow index="01">Technical Skills</Eyebrow>
          </div>
          <div className="skills">
            {skills.map((s) => (
              <SkillRow key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </section>

        <section className="shell section reveal" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <Eyebrow index="02">Experience</Eyebrow>
          </div>
          {experiences.map((e) => (
            <ExperienceItem key={e.company} {...e} />
          ))}
        </section>
      </main>
    </>
  );
}
