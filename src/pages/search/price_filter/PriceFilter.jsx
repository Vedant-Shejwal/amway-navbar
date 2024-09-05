import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from 'react';

const PriceFilter = ({ priceRange, handleRadioChange }) => {
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  return (
    <div className="accordion-section">
      <div onClick={() => setIsPriceOpen(!isPriceOpen)} className="accordion-header">
        Price Range <div className={`accordian-icon ${isPriceOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
      </div>
      <div className={`accordion-content ${isPriceOpen ? 'open' : ''}`}>
        <label>
          <input
            type="radio"
            name="priceRange"
            value="0-100000"
            checked={priceRange[0] === 0 && priceRange[1] === 100000}
            onChange={() => handleRadioChange('price', [0, 100000])}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            value="0-100"
            checked={priceRange[0] === 0 && priceRange[1] === 100}
            onChange={() => handleRadioChange('price', [0, 100])}
          />
          $0 - $100
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            value="100-500"
            checked={priceRange[0] === 100 && priceRange[1] === 500}
            onChange={() => handleRadioChange('price', [100, 500])}
          />
          $100 - $500
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            value="500-1000"
            checked={priceRange[0] === 500 && priceRange[1] === 1000}
            onChange={() => handleRadioChange('price', [500, 1000])}
          />
          $500 - $1000
        </label>
      </div>
    </div>
  );
};

export default PriceFilter;
