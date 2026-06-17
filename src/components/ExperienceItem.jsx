export default function ExperienceItem({ role, company, period, place, summary, bullets, tags }) {
  return (
    <div className="exp">
      <div className="exp-grid">
        <div className="exp-period">
          {period}
          <span className="place">{place}</span>
        </div>
        <div>
          <h3>{role}</h3>
          <div className="company">{company}</div>
          <p className="summary">{summary}</p>
          <ul>
            {bullets.map((b, i) => (
              <li key={i}>
                <b>{b.lead}</b> {b.rest}
              </li>
            ))}
          </ul>
          <div className="tags">
            {tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
