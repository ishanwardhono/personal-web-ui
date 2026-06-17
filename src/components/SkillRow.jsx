export default function SkillRow({ label, value }) {
  return (
    <div className="skill-row">
      <div className="k">{label}</div>
      <div className="v">{value}</div>
    </div>
  );
}
