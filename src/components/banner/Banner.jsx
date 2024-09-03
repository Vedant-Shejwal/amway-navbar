import React from 'react';
import './Banner.css';
import GeneralBtn from './../buttons/general_btn/GeneralBtn';

const Banner = ({ imgUrl, altText, headline, description, buttonText, onButtonClick }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className="banner-content">
        <h1>{headline}</h1>
        <p>{description}</p>
        <div className="banner-btn" onClick={onButtonClick}><GeneralBtn type={'black'} gen_btn_text={buttonText}  /></div>
      </div>
    </div>
  );
};

export default Banner;
