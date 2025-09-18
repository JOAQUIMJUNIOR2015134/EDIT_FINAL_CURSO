function AboutCard({ text, desc , className, src}) {
  return (
    <div className={className}>
      {src && (
        <img className={className} src={src} alt="About Us" />
      )}
      <div className="aboutuscardinf">
        <h2 className="aboutuscardtitle">{text}</h2>
        <p className="aboutuscarddesc">{desc}</p>
      </div>
    </div>
  );
}

export default AboutCard;
