import React, { useState, useRef, useEffect } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import "./MultiListDropdown.css"


const MultiListDropdown = ({ item }) => {
    const { categoryData } = item;
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
        <div className="multilist-dropdown" onClick={toggleDropdown} ref={dropdownRef}>
            <div className="navbar-title">{item.title}</div>
            <div className="navbar-dropdown"><IoChevronDownSharp /></div>
            {isDropdownOpen && (
                <div className="multilist-option">
                    {categoryData.map((category, index) => (
                        <div key={index} className="multilist-category">
                            <div>{category.title}</div>
                            <ul className="multilist-sublist">
                                {category.subList.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subItem.link.href}>
                                            {subItem.link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiListDropdown;
