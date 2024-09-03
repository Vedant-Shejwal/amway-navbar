import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-modal">
            <AiOutlineLoading3Quarters className="loading-icon" />
        </div>
    );
};

export default Loading;
