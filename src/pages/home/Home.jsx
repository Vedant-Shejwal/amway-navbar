import { React, useState, useEffect } from 'react';
import './Home.css';
import Footer from '../../components/footer/Footer';
import Banner from './../../components/banner/Banner.jsx';
import bannerImg from '../../assets/banner_1.jpg';
import axiosInstance from "../../utils/axiosInstance.js";
import ProductCard from '../../components/cards/productcard/ProductCard.jsx';

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);

  const getAllProduct = async () => {
    try {
      const response = await axiosInstance.get("/products?limit=5");
      if (response.data) {
        setAllProduct(response.data);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className='home'>
      <Banner imgUrl={bannerImg} altText={"banner"} />
      <h1 style={{ marginInline: 'auto', fontSize: '40px', marginTop: '40px', marginBottom: '17px' }}>Top selling</h1>
      <div className="product-list">
        {allProduct.length > 0 ? (
          allProduct.map((product) => (
            <ProductCard
              id={product.id}
              imgUrl={product.image}
              altText={product.title}
              category={product.category}
              title={product.title}
              price={product.price * 83}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
