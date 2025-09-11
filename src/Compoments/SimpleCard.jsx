function SimpleCard({ image, title, description, onClick, className }) {
  return (
    <div onClick={onClick} className={className}>
      <img src={image} alt={title} className="simple-card-image" />
      <h2 className="simple-card-title">{title}</h2>
      <p className="simple-card-description">{description}</p>
    </div>
  );
}

export default SimpleCard;