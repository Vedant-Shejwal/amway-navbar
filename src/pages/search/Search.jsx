import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from "../../utils/axiosInstance.js";
import ProductCard from '../../components/cards/productcard/ProductCard.jsx';
import { IoChevronDownSharp } from "react-icons/io5";
import PriceFilter from './price_filter/PriceFilter.jsx';

import './Search.css'
import CategoryFilter from './category_filter/CategoryFilter.jsx';
import RatingFilter from './rating_filter/RatingFilter.jsx';
import SortFilter from './sort_filter/SortFilter.jsx';
import Loading from './../../components/modal/loading/Loading';

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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
        if (response.data) {
          setAllProducts(response.data);
          setLoading(false)
        }
      } catch (error) {
        console.log("Error fetching products: ", error);
        setLoading(false)
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
      {loading && <Loading />}
      {query && (<p style={{ margin: '10px 0 10px 0' }}><i>Search Results for "{query}"</i></p>)}
      <div className='search-page'>
        <div className="search-page-left">
          <div className="filters">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', padding: '5px 0' }}>
              <div className="search-text">FILTER</div>
              <div onClick={handleClearAll} className="clear-all-button"><u>Reset</u></div>
            </div>
            <PriceFilter priceRange={priceRange} handleRadioChange={handleRadioChange} />
            <CategoryFilter selectedCategory={selectedCategory} handleRadioChange={handleRadioChange} />
            <RatingFilter selectedRating={selectedRating} handleRadioChange={handleRadioChange} />
            <SortFilter sortOption={sortOption} handleRadioChange={handleRadioChange} />
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
                rating={product.rating.rate}
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
