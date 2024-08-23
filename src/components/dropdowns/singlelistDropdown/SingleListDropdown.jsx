import React from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import './SingleListDropdown.css';
import useDropdown from '../../../utils/useDropdown'; // Import the custom hook

const SingleListDropdown = ({ item }) => {
    const { categoryData, title } = item;

    // Use the custom hook
    const { isDropdownOpen, toggleDropdown, dropdownRef } = useDropdown();

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
