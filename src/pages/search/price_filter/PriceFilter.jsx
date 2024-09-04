import React from 'react';
import { IoChevronDownSharp } from "react-icons/io5";

const PriceFilter = ({ isOpen, toggleOpen, priceRange, handleRadioChange }) => (
  <div className="accordion-section">
    <div onClick={toggleOpen} className="accordion-header">
      Price Range <div className={`accordian-icon ${isOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
    </div>
    {isOpen && (
      <div className="accordion-content">
        <label>
          <input
            type="radio"
            name="priceRange"
            value="0-100"
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
    )}
  </div>
);

export default PriceFilter;
