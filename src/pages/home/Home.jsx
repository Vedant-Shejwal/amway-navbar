import { React, useState, useEffect } from 'react';
import './Home.css';
import Banner from './../../components/banner/Banner.jsx';
import bannerImg from '../../assets/banner_1.jpg';
import axiosInstance from "../../utils/axiosInstance.js";
import ProductCard from '../../components/cards/productcard/ProductCard.jsx';

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  
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

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className='home'>
      <Banner imgUrl={bannerImg} altText={"banner"} />
      <div style={{ marginInline: 'auto', fontSize: '40px', marginTop: '40px', marginBottom: '17px', textAlign:'center' }}>Top selling</div>
      <div className="product-list">
        {allProduct.length > 0 ? (
          allProduct.map((product) => (
            <ProductCard
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
      </div>
    </div>
  );
};

export default Home;
