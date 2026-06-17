import { useEffect } from "react";
import Eyebrow from "../components/Eyebrow";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { profile, social } from "../data/resume";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Ishan Wardhono";
  }, []);
  return (
    <>
      <main>
        <section
          className="shell"
          style={{ paddingTop: "clamp(56px,8vw,110px)", paddingBottom: "clamp(20px,3vw,32px)" }}
        >
          <div className="status">
            <span className="pulse" /> Available for select work
          </div>
          <Eyebrow style={{ marginBottom: 22 }}>Contact</Eyebrow>
          <h1 className="display h-xl" style={{ maxWidth: "14ch" }}>
            Let's <span className="serif-italic">talk.</span>
          </h1>
          <p className="lead" style={{ maxWidth: "40ch", marginTop: 18 }}>
            Have a system that needs to scale, a backend to untangle, or a role you think
            fits? The fastest way to reach me is email — I read everything.
          </p>
        </section>

        <section className="shell section" style={{ paddingTop: "clamp(36px,5vw,60px)" }}>
          <div className="contact-grid">
            <div>
              <div className="contact-line" style={{ paddingTop: 0 }}>
                <span className="k">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact-line">
                <span className="k">LinkedIn</span>
                <a href={social.linkedin}>linkedin.com/in/ishanwardhono</a>
              </div>
              <div className="contact-line">
                <span className="k">GitHub</span>
                <a href={social.github}>github.com/ishanwardhono</a>
              </div>
              <div className="contact-line">
                <span className="k">Based in</span>
                <span>Yogyakarta, Indonesia · GMT+7</span>
              </div>
              <div className="socials" style={{ marginTop: 34 }}>
                <a href={social.linkedin} aria-label="LinkedIn">
                  <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href={social.github} aria-label="GitHub">
                  <img src="/assets/icons/github.svg" alt="GitHub" />
                </a>
                <a href={social.instagram} aria-label="Instagram">
                  <img src="/assets/icons/instagram.svg" alt="Instagram" />
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer middle="Backend Software Engineer" />
    </>
  );
}
