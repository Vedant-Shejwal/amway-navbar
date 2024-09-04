import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from "../../utils/axiosInstance.js";
import ProductCard from '../../components/cards/productcard/ProductCard.jsx';
import { IoChevronDownSharp } from "react-icons/io5";
import './Search.css'

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortOption, setSortOption] = useState('');

  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
        if (response.data) {
          setAllProducts(response.data);
        }
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = allProducts.filter(product =>
      (product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())) &&
      (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
      (selectedCategory ? product.category === selectedCategory : true) &&
      (product.rating.rate >= selectedRating)
    );

    if (sortOption === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'ratingDesc') {
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(filtered);
  }, [query, allProducts, priceRange, selectedCategory, selectedRating, sortOption]);

  const handleRadioChange = (type, value) => {
    switch (type) {
      case 'price':
        if (priceRange[0] === value[0] && priceRange[1] === value[1]) {
          setPriceRange([0, 1000]);
        } else {
          setPriceRange(value);
        }
        break;
      case 'category':
        setSelectedCategory(selectedCategory === value ? '' : value);
        break;
      case 'rating':
        setSelectedRating(selectedRating === value ? 0 : value);
        break;
      case 'sort':
        setSortOption(sortOption === value ? '' : value);
        break;
      default:
        break;
    }
  };

  const handleClearAll = () => {
    setPriceRange([0, 100000]);
    setSelectedCategory('');
    setSelectedRating(0);
    setSortOption('');
  };

  return (
    <div style={{ marginTop: '-20px' }}>
      {query && (
        <p style={{  margin:'10px 0 10px 0'}}><i>Search Results for "{query}"</i></p>
      )}
      <div className='search-page'>
        <div className="search-page-left">
          <div className="filters">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div className="search-text">FILTER</div>
              <div onClick={handleClearAll} className="clear-all-button"><u>Reset</u></div>
            </div>
            <div className="accordion-section">
              <div onClick={() => setIsPriceOpen(!isPriceOpen)} className="accordion-header">
                Price Range <div className={`accordian-icon ${isPriceOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
              </div>
              {isPriceOpen && (
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

            <div className="accordion-section">
              <div onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="accordion-header">
                Category <div className={`accordian-icon ${isCategoryOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
              </div>
              {isCategoryOpen && (
                <div className="accordion-content">
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
              )}
            </div>


            <div className="accordion-section">
              <div onClick={() => setIsRatingOpen(!isRatingOpen)} className="accordion-header">
                Rating  <div className={`accordian-icon ${isRatingOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
              </div>
              {isRatingOpen && (
                <div className="accordion-content">
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
              )}
            </div>

            <div className="accordion-section">
              <div onClick={() => setIsSortOpen(!isSortOpen)} className="accordion-header">
                Sort By  <div className={`accordian-icon ${isSortOpen ? 'rotate' : ''}`}><IoChevronDownSharp /></div>
              </div>
              {isSortOpen && (
                <div className="accordion-content">
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
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="ratingDesc"
                      checked={sortOption === 'ratingDesc'}
                      onChange={() => handleRadioChange('sort', 'ratingDesc')}
                    />
                    Rating: High to Low
                  </label>
                </div>
              )}
            </div>

          </div>

        </div>

        <div className="search-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                category={product.category}
                title={product.title}
                price={product.price}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
