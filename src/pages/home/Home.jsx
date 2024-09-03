import React, { useState, useEffect, Suspense } from 'react';
import './Home.css';
import Banner from './../../components/banner/Banner.jsx';
import bannerImg from '../../assets/banner_1.jpg';
import axiosInstance from "../../utils/axiosInstance.js";
import CategoryCard from '../../components/cards/category_card/CategoryCard.jsx';
import Loading from '../../components/modal/loading/Loading.jsx';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProductCard = React.lazy(() => delayForDemo(import('../../components/cards/productcard/ProductCard.jsx')));

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}


const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [allCategory, setAllCategory] = useState({});
  const colors = ['#d3eeb3', '#f7d7d7', '#f8e5c9', '#ceeaff'];

  const getAllProduct = async () => {
    try {
      const response = await axiosInstance.get("/products");
      if (response.data) {
        setAllProduct(response.data);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const getAllCategory = async () => {
    try {
      const response = await axiosInstance.get("/products/categories");
      if (response.data) {
        setAllCategory(response.data);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    getAllProduct();
    getAllCategory();
  }, []);

  const scrollToTopSelling = () => {
    const topSellingSection = document.querySelector('.product-list');
    if (topSellingSection) {
      window.scrollTo({
        top: topSellingSection.offsetTop-110,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='home'>
      <Banner 
        imgUrl={bannerImg} 
        altText={"banner"}
        buttonText={"Shop Now"} 
        onButtonClick={scrollToTopSelling} 
      />
      <div className="top-categories" style={{ marginInline: 'auto', fontSize: '40px', marginBottom: '30px', textAlign: 'center', paddingTop:'80px'}}>
        Discover Our Products
      </div>
      <div className="category-list">
        {allCategory.length > 0 ? (
          allCategory.map((category, index) => (
            <CategoryCard
              key={index}
              imgUrl={category.image}
              categoryName={category}  
              color={colors[index % colors.length]}
            />
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
      <div className="top-selling" style={{ marginInline: 'auto', fontSize: '40px', marginBottom: '7px', textAlign: 'center', paddingTop:'80px'}}>
        Top selling
      </div>
      <div className="product-list">
        <Suspense fallback={<div  style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex',position:'absolute'}}><AiOutlineLoading3Quarters className="loading-icon" /></div>}>
          {allProduct.length > 0 ? (
            allProduct.map((product) => (
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
            <p>No products available</p>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
