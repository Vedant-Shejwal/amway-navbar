import React, { useState, useRef, useEffect } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import './SingleListDropdown.css'

const SingleListDropdown = ({ item }) => {
    const { categoryData, title } = item;
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="singlelist-dropdown" onClick={toggleDropdown} ref={dropdownRef}>
            <div className="navbar-title">{title}</div>
            <div className="navbar-dropdown"><IoChevronDownSharp /></div>
            {isDropdownOpen && (
                <div className="singlelist-option">
                    <ul className="singlelist-sublist">
                        {categoryData[0]?.subList.map((subItem, index) => (
                            <li key={index} className="singlelist-item">
                                <a href={subItem.link.href}>
                                    {subItem.link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default SingleListDropdown;
