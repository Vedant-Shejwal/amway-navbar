import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from 'react';

const CategoryFilter = ({ categories, selectedCategory, handleRadioChange }) => {
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
        {categories.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleRadioChange('category', category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;