export default function Eyebrow({ index, children, style }) {
  return (
    <div className="eyebrow" style={style}>
      {index ? <span className="idx">{index}</span> : null}
      <span className="rule" />
      {children}
    </div>
  );
}
