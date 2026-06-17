export default function Portrait({ src, alt, caption }) {
  return (
    <figure className="portrait" style={{ margin: 0 }}>
      <img src={src} alt={alt} />
      {caption ? <figcaption className="cap">{caption}</figcaption> : null}
    </figure>
  );
}
