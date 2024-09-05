import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from 'react';

const RatingFilter = ({ selectedRating, handleRadioChange }) => {
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  return (
    <div className="accordion-section">
      <div onClick={() => setIsRatingOpen(!isRatingOpen)} className="accordion-header">
        Rating <div className={`accordian-icon ${isRatingOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
      </div>
      <div className={`accordion-content ${isRatingOpen ? 'open' : ''}`}>
        <label>
          <input
            type="radio"
            name="rating"
            value="0"
            checked={selectedRating === 0}
            onChange={() => handleRadioChange('rating', 0)}
          />
          All Ratings
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="4"
            checked={selectedRating === 4}
            onChange={() => handleRadioChange('rating', 4)}
          />
          4 stars & up
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="3"
            checked={selectedRating === 3}
            onChange={() => handleRadioChange('rating', 3)}
          />
          3 stars & up
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="2"
            checked={selectedRating === 2}
            onChange={() => handleRadioChange('rating', 2)}
          />
          2 stars & up
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="1"
            checked={selectedRating === 1}
            onChange={() => handleRadioChange('rating', 1)}
          />
          1 star & up
        </label>
      </div>
    </div>
  );
};

export default RatingFilter;
