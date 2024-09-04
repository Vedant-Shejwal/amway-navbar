import React, { useState, useEffect } from 'react';
import './Plp.css';
import axiosInstance from '../../utils/axiosInstance.js';
import ProductCard from '../../components/cards/productcard/ProductCard';
import { useParams } from 'react-router-dom';
import Loading from '../../components/modal/loading/Loading.jsx';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ScrollUp from './../../components/buttons/scroll_up/ScrollUp.jsx';

const Plp = () => {
    const { id } = useParams();
    const [allProduct, setAllProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllProduct = async () => {
        try {
            const response = await axiosInstance.get("/products/category/" + id);
            if (response.data) {
                const duplicatedProducts = [...response.data, ...response.data, ...response.data];
                setAllProduct(duplicatedProducts);
                setLoading(false);
            }
        } catch (error) {
            console.log("error : ", error);
            setLoading(false);
        }
    };

    const loadMoreProducts = async () => {
        try {
            const response = await axiosInstance.get("/products/category/" + id);
            if (response.data) {
                const newProducts = [...response.data];
                setAllProduct(prevProducts => [...prevProducts, ...newProducts, ...newProducts]);
            }
        } catch (error) {
            console.log("error : ", error);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
            loadMoreProducts();
        }
    };

    useEffect(() => {
        getAllProduct();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div className="plp">
            {loading && <Loading />}
            <div className="category-name" style={{ fontWeight: 700, fontSize: '40px', marginBottom: '10px', textAlign: 'center', marginTop: '-25px', textTransform:'uppercase'}}>
                    {id}
                </div>
            <div className="category-product-list">
                {allProduct.length > 0 ? (
                    allProduct.map((product, index) => (
                        <ProductCard
                            key={index}
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

            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', paddingTop: '40px' }}>
                {!loading && <AiOutlineLoading3Quarters className="loading-icon" />}
            </div>
            <ScrollUp />
        </div>
    );
}

export default Plp;
