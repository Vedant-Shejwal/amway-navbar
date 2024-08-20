import React from 'react';
import { useSelector } from 'react-redux';
import { IoPersonOutline, IoChevronDownSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Searchbar from '../searchbar/Searchbar';
import { PiShoppingCart } from "react-icons/pi";
import LanguageDropdown from "../dropdowns/languageDropdown/LanguageDropdown.jsx";
import SupportDropdown from '../dropdowns/supportDropdown/SupportDropdown.jsx';
import MultiListDropdown from '../dropdowns/multilistDropdown/MultiListDropdown.jsx';
import SingleListDropdown from '../dropdowns/singlelistDropdown/SingleListDropdown.jsx';
// import './Navbar.css';
// import '../dropdowns/multilistDropdown/MultiListDropdown.css'
const Navbar = () => {
    const { topBar, amwayLogo, navBar } = useSelector(state => state.headerState);

    return (
        <div className='header'>
            <div className="topbar-container">
                <div className="topbar-left">
                    {topBar.topBarLeftData.map(item => (
                        <a key={item.link.href} href={item.link.href} className="topbar-item">
                            {item.link.title}
                        </a>
                    ))}
                </div>
                <div className="topbar-right">
                    <div className="topbar-item">
                        <div className="topbar-icon"><FaLocationDot /></div>
                        <div className="topbar-desc"><u>Select delivery address</u></div>
                    </div>
                    <LanguageDropdown />
                    <SupportDropdown/>
                    <div className="topbar-item ">
                        <div className="topbar-icon"><IoPersonOutline /></div>
                        <div className="topbar-desc"> {topBar.topBarRightData.signIn}</div>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="navbar-left">
                    <a href="/">
                        <img
                            src={amwayLogo.logoUrl}
                            alt={amwayLogo.altText}
                            className="navbar-logo"
                        />
                    </a>
                    <div className="navbar-area">
                        <ul>
                            {navBar.navBarData.map(item => (
                                <li key={item.title} className="navbar-items">
                                        
                                    {(item.tabType !== 'multiList' && item.tabType !== 'singleList' ) && (
                                        <a className='navbar-title' href={item.categoryData.href}>{item.title}</a>
                                        )}
                                        {item.tag && (
                                            <span
                                                className="navbar-tag"
                                                style={{ backgroundColor: item.tagColor }}
                                            >
                                                {item.tag}
                                            </span>
                                        )}
                                        {/* {(item.tabType === 'singleList') && (
                                            <div className="navbar-dropdown"><IoChevronDownSharp /></div>
                                        )} */}
                                        
                                    {item.tabType === 'multiList' && <MultiListDropdown item={item} />}
                                    
                                    {item.tabType === 'singleList' && <SingleListDropdown item={item} />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='navbar-right'>
                    <Searchbar />
                    <div className="navbar-icon"><PiShoppingCart /></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
