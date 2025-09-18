import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

function SimpleCard({ image, title, description, onClick, className, hasButton, buttontext }) {
  const [quantity, setQuantity] = useState(1);
  // Default click handler if none provided
  const handleClick = onClick || (() => {
    console.log('Card clicked:', title);
  });
  return (
    <div onClick={handleClick} className={className + " simple-card-overlay-container"} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
      <img src={image} alt={title} className="full-image" />
      <div className="simple-card-hover-overlay"></div>
      <div className="simple-card-overlay-content">
        <h1 className="">{title}</h1>
        <p className="">{description}</p>
        {hasButton && 
        <div className="button-container">
          <button className="simple-card-button">{buttontext}</button>
          <input
            type="number"
            min={1}
            value={quantity}
            onClick={e => e.stopPropagation()}
            onChange={e => setQuantity(Number(e.target.value))}
            className="simple-card-button"
            style={{ marginLeft: '5px', width: '60px' }}
          />
          <button className="simple-card-button" >
            <ShoppingCart size={18} 
            />
          </button>
        </div>}
      </div>
    </div>
  );
}

export default SimpleCard;