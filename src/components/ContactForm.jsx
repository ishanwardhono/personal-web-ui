import { useState } from "react";
import { isConfigured, sendContactEmail } from "../lib/emailjs";
import { profile } from "../data/resume";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | demo | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!isConfigured()) {
      form.reset();
      setStatus("demo");
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    try {
      await sendContactEmail({
        from_name: data.get("name"),
        reply_to: data.get("email"),
        message: data.get("message"),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const note = { marginTop: 18, fontSize: 13.5 };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" name="message" placeholder="Tell me a little about it…" required />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <span className="arrow">→</span>
      </button>
      {status === "sent" && (
        <p className="muted" style={note}>
          Thanks — I'll get back to you soon.
        </p>
      )}
      {status === "demo" && (
        <p className="muted" style={note}>
          Thanks — this is a demo form. Email me directly at {profile.email} and I'll reply.
        </p>
      )}
      {status === "error" && (
        <p className="muted" style={note}>
          Something went wrong. Please email me directly at {profile.email}.
        </p>
      )}
    </form>
  );
}
