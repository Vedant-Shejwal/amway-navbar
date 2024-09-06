import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from 'react';

const SortFilter = ({ sortOption, handleRadioChange }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div className="accordion-section">
      <div onClick={() => setIsSortOpen(!isSortOpen)} className="accordion-header">
        Sort By <div className={`accordian-icon ${isSortOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
      </div>
      <div className={`accordion-content ${isSortOpen ? 'open' : ''}`}>
        <label>
          <input
            type="radio"
            name="sort"
            value=""
            checked={sortOption === ''}
            onChange={() => handleRadioChange('sort', '')}
          />
          Relevance
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="priceAsc"
            checked={sortOption === 'priceAsc'}
            onChange={() => handleRadioChange('sort', 'priceAsc')}
          />
          Price: Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="priceDesc"
            checked={sortOption === 'priceDesc'}
            onChange={() => handleRadioChange('sort', 'priceDesc')}
          />
          Price: High to Low
        </label>
        {/* <label>
          <input
            type="radio"
            name="sort"
            value="ratingDesc"
            checked={sortOption === 'ratingDesc'}
            onChange={() => handleRadioChange('sort', 'ratingDesc')}
          />
          Rating: High to Low
        </label> */}
      </div>
    </div>
  );
};

export default SortFilter;
