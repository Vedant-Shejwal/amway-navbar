import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from 'react';

const CategoryFilter = ({ selectedCategory, handleRadioChange }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="accordion-section">
      <div onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="accordion-header">
        Category <div className={`accordian-icon ${isCategoryOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
      </div>
      <div className={`accordion-content ${isCategoryOpen ? 'open' : ''}`}>
        <label>
          <input
            type="radio"
            name="category"
            value=""
            checked={selectedCategory === ''}
            onChange={() => handleRadioChange('category', '')}
          />
          All Categories
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="men's clothing"
            checked={selectedCategory === "men's clothing"}
            onChange={() => handleRadioChange('category', "men's clothing")}
          />
          Men's Clothing
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="women's clothing"
            checked={selectedCategory === "women's clothing"}
            onChange={() => handleRadioChange('category', "women's clothing")}
          />
          Women's Clothing
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="jewelery"
            checked={selectedCategory === "jewelery"}
            onChange={() => handleRadioChange('category', "jewelery")}
          />
          Jewelery
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="electronics"
            checked={selectedCategory === "electronics"}
            onChange={() => handleRadioChange('category', "electronics")}
          />
          Electronics
        </label>
      </div>
    </div>
  );
};

export default CategoryFilter;
