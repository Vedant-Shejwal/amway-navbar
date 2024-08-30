import React from 'react';
import { useSelector } from 'react-redux';
import { FaLocationDot } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoPersonOutline, IoChevronDownSharp } from "react-icons/io5";
import Searchbar from '../searchbar/Searchbar';
import LanguageDropdown from "../dropdowns/languageDropdown/LanguageDropdown.jsx";
import SupportDropdown from '../dropdowns/supportDropdown/SupportDropdown.jsx';
import MultiListDropdown from '../dropdowns/multilistDropdown/MultiListDropdown.jsx';
import SingleListDropdown from '../dropdowns/singlelistDropdown/SingleListDropdown.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { topBar, amwayLogo, navBar } = useSelector(state => state.headerState);
    const { cartItems } = useSelector((state) => state.cartState);
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
                    <SupportDropdown />
                    <div className="topbar-item ">
                        <div className="topbar-icon"><IoPersonOutline /></div>
                        <div className="topbar-desc"> {topBar.topBarRightData.signIn}</div>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="navbar-left">


                    <Sidebar />

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
                                    {(item.tabType !== 'multiList' && item.tabType !== 'singleList') && (
                                        <a className='navbar-title' href={item.categoryData.href}>{item.title}</a>
                                    )}
                                    {item.tag && (
                                        <span className="navbar-tag" style={{ backgroundColor: item.tagColor }}>
                                            {item.tag}
                                        </span>
                                    )}
                                    {item.tabType === 'multiList' && <MultiListDropdown item={item} />}
                                    {item.tabType === 'singleList' && <SingleListDropdown item={item} />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='navbar-right'>
                    <Searchbar />
                    <div className='magnifyingglass navbar-icon'><HiMagnifyingGlass /></div>
                    <div className='signin navbar-icon'><IoPersonOutline /></div>
                    <Link to='/cart' className="cart-icon navbar-icon" >
                        <a>
                            <PiShoppingCart />
                            {cartItems.length > 0 && <div className="cart-count">{cartItems.length}</div>}
                        </a>
                    </Link>
                </div>
            </div>
            <div className='pincode_section'>
                <div className="topbar-icon">
                    <FaLocationDot />        </div>
                <div className="topbar-desc"><u>Select delivery address</u></div>
            </div>
        </div>
    );
};

export default Navbar;
