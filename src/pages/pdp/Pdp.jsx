import './Pdp.css';
import { useParams } from 'react-router-dom';
import axiosInstance from "../../utils/axiosInstance.js";
import { useState, useEffect } from 'react';
import AddToCart from '../../components/buttons/add_to_cart/AddToCart.jsx';
import Loading from '../../components/modal/loading/Loading.jsx';

const Pdp = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true); 

    const showPrice = product.price;

    const getProduct = async () => {
        try {
            const response = await axiosInstance.get("/products/" + id);
            if (response.data) {
                setProduct(response.data);
                setLoading(false); 
            }
        } catch (error) {
            console.log("error : ", error);
            setLoading(false); 
        }
    };

    useEffect(() => {
        getProduct();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='pdp'>
            {loading && <Loading />}
                <div className="pdp-section">
                    <div className="pdp-left">
                        <img style={{ height: '500px' }} src={product.image} alt={product.image} />
                    </div>
                    <div className="pdp-right">
                        <div className="pdp-details">
                            <div className='pdp-details-top'>
                                <div className="pdp-category">
                                    {product.category}
                                </div >
                                <div className="pdp-title">
                                    {product.title}
                                </div>
                            </div>
                            <div className='pdp-subdetails'>
                                <div style={{ fontSize: '20px', color: '#2c2c2c' }}>MRP <strike style={{ color: 'grey' }}>$ {Number((showPrice * 1.08).toFixed(2))}</strike></div>
                                <div className="pdp-price">$ {showPrice}</div>
                                <div style={{ fontSize: '18px', color: '#949494' }}>(incl. of all taxes)</div>
                            </div>
                            <div className="pdp-desc">
                                <div style={{ fontSize: '28px', color: '#2c2c2c', marginTop: '10px', fontWeight: "700" }}>Product details</div>
                                {product.description}
                            </div>
                            <div className="pdp-add-to-cart-btn">
                                <AddToCart product={product} setLoading={setLoading}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pdp;
