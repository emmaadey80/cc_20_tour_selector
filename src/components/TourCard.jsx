import { useState } from 'react';

function TourCard({ tour, onRemove }) {
  if (!tour) return null; // quick safety check

  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-header">
        <h2 className="tour-title">{name}</h2>
        <span className="tour-price">${price}</span>
      </div>
      <p className="tour-info">
        {readMore ? info : `${info?.substring(0, 100)}...`}
        <button
          onClick={() => setReadMore(!readMore)}
          className="read-more-toggle"
        >
          {readMore ? ' Show Less' : ' Read More'}
        </button>
      </p>
      <button className="remove-btn" onClick={() => onRemove(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default TourCard;
